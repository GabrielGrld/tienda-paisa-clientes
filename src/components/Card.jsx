import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  CardActionArea  from '@mui/material/CardActionArea';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PublicIcon from '@mui/icons-material/Public';

//Styles
import  './Card.css';


export default function ActionAreaCard({ item}) {
  // Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


  const price = parseInt(item.price)
  const priceFormat = formatter.format(price);
  return (
    <>
    
    <Card className="card" sx={{ maxWidth: 345, minHeight:450 }}>
    <Link  to={{pathname: `/producto/${item.id}`, query: {item}}}>
      <CardActionArea>      
        <CardMedia
          component="img"
          height="240"
          image={item.imgUrl} 
          alt="emerald"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name.length<24?item.name:item.name.substring(0,22)+"..."}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="card">
            {item.details.length<60?item.details:item.details.substring(0,62)+"..."}
          </Typography>
          <div className="specs">
          <Typography variant="body2" color="text.secondary" className="card">
            Precio: {priceFormat}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="card">
            ct: {item.ct}
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      </Link>
      <div className='buttons'>
      <button className="comprar" onClick={()=>console.log("comprar activado")}> <ShoppingCartIcon /> </button>
      <button className="comprar"> <PublicIcon /> </button>
      </div>
    </Card>
    
    </>
  );
}