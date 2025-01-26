"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import * as Dialog from "@radix-ui/react-dialog";

const Drawer = ({
  shouldScaleBackground = true,
  content,
  title,
  open,
  actionClose,
  actionConfirm,
  className,
  ...props
}: {
  shouldScaleBackground?: boolean;
  content: React.ReactNode;
  title?: string;
  open: boolean;
  actionClose?: () => void;
  actionConfirm: () => void;
  className?: string;
} & React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    open={open}
    onOpenChange={actionClose}
    {...props}
  >
    <DrawerPrimitive.Portal>
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 justify-center items-center",
          className
        )}
      >
        {/* Blurred Overlay */}
        <DrawerPrimitive.Overlay className="absolute inset-0 backdrop-blur-sm" />
        
        {/* Drawer Content */}
        <DrawerPrimitive.Content
          className={cn(
            "absolute bottom-0 inset-x-0 z-50 mt-auto flex flex-col rounded-t-[24px] border bg-background h-[80vh]"
          )}
        >
          {/* Accessible Title */}
          <VisuallyHidden>
            <Dialog.Title>{title}</Dialog.Title>
          </VisuallyHidden>
          <div className="mx-auto mt-4 h-[6px] w-[50px] rounded-full bg-[#cccccc] flex flex-col justify-center items-center" />

          {/* Header and Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {title && <h2 className="text-lg font-semibold mb-4 text-center">{title}</h2>}
            <div className="w-full">{content}</div>
          </div>

          {/* Fixed Footer with Buttons */}
          <div className="flex flex-row gap-2 p-4 w-full justify-center ">
            {actionClose && (
              <Dialog.Close asChild>
                <Button className="w-full" variant="outline">
                  انصراف
                </Button>
              </Dialog.Close>
            )}
            {actionConfirm && (
              <Button onClick={actionConfirm} className="w-full">
                تایید
              </Button>
            )}
          </div>
        </DrawerPrimitive.Content>
      </div>
    </DrawerPrimitive.Portal>
  </DrawerPrimitive.Root>
);

Drawer.displayName = "Drawer";

export { Drawer };