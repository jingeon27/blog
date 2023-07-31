import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, ...props }: IButtonProps) => {
  return <button className={clsx("", className)} {...props} />;
};
