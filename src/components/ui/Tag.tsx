
import type { HTMLAttributes, ReactNode } from "react";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export default function Tag({
  children,
  className = "",
  ...props
}: TagProps) {
  return (
    <span className={`ui-tag ${className}`} {...props}>
      {children}
    </span>
  );
}
