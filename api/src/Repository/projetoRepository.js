import {con} from './connection.js'

export async function alterarProjeto(id,projeto){
    const comando =
    `
    UPDATE tb_projeto 
    SET NM_PROJETO = ?, 
    DS_PROJETO = ?, 
    DS_CATEGORIA = ?, 
    DS_MATERIAIS = ?
  WHERE id_projeto = ?
    `

    const [resposta] = await con.query (comando, [projeto.nome, projeto.descricao, projeto.categoria, projeto.materiais, id])
    return resposta.affectedRows;
}


export async function consultarProjetos(){
    const comando = 
    `
    SELECT id_projeto			id,
	   nm_projeto			nome,
       ds_projeto		descricao,
       ds_categoria		categoria,
       ds_materiais		materiais
  FROM tb_projeto;   
    `;
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function consultarProjetosPorId(id){
    const comando = 
    `
    SELECT id_projeto	id,
	   nm_projeto		nome,
       ds_projeto		descricao,
       ds_categoria		categoria,
       ds_materiais		materiais
  FROM tb_projeto
  WHERE id_projeto = ? `;
    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function buscarporNome(nome){
    const comando =
    `
    SELECT id_projeto	id,
    nm_projeto			nome,
    ds_projeto		    descricao,
    ds_categoria		categoria,
    ds_materiais		materiais

    FROM tb_projeto   
    WHERE nm_projeto like ?
    `;
    const [linhas] = await con.query(comando, [`%${nome}%`]);
    return linhas;
} 

export async function buscarPorCategoria(categoria){
    const comando = 
    `
    SELECT id_projeto	id,
    nm_projeto			nome,
    ds_projeto		    descricao,
    ds_categoria		categoria,
    ds_materiais		materiais

    FROM tb_projeto
    WHERE ds_categoria like ?   
    `;
    const [linhas] = await con.query(comando, [`%${categoria}%`]);
    return linhas;
}


export async function InserirProjeto(projeto){
    const comando =
    `
    INSERT INTO TB_PROJETO (ID_PROJETO, NM_PROJETO, DS_PROJETO, DS_CATEGORIA, DS_MATERIAIS )
     VALUES (?, ?, ?, ?, ?)
    `

    const [resposta] = await con.query(comando, [projeto.usuario, projeto.nome, projeto.descricao, projeto.categoria, projeto.materiais])
    projeto.id = resposta.insertId;
    return projeto;
}
