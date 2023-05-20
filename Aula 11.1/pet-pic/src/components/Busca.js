import React, { useState } from 'react'
//useState é um hook (A partir da versão 16.8)
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const Busca = ({ dica, onBuscaRealizada }) => {
  // const lista = useState('')
  // const termoDeBusca = lista[0]
  // const setTermoDeBusca = lista[1]
  const [termoDeBusca, setTermoDeBusca] = useState('')
  const onTermoAlterado = (event) => {
    setTermoDeBusca(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    onBuscaRealizada(termoDeBusca)
  }

  return (
    <form onSubmit={onFormSubmit}>
        <div className="flex flex-column">
            <span className="p-input-icon-left w-full">
                <i className="pi pi-search"/>
                    <InputText 
                    className="w-full"
                    placeholder={dica}
                    onChange={onTermoAlterado}
                    value={termoDeBusca}
                    />
            </span>
            <Button 
            label='OK'
            className="p-button-outlined mt-2"
            />
        </div>
    </form>
  )
}

Busca.defaultProps = {
    dica: 'Digite algo que deseja ver.'
}

export default Busca