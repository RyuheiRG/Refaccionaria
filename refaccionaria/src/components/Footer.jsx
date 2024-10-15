import './Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <section className="section">
                <h3>CATEGORÍAS</h3>
                <a href="#">POR MODELO DE AUTO</a>
                <a href="#">POR TIPO DE PRODUCTO</a>
            </section>
            <section className="section">
                <h3>INFORMACIÓN</h3>
                <a href="#">NUESTRAS TIENDAS</a>
                <a href="#">CONTÁCTANOS</a>
                <a href="#">QUIÉNES SOMOS</a>
                <a href="#">PREGUNTAS FRECUENTES (FAQ)</a>
                <a href="#">¿CÓMO COMPRAR?</a>
                <a href="#">GANA CUPONES DE DESCUENTO AL DEJAR UNA RESEÑA</a>
                <a href="#">CALENDARIO DE EVENTOS AUTOMOVILÍSTICOS</a>
            </section>
            <section className="section">
                <h3>LEGAL</h3>
                <a href="#">CONDICIONES DE SERVICIO</a>
                <a href="#">POLÍTICAS DE PRIVACIDAD</a>
                <a href="#">ENTREGAS</a>
                <a href="#">GARANTÍAS</a>
                <a href="#">DEVOLUCIONES</a>
                <a href="#">NUESTROS LOGOS</a>
                <a href="#">TRABAJA CON NOSOTROS</a>
                <a href="#">FACTURACIÓN</a>
            </section>
            <section className="section">
                <h3>MI CUENTA</h3>
                <a href="#">MIS COMPRAS</a>
                <a href="#">MIS NOTAS DE CRÉDITO</a>
                <a href="#">MIS DIRECCIONES</a>
                <a href="#">MIS DATOS PERSONALES</a>
                <a href="#">MIS CUPONES</a>
            </section>
            <div className="contact">
                <h3>INFORMACIÓN SOBRE LA TIENDA</h3>
                <ul>
                    <li>
                        <h3>LLÁMANOS:</h3>
                        <p>55 55555555</p>
                    </li>
                    <li>
                        <h3>MÁNDANOS UN WHATSAPP:</h3>
                        <p>55 55555555</p>
                    </li>
                    <li>
                        <h3>EMAIL:</h3>
                        <p>@REFACCIONARIACHIAPAS.COM</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}