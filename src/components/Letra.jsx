import useLetras from "../hooks/useLetras"

const Letra = () => {
  const {letra, cargando} = useLetras();
  
  return (
    cargando ? 'Cargando...' : <p className="letra text-center">{letra}</p>
  )
}

export default Letra