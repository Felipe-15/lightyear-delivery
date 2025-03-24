import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  customClasses?: { label?: string; container?: string; input?: string };
  icon?: React.ElementType;
}
