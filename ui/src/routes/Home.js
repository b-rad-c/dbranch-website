import Accordion from 'react-bootstrap/Accordion'
import { dBranchDiscord } from '../constants';


export default function About() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h1>What is dBranch?</h1>
            
            <p>dBranch.news is a DAO-based approach to decentralizing the news media using web3 technology. White paper will drop in a few days, in the meantime, a short summary. The idea is to break up the news into several branches. By decoupling each branch’s financial incentives, we can minimize pernicious aspects of the legacy media’s business model.</p>
            <p>As legacy media has been losing its trust and viewership, independent media has stepped up. It’s matured over the years but lacks an economic model with investigative researchers and field crews on the ground, sourcing information. Bits and pieces of these exist in the indy space, but it is too fragmented to realize its full potential. Centralization can fix the fragmentation but is self-defeating. Instead, dBranch will standardize it, enabling it to scale w/o centralization. The dBranch protocol will add cohesion to independent media and replace legacy media as the network effect kicks in.</p>
            <p>The dBranch DAO will maintain open source software and the protocol. It will be permissionless, use censorship resistant infrastructure, and it will have immutable versioned history. Anyone can participate in any branch as a freelancer, DAO or other. The vision is a diverse ecosystem with many participants experimenting with various governance and hierarchy models. </p>

            <h1>The Branches</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2>Audience</h2></Accordion.Header>
                    <Accordion.Body>
                        <p>Independent media is already demonstrating the crowd’s ability to shift the overton window. dBranch will magnify this effect by giving viewers not only the ability to fund journalists but also to fund studios and democratically control access. The audience will also be able to create funding pools, or bounties, to reward investigative researchers and/or reviewers to work on a specific topic.</p>
                        <p>Individuals may participate in one or more audience DAOs that enable people to pool their money and control its distribution. dBranch will maintain open source software that enables DAOs to easily create a customizable funding structure with voting rights for its participants. It could be as simple as pooling donations for a small group of otherwise independent journalists, or as complex as funding an entire ecosystem, ensuring a portion of the funds go to one or more organizations in each branch.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2>Contributors</h2></Accordion.Header>
                    <Accordion.Body>
                        <p>Journalists, anchors, analysts, etc. will all publish work as contributors, and by decorrelating their income from clicks, they can write how they want rather than how the algorithms want. Krystal and Saagar have demonstrated this with their show, Breaking Points.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h2>Investigative Research</h2></Accordion.Header>
                    <Accordion.Body>
                        <p>Investigative journalists are vital to the news but difficult to fund. Their work often takes weeks or months with little to show for it. Dollar for dollar, a quick article about an inflammatory tweet is profitable, but that doesn’t mean it’s valuable to the audience. </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h2>Review (academic & creative)</h2></Accordion.Header>
                    <Accordion.Body>
                        <p>dBranch will have an academic style of review, grading content on data, citations, logical reasoning, etc. Additionally, we’ll have creatives judge the content on subjective qualities like sensationalism, clickbait, and talking around the truth. Reviewer’s income will also not be tied to the click rate of published content which will open up their honesty.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h2>Studios, office & field crew</h2></Accordion.Header>
                    <Accordion.Body>
                        <p>DAOs will fund and control physical assets, such as studios, field crew equipment, and office space. It will function similarly to public studios, except the members of the DAOs will be able to vote on and control who has access.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header><h2>Curators</h2></Accordion.Header>
                    <Accordion.Body>
                        <p>Curators create the feeds, effectively the homepage of the decentralized news industry. Following the same funding model as the contributor branch, curators will not be forced to list content with the goal of retaining attention.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <h1 style={{marginTop: '1rem'}}>Progressive decentralization</h1>
            <p>Because it is necessary to have a hand in each branch to build a working product, the founding team of dBranch will create a DAO in each branch to seed the initial rollout. During development, the founding team will run the DAOs, but after that period, they will become fully community governed. Other DAOs may participate in any branch during development.</p>

            <h1>Technology</h1>
            <p>dBranch aims to be cross-chain, allowing DAOs from any ecosystem to participate, but the core layer will be built on Cardano. An important problem to solve will be making DeFi accessible beyond the crypto crowd. Many journalists do not want to get paid in crypto and many viewers do not want to pay in crypto. dBranch will look at various custodial services and on/off ramps to bridge this gap, but the core layer will be fully decentralized.</p>
            <p>While the tools exist to decentralize the funding of the news, dBranch requires decentralized infrastructure, such as file storage and audio/video streaming. There are projects working on these problems, but it’s important to keep in mind that these technologies are nascent. A <a href="https://moxie.org/2022/01/07/web3-first-impressions.html" rel="noreferrer" target="_blank">blog post</a> from Moxie Marlinspike sheds some light on the current realities of so-called ‘web3’. dBranch will do research on each services’ level of decentralization and be transparent about the stage of the technology. We believe the technology will mature over the coming years, but we can’t wait for them to get started. dBranch will need to learn how to build the plane while we are flying it.</p>
            
            <h1>Where are we now?</h1>
            <p>We’re in the one-guy-with-an-idea phase. This will take a passionate team with a diverse set of skills and limitless ambition. I have experience behind camera, in studio, and writing code. I am a jack of all trades but a master of none. If anything, I am a master of connecting the dots. If you are a dot and would like to contribute to a new paradigm, <a href={dBranchDiscord} rel="noreferrer" target="_blank">hop in our discord</a>!</p>
        </main>
    );
}