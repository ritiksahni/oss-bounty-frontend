import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

function ListClaims() {
    const { id } = useParams();

    async function fetchClaims() {
        const res = await axios.post(`${process.env.EXPRESS_SERVER_URL}/api/list-claims`, { "bounty_id": id });
        return res.data;
    }
    const { isLoading, error, data } = useQuery({
        queryKey: ['id'],
        queryFn: fetchClaims,
    });

    return(
        <div>
            <h2>This page will have all the claims for bounty {id}</h2>

            {isLoading && <p>Loading...</p>}

            {error && <p>Error: {error.status}</p>}

            {Array.isArray(data) && data.map((claim) => (
                <div key={claim.id}>
                    <h3>{claim.title}</h3>
                    <p>{claim.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ListClaims;