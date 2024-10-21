import { useEffect, useState } from "react";

export default function App() {
  
  const [Usuario, setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
    const Usuario = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dados = await Usuario.json();
        setUsuario(dados);
    }
    buscarUsuario();
  }, []);//complete o código);

  return (
    <>
      <h1>Buscar Usuários</h1>
      <ul>
        {Usuario.map(usuario => (
          <li key={usuario.userId}>
            <p>{usuario.id}</p>
            <p>{usuario.completed}</p>
          </li>
        ))}
      </ul>
    </>
    )
}
