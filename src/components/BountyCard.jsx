import styles from '../css/BountyCard.module.css';

const BountyCard = ({ bountyData }) => {
  return (
    <div className={styles.card}>
      <img
        src="https://placekitten.com/300/200"
        alt="Card"
        className={styles.cardImage}
      />
      
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{bountyData.repoLink}</h2>
        <h4 className={styles.cardAmt}>{bountyData.bounty_amount}</h4>
        <p className={styles.cardText}>
          {bountyData.issueDescription}
        </p>
      </div>
    </div>
  );
}

export default BountyCard;