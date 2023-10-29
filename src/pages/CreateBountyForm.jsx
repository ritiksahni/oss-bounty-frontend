import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { TextArea, TextField, Card, Button, Flex, Callout } from '@radix-ui/themes';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const CreateBounty = () => {
    const [repoLink, setRepoLink] = useState('');
    const [bountyAmount, setBountyAmount] = useState('');
    const [markdown, setMarkdown] = useState('');
    
    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
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

    const handleCreateBountySubmit = async (event) => {
        event.preventDefault();

        const data = {'repoLink': repoLink, 'bounty_amount': bountyAmount, 'issueDescription': markdown};

        try {
            const response = await axios.post(process.env.EXPRESS_SERVER_URL + "/api/add-bounty", data, {
                withCredentials: true
            });

            if (response.status === 200) {
                setRepoLink('');
                setBountyAmount('');
                setMarkdown('');
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
                <TextField.Root style={{ marginBottom: '16px' }}>

                <TextField.Slot>
                    <GitHubLogoIcon />
                </TextField.Slot>
    
                <TextField.Input placeholder='Enter Repository URL (e.g. https://github.com/username/repositoryName)' value={repoLink} onChange={(event) => {setRepoLink(event.target.value)}}/>
                </TextField.Root>

                <TextField.Root style={{marginBottom: '16px'}}>
                <TextField.Slot>
                    $
                </TextField.Slot>

                <TextField.Input placeholder='Enter Amount (min. $5)' value={bountyAmount} onChange={(event) => {setBountyAmount(event.target.value)}}/>
                </TextField.Root>


                <TextArea
                    value={markdown}
                    onChange={handleMarkdownChange}
                    placeholder={`Enter Issue Description (in markdown format, max ${MAX_CHARACTERS} characters)`}
                    maxLength={MAX_CHARACTERS}
                    style={{ height: '200px', overflowY: 'scroll', marginBottom: '16px' }}
                />

                <Card style={{marginTop: '4vh', overflowY: 'scroll', overflow: 'hidden' }}>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </Card>
                
            </div>
            </form>

            <Button
                as="button"
                type="submit"
                form="createBountyForm"
                variant="solid"
                style={{ marginBottom: '16px' }}
                onClick={handleCreateBountySubmit}
            >
                Submit
            </Button>

            <Callout.Root className="successCallout" style={{ display: 'none' }} size="3">
                <Callout.Text>
                    Bounty Successfully Created!
                </Callout.Text>
            </Callout.Root>

            <Callout.Root className="failureCallout" style={{ display: 'none' }} color="red" size="3" role="alert">
                <Callout.Text>
                    Bounty cannot be created. Please check your inputs and try again.
                </Callout.Text>
            </Callout.Root>
        </Flex>
    );
};

export default CreateBounty;