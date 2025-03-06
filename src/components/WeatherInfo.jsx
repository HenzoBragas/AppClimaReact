import Cloudy from "../assets/dia-nublado.png";
import Windy from "../assets/ventoso.png";
import Rain from "../assets/trovoada.png";
import Sun from "../assets/sun.png";

import { useHour } from "../hooks/useHour";
import { useSearch } from "../hooks/useSearch";

function WeatherInfo() {
    const { weather } = useSearch();

    const { time } = useHour();

    return (
        <div className="containerWeather">
            <div className="infoWeather">
                <div className="locale">
                    {weather ? (
                        <>
                            <li className='localeInfo'>{weather.name}</li>
                            <li className="temperatureInfo">{Math.round(weather.main.temp)}°C</li>
                        </>
                    ) : (
                        <li className='localeInfo'>Pesquisa sua cidade</li>
                    )
                    }
                </div>
                <div className="hour">
                    <li>{time}</li>
                </div>
            </div>
            <div className="containerForecast">
                <div className="forecast">
                    <img src={Cloudy} alt="" />
                    <li>Segunda</li>
                    <li>22°C</li>
                </div>
                <div className="forecast">
                    <img src={Windy} alt="" />
                    <li>Terça</li>
                    <li>45°C</li>
                </div>
                <div className="forecast">
                    <img src={Sun} alt="" />
                    <li>Quarta</li>
                    <li>32°C</li>
                </div>
                <div className="forecast">
                    <img src={Rain} alt="" />
                    <li>Quinta</li>
                    <li>20°C</li>
                </div>
                <div className="forecast">
                    <img src={Sun} alt="" />
                    <li>Sexta</li>
                    <li>12°C</li>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo
