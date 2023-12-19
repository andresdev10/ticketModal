import { Button, Grid, InputLabel, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import React from 'react'
import img1 from '../assets/HelloSupport.png'
import SearchTextField from '../utils/SearchTextField';
const Main = () => {
  
  return (
    <Grid container spacing={2} p={5} >
        <Grid item md={6}>
            {/* <Typography variant='h3' color={'black'}>Hello Support</Typography> */}
            <img src={img1} alt="imagen" style={{fontFamily:'Poppins', fontSize:'24px', fontStyle:'normal',fontWeight:'500',lineHeight:'normal',color:'#000'}}/>
        </Grid>
        <Grid item md={6} style={{display:'flex', justifyContent:'end'}}>
        
        <SearchTextField />
        </Grid>
    </Grid>
  )
}

export default Main