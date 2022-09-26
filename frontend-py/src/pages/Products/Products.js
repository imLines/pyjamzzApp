import {Link} from 'react-router-dom'

function Products(){
    return(
        <>
            <h1>Voici les types de produits</h1>
            <Link to='/products/ange'>Ange</Link>
            <Link to='/products/accessories'>Accessoires</Link>
        </>
    )
}

export default Products;