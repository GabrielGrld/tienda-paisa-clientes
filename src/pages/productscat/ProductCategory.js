import { useParams } from "react-router-dom"
import { useCollection } from "../../hooks/useCollection"
import ProductsGrid from '../../components/ProductsGrid'


export default function ProductCategory() {
    const {category} = useParams()
    const {documents, error} = useCollection('productos')
    const currentFilter = category    

    // filter out the sold items
    if(documents){      
      var unsoldItems = documents.filter(product => product.sold===false)      
    }

    const products = unsoldItems ? unsoldItems.filter((document)=>{
        switch(currentFilter){
          case 'all':
            return true
          case 'dama':
              return document.category === 'calzado-dama'|'pantalon-dama'
          case 'caballero':
            return document.category === 'calzado-caballero'|'pantalon-caballero'|'camiseta-caballero'     
          case 'calzado-caballero':
          case 'calzado-dama':      
          case 'pantalon-dama':
          case 'pantalon-caballero':
          case 'camiseta-caballero':        
            return document.category === currentFilter
          case 'vendido':
            return document.sold ===true
          case 'exhibido':
            return document.sold ===false
          default:
            return true
        }
      }) : null
      
    return (
        <div className="container" style={{"margin":"1em", "alignItems": "center"}}>
            <h1>Categoría: {category}</h1>
           {error&&<p>{error}</p>}    
           {products&&<ProductsGrid products={products} />}
           {products&&products.length<1&&<p>Proximamente mas productos en esta categoria</p>}
        </div>
    )
}
