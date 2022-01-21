import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import * as constants from '../constants';
import { URL } from '../constants'

const stackGap = 3

export default function About() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h1>Contact</h1>
            <Container>
                <h3>dBranch</h3>
                <Stack className="justify-content-center" direction="horizontal" gap={stackGap}>
                    <URL url={constants.dBranchTwitter} text="twitter"/>
                        <div className="vr" />
                    <URL url={constants.dBranchGettr} text="getter"/>
                        <div className="vr" />
                    <URL url={constants.dBranchDiscord} text="discord"/>
                        <div className="vr" />
                    <URL url={constants.dBranchEmailList} text="email list"/>
                        <div className="vr" />
                    <URL url={constants.dBranchVolunteerForm} text="help"/>
                </Stack>

                <h3>Brad Corlett (founder)</h3>
                <Stack className="justify-content-center" direction="horizontal" gap={stackGap}>
                    <URL url={constants.personalTwitter} text="twitter"/>
                        <div className="vr" />
                    <URL url={constants.personalGettr} text="gettr"/>
                        <div className="vr" />
                    <URL url={constants.personalLinkedIn} text="linkedin"/>
                </Stack>

                <h3>Podcast</h3>
                <Stack className="justify-content-center" direction="horizontal" gap={stackGap}>
                    <URL url={constants.podcastTwitter} text="twitter"/>
                    <div className="vr" />
                    <URL url={constants.podcastYouTube} text="youtube"/>
                </Stack>
            </Container>
            
        </main>
    );
}