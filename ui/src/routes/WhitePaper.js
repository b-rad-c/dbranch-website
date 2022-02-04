import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import * as constants from '../constants';


export default function WhitePaper() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <Container>
                <h1>White paper</h1>
                
                <Button className="btn-secondary" href={constants.dBranchWhitePaperPDF} target="_blank" rel="noreferrer">Read as PDF</Button>
                    <br/>
                <Button className="btn-secondary t-spacer-sm" href={constants.dBranchWhitePaperGDocs} target="_blank" rel="noreferrer">Comment on google docs</Button>
            
            </Container>
        </main>
    );
}