export function Button({ variant = "primary", className, children, ...props }) {
  return (
    <button
      className={`px-6 py-2 rounded-full font-medium cursor-pointer transition duration-300
          ${
            variant === "primary"
              ? "bg-primary text-white hover:bg-secondary"
              : "bg-white text-secondary  hover:bg-secondary hover:text-white"
          }
              ${className ? className : ""}
        `}
      {...props}
    >
      {children}
    </button>
  );
}
