import { useParams } from "react-router-dom"


export default function ProductCategory() {
    const {category} = useParams()
    console.log(category)
    return (
        <div>
            <h1>Product Category {category}</h1>
        </div>
    )
}
