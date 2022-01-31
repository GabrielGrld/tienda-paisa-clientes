import Card from './Card';


//Material UI components for responsive grid
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function ProductsGrid({products}){


   return(<Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} justify = "center"   >
        {products && products.map((document) => (   
        (<Grid key={document.id+'productsgrid'} item xs={12} sm={6} md={4} lg ={3}>    
            <div  align="center">
            <Card  
          key = {document.imgUrl+'cardgrid'}
          title={document.name}
          description ={document.details.substring(0,100)}          
          imgLink ={document.imgUrl}
          item = {document} 
          />
            </div>
            </Grid>)
            ))}      

      </Grid>
    </Box>)
}