import { Outlet, useNavigate, NavLink } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'

export default function App() {
  let navigate = useNavigate()

  return (
    <Container fluid='md'>
      <div className='bubble' style={{marginTop: '1rem'}}>
        
        <h1 className='title' onClick={() => navigate('/')}>dBranch.news</h1>

        <h1 className='subtitle' onClick={() => navigate('/')}>a decentralized marketplace for journalism</h1>

        <Stack className='justify-content-center' direction='horizontal' gap={3} >
          <NavLink exact='true' className='navLink' to='/articles'>Articles</NavLink>
            <span className='navLink'>::</span>
          <NavLink className='navLink' to='/info'>Info</NavLink>
        </Stack>
        
      </div>
      
      <Outlet />
    </Container>
  );
}