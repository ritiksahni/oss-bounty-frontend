import { Section, Strong, Text } from '@radix-ui/themes';

function HowItWorks() {
    return (
        <div>
            <h1>How it works</h1>

            <Section>
            <Text>
                <Strong>For Organisations</Strong>
                <h4>OSS Bounty is a platform for organisations to post bounties for open source projects allowing them to get the features they need faster.</h4>

                <Strong>For Developers</Strong>
                <h4>OSS Bounty is a platform for developers to get paid for working on open source projects. Developers can browse bounties and work on the ones they like and claim the bounty when they are done.</h4>
            </Text>
            </Section>
        </div>
    );
};

export default HowItWorks;
