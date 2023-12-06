import { createContext, useEffect, useState } from "react";

export const fetchConfig ={
    apiKey: "ea29630a0fa8096384c9b535470337bf",
    cidade: "pequim"
}

export const dadosJson = []

export const fetchWeatherData = async (cidade) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${fetchConfig.apiKey}&units=metric&lang=pt_br`
        );
        const data = await response.json();
        console.log("dados:", data);
        return [data];
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return [];
    }
};

export const ApiContext = createContext();


export const DadosComponent = ({children}) =>{

    const [fetchState, setFetchState] = useState(fetchConfig);
    const [dadosState, setDadosState] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchWeatherData(fetchState.cidade);
            setDadosState(data);
        };

        fetchData();
    }, [fetchState.cidade]);

    

    return(
        <ApiContext.Provider value={{ fetchState, setFetchState, dadosState, setDadosState }}>
            {children}
        </ApiContext.Provider>
    )
}   