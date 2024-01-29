import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
//algo de interactividad
//quiza un hook que cuando haces click en la caja busca la temperatura
const MenuPage = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} justifyItems={'center'}>
      <Grid container spacing={5} justifyContent={'center'}>
        <Grid item>
          <img src='../../public/cordoba-mezquita.jpeg' alt='Mezquita de cordoba' width={'230px'} height={'400px'} />
          <Typography variant='h3'>Cordoba</Typography>
        </Grid>
        <Grid item>
          <img src='../../public/barcelona-sagradaF.jpeg' alt='Sagrada Familia' width={'230px'} height={'400px'} />
          <Typography variant='h3'>Barcelona</Typography>
        </Grid>
        <Grid item>
          <img src='../../public/alhambra.jpeg' alt='Alhambra de Granada' width={'230px'} height={'400px'} />
          <Typography variant='h3'>Granada</Typography>
        </Grid>
        <Grid item>
          <img src='../../public/madrid-catedral.jpeg' alt='Catedral de la almudena' width={'230px'} height={'400px'} />
          <Typography variant='h3'>Madrid</Typography>
        </Grid>
      </Grid>
      <Typography variant='h1'>Visita España</Typography>
    </Box>
  )
}

export default MenuPage