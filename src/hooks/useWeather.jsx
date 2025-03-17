import { createContext, useContext, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {  
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState(null);

    const apiKey = "11cec438afc6b33ba694be90048054dd";

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!search) {
            console.log("Digite sua cidade");
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&lang=pt_br&units=metric`;

        try {
            const { data } = await axios.get(url);
            setWeather(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }

        setSearch("");
    };

    return (
        <WeatherContext.Provider value={{ search, setSearch, handleSubmit, weather }}>
            {children}
        </WeatherContext.Provider>
    );
};


export const useWeather = () => useContext(WeatherContext);
