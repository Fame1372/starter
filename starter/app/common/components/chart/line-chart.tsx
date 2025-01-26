import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "../../utils/class-name";

type Item = {
  value: number;
  label: string;
};

interface Props {
  data: Array<Item>;
  // className?: string;
}

const CustomTooltip = ({ active =1, payload, coordinate }: any) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <div
          className="bg-white p-1 shadow-[0px_8px_19px_0px_#4318FF2B] rounded-lg absolute"
          style={{
            left: coordinate.x - 28,
            top: -25,
          }}
        >
          <div className="flex flex-row gap-1">
            <p className="text-[12px]">{`${payload[0].value} `}</p>
            <p className="text-[11px] text-gray-400">ریال</p>
          </div>
          <div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            style={{
              width: 10,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "10px solid white",
            }}
          ></div>
        </div>
        <div
          className="absolute"
          style={{
            left: coordinate.x - 25,
            top: 125,
          }}
        >
          <p className="text-[12px] text-[#808080]">{`${payload[0].payload.label}`}</p>
        </div>
      </div>
    );
  }
  return null;
};

const Example: React.FC<Props> = ({ data }) => {
  return (
    <div
      className={
        (cn("w-full h-full flex justify-center items-center mt-8"))
      }
    >
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 30,
          }}
        >
          <defs>
            <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(25, 43, 230, 0.22)" />
              <stop offset="65%" stopColor="rgba(25, 43, 230, 0)" />
            </linearGradient>
          </defs>

          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(25, 43, 230, 0.2)" />
              <stop offset="50%" stopColor="rgba(25, 43, 230, 1)" />
              <stop offset="100%" stopColor="rgba(25, 43, 230, 0.2)" />
            </linearGradient>
          </defs>

          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ width: "100%" }}
            cursor={{ stroke: "#192BE6", strokeDasharray: "4 2" }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            fill="url(#gradientFill)"
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
