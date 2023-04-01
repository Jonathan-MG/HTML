import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 

const App = () => (
    <div>
        Um Componente.
    </div>
)

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)