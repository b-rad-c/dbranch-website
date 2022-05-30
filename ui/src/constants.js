
export const discord = 'https://discord.gg/UJ7zraNA9R'
export const emailAddress = 'contact@dbranch.news'
export const emailList = 'https://forms.gle/mgGM7CR93e3Dbvh76'
export const github = 'https://github.com/b-rad-c?tab=repositories&q=dbranch&type=&language=&sort=name'
export const medium = 'https://medium.com/@dBranchDAO'
export const twitter = 'https://twitter.com/dBranchDAO'
export const volunteerForm = 'https://forms.gle/Ui2YFUPNQ4dBhiWx7'
export const website = 'http://dbranch.news'
export const whitePaper = '/dBranch-white-paper-v1.pdf'
export const youTubePlaylist = 'https://youtube.com/playlist?list=PLsZItVIVXWEEQHTlYKjmn7FfzqNzxfZUU'

export function ExternalLink(props) { return <a href={props.url} rel="noreferrer" target="_blank">{props.children}</a>; }

let _dbranchAPIHost
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    _dbranchAPIHost = 'http://localhost:1323'
} else {
    _dbranchAPIHost = 'https://ipfs.dBranch.news:1323'
}

export const dbranchAPIHost = _dbranchAPIHost