import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { setCookie, getCookie } from "@/utils/cookies";

type Theme = "system" | "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setThemeState] = useState<Theme>("system");

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        setCookie("theme", newTheme, 365);
    };

    useEffect(() => {
        const savedTheme = getCookie("theme") as Theme;
        if (savedTheme) {
            setThemeState(savedTheme);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
