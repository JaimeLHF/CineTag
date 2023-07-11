import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Header.module.css'
import HeaderLink from "components/HeaderLink";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to='./'>
                <img src={logo} alt='Logo CineTag' />
            </Link>
            <nav>
                <HeaderLink url='./'>
                    Home
                </HeaderLink>

                <HeaderLink url='./Favoritos'>
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    )
}
