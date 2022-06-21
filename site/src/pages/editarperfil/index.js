import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { alterarPerfil, infoPerfil, enviarimagem } from '../../api/usuarioAPI';
import { toast } from 'react-toastify';
import storage from 'local-storage'

export default function EditarPerfil() {

    const [nome, setNome] = useState('');
    const [ocupacao, setOcupacao] = useState('');
    const [bio, setBio] = useState('');
    const [ctt, setCtt] = useState('');
    const [img, setImg] = useState();
    const id = storage('usuario-logado').id


    useEffect(() => {
        carregarPerfil();
    }, [])


    async function carregarPerfil() {
        const r = await infoPerfil(id);
        
        console.log(r);

        setNome(r[0].nome);
        setOcupacao(r[0].ocupacao);
        setBio(r[0].bio);
        setCtt(r[0].ctt);
    }

    async function salvarClickPerfil() {
        try {
            const alterar = await alterarPerfil(id, nome, ocupacao, bio, ctt);

            const r = await enviarimagem (id, img)
            
            toast.dark('Perfil alterado com sucesso!')


        } catch (err) {
            alert(err.message)
        }
    }

    function escolherimg (){
        document.getElementById('img').click();
    }

  function mostrarImagem(){
        return URL.createObjectURL(img);
  }


    return (
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
                <div className='upload' onClick={escolherimg}>
                    <input type='file' id='img' onChange={e => setImg(e.target.files[0])}/>
                    <form className='form'>
                    <label for='form_input' className='form_label'>

                    {!img &&
                        <img src="../images/addimagem.png" alt='' className='form_icon'/>
                    }

                    {img &&
                        <img className="img-projeto" src={mostrarImagem()} alt=''/>
                    }
                    <input type="file" id='form_input'className='form_input'/>

                        </label>
                        </form>
                    </div>
                    </div>

                <div>
                    <input type="file" id="Imagem" name="Imagem" accept="image/*" />
                    <script src="./editarperfil/script.js"></script>

                </div>



                <div class="desc">
                    <div className='desc2'>
                        <p>
                            <h4 className='txt-edtperfil'>Nome</h4>
                            <input type="text" placeholder="@usuario" className='inpdec' value={nome} onChange={e => setNome(e.target.value)} />
                        </p>

                        <p>
                            <h4 className='txt-edtperfil'>Ocupação</h4>
                            <input type="text" placeholder="ex: designer, pintor, fotografo, ilustrador" className='inpdec' value={ocupacao} onChange={e => setOcupacao(e.target.value)} />
                        </p>

                        <p>
                            <h4 className='txt-edtperfil'>Sobre mim</h4>
                            <input type="text" placeholder="ex: hobbies,  inspirações de vida, idade " className='inpdec' value={bio} onChange={e => setBio(e.target.value)} />
                        </p>

                        <p>
                            <h4 className='txt-edtperfil'>Contato</h4>
                            <input type='text' placeholder='ex: número, email ou úsuario de outras redes' className='inpdec' value={ctt} onChange={e => setCtt(e.target.value)} />
                        </p>

                        <button className='inpbt' onClick={salvarClickPerfil}>Salvar</button>
                    </div>
                </div>


            </section>
        </div>
    )
}