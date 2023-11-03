import { useParams } from "react-router-dom"

function ListClaims() {
    const { id } = useParams();
    return(
        <div>
            <h2>This page will have all the claims for bounty {id}</h2>
        </div>
    )
}

export default ListClaims;