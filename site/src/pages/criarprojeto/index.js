import './index.scss';
import { Link } from 'react-router-dom';

export default function Projeto(){

    return(

        <div className='ma4'>
            <div class="btao1">
            <Link to='../perfil'>
            <a>
                <p class="bot1-txt">Voltar</p>
            </a>
            </Link>
        </div>
    <nav class="cont-1">
        <h1 className='titulo-1-1'>CRIE SEU PROJETO</h1>
    </nav>

    <main class="cont-2">

        <div class="subcont-1">

                <div class="descricao">
                    <p>
                        <h4 className='titulo1'>Nome</h4>
                        <input type="text" placeholder="nome da sua obra" className='inpdec2'/>
                    </p>
        
                    <p>
                        <h4 className='titulo1'>Descrição</h4>
                        <input type="text" placeholder="informe uma descrição" className= 'inpdec2'/>
                    </p>
        
                    <p>
                        <h4 className='titulo1'>Categorize seu projeto:</h4>
                        <select className='inpdec2'>
                            <option placeholder="Fotografia" >Fotografia </option>
                            <option placeholder="">Ilustração Digital</option>
                            <option placeholder="">Ilustração tradicional</option>
                            <option placeholder="">Design</option>
                            <option placeholder="">Artesanato</option>
                            <option placeholder="">Grafite</option>
                            <option placeholder="">Escultura</option>
                            <option placeholder="">Colagem</option>
                        </select>
                    </p>
        
                    <p>
                        <h4 className='titulo1'>Materiais utilizados:</h4>
                        <input type="text" placeholder="ex: paint, lightroom, figma, ilustrator" className='inpdec2'/>
                    </p>
                </div>
        
            </div>

            <div className='con'>

            <aside class="subcont-2">
                
                    <div class="upload">
                    <form className='form'>
                     <label for='form_input' className='form_label'>
                    <img src="./images/camera-removebg-preview.png" className='form_icon' />
                        <input type="file" id='form_input' className='form_input'/>
                        </label>
                        </form>
                    </div>
                        <p className='textocont' >Adicione uma imagem</p>
                    
            </aside>
                <button className='btpj'>Enviar projeto</button>
            </div>

    </main>
        </div>

    )
}