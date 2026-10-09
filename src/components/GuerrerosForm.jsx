import { useState } from 'react'
import {
  Button, Card, CardActions, CardContent, CardHeader,
  FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem,
  Radio, RadioGroup, Rating, Select, Slider, TextField, Typography
} from '@mui/material'

const tipos = ['Orco', 'Uruk']
const categorias = ['Capitan', 'Berserker', 'Explorador', 'Asediador']


function GuerrerosForm({ onCreateGuerrero = () => {} }) { 
  const [nombre, setNombre] = useState('') 
  const [tipo, setTipo] = useState(tipos[0]) 
  const [nivel, setNivel] = useState(1)   
  const [categoria, setCategoria] = useState(categorias[0])
  const [amenaza, setAmenaza] = useState(1)



  const limpiarFormulario = () => {
    setNombre('')
    setTipo(tipos[0])
    setNivel(1)
    setCategoria(categorias[0])
    setAmenaza(1)
  }
  
   

  const handleClick = () => {
    const guerrero = {
      nombre,
      tipo,
      nivel,
      categoria,
      amenaza,
    }
    onCreateGuerrero(guerrero)
    limpiarFormulario()
  }

  return (
    <Card raised>
      <CardHeader title="Ingresar Guerrero" />
      <CardContent>
        <div className="mt-3">
          <TextField label="Nombre del Guerrero" value={nombre}
            onChange={e => setNombre(e.target.value)} fullWidth />
        </div> 

        <div className="mt-3">  
          <FormControl>
            <FormLabel>Tipo de Guerrero</FormLabel> 
            <RadioGroup row value={tipo} onChange={e => setTipo(e.target.value)}>
              {tipos.map(t =>
                <FormControlLabel key={t} value={t} control={<Radio />} label={t} />   
              )}
            </RadioGroup> 
          </FormControl> 
        </div>

        <div className="mt-3">
          <Typography gutterBottom>Nivel de Combate: {nivel}</Typography>
          <Slider value={nivel} min={1} max={100} step={1} valueLabelDisplay="auto" onChange={(e, v) => setNivel(v)} />
        </div>

        <div className="mt-3">
          <FormControl fullWidth>
            <InputLabel id="categoria-label">Categoría /Rango</InputLabel>
            <Select labelId="categoria-label" label="Categoría / Rango"value={categoria} onChange={e => setCategoria(e.target.value)}>
            {categorias.map(c =>
                <MenuItem key={c} value={c}>{c}</MenuItem>
               )}
             </Select>
          </FormControl>
        </div>

        <div className="mt-3">
          <Typography component="legend">Nivel de Amenaza /Furia</Typography>


          <Rating value={amenaza} max={5}
            onChange={(e, v) => { if (v !== null) setAmenaza(v) }} />
        </div>
      </CardContent> 

      <CardActions>
        <Button onClick={handleClick} fullWidth variant="contained" color="secondary">
          Registrar Guerrero  
        </Button>   
      </CardActions>   
    </Card>


  )
}


export default GuerrerosForm