import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import EstacaoClimatica from "./EstacaoClimatica"
// imrd
import ReactDOM from 'react-dom'
import Loading from "./Loading"

// rfce
export default class App extends React.Component {
    
    state = {
        latitude: null,
        longititude: null,
        estacao: null,
        data: null,
        icone: null,
        mensagemDeErro: null
    }
    
    componentDidMount(){
        this.obterLocalizacao()
    }

    componentDidUpdate(){
    }

    componentWillUnmount(){
    }
    
    obterEstacao = (data, latitude) => {
        const anoAtual = data.getFullYear()
        // 21/06
        // new Date(ano, mes, dia): mes começa do zero
        const d1 = new Date(anoAtual, 5, 21)
        // 24/09
        const d2 = new Date(anoAtual, 8, 24)
        // 22/12
        const d3 = new Date(anoAtual, 11, 22)
        // 21/03
        const d4 = new Date(anoAtual, 2, 22)
        const sul = latitude < 0
        if (data >= d1 && data < d2)
        return sul ? 'Inverno' : 'Verão'
        if (data >= d2 && data < d3)
        return sul ? 'Primavera' : 'Outono'
        if (data >= d3 && data < d4)
        return sul ? 'Verão' : 'Inverno'
        return sul ? 'Outono' : 'Primavera'
    }

    icones = {
        'Primavera': 'fa-seedling',
        'Verão': 'fa-umbrella-beach',
        'Outono': 'fa-tree',
        'Inverno': 'fa-snowman'
    }
    
    obterLocalizacao = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // Extrair a data do sistema
                let data = new Date()
                // Calcular a estação climática do usuário
                let estacao = this.obterEstacao(data, position.coords.latitude)
                // Decidir qual ícone exibir
                let icone = this.icones[estacao]
                // Atualizar o estado do componente
                this.setState({
                    latitude: position.coords.latitude,
                    longititude: position.coords.longitude,
                    estacao,
                    data: data.toLocaleTimeString(),
                    icone
                })
            },
            (erro) => {this.setState({mensagemDeErro: 'Tente novamente mais tarde!'})}
        )
    }

    render(){
    return (
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {   (!this.state.mensagemDeErro && !this.state.latitude) ?
                            <Loading mensagem = "Autorize o acesso à localização!"
                            />
                        :
                        this.state.mensagemDeErro ?
                            <p className="border rounded p-2 fs-1 text-center">
                                É preciso dar permissão!
                            </p>
                        :
                        <EstacaoClimatica
                            icone = {this.state.icone}
                            estacao = {this.state.estacao}
                            latitude = {this.state.latitude}
                            longititude = {this.state.longititude}
                            mensagemDeErro = {this.state.mensagemDeErro}
                            obterLocalizacao = {this.obterLocalizacao}
                        />
                    }
                </div>
            </div>
        </div>
    )
}
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)