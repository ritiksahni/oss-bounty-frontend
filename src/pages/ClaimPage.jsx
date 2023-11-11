import { Button, AlertDialog, Flex } from '@radix-ui/themes';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ClaimPage({ claim }){
    const navigate = useNavigate();
    const [approvalState, setApprovalState] = useState(false);
    const [approvalError, setApprovalError] = useState(null);

    const approveClaim = async () => {
        const res = await axios.post(`${process.env.EXPRESS_SERVER_URL}/api/approve-claim`, { "bounty_id": claim.bounty_id, "claim_id": claim.id }, { withCredentials: true });
        if(res.status === 200) {
            setApprovalState(true);
        } else {
            setApprovalError(res.data);
        }
    }

    return (
        <div style={{ justifyContent: 'center', textAlign: 'center'}}>
            <h3>Claim Creator: {claim.claimer_id}</h3>
            <h4>Description</h4>
            <p>{claim.description}</p>

            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <Button variant='solid' onClick={approveClaim}>Approve</Button>
                </AlertDialog.Trigger>

                <AlertDialog.Content>
                    {approvalState ? (
                        <div>
                            <AlertDialog.Title>Claim Approved</AlertDialog.Title>
                            <AlertDialog.Description>
                                Claim has been approved for your bounty. Please reach out to us for the next steps.
                            </AlertDialog.Description>
                            <Flex gap="3" mt="4">
                                <AlertDialog.Action>
                                    <a href="mailto:ritiksahni0203@gmail.com">
                                        <Button variant='soft'>
                                            Contact Us
                                        </Button>
                                    </a>
                                </AlertDialog.Action>

                                <AlertDialog.Cancel>
                                    <Button variant='soft' onClick={() => {navigate(`/bounty/${claim.bounty_id}`)}}>
                                        Close
                                    </Button>
                                </AlertDialog.Cancel>
                            </Flex>
                        </div>
                    ) : (
                        <AlertDialog.Title>Error Approving Claim</AlertDialog.Title>
                    )}

                    {approvalError && (
                        <div>
                            <AlertDialog.Title>Claim Approval Failed</AlertDialog.Title>
                            <AlertDialog.Description>
                                {approvalError}
                            </AlertDialog.Description>

                            <AlertDialog.Cancel>
                                <Button variant='soft' onClick={() => {navigate(`/bounty/${claim.bounty_id}/claims/${claim.id}`)}}>
                                    Close
                                </Button>
                            </AlertDialog.Cancel>
                        </div>
                    )}
                </AlertDialog.Content>
            </AlertDialog.Root>
        </div>
    )
}

export default ClaimPage;