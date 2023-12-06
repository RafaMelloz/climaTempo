import { useContext } from "react"
import "./box.css"
import { ApiContext } from "../../context"

import sol from "../../assets/sol.png";
import nuvem from "../../assets/nuvem.png";
import nuvemSol from "../../assets/nuvemSol.png"
import nuvemChuva from "../../assets/nuvemComChuva.png"
import nuvemChuvaSol from "../../assets/nuvemSolChuva.png"
import nuvemRaio from "../../assets/nuvemComTrovao.png"
import floc from "../../assets/flocl.svg"





export const BoxTempo = () =>{

    const climaDados = useContext(ApiContext);
    const { dadosState, setDadosState } = climaDados;
    

   

    return(
        <div className="box">
            {dadosState.map(clima => (
                <div className="content">
                    <h1>{clima.name}</h1>

                    {clima.weather[0].icon == "01d" || clima.weather[0].icon == "01n" ? 
                        <img src={sol} alt="" />
                        : null
                    }

                    {clima.weather[0].icon === "02d" || clima.weather[0].icon === "02n" ?
                        <img src={nuvemSol} alt="" />
                        : null
                    }

                    {clima.weather[0].icon === "03d" || clima.weather[0].icon === "03n" ?
                        <img className="nuvem" src={nuvem} alt="" />
                        : null
                    }
                    

                    {clima.weather[0].icon === "04d" || clima.weather[0].icon === "04n" ? 
                        <img className = "nuvem" src={nuvem} alt="" />
                        : null
                    }

                    {clima.weather[0].icon === "09d" || clima.weather[0].icon === "09n" ?
                        <img src={nuvemChuva} alt="" />
                        : null
                    }

                    {clima.weather[0].icon === "10d" || clima.weather[0].icon === "10n" ?
                        <img src={nuvemChuvaSol} alt="" />
                        : null
                    }   

                    {clima.weather[0].icon === "11d" || clima.weather[0].icon === "11n" ?
                        <img src={nuvemRaio} alt="" />
                        : null
                    }

                    {clima.weather[0].icon === "13d" || clima.weather[0].icon === "13n" ?
                        <img src={floc} alt="" />
                        : null
                    }

                   

                    <h2 className="climaPrincipal">{clima.main.temp.toFixed(0)}°C</h2>

                    <div className="flex">
                        <div className="min">
                            <h2>MIN:</h2>
                            <h2>{clima.main.temp_min.toFixed(0)}°C</h2>
                        </div>
                        <div className="min">
                            <h2>MAX:</h2>
                            <h2>{clima.main.temp_max.toFixed(0)}°C</h2> 
                        </div>                      
                    </div>
                </div>

            ))}
        </div>
    )
}