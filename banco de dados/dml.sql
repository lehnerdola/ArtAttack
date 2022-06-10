USE ATTACK;

-- carga inicial usuario

INSERT INTO TB_USUARIO (NM_USUARIO, DS_EMAIL, DS_SENHA, NM_PERFIL, DS_OCUPACAO, DS_BIOGRAFIA, DS_CONTATO, IMG_PERFIL)
     VALUES ('Leticia', 'lele@gmail.com.br', '123456', 'leh','Artista Independente','Bio top','1199542364','');

-- login
select id_usuario 		id,
       nm_usuario		nome,
       ds_email			email
  from tb_usuario
 where ds_email 		= 'lele@gmail.com.br'
   and ds_senha		= '123456';

-- cadastrar projeto
INSERT INTO TB_PROJETO (ID_USUARIO, NM_PROJETO, DS_PROJETO, DS_CATEGORIA, DS_MATERIAIS )
     VALUES (1, 'meu primeiro projeto', 'ficou incrivel','pintura','pincel,tinta,tela');

-- deletar usuario
DELETE FROM TB_USUARIO
WHERE ID_USUARIO = 2;

-- deletar projeto      
DELETE FROM tb_projeto 
      WHERE id_projeto = 1;

-- alterar informaçoes do perfil      
UPDATE tb_usuario 
   SET nm_usuario      = 'lele',
       DS_OCUPACAO = 'Desenhista', 
       DS_BIOGRAFIA ='sou pica', 
       DS_CONTATO = '115485623' 
 WHERE id_usuario = 1;    
 
 -- alterar projeto
 UPDATE tb_projeto 
   SET NM_PROJETO = 'Obra aleatoria', 
   DS_PROJETO = 'Não sei', 
   DS_CATEGORIA = 'Desenho', 
   DS_MATERIAIS = 'Lapis'
 WHERE id_projeto = 1;  
     

-- consultar todos os projetos   
SELECT id_projeto			id,
	   nm_projeto			nome,
       ds_projeto		descricao,
       ds_categoria		categoria,
       ds_materiais		materiais
  FROM tb_projeto;   
  
-- consultar informaçoes do perfil  
SELECT id_usuario id,
		NM_USUARIO nome,  
        NM_PERFIL nome, 
        DS_OCUPACAO ocupacao, 
        DS_BIOGRAFIA bio, 
        DS_CONTATO ctt, 
        IMG_PERFIL imagem
FROM tb_usuario;        
  
-- pesquisar projetos por nome
SELECT id_projeto			id,
	   nm_projeto			nome,
       ds_projeto		descricao,
       ds_categoria		categoria,
       ds_materiais		materiais
  FROM tb_projeto
  WHERE nm_projeto like '%i%';
  
  -- pesquisar projetos por id
  
  SELECT id_projeto			id,
	   nm_projeto			nome,
       ds_projeto		descricao,
       ds_categoria		categoria,
       ds_materiais		materiais
  FROM tb_projeto
  WHERE id_projeto  = 2 ;