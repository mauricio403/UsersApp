import { useState } from 'react'
import logo from './logo.svg'
import Typography from '@mui/material/Typography'
import { SearchComponent } from './components/SearchComponent';
import { Box } from '@mui/material';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Typography variant="h1" color="initial">Listado de Usuarios</Typography>

      <Box sx={{marginTop:5}}>
        <SearchComponent></SearchComponent>
      </Box>
    </>

  )
}

export default App
