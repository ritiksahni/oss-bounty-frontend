import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ClaimPage from './ClaimPage';

function ListClaims() {
  const { id } = useParams();
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [claimers, setClaimers] = useState({});

  async function fetchClaims() {
    const res = await axios.post(`${process.env.EXPRESS_SERVER_URL}/api/list-claims`, { bounty_id: id });
    return res.data;
  }

  async function fetchUsername(claimerId) {
    const res = await axios.post(`${process.env.EXPRESS_SERVER_URL}/api/get-claim-creator`, {
      claimer_id: claimerId,
    });
    return res.data.username;
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ['id'],
    queryFn: fetchClaims,
  });

  useEffect(() => {
    if (Array.isArray(data)) {
      data.forEach(async (claim) => {
        const username = await fetchUsername(claim.claimer_id);
        setClaimers((prevClaimers) => ({
          ...prevClaimers,
          [claim.claimer_id]: username,
        }));
      });
    }
  }, [data]);

  if (selectedClaim) {
    return <ClaimPage claim={selectedClaim} creatorUsername={claimers[selectedClaim.claimer_id]} />;
  }


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Claims: {id}</h2>

      {isLoading && <p>Loading...</p>}

      {error && <p>Error: {error.status}</p>}

      {Array.isArray(data) && data.length !== 0 ? (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            width: '100%',
          }}
        >
          {data.map((claim) => (
            <li
              key={claim.id}
              style={{
                marginBottom: '20px',
                background: '#f0f0f0',
                borderRadius: '8px',
                padding: '16px',
                cursor: 'pointer',
                transition: 'background 0.3s',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
              onClick={() => {
                setSelectedClaim(claim);
              }}
            >
              <h3 style={{ marginBottom: '8px' }}>Claim Creator: {claimers[claim.claimer_id]}</h3>
              <p style={{ color: '#555', overflow: 'hidden', textOverflow: 'ellipsis' }}>{claim.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No claims yet.</p>
      )}
    </div>
  );
}

export default ListClaims;
