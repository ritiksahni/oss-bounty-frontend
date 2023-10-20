import styles from '../css/BountyCard.module.css';
import { Card, Inset, Text, Link as RadixLink, Strong } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

const BountyCard = ({ bountyData }) => {
  return (
    <Card size="3" className={styles.cardComponent}>
      <Inset clip="padding-box" side="top" pb="current">
        <Link to={bountyData.repoLink} target="_blank">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt={bountyData.repoLink} className={styles.cardImage} />
        </Link>
      </Inset>

      <Text as="p" size="3">
        <RadixLink asChild><Link to={bountyData.repoLink}>{bountyData.repoLink}</Link></RadixLink>
        <br />
        <Strong>Amount</Strong>: {bountyData.bounty_amount}
        <br />
        <Strong>Issue</Strong>: <span className={styles.issueDescription}>{bountyData.issueDescription}</span>
        <br />
      </Text>
    </Card>
  );
}

export default BountyCard;