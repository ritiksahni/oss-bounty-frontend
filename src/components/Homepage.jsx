import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#f2f2f2', padding: '2rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    Incentivize Open-Source Contributions
                </h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
                    Create bounties for open-source contributions and reward contributors
                    for their work.
                </p>
                <Link
                    to="/create-bounty"
                    style={{
                        backgroundColor: '#0070f3',
                        color: '#fff',
                        padding: '1rem 2rem',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontSize: '1.5rem',
                    }}
                >
                    Create a Bounty
                </Link>
            </div>
        </div>
    );
};

export default Homepage;