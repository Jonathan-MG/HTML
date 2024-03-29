const Redux = require ('redux')

// Funções criadoras de ação
const criarContrato = (nome, taxa) => {
    return {
        type: "CRIAR_CONTRATO",
        payload: {
            nome,
            taxa
        }
    }
}

const cancelarContrato = (nome) => {
    return {
        type: "CANCELAR_CONTRATO",
        payload: {
            nome
        }
    }
}

const solicitarCashback = (nome, valor) => {
    return {
        type: "SOLICITAR_CASHBACK",
        payload: {
            nome,
            valor
        }
    }
}

// Reducer: Historico de pedidos de cashback 
const historicoPedidosCashback = (historicoPedidosCashback_Atual = [], acao) => {
    if (acao.type === "SOLICITAR_CASHBACK"){
        // "..." ele tira os valores da chave.
        return [...historicoPedidosCashback_Atual, acao.payload]
    }
    return historicoPedidosCashback_Atual
}

// Reducer: Caixa
const caixa = (caixa_Atual = 0, acao) => {
    if (acao.type === "SOLICITAR_CASHBACK"){
        return caixa_Atual - acao.payload.valor
    } else if (acao.type === "CRIAR_CONTRATO"){
        return caixa_Atual + acao.payload.taxa
    }
    return caixa_Atual
}

// Reducer: Historico de Contratos
const historicoDeContratos = (historicoDeContratos_Atual = [], acao) => {
        if (acao.type === "CRIAR_CONTRATO"){
            return [...historicoDeContratos_Atual, acao.payload]
        } else if (acao.type === "CANCELAR_CONTRATO"){
            return [historicoDeContratos_Atual].filter(contrato => {
                contrato.nome !== acao.payload.nome
            })}
        return historicoDeContratos_Atual
}

const { combineReducers, createStore } = Redux

const todosOsReducers = combineReducers({
    historicoPedidosCashback,
    historicoDeContratos,
    caixa
})

const store = createStore(todosOsReducers)

// store.dispatch para enviar uma ação
// store.getState para observar o estado atual
// Enviar uma ação de criação de contrato para o João pagando 50 reais e exibir o estado depois.

// store.dispatch(criarContrato("João", 50))
// console.log(store.getState())

const transacao = (store) => {
    const clientes = ["José", "Maria", "Pedro", "Antônio"]
    const funcoes = {
        0: (nome) => store.dispatch(criarContrato(nome, 50)),
        1: (nome) => store.dispatch(cancelarContrato(nome)),
        2: (nome) => {
            const valor = Math.floor(Math.random() * (30 - 10 + 1) ) + 10
            store.dispatch(solicitarCashback(nome, valor))
        }
    }
    const indice = Math.floor(Math.random() * (3 - 0 + 1) ) + 0
    const n_funcao = Math.floor(Math.random() * (2 - 0 + 1) ) + 0
    funcoes[n_funcao](clientes[indice])
}

setInterval(() => {
    transacao(store)
    console.log(store.getState())
}, 5000);