import React, { useEffect, useState, useContext } from "react";
import i18n from "i18next";
import Backend from "i18next-fs-backend";
import axios from "./config/axios/axios";
import { Context } from "./Context";

export default function Router() {
    const [deviceType, setdeviceType] = useState("");
    const [dict, setDict] = useState("");
    const [dictionaryIsLoding, setDictionaryIsLoding] = useState(true);
    const context = useContext(Context);

    //----------------------------------------------------------------------------------------------------------//
    //-----this effect to select the type of device and import css file based on
    // device type and direction rtl/ltr and light/dark theme----// 
    //----------------------------------------------------------------------------------------------------------//
    useEffect(() => {
        document.getElementById("direction").setAttribute("dir", context.direction);
        if (context.theme === "light") {
            require("../src/assets/css/lightTheme.css")
        } else {
            require("../src/assets/css/darkTheme.css")
        }

        if (window.innerWidth < 1000) {
            setdeviceType("mobile");
            require("../src/assets/css/master_mobile.css");
            if (context.direction === "ltr") {
                require("./assets/css/ltr_mobile.css");
            } else if (context.direction === "rtl" || context.direction == null) {
                require("./assets/css/rtl_mobile.css");
            }
        } else {
            setdeviceType("web");
            require("./assets/css/master_web.css");
            if (context.direction === "ltr") {
                require("./assets/css/ltr_web.css");
            } else if (context.direction === "rtl" || context.direction == null) {
                require("./assets/css/rtl_web.css");
            }
        }
        getDictionary();
    }, [context.direction , context.theme]);


    //-------------------------------------------------------------//
    //-----this effect to finish load indicator of dictionary----// 
    //-----------------------------------------------------------//
    useEffect(() => {
        if (dict !== "") {
            setDictionaryIsLoding(false);
        }
    }, [dict]);

    //-------------------------------------------------------------//
    //-----get the dectionary based on method you want----// 
    //-----------------------------------------------------------//
    const getDictionary = () => {
        let params = {
            method: ""
        };
        axios
            .post("gateway", params)
            .then((res) => {
                setDict(res.data);
            })
            .catch((e) => {
                setDictionaryIsLoding(false);
            });
    };
    let lang = context.language;
    i18n.use(Backend).init({
        resources: dict,
        lng: lang,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });


    return (
        <React.Fragment>
            ghghghghghggg
        </React.Fragment>
    );
}

