import './index.scss';
import { Link } from 'react-router-dom';

export default function Login() {

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
                    <input id="email_login" name="email_login" required="required" type="email" placeholder="Insira o seu e-mail :)"/>
                  </p>
                  <p> 
                    <label class="lab">Senha</label>
                    <input id="senha_login" name="senha-login" required="required" type="password" placeholder="Insira a sua senha :)" /> 
                  </p>
                  <p> 
                    <Link to='../feed'>
                    <input type="submit" value="Logar"  /> 
                    </Link>
                  </p>
                  
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