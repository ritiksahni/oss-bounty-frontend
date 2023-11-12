import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { TextArea, TextField, Card, Button, Flex, Callout } from '@radix-ui/themes';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const CreateClaim = () => {
    const [claim, setClaim] = useState('');
    const { id: bounty_id } = useParams();
    
    const handleClaimChange = (event) => {
        setClaim(event.target.value);
    };

    const handleOnSubmitMessage = (status) =>{
        const callout = document.querySelector(`.${status}Callout`);
        callout.style.opacity = '0';
        callout.style.display = 'block';
        let opacity = 0;
        const interval = setInterval(() => {
            opacity += 0.1;
            callout.style.opacity = opacity.toString();
            if(opacity >= 1) {
                clearInterval(interval);
                setTimeout(() => {
                    opacity = 1;
                    const fadeOutInterval = setInterval(() => {
                        opacity -= 0.1;
                        callout.style.opacity = opacity.toString();
                        if(opacity <= 0) {
                            clearInterval(fadeOutInterval);
                            callout.style.display = 'none';
                        }
                    }, 100);
                }, 3000);
            }
        }, 100);
    }

    const MAX_CHARACTERS = 2000; // Variable for issue description text area input limit.

    // Claim Request to Express Server
    const handleCreateClaimSubmit = async (event) => {
        event.preventDefault();

        const data = {'bounty_id': bounty_id, 'description': claim};

        try {
            const response = await axios.post(`${process.env.EXPRESS_SERVER_URL}/api/add-claim`, data, {
                withCredentials: true
            });

            if (response.status === 200) {
                setClaim('');
                handleOnSubmitMessage('success');
            }
        } catch (err) {
            handleOnSubmitMessage('failure');
        }
    };

    return (
        <Flex
        direction="column"
        align="center"
        justify="center"
        style={{ height: '100vh' }}
        >
            <form id='createBountyForm'>
            <div style={{ maxWidth: '100vw', width: '75vw' }}>
                <TextArea
                    value={claim}
                    onChange={handleClaimChange}
                    placeholder={`Enter claim description (in markdown format, max ${MAX_CHARACTERS} characters). Add relevant URLs, screenshots, and code snippets.`}
                    maxLength={MAX_CHARACTERS}
                    style={{ height: '200px', overflowY: 'scroll', marginBottom: '16px' }}
                />

                <Card style={{marginTop: '4vh', overflowY: 'scroll', overflow: 'hidden' }}>
                    <ReactMarkdown>{claim}</ReactMarkdown>
                </Card>
                
            </div>
            </form>

            <Button
                as="button"
                type="submit"
                form="createBountyForm"
                variant="solid"
                style={{ marginBottom: '16px' }}
                onClick={handleCreateClaimSubmit}
            >
                Submit
            </Button>

            <Callout.Root className="successCallout" style={{ display: 'none' }} size="3">
                <Callout.Text>
                    Claim successfully created!
                </Callout.Text>
            </Callout.Root>

            <Callout.Root className="failureCallout" style={{ display: 'none' }} color="red" size="3" role="alert">
                <Callout.Text>
                    Claim cannot be created. Please check your inputs and try again.
                </Callout.Text>
            </Callout.Root>
        </Flex>
    );
};

export default CreateClaim;