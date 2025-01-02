import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import { io } from "socket.io-client";
import { base_url } from "../ApiService/BaseUrl";

const CustomChart = ({ symbol }) => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (symbol !== "TOMAX") return;

    const socket = io(base_url, {
      transports: ["websocket"],
    });

    socket.on("data", (data) => {
      const sortedData = data.sort(
        (a, b) => new Date(a.time) - new Date(b.time)
      );
      const formattedData = sortedData.map((item) => ({
        time: new Date(item.time).getTime(),
        open: item.open,
        high: item.high,
        low: item.low,
        close: item.close,
      }));
      setChartData(formattedData);
      setIsLoading(false);
    });

    return () => {
      socket.disconnect();
    };
  }, [symbol]);

  useEffect(() => {
    if (!chartContainerRef.current || chartData.length === 0) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        background: { color: "#161A25" },
        textColor: "#ddd",
      },
      crosshair: {
        vertLine: {
          color: "#FFFFFF",
        },
        horzLine: {
          color: "#FFFFFF",
        },
      },
      grid: {
        vertLines: {
          color: "#555555",
        },
        horzLines: {
          color: "#555555",
        },
      },
    });
    chartRef.current = chart;

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#4fff94",
      borderUpColor: "#4fff94",
      wickUpColor: "#4fff94",
      downColor: "#f44336",
      borderDownColor: "#f44336",
      wickDownColor: "#f44336",
    });

    candlestickSeries.setData(chartData);

    const handleResize = () => {
      if (chartRef.current && chartContainerRef.current) {
        chartRef.current.resize(
          chartContainerRef.current.clientWidth,
          chartContainerRef.current.clientHeight
        );
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      chart.remove();
      window.removeEventListener("resize", handleResize);
    };
  }, [chartData]);

  if (symbol !== "TOMAX") {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "320px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ddd",
          backgroundColor: "#161A25",
        }}
      >
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div
      ref={chartContainerRef}
      style={{ position: "relative", width: "100%", height: "320px" }}
    >
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "320px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ddd",
            backgroundColor: "#161A25",
          }}
        >
          <p>Loading...</p>
        </div>
      ) : chartData.length === 0 ? (
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#ddd",
          }}
        >
          Chart data not found
        </p>
      ) : null}
    </div>
  );
};

export default CustomChart;
