import { useCart } from '../hooks/useCart'
import { useModal } from '../hooks/useModal'
import { DescriptionModal } from './DescriptionModal'
import './Products.css'

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()
  const { isOpen, openProductId, openModal, closeModal } = useModal(false)

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id} >
              <div>
                <img src={product.image_url} alt={product.name} />
              </div>
              <div>
                <strong>{product.name} - ${product.price}</strong>
              </div>
              <div>
                <button className={isProductInCart ? 'remove-from-cart' : 'add-to-cart'} onClick={() => { isProductInCart ? removeFromCart(product) : addToCart(product) }} >
                  {
                    isProductInCart ? "Remover del carrito" : "Agregar al carrito"
                  }
                </button>
              </div>
              <div>
                <button onClick={() => openModal(product.id)} >Descripcion</button>
              </div>
              {isOpen && openProductId === product.id && (
                <DescriptionModal isOpen={isOpen} closeModal={closeModal}>
                  <img src={product.image_url} alt={product.name} />
                  <h3>{product.name}</h3>
                  <h4>Categoria: {product.category}</h4>
                  <h4>Marca: {product.brand}</h4>
                  <h4>Precio: ${product.price}</h4>
                  <h4>Cantidad disponible: {product.stock}</h4>
                  <h5>Modelos compatibles: {product.compatible_models.join(', ')}</h5>
                  <p>Descripcion: {product.description}</p>
                  <button className={isProductInCart ? 'remove-from-cart' : 'add-to-cart'} onClick={() => { isProductInCart ? removeFromCart(product) : addToCart(product) }} >
                    {
                      isProductInCart ? "Remover del carrito" : "Agregar al carrito"
                    }
                  </button>
                </DescriptionModal>
              )}
            </li>
          )
        })}
      </ul>
    </main>
  )
}
