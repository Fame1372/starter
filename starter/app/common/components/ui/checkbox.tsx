"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  index?: number;
  onSelectionChange?: (index: number, checked: boolean) => void; 
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, index, onSelectionChange, ...props }, ref) => {
  const handleCheckedChange = (checked: boolean) => {
    if (onSelectionChange && index !== undefined) {
      onSelectionChange(index, checked);
    }
  };

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-blue-400 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-400 data-[state=checked]:text-blue-400-foreground",
        className
      )}
      {...props}
      onCheckedChange={handleCheckedChange}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-white")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };