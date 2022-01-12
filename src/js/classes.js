
const span = document.querySelector('#result')

class busca{
    constructor(){}
    async search(e){
        span.innerHTML = ''
        e.preventDefault();
        const input = document.querySelector('#cep-input')
        await fetch(`https://viacep.com.br/ws/${input.value}/json/unicode/`)
        .then(res => res.json())
        .then(res=>{
            if(res.cep !== undefined){
                span.innerText = `Resultados: Rua: ${res.logradouro}, Bairro: ${res.bairro}, ${res.localidade} - ${res.uf}, DDD: ${res.ddd}.`
            }else{
                span.innerText = `Resultados: Cep não reconhecido...`
            }
        })
        .catch((e)=>{
            span.innerText = `Resultados: Verifique o Cep selecionado. Lembre-se de que o cep completo possui 8 dígitos.`
        })
    }
}

const pesquisa = new busca()

export{pesquisa}