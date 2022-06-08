import axios from 'axios'
import { useNavigate } from 'react-router-dom';


import {useState} from 'react'

import './index.scss';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();


  async function entrarClick() {
    try{
    const r = await axios.post('http://localhost:5000/usuario/login',{
     email: email, 
     senha: senha
    });
        navigate('/Feed');

  } catch (err){ 
    if (err.response.status === 401){
      setErro(err.response.data.erro);
    }
  }
  }

    return(    

    <div className='corzinha2'>  

        <div className='b-voltar'>
        <Link to= '../landing-page' >
          <a className='textin'>Voltar</a>
        </Link>
        </div>

          <div className='content'>
   
        <main className="login">


        <h1 className='tit-login'>Faça login</h1> 
                  <p> 
                   <label class="lab"> Email </label>
                    <input id="email_login" name="email_login" required="required" type="email" placeholder="Insira o seu e-mail :)" value={email} onChange={ e => setEmail(e.target.value) }/>
                  </p>
                  <p> 
                    <label class="lab">Senha</label>
                    <input id="senha_login" name="senha-login" required="required" type="password" placeholder="Insira a sua senha :)"  value={senha} onChange={ e => setSenha(e.target.value) }/> 
                  </p>
                  <p> 
                    <button onClick={entrarClick}>Logar</button>
                  </p>

                  <div className='saa'>
                    {erro}
                  </div>
                  
                  <div className='subb-1'>
                  <p className='desc-txt'>
                    Ainda não criou a sua conta?
                    <Link to='../cadastro' >
                    <a className='mod'>
                    Cadastre-se
                    </a> 
                    </Link>
                    
                  </p>
                  </div>
               


        </main>
        </div>
        <img src='./images/Humaaans - Ui Sketch.png' className='img1'></img>
    </div>
    )
}