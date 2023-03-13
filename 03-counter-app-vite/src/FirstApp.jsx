import PropTypes  from "prop-types"

export const Componente = ({title , subTitle,name}) =>{

    return (
        <>
            <h1 data-testid="test-title" >{title}</h1>
            {/* <h1> {JSON.stringify(mensaje)} </h1> */}
            <p> {subTitle}</p>
            <p> {name}</p>
        </>
    )
}

Componente.protoType = {
    title : PropTypes.string.isRequired,
    subTitle : PropTypes.string.isRequired,
}

Componente.defaultProps = {
    subTitle : 'No hay subtitulo',
    name: 'maicol toro'
}