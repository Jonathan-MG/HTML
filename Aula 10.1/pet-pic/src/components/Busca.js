import React, { useState } from 'react'
//useState é um hook (A partir da versão 16.8)
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const Busca = (props) => {
  // const lista = useState('')
  // const termoDeBusca = lista[0]
  // const setTermoDeBusca = lista[1]
  const [termoDeBusca, setTermoDeBusca] = useState('')
  return (
    <div className="flex flex-column">
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search">
                <InputText 
                className="w-full"
                placeholder={props.dica}
                />
            </i>
        </span>
        <Button 
        label='OK'
        className="p-button-outlined mt-2"
        />
    </div>
  )
}

Busca.defaultProps = {
    dica: 'Digite algo que deseja ver.'
}

export default Busca