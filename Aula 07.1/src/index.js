import React from "react";
import ReactDOM from "react-dom";

// JSX: JavaScript Extension (XML)
const App = () =>{
    
    const estilosBotao = {marginTop: 12,
                         paddingTop: 8,
                         paddingBottom: 8,
                         backgroundColor: 'blueviolet',
                         color: 'white',
                         border: 'none',
                         width: '100%',
                         borderRadius: 8};
    
    const textodoRotulo = 'Nome:';

    const obterTextoBotao = () => 'Enviar!';

    const onClique = () => alert('Clicou!');

    return(
        <div style={{
            margin: 'auto',
            width: 768,
            backgroundColor: '#CCC',
            padding: 12,
            borderRadius: 8}}>
                <label 
                htmlFor="nome"
                style={{
                    display: 'block',
                    marginBottom: 4}}>
                    {textodoRotulo}
                </label>
                <input 
                type="text"
                id="nome"
                style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    borderStyle: 'hidden',
                    outline: 'none',
                    width: '100%',
                    borderRadius: 8,
                    boxSizing: 'border-box'}}></input>
                <button style={estilosBotao}
                        onClick={() => onClique()}>
                    {obterTextoBotao()}
                </button>

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)