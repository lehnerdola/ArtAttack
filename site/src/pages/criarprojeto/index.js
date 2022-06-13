/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { CriarProjeto } from '../../api/projetoAPI';

export default function Projeto(){

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [materiais, setMateriais] = useState('');
    
    async function ProjClick(){
        try {
            
            const r = await CriarProjeto(nome, descricao, categoria, materiais);

            alert('O SEU PROJETO FOI CRIADO!')

        } catch (err) {
            alert(err.message)
        }
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
                
                    <div class="upload">
                    <form className='form'>
                     <label for='form_input' className='form_label'>
                    <img src="./images/camera-removebg-preview.png" className='form_icon' />
                        <input type="file" id='form_input' className='form_input'/>
                        </label>
                        </form>
                    </div>
                    <button>
                        <p className='textocont' >Adicione uma imagem</p>
                    </button>
            </aside>
                <button onClick={ProjClick()} className='btpj'>Enviar projeto</button>
            </div>

    </main>
        </div>

    )
}