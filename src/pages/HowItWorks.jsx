import { Section, Strong, Text } from '@radix-ui/themes';
import styles from '../css/HowItWorks.module.css';

function HowItWorks() {
    return(
        <div className={styles.hiwDiv}>
            <div className={styles.sections}>
                <Section>
                    <Text>
                        <Strong><h2>For contributors</h2></Strong>
                    </Text>

                    <ul className={styles.list}>
                        <li>Find a bounty you want to work on.</li>
                        <li>Read the issue description and the requirements.</li>
                        <li>Fork the repository and make the changes.</li>
                        <li>Submit a pull request.</li>
                        <li>Claim your bounty.</li>
                    </ul>
                </Section>
            </div>

            <div className={styles.sections}>
                <Section>
                    <Text>
                        <Strong><h2>For bounty creators</h2></Strong>
                    </Text>

                    <ul className={styles.list}>
                        <li>Create a bounty.</li>
                        <li>Wait for a contributor to solve the issue and claim it.</li>
                        <li>Pay the bounty.</li>
                    </ul>
                </Section>
            </div>
        </div>
    )
};

export default HowItWorks;
