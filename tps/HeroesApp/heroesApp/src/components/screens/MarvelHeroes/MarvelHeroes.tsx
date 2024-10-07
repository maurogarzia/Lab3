import { useEffect, useState } from "react";
import ListHeroes from "../../ui/ListHeroes/ListHeroes";
import { heroesData } from "../../../data/heroes";
import { IHeroes } from "../../../Types/THeroes";

const MarvelHeroes = () =>{

    const [heroes, setHeroes] = useState<IHeroes[]>([])

    const handleGetHeroesMarvel = () =>{
        const result = heroesData.filter((hero) => hero.publisher === "Marvel Comics");
        setHeroes(result)
    };
    
    useEffect(() =>{
        handleGetHeroesMarvel()
    },[])
    
        return(
            <ListHeroes heroes={heroes} title="Heroes Marvel Comics"/>
    
        )
    
    }

export default MarvelHeroes