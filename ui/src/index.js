import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Branches from './routes/Branches';
import Content from './routes/Content';
import Home from './routes/Home';
import Info from './routes/Info';


render(
  <div className='app position-absolute top-0 start-0 bg-light bg-gradient'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='branches' element={<Branches />} />
          <Route path='content' element={<Content />} />
          <Route path='info' element={<Info />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>Page not found!</p>
              </main>
            }
          />
        </Route>
      </Routes>

    </BrowserRouter>
  </div>,
  document.getElementById('root')
);