"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface KeyValueProps {
  data: { key: string; value: string | number | React.ReactNode }[];
  className?: string;
}

const KeyValue: React.FC<KeyValueProps> = ({ data, className }) => {
  return (
    <table className={cn("w-full ", className)}>
      <tbody className="bg-white">
        {data.map((item, index) => (
          <tr key={index} className="border-b last:border-b-0 flex justify-between p-4 ">
            <td className=" text-sm text-gray-600">{item.key}</td>
            <td className=" text-sm text-gray-800">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default KeyValue;
