import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ className, ...props }: ButtonProps) => (
  <button
    className={clsx("rounded-full w-96 hover:brightness-75", className)}
    {...props}
  />
);
