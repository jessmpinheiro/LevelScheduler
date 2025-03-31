import { SVGProps } from "react";

export function JessLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        {/* J letter */}
        <path
          d="M40 30H60V40C60 50 50 55 40 55V45H50V40H40V30Z"
          fill="#8e2de2"
        />
        {/* E letter */}
        <path
          d="M65 30H95V40H75V42.5H90V47.5H75V50H95V60H65V30Z"
          fill="#8e2de2"
        />
        {/* S letters */}
        <path
          d="M100 30H130C130 40 120 40 120 45C120 50 130 50 130 60H100C100 50 110 50 110 45C110 40 100 40 100 30Z"
          fill="#8e2de2"
        />
        <path
          d="M135 30H165C165 40 155 40 155 45C155 50 165 50 165 60H135C135 50 145 50 145 45C145 40 135 40 135 30Z"
          fill="#8e2de2"
        />
        {/* Star */}
        <path
          d="M25 45L30 40L35 45L30 50L25 45Z"
          fill="#8e2de2"
        />
      </g>
    </svg>
  );
}