import { dBranchAPI, ArticleReader, CardanoExplorerLink } from 'dbranch-core'
import { useEffect, useState } from 'react'
import { Spinner, Alert } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { dbranchAPIHost, ExternalLink } from '../constants'
import { BoxArrowUpRight } from 'react-bootstrap-icons'

const api = new dBranchAPI(dbranchAPIHost)

export default function ArticlePage() {

    let params = useParams()

    const [loading, setLoading ] = useState(true)
    const [article, setArticle] = useState(null)
    const [explorerURL, setExplorerURL] = useState('')

    const [showError, setShowError] = useState(false)
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => { 
        api.getArticle(params.articleName)
            .then((article) => {
                setArticle(article)
                setExplorerURL(CardanoExplorerLink(article.record.cardano_tx_hash))
            }).catch((error) => {
                console.log(error)
                setErrMsg('Error loading article, refresh browser to try again.')
                setShowError(true)
            }).finally(() => {
                setLoading(false)
            })
    
    }, [params.articleName])

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