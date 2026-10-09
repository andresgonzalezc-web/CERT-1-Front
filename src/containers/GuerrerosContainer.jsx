import { useState } from 'react'
import GuerrerosForm from '../components/GuerrerosForm'
import GuerrerosView from '../components/GuerrerosView'


function GuerrerosContainer() {
  const [guerreros, setGuerreros] = useState([])
  const handleCreate = (guerrero) => {
                 
    setGuerreros([...guerreros, guerrero])
  }  

  const handleDelete = (guerrero) => {
    // mantiene los distintos 
    const filtrada = guerreros.filter((g) => { return g?.nombre != guerrero?.nombre })
    setGuerreros(filtrada)
  }
  
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <GuerrerosForm onCreateGuerrero={handleCreate} />


        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <GuerrerosView guerreros={guerreros} onEliminar={handleDelete} />

        </div>
      </div> 
    </div>
  )




}

export default GuerrerosContainer