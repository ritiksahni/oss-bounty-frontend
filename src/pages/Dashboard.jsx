import BountyCard from "../components/BountyCard";
import axios from "axios";
import { useQuery } from '@tanstack/react-query';

const Dashboard = () => {

    const getBounties = async () => {
        const res = await axios.get(process.env.EXPRESS_SERVER_URL + "/api/bounties/");
        return res.data;
    }

    const { isLoading, error, data } = useQuery({
        queryKey: ['bounty_id'],
        queryFn: getBounties
    })

    return (
        <>
            <h1>Dashboard</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            <div>
                {data && data.map((bounty) => {
                    return (
                        <BountyCard bountyData={bounty} />
                    )
                })}
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