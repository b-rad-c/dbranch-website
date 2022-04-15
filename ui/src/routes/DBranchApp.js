import { create } from 'ipfs-http-client'
import { listDir, loadArticleFromIPFS, ArticleList, ArticleReaderModal } from 'dbranch-core'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Spinner, Button } from 'react-bootstrap'

const ipfs = create('https://ipfs.dBranch.news')
const curatedPrefix = '/dBranch/curated'

export default function DBranchApp() {

    let [searchParams, setSearchParams] = useSearchParams()

    const [articleNames, setArticleNames] = useState([])
    const [articles, setArticles] = useState([])
    const [loadingArticles, setLoadingArticles] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(-1)  // -1 means no article is selected
    const selectedArticle = selectedIndex >= 0 ? articles[selectedIndex] : null
    const [showArticle, setShowArticle] = useState(false)

    const openArticle = (index) => { 
        setSelectedIndex(index)
        setShowArticle(true) 
        setSearchParams({article: articleNames[index]})
    }
    const closeArticle = () => { setShowArticle(false); setSearchParams({article: ''}) }

    useEffect(() => { 
        listDir(ipfs, curatedPrefix)
            .then((result) => {
                setArticleNames(result)
            }).catch((error) => { 
                console.error(error) 
            }).finally(() => { setLoadingArticles(false) })
    }, []);

    useEffect(() => { 
        if(articleNames.length > 0) {
        let fetches = []
        for (const name of articleNames) {
            const path = curatedPrefix + '/' + name
            console.log('fetching: ', path)
            fetches.push(loadArticleFromIPFS(ipfs, path))
        }

        Promise.all(fetches)
            .then((result) => { 
                setArticles(result) 
                const query = searchParams.get('article')
                const queryIndex = articleNames.indexOf(query)
                if(query !== null) {
                    
                    if(queryIndex === -1) {
                        setSearchParams({article: ''})
                    }else{
                        openArticle(articleNames.indexOf(query))
                    }
                }
            })
            .catch((error) => { console.error(error) })
        }
    
    // eslint-disable-next-line
    }, [articleNames]);

    //
    // wallet tests
    //

    const [walletAPI, setWalletAPI] = useState(null)
    const [walletNetwork, setWalletNetwork] = useState(null)
    const [walletError, setWalletError] = useState(null)

    const connectNami = () => {
        window.cardano.nami.enable()
            .then((api) => {
                console.log(api)
                setWalletAPI(api)
            }).catch((error) => { 
                console.error(error) 
                if (error.code === -3) {
                    setWalletError('Wallet connection refused')
                }else{
                    setWalletError('Wallet connection failed')
                }
                setTimeout(() => { setWalletError(null) }, 5000)
            })
    }

    useEffect(() => {
        if(walletAPI !== null) {
            walletAPI.getNetworkId()
            .then((network) => {
                switch(network) {
                    case 0: setWalletNetwork('cardano testnet'); break
                    case 1: setWalletNetwork('cardano mainnet'); break
                    default: setWalletNetwork('unknown cardano network: ' + network); break
                }
            }).catch((error) => {
                console.error(error)
                setWalletError('Error getting wallet network')
                setTimeout(() => { setWalletError(null) }, 5000)
            })
        }
    }, [walletAPI])


return (
<main>
    <h1>dBranch app</h1>
    
    <div className='content'>
        {showArticle && <ArticleReaderModal 
                            article={selectedArticle} 
                            show={showArticle} 
                            closeArticle={closeArticle}   
                            />}

        <Button variant='primary' onClick={connectNami} disabled={walletAPI !== null}>Connect Nami</Button>
        &emsp;
        {walletError && <span className='text-danger'>{walletError}</span>}
        {walletNetwork && <span>connected to: {walletNetwork}</span>}
            
        <hr />

        {loadingArticles && <div className='text-center'><Spinner animation='border' /></div>}
        <ArticleList gap={2} theme='bubble' onItemClick={openArticle} articles={articles}/>
        
        <hr />

    </div>
    
</main>
);
}