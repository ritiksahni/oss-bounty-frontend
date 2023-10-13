import { Link as RadixLink, Button, Flex } from '@radix-ui/themes';
import { RocketIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import styles from '../css/Navbar.module.css';

function Navbar() {
    const navItems = [
        { name: 'How it works', href: '/how-it-works' },
        { name: 'Bounties', href: '/bounties'},
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
                                <RadixLink asChild>
                                    <Link key={item.name} to={item.href}>
                                        {item.name}
                                    </Link>
                                </RadixLink>
                            );
                        })}
                    </Flex>
                </div>

                <div className={styles.rightNav}>
                    <Button variant="solid">Sign Up</Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;