import './Header.css'
import { Cart } from "./Cart";

export function Header({ logoCar, logoSearch }) {
    return (
        <header className="header">
            <div className="container-head">
                <a href="#">
                    <img className="logo-car" src={logoCar} alt="logo-car" />
                </a>
                <div className="user">
                    <a href="#" className="profile">
                        Tu cuenta
                    </a>
                    <br />
                    <a href="#" className="sing-in">
                        Inicio de sesion
                    </a>
                </div>
                <div className="search">
                    <input type="search" name="search" placeholder="Busca un articulo..." />
                    <button>
                        <img className="search-btn" src={logoSearch} alt="search-logo" />
                    </button>
                </div>
                <div className='shopping-cart' >
                    <Cart />
                </div>
            </div>
        </header>
    )
}