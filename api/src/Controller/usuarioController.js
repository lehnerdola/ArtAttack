import {login, consultarperfil, alterarperfil, buscarPerfil, buscarPerfilPorId, deletarperfil, fazerCadastro, AdicionarImagem, todosPerfil } from '../Repository/usuarioRepository.js'

import { Router } from 'express';
const server = Router();

import multer from 'multer'
const upload = multer({ dest: 'storage/perfil' })

server.post('/usuario/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        
        const resposta = await login(email, senha);
        if (!resposta) {
            throw new Error('Credenciais inválidas');
        }

        resp.send(resposta)

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.get('/perfil', async (req, resp) => {
    try {
        const resposta = await todosPerfil();
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }    
})


server.post('/cadastro', async (req, resp) => {
    try {
        const cadastro = req.body;

        const fazerCad = await fazerCadastro(cadastro);

        if(!cadastro.nmperfil)
            throw new Error('Nome é obrigatório!')
        if(!cadastro.email)
            throw new Error('Email é obrigatório!')
        if(!cadastro.senha)
            throw new Error('Senha é obrigatória!')        
        

        resp.send(fazerCad);

        if (!fazerCad) {
            throw new Error('Credenciais inválidas');
        }
        

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }

})

server.put('/perfil/:id/img', upload.single('img') , async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await AdicionarImagem(imagem, id);
        if (resposta != 1) {
            throw new Error('tem alguma coisa errada ai amigão')
        }

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.get('/perfil/:id' , async (req, resp) => {
    try{
        const id = req.params.id;
        const resposta = await consultarperfil(id);
        resp.send(resposta)

    }
    catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
}) 

server.get('/perfil/busca', async (req, resp) => {
    try {
        const {nome} = req.query;

        const resposta = await buscarPerfil(nome);
        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/perfil/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await buscarPerfilPorId(id);
        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.put( '/alterarperfil/:id', async (req,resp) => {
    try {
        const {id} = req.params;
        const perfil = req.body;
        const resposta = await alterarperfil(id,perfil)

        if(resposta != 1){
            throw new Error('O perfil não pode ser alterado!');
        }
        else {
            resp.status(204).send()
        }

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })      
    }
})

 server.delete( '/deletarperfil/:id', async (req,  resp ) => { 
     try {

        const {id} = req.params;
        const resposta = await deletarperfil(id)

        if(resposta != 1){
            throw new Error (' O projeto não pode ser deletado');
        }
        resp.status(204).send 
         
     } catch (err) {
         resp.status(404).send
     }
 }) 



 export default server