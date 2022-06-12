import { dBranchAPI, ArticleReader, CardanoExplorerLink } from 'dbranch-core'
import { useEffect, useState } from 'react'
import { Spinner, Alert } from 'react-bootstrap'
import { useParams, useLocation } from 'react-router-dom'
import { dbranchAPIHost, ExternalLink } from '../constants'
import { BoxArrowUpRight } from 'react-bootstrap-icons'

export default function ArticlePage() {

    const api = new dBranchAPI(dbranchAPIHost)

    let params = useParams()
    let location = useLocation()

    const [loading, setLoading ] = useState(true)
    const [article, setArticle] = useState(null)
    const [explorerURL, setExplorerURL] = useState('')

    const [showError, setShowError] = useState(false)
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => { 
        console.log('loading article: ' + params.cid)
        api.getArticleByCid(params.cid, true)
            .then((article) => {
                article.record = location.state.record
                setArticle(article)
                setExplorerURL(CardanoExplorerLink(article.record.cardano_tx_hash))
            }).catch((error) => {
                console.log(error)
                setErrMsg('Error loading article, refresh browser to try again.')
                setShowError(true)
            }).finally(() => {
                setLoading(false)
            })
    // eslint-disable-next-line
    }, [params.cid])

return (
<div>

    <Alert variant='danger' show={showError} onClose={() => setShowError(false)}>
        <Alert.Heading>We've got a problem</Alert.Heading>
        <p>{errMsg}</p>
    </Alert>

    <div style={{width: '80%', margin: '0 auto'}}>
        {loading && <div className='text-center'><Spinner animation='border' /></div>}
        {article && <ArticleReader article={article}>
                        { <span><ExternalLink url={explorerURL}>view on explorer</ExternalLink> <BoxArrowUpRight size={12}/></span> }
                    </ArticleReader>
        }
    </div>
</div>
);
}