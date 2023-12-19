import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Container, Grid, TextField } from '@mui/material';
import MySelect from '../utils/MySelect';
import SearchTextField from '../utils/SearchTextField';

  
const Body = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const text = 'Closed'
    const text2 = 'Active'
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Container  style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh', 
        backgroundColor:'white',
        borderRadius:'10px',
        filter: 'drop-shadow(0px 10px 60px rgba(226, 236, 249, 0.50))',
        marginTop:'50px'
      }}>
      {/* <Grid container style={{width:'968px',height:'812px', flexShrink:0,filter:'filter: drop-shadow(0px 10px 60px rgba(226, 236, 249, 0.50))',display:'flex',alignItems:'center',justifyContent:'center'}}> */}

      <Paper sx={{ width: '100%', overflow: 'hidden',objectFit:'cover' }} style={{padding:'5px' , borderRadius:'20px'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' ,width:'max-content' }}>
                <div>
              <h1 style={{color:'#000',fontFamily:'Poppins',fontSize:'22px',fontStyle:'normal',fontWeight:600, lineHeight:'normal',letterSpacing:'-0.22px'}}>All Tickets</h1>
              <p style={{color:'#16C098', fontFamily:'Poppins',fontSize:'14px',fontStyle:'normal',fontWeight:400,lineHeight:'normal',letterSpacing:'-0.14px'}}>Active Tickets</p>
                </div>
             
              <div style={{ display: 'flex', gap: '16px', marginLeft:'600px' }}>
              <SearchTextField />
              <MySelect />
              </div>
            </div>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
            
                   <TableRow>
                  <TableCell colSpan={6} align="left">Ticket #</TableCell>
                  <TableCell colSpan={6} align="left">Date</TableCell>
                  <TableCell colSpan={6} align="left">Subject</TableCell>
                  <TableCell colSpan={6} align="left">Description</TableCell>
                  <TableCell colSpan={6} align="left">Assigned</TableCell>
                  <TableCell colSpan={6} align="left">Status</TableCell>
                </TableRow>
              
            </TableHead>
            <TableBody>
          
                <TableCell colSpan={6} align="left">#1234</TableCell>
                <TableCell colSpan={6} align="left">2023-12-19</TableCell>
                <TableCell colSpan={6} align="left">******</TableCell>
                <TableCell colSpan={6} align="left">******</TableCell>
                <TableCell colSpan={6} align="left" >
                <span style={{ backgroundColor: text === 'Closed' ? 'red' : 'inherit', color: text === 'Closed' ? 'white' : 'inherit', padding: '4px 8px', borderRadius: '4px' }}>
                   {text}
                 </span>
                </TableCell>
                <TableCell colSpan={6} align="left">
                <span style={{ backgroundColor: text2 === 'Active' ? 'green' : 'inherit', color: text2 === 'Active' ? 'white' : 'inherit', padding: '4px 8px', borderRadius: '4px' }}>
                      {text2}
                  </span>
                </TableCell>
                
           
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          // count={rows.length}
         //  rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* </Grid> */}

     </Container>

    );
}

export default Body