import { Outlet, NavLink } from "react-router-dom";
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'


export default function App() {

  return (
    <Container fluid="sm">

      <h1 className="title">dBranch.news</h1>

      <Stack className="justify-content-center" direction="horizontal" gap={4} >
        <NavLink exact="true" className="navLink" to="/">Home</NavLink>
          <div className="vr" />
        <NavLink className="navLink" to="/contact">Contact</NavLink>
      </Stack>
      
      <Outlet />
    </Container>
  );
}