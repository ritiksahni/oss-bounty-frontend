import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ClaimPage from './ClaimPage';

function ListClaims() {
  const { id } = useParams();
  const [selectedClaim, setSelectedClaim] = useState(null);

  async function fetchClaims() {
    const res = await axios.post(`${process.env.EXPRESS_SERVER_URL}/api/list-claims`, { bounty_id: id });
    return res.data;
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ['id'],
    queryFn: fetchClaims,
  });

  if(selectedClaim){
    return <ClaimPage claim={selectedClaim} />
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

      {Array.isArray(data) && (
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
              <h3 style={{ marginBottom: '8px' }}>User: {claim.claimer_id}</h3>
              <p style={{ color: '#555', overflow: 'hidden', textOverflow: 'ellipsis' }}>{claim.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListClaims;
