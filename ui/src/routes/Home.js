import Accordion from 'react-bootstrap/Accordion'

export default function About() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h1>What is dBranch?</h1>
            
            <p>dBranch.news is a DAO-based approach to decentralizing the news media using web3 technology. White paper will drop in a few days, in the meantime, a short summary. The idea is to break up the news into several branches. By decoupling each branch’s financial incentives, we can minimize pernicious aspects of the legacy media’s business model.</p>
            <p>As legacy media has been losing its trust and viewership, independent media has stepped up. It’s matured over the years but lacks an economic model with investigative researchers and field crews on the ground, sourcing information. Bits and pieces of these exist in the indy space, but it is too fragmented to realize its full potential. Centralization can fix the fragmentation but is self-defeating. Instead, dBranch will standardize it, enabling it to scale w/o centralization. The dBranch protocol will add cohesion to independent media and replace legacy media as the network effect kicks in.</p>
            <p>The dBranch DAO will maintain open source software and the protocol. It will be permissionless, use censorship resistant infrastructure, and it will have immutable versioned history. Anyone can participate in any branch as a freelancer, DAO or other. The vision is a diverse ecosystem with many participants experimenting with various governance and hierarchy models. </p>

            <h1>The Branches</h1>
            <Accordion variant="primary">
                <Accordion.Item eventKey="0" variant="primary">
                    <Accordion.Header variant="primary">Audience</Accordion.Header>
                    <Accordion.Body variant="primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Contributors</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Investigative Research</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Review (academic & creative)</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Studios, office & field crew</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Curators</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
        </main>
    );
}