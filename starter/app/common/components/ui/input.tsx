import React, { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./label";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { EyeIcon, EyeOffIcon, InfoIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type?: string;
  labelClassName?: string;
  labelFor?: string;
  hasCloseIcon?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      error,
      label,
      labelClassName,
      hasCloseIcon = true,
      labelFor,
      onChange,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState("");
    const [onFocus, setOnFocus] = useState(false);
    const [showEye, setShowEye] = useState(false);

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);

      if (onChange) {
        onChange(event);
      }
    };

    const clearInput = () => {
      setValue("");
      setOnFocus(false);
    };

    return (
      <div className="relative w-full">
        <div className="z-10 bg-white px-4">
          {label && onFocus && (
            <Label
              htmlFor={labelFor}
              className={cn(
                "-mt-2 px-1 absolute z-20 bg-white text-[12px]",
                error ? "text-red-500" : "text-blue-300",
                labelClassName
              )}
            >
              {label}
            </Label>
          )}
        </div>
        <div className="relative flex items-center">
          {hasCloseIcon && value && !error && type !== "pass" && (
            <IoMdCloseCircleOutline
              onClick={clearInput}
              className="absolute left-3 w-5 h-5 hover:text-gray-700 cursor-pointer stroke-gray-500"
            />
          )}
          {error && type !== "pass" && (
            <InfoIcon className="absolute left-3 w-5 h-5 stroke-red-500" />
          )}
          {type === "pass" &&
            (showEye ? (
              <EyeOffIcon
                onClick={() => setShowEye(false)}
                className="absolute left-3 w-5 h-5 hover:text-gray-700 cursor-pointer"
              />
            ) : (
              <EyeIcon
                onClick={() => setShowEye(true)}
                className="absolute left-3 w-5 h-5 hover:text-gray-700 cursor-pointer"
              />
            ))}
          <input
            ref={ref}
            type={type === "pass" && !showEye ? "password" : "text"}
            onInput={type === "onlyNumber" ? handleInput : undefined}
            value={type === "pass" && !showEye ? value.repeat(1) : value}
            onChange={handleChange}
            onFocus={() => setOnFocus(true)}
            onBlur={() => {
              if (value === "") setOnFocus(false);
            }}
            placeholder={label && !onFocus ? label : undefined}
            {...props}
            className={cn(
              "flex h-[56px] w-full rounded-xl border-gray-300 bg-white pl-10 pr-3 py-1 text-base file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              className,
              error
                ? "border-[1px] border-red-500 focus-visible:ring-none"
                : "border-[1px] focus-visible:border-blue-300"
            )}
          />
        </div>

        {error && (
          <p className="flex text-[#e8335d] text-xs mt-1 mx-1 whitespace-nowrap">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
