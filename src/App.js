import './app.css';

import CV from './components/cvpage/Cv';
import Nav from './components/nav/Nav';
import Intro from './components/intro/Intro';
import Form from './components/formpage/Form';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>

        <Routes>
          <Route exact path='/' element={<><Nav /><Intro /><Form /><Footer /></>} />
          <Route exact path='/components/cvpage/Cv.js' element={<CV />} />
        </Routes>

      </Router>
    </div >
  )
}

export default App