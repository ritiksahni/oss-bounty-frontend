import styles from '../css/Dashboard.module.css';
import BountyCard from "../components/BountyCard";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Grid, Box } from "@radix-ui/themes";
import { PlusIcon } from '@radix-ui/react-icons';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';

const Dashboard = () => {    
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if(!user && !isAuthenticated){
                    const response = await axios.get(process.env.EXPRESS_SERVER_URL + "/api/auth/user", { withCredentials: true });
                    if(response.data.user !== null){ // If user is not logged in, server responds with { user: null } else { user: { ... } }
                        const userData = response.data.user[0];
                        userData.user_id = `github|` + userData.user_id;
                        setUser(userData);
                        setIsAuthenticated(true);
                    } else {
                        setRedirect(true);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);

    const getBounties = async () => {
        const res = await axios.get(process.env.EXPRESS_SERVER_URL + "/api/bounties/");
        return res.data;
    }
    
    const { isLoading, error, data } = useQuery({
        queryKey: ['bounty_id'],
        queryFn: getBounties,
        cacheTime: 5000
    });
    
    if (redirect) {
        window.open(`${process.env.EXPRESS_SERVER_URL}/api/auth/login`, "_self");
        return;
    }
    return (
        <>
            <div className={styles.header}>
            {isAuthenticated ? <h2>Welcome, {user.username}</h2> : <h2>Dashboard</h2>}
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            </div>

            <div className={styles.grid}>
                <Grid columns={4} gap={3} width="auto" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {Array.isArray(data) && data && data.map((bounty) => {
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