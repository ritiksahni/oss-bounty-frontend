import axios from 'axios';
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function BountyPage() {
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
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            
            {data && (
                <div>
                    <h1>Bounty Details for bounty ID: {id}</h1>
                    <p>{data.issueDescription}</p>
                    <p>{data.bounty_amount}</p>
                    <a href={data.repoLink}>{data.repoLink}</a>
                </div>
            
            )}
        </div>
    )
}
export default BountyPage;