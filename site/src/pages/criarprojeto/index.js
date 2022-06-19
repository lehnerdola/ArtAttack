
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


import storage from 'local-storage'

import { AlterarProjeto, CriarProjeto, enviarimagem } from '../../api/projetoAPI';



export default function EnviarProjeto() {
    const navigate = useNavigate();
    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/login');
        }
    }, [])

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [materiais,setMateriais] = useState('');
    const [img, setImg] = useState();
    const UserLogado = storage('usuario-logado').Nome;
    const [id, setId] = useState(0);

    async function SalvarClick(){
        try{
            if(!img) throw new Error('Escolha a imagem do Post')

            const usuario = storage('usuario-logado').id;
            console.log(usuario)

            if(id === 0){ 

            const NovoPost = await CriarProjeto(nome, descricao, categoria, materiais, usuario)
            const r = await enviarimagem (NovoPost.id, img)
            toast.dark("O projeto foi cadastrado ")

            setId(NovoPost.id);
            }

            else{
                const NovoPost = await AlterarProjeto(id,nome, descricao, categoria, materiais, usuario)
                const r = await enviarimagem(id, img)
                toast.dark("O projeto foi cadastrado")
            }
          

             
            
        }
        catch(err){
            if(err.response)
            toast.dark(err.response.data.Erro)
            else{
                toast.dark(err.message)
            }
        }
    }

    function escolherimg (){
        document.getElementById('img').click();
    }

  function mostrarImagem(){
        return URL.createObjectURL(img);
  }


  function NovoClick(){
    setId(0);
    setNome('');
    setDescricao('');
    setCategoria();
    setMateriais('');
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
            </aside>
            <button onClick={SalvarClick} className='botao'> Salvar </button>
            <button onClick={NovoClick}> NOVO </button>
            </div>

    </main>
        </div>

    )
}