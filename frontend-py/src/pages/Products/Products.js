import {Link} from 'react-router-dom'

function Products(){
    return(
        <>
            <h1>Voici les types de produits</h1>
            <Link to='/client/products/ange'>Ange</Link>
            <Link to='/client/products/accessories'>Accessoires</Link>
        </>
    )
}

export default Products;