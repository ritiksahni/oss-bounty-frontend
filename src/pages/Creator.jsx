import { Card, Flex, Text } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

const CreatorCard = () => {
    return (
        <Flex style={{ justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
            <Card
                style={{
                    borderRadius: 10,
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
                    padding: 20,
                    width: '25%',
                }}
            >
                <Flex style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Creator:</Text>
                    <Text style={{ fontSize: 18 }}>Ritik Sahni</Text>
                </Flex>

                <Flex style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Email:</Text>
                    <Link to="mailto:ritiks@bsd.edu.in" style={{ fontSize: 18 }}>ritiks@bsd.edu.in</Link>
                </Flex>
                
                <Flex style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Twitter / X:</Text>
                    <Link to="https://twitter.com/ritiksahni22" target="_blank" rel="noopener noreferrer" style={{ fontSize: 18 }}>@ritiksahni22</Link>
                </Flex>

                <Flex style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', marginRight: 10 }}>About Me:</Text>
                </Flex>

                <Flex style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text>Hey, I am a first-year college student pursuing Bachelor of Computer Applications from Bangalore School of Design and Technology. This project is part of my learning process and if you have any suggestions for the platform, feel free to reach out to me on X or email.</Text>
                </Flex>
                
            </Card>
        </Flex>
    );
};

export default CreatorCard;