import clsx from "clsx";
import React from "react";

type BoundedProps<T extends React.ElementType = "section"> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export const Bounded = <T extends React.ElementType = "section">({
  as,
  className,
  children,
  ...restProps
}: BoundedProps<T>) => {
  const Comp = as || "section";
  return React.createElement(
    Comp,
    { className: clsx("px-4 first:pt-10 md:px-6", className), ...restProps },
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
      {children}
    </div>
  );
};




