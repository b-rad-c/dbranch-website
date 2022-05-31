import * as constants from '../constants';
import { ExternalLink } from '../constants'

export default function Info() {
    return (
    <main>
        <div className='content narrow-content'>
            <h1>Info stuffs</h1>

            <h2>Media</h2>
            <p>
                ::&nbsp;<ExternalLink url={constants.medium}>medium</ExternalLink>
                <br />
                ::&nbsp;<ExternalLink url={constants.youTubePlaylist}>youtube</ExternalLink>
            </p>
            
            <h2>Technical</h2>
            <p>
                ::&nbsp;<ExternalLink url={constants.github}>Github</ExternalLink>
                <br />
                ::&nbsp;<ExternalLink url={constants.whitePaper}>White paper</ExternalLink>
            </p>

            <h2>Contact</h2>
            <p>
                ::&nbsp;<ExternalLink url={constants.twitter}>twitter</ExternalLink>
                <br />
                ::&nbsp;<ExternalLink url={constants.discord}>discord</ExternalLink>
                <br />
                ::&nbsp;<ExternalLink url={constants.emailList}>email list</ExternalLink>
                <br />
                ::&nbsp;<ExternalLink url={constants.volunteerForm}>help</ExternalLink>
                <br />
                ::&nbsp;<a href={'mailto:' + constants.emailAddress}>{constants.emailAddress}</a>
            </p>
        </div>
        
    </main>
    );
    }