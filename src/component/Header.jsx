import { Container, Grid } from '@mui/material'
import React from 'react'
import svg from '../assets/profile-2user.svg'
import svg2 from '../assets/Ellipse3.svg'
import svg3 from '../assets/arrow-up1.svg'
import svg4 from '../assets/monitor.svg'



const Header = () => {
  return (
    <Container  style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '20vh', 
      backgroundColor:'white',
      borderRadius:'20px',
      filter: 'drop-shadow(0px 10px 60px rgba(226, 236, 249, 0.50))',
      padding:'20px',
      width:'550vh'
    }}>
    <Grid container spacing={2}  style={{filter: 'drop-shadow(0px 10px 60px rgba(226, 236, 249, 0.50))', fill:'#FFF', width:'968px', height:'139px',flexShrink:0, color:'#FFFFFF',padding:'35px',marginLeft:'35px'  }}>
        <Grid item md={6} style={{  width: '350px', height: '100px',overflow: 'hidden', position:'relative' }}>
            <img src={svg2} alt="" style={{ width:'84px',height:'77.325px',fill:'linear-gradient(201deg, #D3FFE7 3.14%, #EFFFF6 86.04%)', flexShrink:0,objectFit: 'cover',background:'linear-gradient(#D3FFE7, #EFFFF6)', borderRadius:'50%', position:'absolute',top: '0', left: '0' }}/>
            <img src={svg} alt="" style={{ width:'42px',height:'38.662px',color:'#00AC4F', flexShrink:0,objectFit: 'cover', position:'absolute',top: '18', left: '24' }}/>
            <h3 style={{color:'#ACACAC',fontFamily:'Poppins',fontSize:'14px',fontStyle:'normal',fontWeight:400,lineHeight:'normal', letterSpacing:'0.14px', objectFit:'cover', position:'relative',left:'80px',top:'-25px'}}>Open tickets</h3>
            <h1 style={{color:'#333',fontFamily:'Poppins',fontSize:'32px', fontStyle:'normal',fontWeight:600,lineHeight:'100%',letterSpacing:'-0.32px', width:'87px',height:'29.457px',flexShrink:0,position:'relative',left:'80px',top:'-45px'}}>23</h1>
            <img src={svg3} alt='' style={{width:'20px',height:'18.411px',flexShrink:0,color:'#00AC4F',position:'relative',left:'80px',top:'-65px'}}/>
            <p style={{color:'#00AC4F', fontFamily:'Poppins',width:'89px',height:'16.57px',flexShrink:0,fontSize:'12px',fontStyle:'normal',fontWeight:700,lineHeight:'normal',letterSpacing:'-0.12px',position:'relative',left:'99px',top:'-95px'}}>16%</p>
            <p style={{color:'#292D32', fontFamily:'Poppins',width:'89px',height:'16.57px',flexShrink:0,fontSize:'12px',fontStyle:'normal',fontWeight:400,lineHeight:'normal',letterSpacing:'-0.12px',position:'relative',left:'126px',top:'-124px'}}>this month</p>
        </Grid>
        <Grid item md={6} style={{  width: '350px', height: '100px',overflow: 'hidden', position:'relative' }}>
            <img src={svg2} alt="" style={{ width:'84px',height:'77.325px',fill:'linear-gradient(201deg, #D3FFE7 3.14%, #EFFFF6 86.04%)', flexShrink:0,objectFit: 'cover',background:'linear-gradient(#D3FFE7, #EFFFF6)', borderRadius:'50%', position:'absolute',top: '0', left: '0' }}/>
            <img src={svg4} alt="" style={{ width:'42px',height:'38.662px',color:'#00AC4F', flexShrink:0,objectFit: 'cover', position:'absolute',top: '18', left: '24' }}/>
            <h3 style={{color:'#ACACAC',fontFamily:'Poppins',fontSize:'14px',fontStyle:'normal',fontWeight:400,lineHeight:'normal', letterSpacing:'0.14px', objectFit:'cover', position:'relative',left:'80px',top:'-25px'}}>Closed</h3>
            <h1 style={{color:'#333',fontFamily:'Poppins',fontSize:'32px', fontStyle:'normal',fontWeight:600,lineHeight:'100%',letterSpacing:'-0.32px', width:'87px',height:'29.457px',flexShrink:0,position:'relative',left:'80px',top:'-45px'}}>56</h1>
           
        </Grid>
    </Grid>
    </Container>
  )
}

export default Header