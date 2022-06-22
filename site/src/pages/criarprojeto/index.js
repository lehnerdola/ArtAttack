
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';


import storage from 'local-storage'

import { AlterarProjeto, CriarProjeto, enviarimagem, buscarPorId, buscarImagem } from '../../api/projetoAPI';



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
    const [imagem, setImagem] = useState();
    const [id, setId] = useState(0);

    const { idParam } = useParams();

    useEffect(() => {
        if(idParam){
            CarregarProjeto();
        }
    }, [])

    async function CarregarProjeto(){
        const resposta = await buscarPorId(idParam);
        setNome(resposta[0].nome);
        setDescricao(resposta[0].descricao);
        setCategoria(resposta[0].categoria);
        setMateriais(resposta[0].materiais);
        setId(resposta.id);
        setImagem(resposta[0].imagem);
    }

    async function SalvarClick(){
        try{
            if(!imagem) throw new Error('Escolha a imagem do Post')

            const usuario = storage('usuario-logado').id;
            console.log(usuario)

            if(id === 0){ 

            const NovoPost = await CriarProjeto(nome, descricao, categoria, materiais, usuario)
            await enviarimagem (NovoPost.id, imagem)
            toast.dark("O projeto foi cadastrado ")

            setId(NovoPost.id);
            }

            else{
              await AlterarProjeto(idParam,nome, descricao, categoria, materiais, usuario)
              if(typeof(imagem) == 'object'){
              await enviarimagem(idParam, imagem);
            }

                toast.dark("O projeto foi alterado")
            }
          
        }
        catch(err){
            if(err.response)
            toast.dark(err.response.data.erro)
            else{
                toast.dark(err.message)
            }
        }
    }

    function escolherimg (){
        document.getElementById('img').click();
    }

  function mostrarImagem(){
        if(typeof (imagem) == 'object') {
        return URL.createObjectURL(imagem);
    }
        else{
            return buscarImagem(imagem);
        }
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
            <Link to='../perfil'>
            <a>
            <div class="btao1">

                <p class="bot1-txt">Voltar</p>
                </div>
            </a>
            </Link>
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
                    <input type='file' id='img' onChange={e => setImagem(e.target.files[0])}/>
                    <form className='form'>
                    <label for='form_input' className='form_label'>

                    {!imagem &&
                        <img src="../images/addimagem.png" alt='' className='form_icon'/>
                    }

                    {imagem &&
                        <img className="img-projeto" src={mostrarImagem()} alt=''/>
                    }

                        </label>
                        </form>
                    </div>
            </aside>
            <button onClick={SalvarClick} className='btpj'> {id === 0 ? 'Salvar' : 'Alterar'} </button>
            <button onClick={NovoClick} className='btnv'> Novo </button>
            </div>

    </main>
        </div>

    )
}