import { createContext, useContext, useState, useMemo, useCallback, useEffect } from 'react';

const PageTheme = createContext();

export const ThemeContext = ({ children }) => {
    const [currTheme, setCurrentTheme] = useState(() => {
        const prevTheme = localStorage.getItem('theme');
        return prevTheme ? prevTheme : 'dark';
    });

    useEffect(() => {
        document.documentElement.classList.add(currTheme)
    }, [currTheme])

    const toggleTheme = useCallback(() => {
        const newTheme = currTheme === 'light' ? 'dark' : 'light';
        if (currTheme === "light") {
            document.documentElement.classList.remove("light")
        } else {
            document.documentElement.classList.remove("dark")
        }
        document.documentElement.classList.add(newTheme)
        setCurrentTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }, [currTheme]);


    const contextValue = useMemo(() => ({ currTheme, toggleTheme }), [currTheme, toggleTheme]);

    return (
        <PageTheme.Provider value={contextValue}>
            {children}
        </PageTheme.Provider>
    );
};

export const useThemeContext = () => useContext(PageTheme);
