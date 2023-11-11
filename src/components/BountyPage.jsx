import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from 'react';
import { Card, Text, Heading, Link, Flex, Grid, Button  } from '@radix-ui/themes';
import AuthContext from '../contexts/AuthContext';

function BountyPage() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { id } = useParams();

    async function getBountyById(){
        const res = await axios.post(`${process.env.EXPRESS_SERVER_URL}/api/get-bounty`, { "bounty_id": id }, { withCredentials: true }); 
        return res.data;
    }

    const { isLoading, error, data } = useQuery({
        queryKey: ['bounty_id'],
        queryFn: getBountyById,
        cacheTime: 5000
    });

    return(
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            
            {data && (
                <Card style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)' }}>
                    <Heading size={2} style={{ marginBottom: '10px', textAlign: 'center' }}>Bounty</Heading>
                    <Grid gap={2}>
                        <Flex style={{ alignItems: 'center' }}>
                            <Text style={{ marginRight: '10px' }}>Amount: ${data.bounty_amount}</Text>
                            <Link href={data.repoLink} style={{ marginLeft: '10px' }}>{data.repoLink}</Link>
                        </Flex>
                        <Flex style={{ alignItems: 'center' }}>
                            <Text style={{ marginRight: '10px' }}>Issue Description:</Text>
                            <Text>{data.issueDescription}</Text>
                        </Flex>
                    </Grid>
                    {user && user.user_id === data.user_id && (
                        <Button color="blue" onClick={() => navigate(`/bounty/${id}/claims`)} style={{ marginTop: '10px' }}>List claims</Button>
                    )}
                    
                    {user && user.user_id !== data.user_id && data.approved_claim_id === null && (
                        <Button onClick={() => navigate(`/bounty/${id}/add-claim`)} style={{ marginTop: '10px' }}>Add claim</Button>
                    )}
                    
                    {data.approved_claim_id !== null && (
                        <p>A claim has already been approved for this bounty</p>
                    )}
                </Card>
            )}
        </div>
    )
}
export default BountyPage;

/* 

{
    "bounty_id": 98,
    "repoLink": "https://google.com",
    "issueDescription": "sd",
    "isApproved": 1,
    "user_id": "github|58897439",
    "bounty_amount": 34,
    "approved_claim_id": null
}

*/