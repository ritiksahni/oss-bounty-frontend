import { useParams } from "react-router-dom";

function AddClaimForm(){
    const { id } = useParams();
    return(
        <div>
            <h1>Add Claim Form</h1>

            <h3>This is a form for adding claims to bounty {id}</h3>
        </div>
    )
}

export default AddClaimForm;