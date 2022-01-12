
const span = document.querySelector('#result')

class busca{
    constructor(){}
    async search(e){
        span.innerHTML = ''
        e.preventDefault();
        const input = document.querySelector('#cep-input')
        const resposta = await fetch(`https://viacep.com.br/ws/${input.value}/json/unicode/`)
        .then(res => {res.json()
            console.log(resposta.status)
        })
        .then(res=>{
            if(res.cep !== undefined){
                span.innerText = `Resultados: ${res.logradouro}, ${res.bairro}, ${res.localidade} - ${res.uf}, DDD: ${res.ddd}.`
            }else{
                span.innerText = `Resultados: Cep não reconhecido...`
            }
        })
        .catch((e)=>{
            if(e){
                console.log('bunda')
            }
        })
    }
}

const pesquisa = new busca()

export{pesquisa}