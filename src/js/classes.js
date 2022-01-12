
const div = document.querySelector('#result')

class busca{
    constructor(){}
    async search(e){
        div.innerHTML = ''
        e.preventDefault();
        const input = document.querySelector('#cep-input')
        await fetch(`https://viacep.com.br/ws/${input.value}/json/unicode/`)
        .then(res => res.json())
        .then(res=>{
            if(res.cep !== undefined){
                for( let i in res){
                    if(res[i]!==''){
                    const span = document.createElement('span')
                    span.innerText =`${i}: ${res[i]}`
                    div.appendChild(span)
                    }
                }
            }else{
                div.innerText = `Resultados: Cep não reconhecido...`
            }
        })
        .catch((e)=>{
            div.innerText = `Resultados: Verifique o Cep selecionado. Lembre-se de que o cep completo possui 8 dígitos.`
        })
    }
}

const pesquisa = new busca()

export{pesquisa}