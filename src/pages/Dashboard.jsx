import styles from '../css/Dashboard.module.css';
import BountyCard from "../components/BountyCard";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Grid, Box } from "@radix-ui/themes";
import { PlusIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const Dashboard = () => {    
    const { isAuthenticated } = useContext(AuthContext);

    const getBounties = async () => {
        const res = await axios.get(process.env.EXPRESS_SERVER_URL + "/api/bounties/");
        return res.data;
    }

    const { isLoading, error, data } = useQuery({
        queryKey: ['bounty_id'],
        queryFn: getBounties,
        cacheTime: 5000
    });

    return (
        <>
            <div className={styles.header}>
            {isAuthenticated ? <h2>Welcome, user</h2> : <h2>Dashboard</h2>}
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            </div>

            <div className={styles.grid}>
                <Grid columns={4} gap={3} width="auto" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {data && data.map((bounty) => {
                        return (
                            <Box key={bounty.bounty_id} style={{ flex: '1 0 10% 10%', breakInside: 'avoid', margin: '28px' }}>
                                <BountyCard bountyData={bounty}/>
                            </Box>
                        )
                    })}
                </Grid>
            </div>

            <div className={styles.createBountyIcon}>
                <Link to="/create-bounty">
                    <div className={styles.plusIconWrapper}>
                        <PlusIcon height={32} width={32} color='white'/>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Dashboard;

// Dummy Data

/*

const data = {
    "bounty_id": 56,
    "repoLink": "https://github.com/user1/repo1",
    "issueDescription": "Fix issue #123",
    "isApproved": 0,
    "user_id": "user1",
    "bounty_amount": 50,
    "approved_claim_id": 4
};

*/