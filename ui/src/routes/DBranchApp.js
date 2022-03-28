import { create } from 'ipfs-http-client'
import { listDir, loadArticleFromIPFS, ArticleList, ArticleReaderModal } from 'dbranch-core'
import { useEffect, useState } from 'react';

const ipfs = create('https://ipfs.dBranch.news')
const curatedPrefix = '/dBranch/curated'

export default function DBranchApp() {

    const [articleNames, setArticleNames] = useState([])
    const [articles, setArticles] = useState([])
    const [selectedIndex, setSelectedIndex] = useState(-1)  // -1 means no article is selected
    const selectedArticle = selectedIndex >= 0 ? articles[selectedIndex] : null
    const [showArticle, setShowArticle] = useState(false)

    const openArticle = (index) => { setSelectedIndex(index); setShowArticle(true) }
    const closeArticle = () => setShowArticle(false)

    useEffect(() => { 
        listDir(ipfs, curatedPrefix)
            .then((result) => {
                console.log('article listing', result)
                setArticleNames(result)
            }).catch((error) => { 
                console.error(error) 
            })
    }, []);

    useEffect(() => { 
        console.log('fetching articles')
        let fetches = []
        for (const name of articleNames) {
            const path = curatedPrefix + '/' + name
            console.log('fetching: ', path)
            fetches.push(loadArticleFromIPFS(ipfs, path))
        }

        Promise.all(fetches)
            .then((result) => { setArticles(result) })
            .catch((error) => { console.error(error) })
        
    }, [articleNames]);

return (
<main>
    <h1>dBranch app</h1>
    
    <div className='content'>
        {showArticle && <ArticleReaderModal 
                            article={selectedArticle} 
                            show={showArticle} 
                            closeArticle={closeArticle}   
                            />}
        <ArticleList gap={2} theme='bubble' onItemClick={openArticle} articles={articles}/>

        <hr />

    </div>
    
</main>
);
}