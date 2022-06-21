import { con } from './connection.js'

export async function login(email, senha) {

    const comando =
    `select id_usuario 	id,
    nm_usuario		    nome,
    ds_email			email
    from tb_usuario
    where ds_email = ?
    and ds_senha   = ?
    `;

    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];

}

 export async function consultarperfil(id){

    const comando =
    `
        SELECT id_usuario       id,
                NM_USUARIO      nome,  
                DS_OCUPACAO     ocupacao, 
                DS_BIOGRAFIA    bio, 
                DS_CONTATO      ctt, 
                IMG_PERFIL    imagem
        FROM tb_usuario 
       WHERE id_usuario = ?
     `;

const [linhas] = await con.query(comando, [id])
return linhas;

 }

 export async function todosPerfil(){
    const comando =
    `
    SELECT
        id_usuario id,
		NM_USUARIO nome,  
        DS_OCUPACAO ocupacao, 
        DS_BIOGRAFIA bio,
        ds_email email,
        DS_CONTATO ctt, 
        IMG_PERFIL imagem
FROM tb_usuario `
const [linhas] = await con.query(comando);
return linhas;
 }

 export async function buscarPerfil(nome){

    const comando =
    `
SELECT id_usuario       id,
		NM_USUARIO      nome,  
        DS_OCUPACAO     ocupacao, 
        DS_BIOGRAFIA    bio, 
        DS_CONTATO      ctt 
FROM tb_usuario
WHERE NM_USUARIO like ? 
`;

const [linhas] = await con.query(comando, [`%${nome}%`])
return linhas;
 }

 export async function buscarPerfilPorId(id){

    const comando =
    `
SELECT id_usuario       id,
		NM_USUARIO      nome,  
        DS_OCUPACAO     ocupacao, 
        DS_BIOGRAFIA    bio, 
        DS_CONTATO      ctt ,
        img_perfil   imagem
FROM tb_usuario 
WHERE id_usuario = ? 
    `;

const [linhas] = await con.query(comando, [id])
return linhas;

 }



 export async  function alterarperfil (id,perfil) {
     const comando = 
     `
     UPDATE tb_usuario 
     SET nm_usuario =   ?,  
         DS_OCUPACAO =  ?, 
         DS_BIOGRAFIA = ?, 
         DS_CONTATO =   ?
   WHERE id_usuario =   ?
   `;
   const [resposta] = await con.query (comando, [perfil.nome, perfil.ocupacao, perfil.bio, perfil.ctt, id])
    return resposta.affectedRows;
 }

 export async function deletarperfil (id)
{
    const comando = 
    `
    DELETE FROM TB_USUARIO
    WHERE ID_USUARIO = ?
    `;
    const [resposta] = await con.query(comando,[id])
    return resposta.affectedRows;
}

export async function fazerCadastro(usuario)
{
    const comando = 
    `
    INSERT INTO TB_USUARIO (nm_usuario, DS_EMAIL, DS_SENHA, ds_ocupacao, ds_biografia, ds_contato)
     VALUES ( ?, ?, ?,?,?,?)
    `;
    const [resposta] = await con.query(comando, [usuario.nmperfil, usuario.email, usuario.senha, usuario.ocupacao, usuario. bio, usuario.ctt]);

    usuario.id = resposta.insertId;

    return usuario;
}

export async function AdicionarImagem(imagem, id) {
    const comando = 
    `
    UPDATE tb_usuario 
    SET img_perfil      =  ?
    WHERE id_usuario     = ?
    `;
    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}
