import React from 'react';
import Card from '../../components/Card';
import { useCollection } from '../../hooks/useCollection'

//Material UI components for responsive grid
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//Components
import Carousel from '../../components/Carousel'


//styles
import './Home.css'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Home(){
  const {documents, error} = useCollection('productos')
  console.log(documents)

  // if is done to wait the documents, since useCollection Hook fetchs the data, once the data is
  //ready, Filter is done to check what products are sold (true), or not sold (false). This will show 
  // in the pages only the productos that have not been sold (sold===false)
  if(documents){
    var products = documents.filter(product => product.sold===false)
    
  }

    return(
      
    <div className="container" style={{"margin":"1em"}}>
    <Carousel />
    
    <div>
    <h1>Productos Disponibles</h1>
      
      
      <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} justify = "center"   >
      {error && <p>{error}</p>}
 
{products && products.map((document) => (   
  (<Grid  item xs={12} sm={6} md={4} lg ={3}>    
    <div key={document.id} align="center">
    <Card  
          key = {document.imgUrl}
          title={document.name}
          description ={document.details.substring(0,100)}          
          imgLink ={document.imgUrl}
          item = {document} 
          />
    </div>
  </Grid>)
))}      

      </Grid>
      

    </Box>
    </div>
      
      
      
      
      
      
      
      
      </div>)
}


export default Home;