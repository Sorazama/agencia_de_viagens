import styles from './header.module.css'
import Logo from '../imagensAgencia/logoviagem.png'
import Lupa from '../imagensAgencia/lupa.png'

function Header() {
    return (
            <header className={styles.menu}>
                <nav className={styles.NavLeft}>
                    <img className={styles.logo} src={Logo} alt=""/>
                </nav>
                <nav className={styles.NavCenter}>
                    <p>Home</p>
                    <p>Escócia</p>
                    <p>Grand Canyon</p>
                    <p>Muralhas da China</p>
                    <p>Aruba</p>
                </nav>
                <nav className={styles.NavRight}>
                    <input type='text' />
                    <img className={styles.lupa} src={Lupa} alt="" />
                </nav>
            </header>
    )
}

export default Header