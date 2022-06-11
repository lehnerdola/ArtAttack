import './index.scss';
import { Link } from 'react-router-dom';

export default function Cad() {

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
            required="required" type="text" placeholder="Crie um nome de usúario" />
          </p>

             <p> 
              <label class="lab"> Email </label>
               <input id="email_login" name="email_login" required="required" type="email" 
               className='email_login2'
               placeholder="Insira o seu e-mail :)"/>
             </p>
             <p> 
               <label class="lab">Crie sua senha</label>
               <input id="senha_login" name="senha-login" required="required" type="password" 
               className='email_login2'
               
               placeholder="Insira a sua senha :)" /> 
             </p>
             <p> 
               <button>Cadastrar</button> 
             </p>

              <div className='subb1' >

              <p className='desc-txt'>Já tem conta?</p>
              <Link to='../login'>
               <a className='mod' >Ir para login</a> 
              </Link>

              </div>
              <img src='./images/Humaaans - Ui Sketch.png' className='img1'></img>
   </main>
   </div>
   </div>
        
    </div>
    )
}