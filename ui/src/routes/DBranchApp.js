import { create } from 'ipfs-http-client'
import { listDir, loadArticleFromIPFS, ArticleList, ArticleReaderModal } from 'dbranch-core'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Spinner, Button } from 'react-bootstrap'
//import * as CardanoWASM from '@emurgo/cardano-serialization-lib-browser'

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
    const [walletAddress, setWalletAddress] = useState(null)
    const [walletNetwork, setWalletNetwork] = useState(null)
    const [walletError, setWalletError] = useState(null)

    async function connectNami() {
        window.cardano.nami.enable()
            .then(async (api) => {
                const nami = await import('nami-wallet-api')

                const namiAPI = await nami.NamiWalletApi(
                    api,
                    'testnetICmp5nDzUVyCh7DErS7ZoYg6Dn8Dc1TK'
                )
                setWalletAPI(namiAPI)

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
                switch(network.id) {
                    case 0: setWalletNetwork('cardano testnet'); break
                    case 1: setWalletNetwork('cardano mainnet'); break
                    default: setWalletNetwork('unknown cardano network: ' + network.id + ') ' + network.network); break
                }
            }).catch((error) => {
                console.error(error)
                setWalletError('Error getting wallet network')
                setTimeout(() => { setWalletError(null) }, 5000)
            })

            walletAPI.getAddress()
                .then((address) => {
                    setWalletAddress(address)
                    console.log('address: ', address)
                }).catch(error => {
                    console.error(error)
                    setWalletError('Error getting wallet address')
                    setTimeout(() => { setWalletError(null) }, 5000)
                })
            
            walletAPI.getUtxos()
                .then((utxos) => {
                    console.log('utxos: ', utxos)
                }).catch(error => {
                    console.error(error)
                    setWalletError('Error getting utxos')
                    setTimeout(() => { setWalletError(null) }, 5000)
                })
            
            walletAPI.getUtxosHex()
                .then((utxosHex) => {
                    console.log('utxos hex: ', utxosHex)
                }).catch(error => {
                    console.error(error)
                    setWalletError('Error getting utxos hex')
                    setTimeout(() => { setWalletError(null) }, 5000)
                })
            
            walletAPI.getAssets()
                .then((assets) => {
                    console.log('assets: ', assets)
                }).catch(error => {
                    console.error(error)
                    setWalletError('Error getting assets')
                    setTimeout(() => { setWalletError(null) }, 5000)
                })
                window.cardano.getBalance()
                .then((balance) => {
                    console.log('balance: ', balance)
                }).catch(error => {
                    console.error(error)
                    setWalletError('Error getting balance')
                    setTimeout(() => { setWalletError(null) }, 5000)
                })
            console.log('walletAPI: ', walletAPI)
            console.log('cardano', window.cardano)
        }
    }, [walletAPI])

    const sendTransaction = async () => {
        console.log('sending transaction')
        try{
            let txId = await walletAPI.send({
                address: walletAddress,
                amount: .5,
                metadata: {
                    name: 'dbranch_intro.news',
                    loc: 'ipfs://QmeJ3aARqJrAKjnyAEc88TQS32GdxXmA8JmFauKKiHPiYi'
                },
                metadataLabel: '451'
            })

            console.log('txId: ', txId)

        }catch(error) {
            console.error(error)
            setWalletError(error.info)
            setTimeout(() => { setWalletError(null) }, 5000)
        }
        
        
    }


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
        {walletNetwork && <span>connected to: {walletNetwork}</span>}
        {walletError && <span className='text-danger'><br />{walletError}</span>}

        <br />
        <Button variant='primary' onClick={sendTransaction} disabled={walletAddress === null}>Send Tx</Button>
            
        <hr />

        {loadingArticles && <div className='text-center'><Spinner animation='border' /></div>}
        <ArticleList gap={2} theme='bubble' onItemClick={openArticle} articles={articles}/>
        
        <hr />

    </div>
    
</main>
);
}