import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

import {CadUsuario, enviarimagem, buscarImagem} from '../../api/usuarioAPI'


export default function Cad() {
  const [nmperfil, setNomePerfil] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ocupacao, setOcupacao] = useState('');
  const [bio, setBio] = useState('');
  const [ctt, setCtt] = useState('');
  const [imagem, setImagem] = useState();
  const [id, setId] = useState(0);


  
  async function salvarClick() {
    try {
      if(!imagem) throw new Error('Escolha a imagem do Perfil')
      const r = await CadUsuario(nmperfil,email,senha, ocupacao,bio, ctt);
        await enviarimagem(r.id, imagem)

      setId(r.id)  
      toast.dark('usuario cadastrado!')
    } catch (err) {
      if(err.response)
      toast.error(err.response.data.erro);
    }
  }

  function escolherimg() {
    document.getElementById('img').click();
}

function mostrarImagem() {
    if (typeof (imagem) == 'object') {
        return URL.createObjectURL(imagem);
    }
    else {
        return buscarImagem(imagem);
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


        <div className='subimg'>
        <p className='txt-img'>Insira uma imagem de perfil</p> 
          <div className='upload' onClick={escolherimg}>
                    <input type='file' id='img' onChange={e => setImagem(e.target.files[0])}/>
          <form className='form'>
                    <label for='form_input' className='form_label'>

                    {!imagem &&
                        <img src="../images/addimagem.png" alt='' className='form_icon'/>
                    }

                    {imagem &&
                        <img className="img-projeto" src={mostrarImagem()} alt=''/>
                    }

                        </label>
                        </form>
                        </div>
                  </div>
             <p> 
               <button onClick={salvarClick} className="cadastrar">Cadastrar</button> 
             </p>

             
              <div className='subb1' >

              <p className='desc-txt'>Já tem conta?</p>
              <Link to='../login'>
               <a className='mod1' >Ir para login</a> 
              </Link>



              </div>
              <img src='./images/Humaaans - Ui Sketch.png' className='img11'></img>
   </main>
   </div>
   </div>

    </div>
    )
}