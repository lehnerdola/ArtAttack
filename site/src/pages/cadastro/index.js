import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

import {CadUsuario} from '../../api/usuarioAPI'


export default function Cad() {
  const [nmperfil, setNomePerfil] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ocupacao, setOcupacao] = useState('');
  const [bio, setBio] = useState('');
  const [ctt, setCtt] = useState('');

  
  async function salvarClick() {
    try {
      if(!nmperfil)
          throw new Error('Escolha um nome de usúario!')

          if(!email)
          throw new Error('Insira um email!')
      
          if(!senha)
          throw new Error('Insira uma senha!')  
      const r = await CadUsuario(nmperfil,email,senha, ocupacao,bio, ctt);

      toast.dark('usuario cadastrado!')
    } catch (err) {
      if(err.response)
      toast.error(err.response.data.erro);
    }
  }

    return(
    
    <div className='corzinha2'>

<div className='content'>
<div className='loginsub'>

   
   <main className="login">

      
   <h1 className='tit-login'>Cadastre-se</h1> 

   <p> 
            <label class="lab">Nome de usuário</label>
            <input id="nome_cad" name="nome_cad" 
            className='email_login2'
            required="required" type="text" placeholder="Crie um nome de usúario" value={nmperfil} onChange={e => setNomePerfil(e.target.value)}  />
          </p>


          <p> 
              <label class="lab"> Email </label>
               <input id="email_login" name="email_login" required="required" type="email" 
               className='email_login2'
               placeholder="Insira o seu e-mail :)"  value={email} onChange={e => setEmail(e.target.value)}/>
             </p>
             <p> 
               <label class="lab">Crie sua senha</label>
               <input id="senha_login" name="senha-login" required="required" type="password" 
               className='email_login2'
               
               placeholder="Insira a sua senha :)" value={senha} onChange={e => setSenha(e.target.value)}/> 
             </p>
          
   <p> 
            <label class="lab">Ocupação</label>
            <input id="nome_cad" name="nome_cad" 
            className='email_login2'
            required="required" type="text" placeholder="Digite a sua ocupação" value={ocupacao} onChange={e => setOcupacao(e.target.value)}  />
          </p>

          
   <p> 
            <label class="lab">Biografia</label>
            <input id="nome_cad" name="nome_cad" 
            className='email_login2'
            required="required" type="text" placeholder="Digite uma bio sobre você" value={bio} onChange={e => setBio(e.target.value)}  />
          </p>


          <p> 
            <label class="lab">Contato</label>
            <input id="nome_cad" name="nome_cad" 
            className='email_login2'
            required="required" type="text" placeholder="Digite as informações de contato " value={ctt} onChange={e => setCtt(e.target.value)}  />
          </p>


             <p> 
               <button onClick={salvarClick} className="cadastrar">Cadastrar</button> 
             </p>

              <div className='subb1' >

              <p className='desc-txt'>Já tem conta?</p>
              <Link to='../login'>
               <a className='mod1' >Ir para login</a> 
              </Link>

              </div>
              <img src='./images/Humaaans - Ui Sketch.png' className='img1'></img>
   </main>
   </div>
   </div>
        
    </div>
    )
}