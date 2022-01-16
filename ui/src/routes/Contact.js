import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import * as URLs from '../constants';
import './Contact.scss'

export default function About() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h1>Contact</h1>
            <Container>
                <h3>dBranch</h3>
                <Stack className="justify-content-center" direction="horizontal" gap={4}>
                    <a href={URLs.dBranchTwitter} rel="noreferrer" target="_blank">twitter</a>
                        <div className="vr" />
                    <a href={URLs.dBranchGettr} rel="noreferrer" target="_blank">getter</a>
                        <div className="vr" />
                    <a href={URLs.dBranchDiscord} rel="noreferrer" target="_blank">discord</a>
                        <div className="vr" />
                    <a href={URLs.dBranchEmailList} rel="noreferrer" target="_blank">email list</a>
                        <div className="vr" />
                    <a href={URLs.dBranchVolunteerForm} rel="noreferrer" target="_blank">volunteer signup</a>
                </Stack>

                <h3>Brad Corlett (founder)</h3>
                <Stack className="justify-content-center" direction="horizontal" gap={4}>
                    <a href={URLs.personalTwitter} rel="noreferrer" target="_blank">twitter</a>
                        <div className="vr" />
                    <a href={URLs.personalGettr} rel="noreferrer" target="_blank">gettr</a>
                        <div className="vr" />
                    <a href={URLs.personalLinkedIn} rel="noreferrer" target="_blank">linkedin</a>
                </Stack>

                <h3>Podcast</h3>
                <Stack className="justify-content-center" direction="horizontal" gap={4}>
                    <a href={URLs.podcastTwitter} rel="noreferrer" target="_blank">twitter</a>
                    <div className="vr" />
                    <a href={URLs.podcastYouTube} rel="noreferrer" target="_blank">youtube</a>
                </Stack>
            </Container>
            
        </main>
    );
}