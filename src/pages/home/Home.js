import React from 'react';
import { useCollection } from '../../hooks/useCollection'



//Components
import Carousel from '../../components/Carousel'
import ProductsGrid from '../../components/ProductsGrid';


//styles
import './Home.css'




function Home(){
  const {documents, error} = useCollection('productos')
  

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
    {error&&<p>{error}</p>}      
    {products&&<ProductsGrid products={products} />}
        
    </div>
      
      
      
      
      
      
      
      
      </div>)
}


export default Home;