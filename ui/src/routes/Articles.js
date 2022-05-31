import { dBranchAPI, ArticleIndex  } from 'dbranch-core'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { Spinner, Alert } from 'react-bootstrap'
import { dbranchAPIHost } from '../constants'

const api = new dBranchAPI(dbranchAPIHost)

export default function ArticlesPage() {
    
    let navigate = useNavigate()
    let location = useLocation()
    const isArticlePage = location.pathname.startsWith('/articles/')
    const isIndexPage = !isArticlePage

    const [showError, setShowError] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [loading, setLoading ] = useState(true)

    const [articleIndex, setArticleIndex] = useState(null)
    const showArticleIndex = articleIndex !== null
    
    const navigateToArticle = (name) => { 
        const url = `/articles/${name}`
        console.log('navigating to article', url)
        navigate(url)
    }

    useEffect(() => { 
        console.log('loading index from: ' + dbranchAPIHost)
        api.getArticleIndex()
            .then((index) => {
                console.log('loaded index')
                setArticleIndex(index)
            }).catch((error) => {
                console.log(error)
                setErrMsg('Error loading articles, refresh browser to try again.')
                setShowError(true)
            }).finally(() => {
                setLoading(false)
            })
    
    }, []);


return (
<main>

    <Alert variant='danger' show={showError} onClose={() => setShowError(false)}>
        <Alert.Heading>We've got a problem</Alert.Heading>
        <p>{errMsg}</p>
    </Alert>

    {
        isIndexPage &&
        <div>
            <h1>Articles</h1>

            <div className='content narrow-content'>
                {loading && <div className='text-center'><Spinner animation='border' /></div>}
                {showArticleIndex && <ArticleIndex gap={2} theme='bubble' onItemClick={navigateToArticle} index={articleIndex}/>}
            </div>
        </div>
    }
    
    { isArticlePage && <Outlet />}
    
</main>
);
}