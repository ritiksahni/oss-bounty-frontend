import styles from '../css/BountyCard.module.css';
import { Card, Inset, Text, Link as RadixLink, Strong } from '@radix-ui/themes';
import { Link, useNavigate } from 'react-router-dom';

const BountyCard = ({ bountyData }) => {
  const navigate = useNavigate();

  const navigateBounty = () => {
    navigate(`/bounty/${bountyData.bounty_id}`);
  }

  return (
    <Card size="1" className={styles.cardComponent} onClick={navigateBounty}>
      <Inset clip="padding-box" side="top" pb="current">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt={bountyData.repoLink} className={styles.cardImage} />
      </Inset>

      <Text as="p" size="3">
        <RadixLink asChild><Link to={bountyData.repoLink}>{bountyData.repoLink}</Link></RadixLink>
        <br />
        <Strong>Amount</Strong>: ${bountyData.bounty_amount}
        <br />
        <Strong>Issue</Strong>: <span className={styles.issueDescription}>{bountyData.issueDescription}</span>
        <br />
      </Text>
    </Card>
  );
}

export default BountyCard;