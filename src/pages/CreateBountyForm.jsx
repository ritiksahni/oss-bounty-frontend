import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { TextArea, TextField, Card, Button, Flex } from '@radix-ui/themes';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const CreateBounty = () => {
    const [markdown, setMarkdown] = useState('');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    const MAX_CHARACTERS = 2000; // Variable for issue description text area input limit.
    
    const handleCreateBountySubmit = (event) => {
        event.preventDefault();
        console.log(event);
        // add handler for API endpoint.
    }


    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            style={{ height: '100vh' }}
        >
            <div className='createBountyForm' style={{ maxWidth: '500px', width: '100%' }}>
                <TextField.Root style={{ marginBottom: '16px' }}>

                <TextField.Slot>
                    <GitHubLogoIcon />
                </TextField.Slot>
    
                <TextField.Input placeholder='Enter Repository URL (e.g. https://github.com/username/repositoryName)' />
                </TextField.Root>

                <TextField.Root style={{marginBottom: '16px'}}>
                <TextField.Slot>
                    $
                </TextField.Slot>

                <TextField.Input placeholder='Enter Amount (min. $5)' />
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
            

                <Button style={{ marginBottom: '16px' }} onClick={handleCreateBountySubmit}>Submit</Button>
            </div>
        </Flex>
    );
};

export default CreateBounty;