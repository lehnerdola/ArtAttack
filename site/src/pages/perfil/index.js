import './index.scss';
import { Link } from 'react-router-dom';

export default function Perfil(){

    return(

        <div className='ma2'>
            
            <div className='ca1'>
        <div class="b-1">
            <Link to = "../Feed">
            <a >
                <p class="b-1-txt">Voltar</p>
            </a>
            </Link>
        </div>
    </div>

    <nav class="c1">

        <div class="s1">
            <img src="./images/Screenshot_20220502-223132-694.png" className='imgusu'/>
            <p className='txt-perfil'>@anonymus</p>
            <p className='txt-perfil2'>Ilustrador tradicional</p>
            <p className='txt-perfil2'>Só sei que nada sei...</p>
            <p className='txt-perfil2'>(11) 9999-59648</p>
            <p className='txt-perfil2'>anonymus@gmail.com</p>
            <Link to="../editarperfil">
            <a className='b-5'>
                <p className='txt2'>Editar perfil    </p>
            </a>
            </Link>
        </div>

       <div class="s2">
           <a className='b-4' >PROJETOS</a>
           <Link to="../criarprojeto">
           <a class="b-2">CRIAR PROJETO</a>
           </Link>
       </div>
    </nav>

    <aside class="c2">


        
        <div class="s3">
            <img src="./images/Screenshot_20220501-111439-460.png" class="imagem"/>
            <input type="button" value="Remover" class="b-3"/>
        </div>
        
        <div class="s3">
            <img src="./images/Screenshot_20220502-225108.png" class="imagem"/>
            <input type="button" value="Remover" class="b-3"/>
        </div>

    </aside>

        </div>

    )

}