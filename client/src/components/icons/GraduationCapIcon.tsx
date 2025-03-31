import { SVGProps } from "react";

export function GraduationCapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 4L4 8L12 12L20 8L12 4Z"
        fill="currentColor"
      />
      <path
        d="M4 13V16.5C4 16.5 8 19 12 19C16 19 20 16.5 20 16.5V13L12 17L4 13Z"
        fill="currentColor"
        fillOpacity="0.7"
      />
      <path
        d="M19 9V14L20 14.5L21 14V9.5L20 9L19 9Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
    </svg>
  );
}