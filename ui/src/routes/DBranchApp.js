import { create } from 'ipfs-http-client'
import { listDir, loadArticleFromIPFS, ArticleList, ArticleReaderModal } from 'dbranch-core'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ipfs = create('https://ipfs.dBranch.news')
const curatedPrefix = '/dBranch/curated'

export default function DBranchApp() {

    let [searchParams, setSearchParams] = useSearchParams()

    const [articleNames, setArticleNames] = useState([])
    const [articles, setArticles] = useState([])
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
            })
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