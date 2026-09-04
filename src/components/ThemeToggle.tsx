import React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./theme-provider";

type Theme = "light" | "dark" | "system";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const options: { value: Theme; icon: React.ReactNode }[] = [
    { value: "light", icon: <Sun className="h-3.5 w-3.5" /> },
    { value: "system", icon: <Monitor className="h-3.5 w-3.5" /> },
    { value: "dark", icon: <Moon className="h-3.5 w-3.5" /> },
  ];

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-gray-200 p-0.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setTheme(opt.value)}
          aria-label={`${opt.value} theme`}
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-200 ${
            theme === opt.value
              ? "bg-foreground text-background"
              : "text-gray-400 hover:text-foreground"
          }`}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
