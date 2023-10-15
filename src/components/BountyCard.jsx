import React from 'react';

const BountyCard = ({ data }) => {
  return (
    <div style={styles.card}>
      <img
        src="https://placekitten.com/300/200"
        alt="Card"
        style={styles.cardImage}
      />
      <div style={styles.cardContent}>
        <h2 style={styles.cardTitle}>{data.repoLink}</h2>
        <h4 style={styles.cardAmt}>{data.bounty_amount}</h4>
        <p style={styles.cardText}>
          {data.issueDescription}
        </p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    margin: 'auto',
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginBottom: '20px',
  },
  cardImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '20px',
  },
  cardTitle: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
  cardAmt: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default BountyCard;