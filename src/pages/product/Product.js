import {  useParams } from "react-router-dom"
import { useDocument } from "../../hooks/useDocument";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//styles
import './Product.css'

export default function Product() {
    const { id } = useParams();    
    const {error, document} = useDocument('productos', id)
    const WAurl = `https://wa.me/573106426734?text=Hola%21%2c%20Estoy%20interesado%20en%20este%20producto%20https://paisa-store-ctg.web.app/producto/${id}`



      // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    if(document){
    const price = parseInt(document.price)
    var priceFormat = formatter.format(price);    
    }  

    
    return (
        <div className='single-product'>
            
            {error&&<p>{error}</p>}            
            {document&&(
                <>
                <div className='product'>
                <div className="image-container">
                <img src={document.imgUrl} alt={document.name} className="image" />
                </div>
                <div className="description">
                <h3>{document.name}</h3>
                <p>{document.details}</p>
                {priceFormat&&<p>Precio: {priceFormat}</p>}
                <div className="card">
                <p>Lo quiero!</p>
                <button className="comprar" > <a target="_blank" href={WAurl}><ShoppingCartIcon /></a> </button>
                </div>
                </div>
                
                </div>
                
                </>
            )}
            
        </div>
    )
}
