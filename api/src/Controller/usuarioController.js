import {login, consultarperfil, alterarperfil, buscarPerfil, buscarPerfilPorId } from '../Repository/usuarioRepository.js'

import { Router } from 'express';
const server = Router();


server.post('/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await login(email, senha);
        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })

    }
})

server.get('/perfil' , async (req, resp) => {
    try{
        const resposta = await consultarperfil();
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
            throw new Error('O projeto não pode ser alterado!');
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
export default server