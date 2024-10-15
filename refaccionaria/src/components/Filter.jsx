import './Filter.css'

export function Filter({ products }) {
    return (
        <section className='sidebar' >
            <h2>Categorias</h2>
            <div className='category' >
                <h3>Modelo de automovil</h3>
                <ul className='submenu' >
                    {products.map((product) => (
                        <li key={product.id}><a href="#">{product.compatible_models}</a></li>
                    ))}
                </ul>
            </div>

            <div className='category' >
                <h3>Tipos de Productos</h3>
                <ul className='submenu' >
                    {products.map((product) => (
                        <li key={product.id} ><a href="#">{product.category}</a></li>
                    ))}
                </ul>
            </div>

            <div className='category' >
                <h3>Marcas</h3>
                <select>
                    {products.map((product) => (
                        <option key={product.id} value={product.brand}>{product.brand}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}