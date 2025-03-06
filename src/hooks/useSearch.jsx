import { useState } from "react";
import axios from "axios";

export const useSearch = () => {
    const [search, setSearch] = useState("")
    const [weather, setWeather] = useState("")

    const apiKey = "11cec438afc6b33ba694be90048054dd";

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&lang=pt_br&units=metric`
        if (!search) {
            console.log("Digite sua cidade")
            return;
        }
        try {
            const { data } = await axios.get(url)
            console.log(data)
            setWeather(data)

            setSearch("")
        } catch (error) {
            console.error(error)
        }
    }
    return { search, onChangeSearch, handleSubmit, weather }
}
