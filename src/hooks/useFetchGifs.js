import { useState, useEffect } from "react";
import { getFetchGifs } from "../helpers/getFetchGifs";

// Esto es un customHooks
// Funcionan como si fuera un: funcionalComponent
export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        getFetchGifs(category)
        
        .then(imgs => {

            setState({
                data: imgs,
                loading: false
            });

        });

    }, [category]);

    return state;
}