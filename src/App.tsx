import { CSSProperties } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieView from './pages/MovieView';
import { Routes, Route } from 'react-router-dom';
import SearchMovie from './pages/SearchMovie';

function App() {

  const appStyle: CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'

  }

  return (
    <div style={appStyle}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:id' element={<MovieView />} />
          <Route path='/search/:name' element={<SearchMovie />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
