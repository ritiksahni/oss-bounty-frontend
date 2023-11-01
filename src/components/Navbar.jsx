import { Link as RadixLink, Button, Flex } from '@radix-ui/themes';
import { RocketIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { login, logout } from '../utils/Auth';
import styles from '../css/Navbar.module.css';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';


function Navbar() {
    const { isAuthenticated } = useContext(AuthContext);

    const navItems = [
        { name: 'How it works', href: '/how-it-works' },
        { name: 'Bounties', href: '/dashboard'},
    ]

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.leftNav}>
                    <RadixLink asChild>
                        <Link to="/">
                            <RocketIcon height={64} width={64} />
                        </Link>
                    </RadixLink>
                </div>

                <div className={styles.centerNav}>
                    <Flex gap="6" align="center">
                        {navItems.map((item) => {
                            return (
                                <RadixLink asChild key={item.name}>
                                    <Link to={item.href}>
                                        {item.name}
                                    </Link>
                                </RadixLink>
                            );
                        })}
                    </Flex>
                </div>

                <div className={styles.rightNav}>
                    {isAuthenticated ? <Button variant="soft" onClick={() => logout()}>Sign Out</Button> : <Button variant="soft" onClick={() => login()}>Sign In</Button>}
                </div>

            </nav>
        </>
    )
}

export default Navbar;