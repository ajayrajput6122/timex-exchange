// import React, { useEffect, useRef, useState } from "react";
// import { createChart } from "lightweight-charts";
// import { io } from "socket.io-client";
// import { base_url } from "../ApiService/BaseUrl";

// const CustomChart = ({ symbol }) => {
//   const chartContainerRef = useRef(null);
//   const chartRef = useRef(null);
//   const [chartData, setChartData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (symbol !== "TOMAX") return;

//     const socket = io(base_url, {
//       transports: ["websocket"],
//     });

//     socket.on("data", (data) => {
//       const sortedData = data.sort(
//         (a, b) => new Date(a.time) - new Date(b.time)
//       );
//       const formattedData = sortedData.map((item) => ({
//         time: new Date(item.time).getTime(),
//         open: item.open,
//         high: item.high,
//         low: item.low,
//         close: item.close,
//       }));
//       setChartData(formattedData);
//       setIsLoading(false);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [symbol]);

//   useEffect(() => {
//     if (!chartContainerRef.current || chartData.length === 0) return;

//     const chart = createChart(chartContainerRef.current, {
//       width: chartContainerRef.current.clientWidth,
//       height: chartContainerRef.current.clientHeight,
//       layout: {
//         background: { color: "#161A25" },
//         textColor: "#ddd",
//       },
//       crosshair: {
//         vertLine: {
//           color: "#FFFFFF",
//         },
//         horzLine: {
//           color: "#FFFFFF",
//         },
//       },
//       grid: {
//         vertLines: {
//           color: "#555555",
//         },
//         horzLines: {
//           color: "#555555",
//         },
//       },
//     });
//     chartRef.current = chart;

//     const candlestickSeries = chart.addCandlestickSeries({
//       upColor: "#4fff94",
//       borderUpColor: "#4fff94",
//       wickUpColor: "#4fff94",
//       downColor: "#f44336",
//       borderDownColor: "#f44336",
//       wickDownColor: "#f44336",
//     });

//     candlestickSeries.setData(chartData);

//     const handleResize = () => {
//       if (chartRef.current && chartContainerRef.current) {
//         chartRef.current.resize(
//           chartContainerRef.current.clientWidth,
//           chartContainerRef.current.clientHeight
//         );
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       chart.remove();
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [chartData]);

//   if (symbol !== "TOMAX") {
//     return (
//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "320px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "#ddd",
//           backgroundColor: "#161A25",
//         }}
//       >
//         <p>No data available</p>
//       </div>
//     );
//   }

//   return (
//     <div
//       ref={chartContainerRef}
//       style={{ position: "relative", width: "100%", height: "320px" }}
//     >
//       {isLoading ? (
//         <div
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "320px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             color: "#ddd",
//             backgroundColor: "#161A25",
//           }}
//         >
//           <p>Loading...</p>
//         </div>
//       ) : chartData.length === 0 ? (
//         <p
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "#ddd",
//           }}
//         >
//           Chart data not found
//         </p>
//       ) : null}
//     </div>
//   );
// };

// export default CustomChart;


import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { io } from "socket.io-client";
import { base_url } from "../ApiService/BaseUrl";

const CandlestickChart = ({ symbol }) => {
  const [chartData, setChartData] = useState([]);
  const [lastData, setLastData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (symbol !== "TOMAX") {
      setChartData([]);
      setIsLoading(false);
      return;
    }

    const socket = io(base_url, { transports: ["websocket"] });

    socket.on("data", (data) => {
      if (!data || data.length === 0) {
        setChartData([]);
        setIsLoading(false);
        return;
      }

      console.log("Received Data:", data);

      const sortedData = data
        .filter(item => item.open !== undefined && item.high !== undefined && item.low !== undefined && item.close !== undefined)
        .sort((a, b) => new Date(a.time) - new Date(b.time));

      const formattedData = sortedData.map((item) => ({
        x: new Date(item.time),
        y: [item.open, item.high, item.low, item.close],
      }));

      console.log("Formatted Data:", formattedData);

      if (!lastData || formattedData.length !== lastData.length || 
          formattedData[formattedData.length - 1].x.getTime() !== lastData[lastData.length - 1].x.getTime()) {
        setChartData(formattedData);
        setLastData(formattedData);
      }

      setIsLoading(false);
    });

    return () => {
      socket.disconnect();
    };
  }, [symbol, lastData]);

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : chartData.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", color: "white" }}>Chart Data Not Found</p>
      ) : (
        <ReactApexChart 
          key={chartData.length} 
          options={options} 
          series={[{ name: "Candlestick", data: chartData }]} 
          type="candlestick" 
          height={350} 
        />
      )}
    </div>
  );
};

export default CandlestickChart;

