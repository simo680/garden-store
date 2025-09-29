import type { ButtonHTMLAttributes, Ref } from "react";
import { type ReactNode } from "react";

type Appearance = "primary" | "secondary" ;

type ButtonType = "button" | "submit" | "reset";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  appearance?: Appearance;
  fullWidth?: boolean;
  ref?: Ref<HTMLButtonElement>;
  type?: ButtonType;
  className?: string;
  children: ReactNode;
  isDisabled?: boolean;
};
