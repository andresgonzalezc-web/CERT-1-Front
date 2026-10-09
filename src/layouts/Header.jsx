import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         <div className="row w-100 m-0">
            <div className="col-4">
      <Typography variant="h6" component="div">
        Anillo Único
      </Typography>
     </div>
        <div className="col-4 text-center">
      <Typography variant="h6" component="div">
        Uno para dominarlos a todos
      </Typography>
    </div>
    <div className="col-4"></div>
    </div>
  </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header