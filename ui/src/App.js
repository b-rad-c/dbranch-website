import { Outlet, Link } from "react-router-dom";
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import './App.css'


export default function App() {
  return (
    <Container fluid="sm">
      <h1 className="title">dBranch.news</h1>
      <Stack direction="horizontal" gap={4}>
        <Link to="/">Home</Link>
        <div className="vr" />
        <Link to="/contact">Contact</Link>
      </Stack>
      
      <Outlet />
    </Container>
  );
}