"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex fixed w-14 h-14 bottom-16 right-14 border rounded-full justify-center items-center bg-base-100 border-base-content shadow-2xl hover:shadow-3xl duration-300 ease-in-out ">
            <label className="swap swap-rotate">
                <input
                    type="checkbox"
                    className="theme-controller hidden"
                    checked={theme === "dark"}
                    onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
                />

                {/* Sun Icon */}
                <Sun size="42" className="swap-on stroke-base-content w-full h-full rotate-180 duration-300 ease-in-out"/>

                {/* Moon Icon */}
                <Moon size="42" className="swap-off stroke-base-content w-full h-full rotate-0 duration-300 ease-in-out"/>
            </label>
        </div>
    );
};

export default ThemeChanger;
