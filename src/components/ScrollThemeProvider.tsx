"use client";

import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

export default function ScrollThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      // Quando o scroll passar de 20% da página, muda para modo escuro
      if (latest > 0.15) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-700`}>
      {children}
    </div>
  );
}
