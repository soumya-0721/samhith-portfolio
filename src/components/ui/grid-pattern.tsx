export function GridPattern({ 
  width = 40, 
  height = 40, 
  x = -1, 
  y = -1, 
  strokeDasharray = "0", 
  className, 
  ...props 
}: any) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <pattern
          id="grid-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern)" />
    </svg>
  );
}
