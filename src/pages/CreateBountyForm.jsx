import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { TextArea, TextField, Card, Button, Flex } from '@radix-ui/themes';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const CreateBounty = () => {
    const [repoLink, setRepoLink] = useState('');
    const [bountyAmount, setBountyAmount] = useState('');
    const [markdown, setMarkdown] = useState('');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    const MAX_CHARACTERS = 2000; // Variable for issue description text area input limit.
    
    const handleCreateBountySubmit = (event) => {
        event.preventDefault();
        // add handler.
    };

    return (
        <Flex
        direction="column"
        align="center"
        justify="center"
        style={{ height: '100vh' }}
        >
            <form id='createBountyForm'>
            <div style={{ maxWidth: '500px', width: '100%' }}>
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

                <Card style={{ marginBottom: '16px', marginTop: '4vh', maxHeight: '50vh', overflowY: 'scroll' }}>
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
        </Flex>
    );
};

export default CreateBounty;