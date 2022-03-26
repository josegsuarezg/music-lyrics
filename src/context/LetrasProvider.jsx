import { useState, createContext } from 'react';
import axios from 'axios';

const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
    
  const [alerta, setAlerta] = useState('');
  const [letra, setLetra] = useState('');
  const [cargando, setCargando] = useState(false);
  
  const busquedaLetra = async (busqueda) => {
    setCargando(true);
      try {
        const { artista, cancion } = busqueda;
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const {data} = await axios(url);
        setLetra(data.lyrics);
        setAlerta()
      } catch (error) {
        setAlerta('No se encontró letra para esta canción');
      }
    setCargando(false);
    }
  
    return (
      <LetrasContext.Provider 
        value={{
          alerta, 
          letra,
          cargando,
          setAlerta,
          busquedaLetra
          }}
      >
        {children}
      </LetrasContext.Provider>
    )
}

export { LetrasProvider };
export default LetrasContext;