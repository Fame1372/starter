"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ItemNav {
  id: number;
  name: string;
  icon: string;
  path: string;
}

interface Props {
  navItems: Array<ItemNav>;
  classname?: string;
}

const NavigationBar = ({ navItems, classname }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-white p-4 rounded-tr-[24px] rounded-tl-[24px] shadow-[0_-1px_33px_0_rgba(0,0,0,0.07)] flex justify-center items-center",
        classname
      )}
    >
      <div className="container mx-auto flex justify-between items-center flex-row w-full">
        {navItems.map((item: ItemNav, index: number) => (
          <div
            className="flex flex-col justify-center w-full items-center gap-2 cursor-pointer"
            key={index}
            onClick={() => handleItemClick(index)}
          >
            <Image
              src={item.icon}
              alt="menu item"
              width={18}
              height={18}
              className={cn(activeIndex === index ? "stroke-blue-300" : "")}
            />
            <Link
              href={item.path}
              className={cn(
                "text-[12px]",
                activeIndex === index ? "text-blue-300 font-bold" : "text-black"
              )}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
