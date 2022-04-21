import { create } from 'ipfs-http-client'
import { loadFileFromIPFS, ArticleIndex, ArticleReaderModal, loadArticleFromIPFS, CardanoExplorerLink } from 'dbranch-core'
import { useEffect, useState } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { ipfsHost, ExternalLink } from '../constants';

const ipfs = create(ipfsHost)
const curatedPrefix = '/dBranch/curated'

export default function DBranchApp() {

    let [searchParams, setSearchParams] = useSearchParams()

    const [showError, setShowError] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [loading, setLoading ] = useState(true)

    const [articleIndex, setArticleIndex] = useState([])
    const [showArticle, setShowArticle] = useState(false)
    const [articleContents, setArticleContents] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(-1)  // -1 means no article is selected
    const selectedArticle = selectedIndex >= 0 ? articleIndex[selectedIndex] : null
    
    const openArticle = (index) => { 
        setSelectedIndex(index)
        setSearchParams({article: articleIndex[index].name})
        setLoading(true)
    }

    const closeArticle = () => { 
        setShowArticle(false)
        setSelectedIndex(-1)
        setSearchParams({article: ''}) 
    }

    useEffect(() => { 
        console.log('loading index from: ' + ipfsHost)
        loadFileFromIPFS(ipfs, curatedPrefix + '/index.json')
            .then((response) => {
                setArticleIndex(JSON.parse(response).items)
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
            loadArticleFromIPFS(ipfs, curatedPrefix + '/' + selectedArticle.name)
                .then((article) => {
                    setArticleContents(article)
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
    <h1>dBranch app</h1>

    <Alert variant='danger' show={showError} onClose={() => setShowError(false)}>
        <Alert.Heading>We've got a problem</Alert.Heading>
        <p>{errMsg}</p>
    </Alert>
    
    
    <div className='content'>
        {showArticle && <ArticleReaderModal 
                            article={articleContents} 
                            show={showArticle} 
                            onHide={closeArticle}   
                            onExited={() => setArticleContents(null)}
                            >
                            {selectedArticle.transaction_id && <ExternalLink url={CardanoExplorerLink(selectedArticle.transaction_id)}>view on explorer</ExternalLink>}
                        </ArticleReaderModal>
        }
        
        <hr />

        {loading && <div className='text-center'><Spinner animation='border' /></div>}
        {!loading && <ArticleIndex gap={2} theme='bubble' onItemClick={openArticle} index={articleIndex}/>}

    </div>
    
</main>
);
}