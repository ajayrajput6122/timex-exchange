import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const CustomChart = ({ data }) => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        background: { color: "#161A25" }, 
        textColor: "#ddd",
      },
      lineColor: "#FFFFFF", // White grid lines for contrast
      crosshair: {
        vertLine: {
          color: "#FFFFFF", // White color for the crosshair line
        },
        horzLine: {
          color: "#FFFFFF", // White color for the crosshair line
        },
      },
      grid: {
        vertLines: {
          color: "#555555", // Darker color for vertical grid lines
        },
        horzLines: {
          color: "#555555", // Darker color for horizontal grid lines
        },
      },
    });
    chartRef.current = chart;

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#4fff94", // Color for bullish candles (green)
      borderUpColor: "#4fff94", // Border color for bullish candles
      wickUpColor: "#4fff94", // Wick color for bullish candles
      downColor: "#f44336", // Color for bearish candles (red)
      borderDownColor: "#f44336", // Border color for bearish candles
      wickDownColor: "#f44336", // Wick color for bearish candles
    });
    candlestickSeries.setData(data);

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
  }, [data]);

  return (
    <div
      ref={chartContainerRef}
      style={{ position: "relative", width: "100%", height: "320px" }}
    ></div>
  );
};

export default CustomChart;
