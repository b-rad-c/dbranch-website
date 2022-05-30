import { dBranchAPI, ArticleIndex, ArticleReaderModal, CardanoExplorerLink } from 'dbranch-core'
import { useEffect, useState } from 'react'
import { Spinner, Alert } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { dbranchAPIHost, ExternalLink } from '../constants'
import { BoxArrowUpRight } from 'react-bootstrap-icons'

const api = new dBranchAPI(dbranchAPIHost)

export default function ArticlesPage() {

    let [searchParams, setSearchParams] = useSearchParams()

    const [showError, setShowError] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [loading, setLoading ] = useState(true)

    const [articleIndex, setArticleIndex] = useState([])                                            // index of available articles
    const [showArticle, setShowArticle] = useState(false)                                           // whether or not to show an article
    const [loadedArticle, setLoadedArticle] = useState(null)                                        // full contents of the article to be displayed
    const [selectedArticleIndex, setSelectedArticleIndex] = useState(-1)                            // -1 means no article is selected, separate from `showArticle` to allow for ui transitions
    const selectedArticle = selectedArticleIndex >= 0 ? articleIndex.articles[selectedArticleIndex] : null   // index of selected article from `articleIndex`, setting this will load the article into `loadedArticle`
    
    const openArticle = (index) => { 
        console.log('opening article', index, articleIndex.articles[index].record.name)
        setSelectedArticleIndex(index)
        setSearchParams({article: articleIndex.articles[index].record.name})
        setLoading(true)
    }

    const closeArticle = () => { 
        setShowArticle(false)
        setSelectedArticleIndex(-1)
        setSearchParams({article: ''})
    }

    useEffect(() => { 
        console.log('loading index from: ' + dbranchAPIHost)
        api.getArticleIndex()
            .then((response) => {
                console.log('loaded index', response)
                setArticleIndex(response)
            }).catch((error) => {
                console.log(error)
                setErrMsg('Error loading articles, refresh browser to try again.')
                setShowError(true)
            }).finally(() => {
                setLoading(false)
            })
    
    }, []);

    useEffect(() => { 
        if(selectedArticle !== null) {

            api.getArticle(selectedArticle.record.name)
                .then((article) => {
                    setLoadedArticle(article)
                    setShowArticle(true) 
                }).catch((error) => {
                    console.log(error)
                    setErrMsg('Error loading article, refresh browser to try again.')
                    setShowError(true)
                }).finally(() => {
                    setLoading(false)
                })
        }
    
    }, [selectedArticle]);

return (
<main>
    <h1>Articles</h1>

    <Alert variant='danger' show={showError} onClose={() => setShowError(false)}>
        <Alert.Heading>We've got a problem</Alert.Heading>
        <p>{errMsg}</p>
    </Alert>
    
    <div className='content'>
        {showArticle && <ArticleReaderModal 
                            article={loadedArticle} 
                            show={showArticle} 
                            onHide={closeArticle}   
                            onExited={() => setLoadedArticle(null)}
                            >
                            {   
                                <span>
                                    <ExternalLink url={CardanoExplorerLink(selectedArticle.record.cardano_tx_hash)}>view on explorer</ExternalLink>
                                    &nbsp;<BoxArrowUpRight size={12}/>
                                </span>
                            }
                        </ArticleReaderModal>
        }
        
        <hr />

        {loading && <div className='text-center'><Spinner animation='border' /></div>}
        {!loading && <ArticleIndex gap={2} theme='bubble' onItemClick={openArticle} index={articleIndex}/>}

    </div>
    
</main>
);
}