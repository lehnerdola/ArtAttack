import './index.scss';
import { Link } from 'react-router-dom';

export default function EditarPerfil(){

    return(
        <div className='ma3'>
            <div className='corzinha'>
    <div class="botao1">
        <Link to='../perfil'>
        <a >
            <p class="botxt">Voltar</p>
        </a>
        </Link>
    </div>
</div>

    <section class="con1">

        <div className='nsei'>
        <div class="max-width">
         <form className='form'>
                     <label for='form_input' className='form_label'>
                    <img src="./images/camera-removebg-preview.png" className='form_icon' />
                        <input type="file" id='form_input' className='form_input'/>
                        </label>
                        </form>
            </div>
        </div>

        <div>
            <input type="file" id="Imagem" name="Imagem" accept="image/*" />
        <script src="./editarperfil/script.js"></script>

        </div>

        

        <div class="desc">
            <p>
                <h4 className='txt-edtperfil'>Nome</h4>
                <input type="text" placeholder="@usuario" className='inpdec'/>
            </p>

            <p>
                <h4 className='txt-edtperfil'>Ocupação</h4>
                <input type="text" placeholder="ex: designer, pintor, fotografo, ilustrador" className='inpdec'/>
            </p>

            <p>
                <h4 className='txt-edtperfil'>Sobre mim</h4>
                <input type="text" placeholder="ex: hobbies,  inspirações de vida, idade " className='inpdec'/>
            </p>

            <p>
                <h4 className='txt-edtperfil'>Contato</h4>
                <input type='text' placeholder='ex: número, email ou úsuario de outras redes' className='inpdec'/>
            </p>

            <button className='inpbt'>Salvar</button>
        </div>


    </section>
    </div>
    )
}