import { SVGProps } from "react";

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 3L14.5 8.5L20 11L14.5 13.5L12 19L9.5 13.5L4 11L9.5 8.5L12 3Z"
        fill="currentColor"
      />
      <path
        d="M19 16L20 18L22 19L20 20L19 22L18 20L16 19L18 18L19 16Z"
        fill="currentColor"
      />
      <path
        d="M5 16L6 18L8 19L6 20L5 22L4 20L2 19L4 18L5 16Z"
        fill="currentColor"
      />
    </svg>
  );
}