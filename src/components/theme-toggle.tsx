"use client";

import * as React from "react";
import { IconInfoCircle, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="rounded-full w-8 h-8 transition-all hover:bg-accent/50"
      >
        <IconSun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <IconMoon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      <div className="group relative flex items-center justify-center">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-8 h-8 text-muted-foreground/60 hover:text-foreground hover:bg-accent/35"
        >
          <IconInfoCircle className="h-[1rem] w-[1rem]" />
          <span className="sr-only">Information</span>
        </Button>
        <div className="absolute left-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="info-tooltip">
            Hover to view the content
          </div>
        </div>
      </div>
    </div>
  );
}

