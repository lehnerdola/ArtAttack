import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Páginas </h1>

      <Link to='/landing-page'> Landing Page </Link>

      <br/>

      <Link to='/login'> Login </Link>

      <br/>

      <Link to='/Feed'> Feed </Link>

      <br/>

      <Link to='/cadastro'> Cadastro </Link>

      <br/>

      <Link to='/perfil'>Perfil</Link>
      <br/>

      <Link to='/editarperfil'>EditarPerfil</Link>

      <br/>

      <Link to='/criarprojeto'>Projeto</Link>

    </div>
  )
}
export default App;
