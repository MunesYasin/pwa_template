import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();
function GlobalState(props) {

    //---------------------------------------------------//
    //---------------States----------------------//
    //---------------------------------------------------//

    const [direction, setDirection] = useState(
        localStorage.getItem("dir") == null ? "rtl" : localStorage.getItem("dir")
    );
    const [language, setLanguage] = useState(
        localStorage.getItem("lang") == null ? "ar" : localStorage.getItem("lang")
    );
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") == null ? "light" : localStorage.getItem("theme")
    );


    //---------------------------------------------------//
    //---------------Methods----------------------//
    //---------------------------------------------------//
    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    const changeDirection = (dir) => {
        setDirection(dir);
        localStorage.setItem("dir", dir);
    };
    const changeTheme = (theme) => {
        setTheme(theme)
        localStorage.setItem("theme", theme);
    }

    //---------------------------------------------------//
    //---------------Effect----------------------//
    //---------------------------------------------------//
    useEffect(() => {
        if (localStorage.getItem("lang") == null) {
            changeLanguage("ar")
        }
        if (localStorage.getItem("dir") == null) {
            changeDirection("rtl")
        }
        if (localStorage.getItem("theme") == null) {
            changeTheme("light")
        }
    }, [])
    
    const state = {
        direction,
        language,
        theme,
        changeLanguage,
        changeDirection,
        changeTheme
    };
    return <Context.Provider value={state}>{props.children}</Context.Provider>;
}
export default GlobalState;
