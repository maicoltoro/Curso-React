import { useState } from 'react'
import PropTypes  from "prop-types"

export const Tarea = ({valor}) =>{

    const [ counter, setCounter ] = useState( valor )

    const sumar = (event) =>{
        setCounter( (c) => c + 1 )
    }

    const restar = (event) =>{
        setCounter( (c) => c - 1 )
    }

    const Restaurar = (event) =>{
        setCounter( (c) => c = valor )
    }

    return (
        <>
            <h1> ConterApp </h1>
            <h2>{ counter }</h2>
            
            <button onClick={ (event) => sumar(event) }> +1  </button>
            <button onClick={ (event) => restar(event) }> -1  </button>
            <button onClick={ (event) => Restaurar(event) }> Reset </button>

        </>
    )
}

Tarea.protoType = {
    valor : PropTypes.number.isRequired
}