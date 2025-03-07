import React from 'react'
import Search from "../assets/search.svg"
import Star from "../assets/star.svg"
import Temp from "../assets/temperatura.png"

import { useWeather } from '../hooks/useWeather'

function SearchBar() {

    const { search, setSearch, handleSubmit } = useWeather();
    
    return (
        <div className="containerSearch">
            <form className="formSearch" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="searchInput"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search || ""} />
                <div className="btn-actions">
                    <button className="btn-config btnSearch"><img src={Search} alt="" /></button>
                    <button className="btn-config btnFavorites"><img src={Star} alt="" /></button>
                    <button className="btn-config btnTemperature"><img src={Temp} alt="" /></button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
