import { Outlet, NavLink } from "react-router-dom";
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import './App.scss'



export default function App() {

  return (
    <Container fluid="sm">
      <Alert variant="primary">testing alerty!</Alert>

      <h1 className="title">dBranch.news</h1>

      <Stack className="justify-content-center" direction="horizontal" gap={4} >
        <NavLink exact className="navLink" to="/">Home</NavLink>
        <div className="vr" />
        <NavLink className="navLink" to="/contact">Contact</NavLink>
      </Stack>
      
      <Outlet />
    </Container>
  );
}