import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "bg-primary text-black py-3 px-6 rounded-lg",
        className
      )}
    >
      {children}
    </button>
  );
}
