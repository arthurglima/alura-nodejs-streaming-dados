const conexao = require('./conexao')

const executaQuery = (query, parametros = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, () => {
            if(erro){
    
            } else {
    
            }
        })
    })
})