
import './App.css';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { color, typography } from '@mui/system';
import { useSelector } from 'react-redux';

function App() {



const mcq = useSelector((state)=>state)
console.log(mcq);
let [indval,setindval] = useState(0)
let [dis,setdis]= useState(false)
let [nexta,setnext]= useState(true)
let [tnumber,settnumber] = useState(0)
let [cor,setcor] = useState(0)

let next = ()=>{
  
setindval(indval+1)
setSeconds(10)
setdis(false)
setnext(true)
}
let per = mcq.mcqs.length*5

const [seconds, setSeconds] = useState(10);
useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
     setdis(true)
setnext(false)
    }
  });


  if(mcq.mcqs.length  == indval){
    return (
      <Grid container>
        
        <Grid xs={2}></Grid>
          
          <Grid xs={8} >
  <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static">
          <Toolbar>
          
            <Typography  variant="h6" component="div" align="center" sx={{ flexGrow: 1 }}>
              Quiz App
            </Typography>
           
          </Toolbar>
        </AppBar>
      </Box>
      <Card sx={{ minWidth: 275 }} align="center"  >
      <CardContent>
      <Grid container>
<Grid xs={6}>
<Typography>
  Total Question
</Typography>
<Typography>
  Correct Question
</Typography>
<Typography>
  Total Marks 
</Typography>
<Typography>
 Obtaind Marks
</Typography>
<Typography>
 Percentage
</Typography>
<Typography>
 Result
</Typography>
  </Grid>




  <Grid xs={6}>
  <Typography>
  {mcq.mcqs.length}
</Typography>
<Typography>
  {cor}
</Typography>
<Typography>
  {mcq.mcqs.length * 5}
</Typography>
<Typography>
  {tnumber}
</Typography>
<Typography>
  {per = tnumber / per *100}%
</Typography>
<Typography color>
 {(per >= 60)? " Pass":"Fail"}
</Typography>
  </Grid>
      </Grid>
        </CardContent>
        </Card>
        
      </Grid>
      
      </Grid>
      )

  }else{
    

  return (
    <Grid container>
      
      <Grid xs={2}></Grid>
        <Grid xs={8} >
<Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
        
          <Typography  variant="h6" component="div" align="center" sx={{ flexGrow: 1 }}>
            Quiz App
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
    
   
    <Card sx={{ minWidth: 275 }} align="center"  >
      <CardContent>
          <Grid container>
              <Grid xs={2}>
                  <Typography color="error">Question Count {indval+1}/{mcq.mcqs.length}</Typography>
              </Grid>
              <Grid xs={8}>

      <Typography>
                    {mcq.mcqs[indval].question}
      </Typography>
      </Grid>
<Grid xs="2" >
  <Typography color="error">
Time Remaing 00:00:{seconds}
</Typography>
    </Grid>

      </Grid>
      <Grid container sx={{mt: 2}}>
          {mcq.mcqs[indval].answer.map((val,ind)=>{
              return <Grid  xs={6} sx={{p: 1}}>
              <Button disabled={dis} variant="contained" value={val} onClick={(e)=>{
                if (mcq.mcqs[indval].correct == e.target.value){
                  settnumber(tnumber+5)
                  setcor(cor +1)
                }else {
                  
                }
                setnext(false)
                  setdis(true)
              }
              
              } >{val}</Button>
              </Grid>
          })
          }
      
      <Grid  xs={12} align="center"  sx={{p: 1}}>
      <Button  variant="contained" color="success" size="large" disabled={nexta} onClick={next}>Next</Button>
      </Grid>
      </Grid>
      
      </CardContent>
    </Card>

    </Grid>
    </Grid>
  )
        }
}

export default App;
