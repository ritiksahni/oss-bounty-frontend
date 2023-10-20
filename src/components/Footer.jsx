import { Link } from 'react-router-dom';
import styles from '../css/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; Copyright 2023</p>
            <div className={styles.menu}>
                <Link to="/how-it-works">How it works</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/creator">Creator</Link>
            </div>
        </footer>
    );
}

export default Footer;
