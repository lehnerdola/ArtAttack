
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import storage from 'local-storage'

import { CriarProjeto, AdicionarImagem } from '../../api/projetoAPI';

export default function Projeto(){

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [materiais, setMateriais] = useState('');
    const [imagem, setImagem] = useState();
    const [id,setID] = useState(0);

    async function ProjClick(){
        try {
            const usuario = storage('usuario-logado').id;
            const novoprojeto = await CriarProjeto(nome, descricao, categoria, materiais, usuario);
             await AdicionarImagem(novoprojeto.id, imagem);

             setID(novoprojeto.id)

            alert('O SEU PROJETO FOI CRIADO!')

        } catch (err) {
            alert(err.message)
        }
    }

    function pegarImg(){
        document.getElementById('imgProjeto').click();
    }

    function mostrarImg(){
        return URL.createObjectURL(imagem);
    }

    

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
                        <input type="text" placeholder="nome da sua obra"  value={nome} onChange={e => setNome(e.target.value)} className='inpdec2'/>
                    </p>
        
                    <p>
                        <h4 className='titulo1'>Descrição</h4>
                        <input type="text" placeholder="informe uma descrição"  value={descricao} onChange={e => setDescricao(e.target.value)} className= 'inpdec2'/>
                    </p>
        
                    <p>
                        <h4 className='titulo1'>Categorize seu projeto:</h4>
                        <input type="text" placeholder="fotografia, arte digital,artesanato, escultura escultura etc"  value={categoria} onChange={e => setCategoria(e.target.value)} className= 'inpdec2'/>
                    </p>
        
                    <p>
                        <h4 className='titulo1'>Materiais utilizados:</h4>
                        <input type="text" placeholder="ex: paint, lightroom, figma, ilustrator" value={materiais} onChange={e => setMateriais(e.target.value)} className='inpdec2'/>
                    </p>
                </div>
        
            </div>

            <div className='con'>

            <aside class="subcont-2">
                
                    <div className='upload' onClick={pegarImg}>
                    <input type='file' id='imgProjeto' onChange={e => setImagem(e.target.files[0])}/>
                    <form className='form'>
                    <label for='form_input' className='form_label'>

                    {!imagem &&
                        <img src="../images/addimagem.png" alt='' className='form_icon'/>
                    }

                    {imagem &&
                        <img className="img-projeto" src={mostrarImg()} alt=''/>
                    }
                    <input type="file" id='form_input'className='form_input'/>

                        </label>
                        </form>
                    </div>
            </aside>
                <button onClick={ProjClick} className='btpj'>Enviar projeto</button>
            </div>

    </main>
        </div>

    )
}