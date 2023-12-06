
import { useContext, useState } from "react";
import "./search.css"

import { FaSearch } from "react-icons/fa";
import { ApiContext, fetchWeatherData } from "../../context";



export const Search = () =>{
    const infoClima = useContext(ApiContext);
    const { fetchState, setFetchState, setDadosState } = infoClima;
    const [searchValue, setSearchValue] = useState('');

    const handleBlur = async () => {
        try {
            let novaCidade = searchValue === '' ? fetchState.cidade : searchValue;
            const data = await fetchWeatherData(novaCidade);
            setDadosState(data);
            setFetchState({ ...fetchState, cidade: novaCidade });
            setSearchValue('');
        } catch (error) {
            console.error("Erro ao obter dados:", error);
        }
    };

    return(
        <div className="search-box">
            <label for="id">
                <input type="search" name="search" id="id" value={searchValue} onBlur={handleBlur} onChange={(e) => setSearchValue(e.target.value)} />
                <span><FaSearch /></span>
            </label>
        </div>
    )
}