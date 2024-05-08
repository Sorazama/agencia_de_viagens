import {Link} from 'react-router-dom'

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
                    
                    <p><Link to='/'>Home</Link></p>
                    <p><Link to='/Escocia'>Escócia</Link></p>
                    <p><Link to='/Grand_Canyon'>Grand Canyon</Link></p>
                    <p><Link to='/Muralha'>Muralhas da China</Link></p>
                    <p><Link to='/Aruba'>Aruba</Link></p>
                    
                </nav>
                <nav className={styles.NavRight}>
                    <input type='text' />
                    <img className={styles.lupa} src={Lupa} alt="" />
                </nav>
            </header>
    )
}

export default Header