"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

interface TabItem {
  id: number;
  name: string;
  content: React.JSX.Element;
}

interface TabsProps {
  tabItems: TabItem[];
  classNameContent?: string; 
}

const Tabs = ({ tabItems,  classNameContent }: TabsProps) => {
  const [activeId, setActiveId] = React.useState<number>(tabItems[0].id);

  const handleTabClick = (id: number) => {
    setActiveId(id);
  };

  return (
    <TabsPrimitive.Root defaultValue={tabItems[0].id.toString()} dir="rtl" className="w-full ">
      <TabsList>
        {tabItems.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.id.toString()}
            onClick={() => handleTabClick(item.id)}
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-6 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              activeId === item.id ? "text-blue-300 font-bold" : "text-[#ABABAB]"
            )}
          >
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabItems.map((item) => (
        <TabsContent
          key={item.id}
          value={item.id.toString()}
          classNameContent={classNameContent} 
        >
          {item.content}
        </TabsContent>
      ))}
    </TabsPrimitive.Root>
  );
};

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-xl bg-muted p-2 text-muted-foreground flex-row",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-6 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  classNameContent?: string; 
}

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ classNameContent, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 justify-center items-center flex",
      classNameContent 
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };