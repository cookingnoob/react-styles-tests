import { Box, Button, Typography } from '@mui/material'
import React from 'react'
//toda la pagina es cubierta por una imagen y un titulo
//on hover se cambia a:
//un div para dividir en dos
//div izquierdo  
//una imagen
//tituloo
//texto
//div derecho
//un menu 
//becoming ferrari
//making ferrari
//gallery
//get tickets

const styles = {
  container: {
    margin: '0',
    padding: '0',
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overFlow: 'hidden',
    '& img': {
      width: '100vw',
      height: '100vh',
      objectFit: 'cover',
    },
  },
  overlayText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    zIndex: 2
  }
}
const WelcomePage = () => {
  return (
    <>
      <Box sx={styles.container}>
        <Typography variant='h1' sx={styles.overlayText}>Viaja a España</Typography>
        <img src="../../public/alcazar de cordoba.jpeg" alt="alcazar de cordoba" />
      </Box>
    </>
  )
}

export default WelcomePage