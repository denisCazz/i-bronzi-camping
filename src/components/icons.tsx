type IconName = "waves" | "pitch" | "shower" | "plug" | "check";

export function Icon({
  name,
  className = "size-6",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "waves") {
    return (
      <svg {...common}>
        <path d="M3 12c1.8-2 3.6-2 5.4 0s3.6 2 5.4 0 3.6-2 5.4 0" />
        <path d="M3 17c1.8-2 3.6-2 5.4 0s3.6 2 5.4 0 3.6-2 5.4 0" />
        <path d="M3 7c1.8-2 3.6-2 5.4 0s3.6 2 5.4 0 3.6-2 5.4 0" />
      </svg>
    );
  }

  if (name === "pitch") {
    return (
      <svg {...common}>
        <path d="M4 19V9l8-5 8 5v10" />
        <path d="M9 19v-6h6v6" />
      </svg>
    );
  }

  if (name === "shower") {
    return (
      <svg {...common}>
        <path d="M8 4h8" />
        <path d="M12 4v3" />
        <path d="M7 9h10a3 3 0 0 1-10 0Z" />
        <path d="M9 14v.01M12 15v.01M15 14v.01M10.5 18v.01M13.5 18v.01" />
      </svg>
    );
  }

  if (name === "plug") {
    return (
      <svg {...common}>
        <path d="M9 7v4M15 7v4" />
        <path d="M8 11h8v2a4 4 0 0 1-8 0v-2Z" />
        <path d="M12 17v3" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 12.5 9.5 17 19 7.5" />
    </svg>
  );
}
