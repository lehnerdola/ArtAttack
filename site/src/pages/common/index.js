import { buscarImagem } from "../../../api/produtoApi.js";
import { useNavigate } from "react-router-dom";

export default function Index(props) {
  const navigate = useNavigate();
  return (
    <div class="details">
      <div className="main-content">
      <div className="div-img">
        <div className="div-img-content">
          <img src={buscarImagem(props.projeto.imagem)} className='product-img' />
        </div>
      
      </div>
      <div className="div-infos">
        <div className="name-info">
          <h1 class="tituloinfo">{props.projeto.nome}</h1>
          <p className="user-info"> Produto postado por: <span>{props.projeto.usuario}</span></p> 
        </div>
        <div className="div-product-details">
          <h1><span>Descrição: </span>{props.projeto.descricao}</h1>
        </div>
        <div className="product-description">
          <p className="desc">Categoria:{ props.projeto.categoria}</p>
        </div>
        <div className="contact">
          <p className="contact-title">{props.projeto.materiais}</p>
          </div>
        </div>
      </div>
      </div>
  );
}