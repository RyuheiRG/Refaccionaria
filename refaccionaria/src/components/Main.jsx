// import { Filter } from "./Filter";
import { Products } from "./Products";
import { products } from '../mocks/products.json'

export function Main() {
    return (
        <>
            {/*<Filter products={products} />*/}
            <Products products={products} />
        </>
    )
}