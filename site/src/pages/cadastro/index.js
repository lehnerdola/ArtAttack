import './index.scss';
import { Link } from 'react-router-dom';

export default function Cad() {

    return(
    
    <div className='corzinha2'>

<div className='content'>
   
   <main className="login">

      
   <h1 className='tit-login'>Cadastre-se</h1> 

   <p> 
            <label class="lab">Nome de usuário</label>
            <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Crie um nome de usúario" />
          </p>

             <p> 
              <label class="lab"> Email </label>
               <input id="email_login" name="email_login" required="required" type="email" placeholder="Insira o seu e-mail :)"/>
             </p>
             <p> 
               <label class="lab">Crie sua senha</label>
               <input id="senha_login" name="senha-login" required="required" type="password" placeholder="Insira a sua senha :)" /> 
             </p>
             <p> 
               <input type="submit" value="Cadastrar"  /> 
             </p>

              <div className='subb-1' >

              <p className='desc-txt'>Já tem conta?</p>
              <Link to='../login'>
               <a className='mod' >Ir para login</a> 
              </Link>

              </div>

   </main>
   </div>
   <img src='./images/Humaaans - Ui Sketch.png' className='img1'></img>
        
    </div>
    )
}