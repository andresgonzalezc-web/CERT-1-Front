import { Alert,
  Button, Card, CardContent, CardHeader, Chip, Paper,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material'

function GuerrerosView({ guerreros = [], onEliminar = () => {} }) {
     if (!guerreros?.length) {
    return <Alert severity="info">Debes ingresar al menos un guerrero.</Alert>
  }
    return (
    
    <Card>
      <CardHeader title="Despliegue del Ejercito" />  
      <CardContent> 
        <TableContainer component={Paper}>    
          <Table>
            <TableHead> 

              <TableRow>  
                <TableCell>Nombre del Guerrero</TableCell>
                <TableCell>Tipo de Guerrero</TableCell>
                <TableCell>Categoría /Rango</TableCell>  
                <TableCell>Nivel</TableCell>
                <TableCell>Clasificación</TableCell>  
                <TableCell>Acción</TableCell>

              </TableRow> 
            </TableHead>
            <TableBody>

              {guerreros.map(g =>
                <TableRow key={g.nombre}>

                  <TableCell>{g.nombre}</TableCell>
                  <TableCell>{g.tipo}</TableCell>
                  <TableCell>{g.categoria}</TableCell>
                  <TableCell>{g.nivel}</TableCell>
                  <TableCell>

                    
                    <Chip label={g.tipo} color={g.tipo === 'Orco' ? 'success' : 'error'} />
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" color="error" onClick={() => onEliminar(g)}>
                      Asesinado por la aparición
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )


}


export default GuerrerosView