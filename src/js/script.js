import { pesquisa } from "./classes.js"

const form = document.querySelector('#cep-form')


const button = document.querySelector('#cep-submit')


form.addEventListener('submit',pesquisa.search)