import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import * as constants from '../constants';
import { ExternalLink } from '../constants'

const stackGap = 3

export default function About() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <Container>
                <h3>dBranch</h3>
                <Stack className="justify-content-center" direction="horizontal" gap={stackGap}>
                    <ExternalLink url={constants.dBranchTwitter}>twitter</ExternalLink>
                        <div className="vr" />
                    <ExternalLink url={constants.dBranchGettr}>getter</ExternalLink>
                        <div className="vr" />
                    <ExternalLink url={constants.dBranchDiscord}>discord</ExternalLink>
                        <div className="vr" />
                    <ExternalLink url={constants.dBranchEmailList}>email list</ExternalLink>
                        <div className="vr" />
                    <ExternalLink url={constants.dBranchVolunteerForm}>help</ExternalLink>
                </Stack>

                <h3 className='t-spacer-lg'>Brad Corlett (founder)</h3>
                <Stack className="justify-content-center" direction="horizontal" gap={stackGap}>
                    <ExternalLink url={constants.personalTwitter}>twitter</ExternalLink>
                        <div className="vr" />
                    <ExternalLink url={constants.personalGettr}>gettr</ExternalLink>
                        <div className="vr" />
                    <ExternalLink url={constants.personalLinkedIn}>linkedin</ExternalLink>
                </Stack>

                <h3 className='t-spacer-lg'>Podcast</h3>
                <Stack className="justify-content-center" direction="horizontal" gap={stackGap}>
                    <ExternalLink url={constants.podcastTwitter}>twitter</ExternalLink>
                        <div className="vr" />
                    <ExternalLink url={constants.podcastYouTube}>youtube</ExternalLink>
                </Stack>
            </Container>
            
        </main>
    );
}