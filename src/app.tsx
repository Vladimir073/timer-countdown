import { SApp, SHeader } from './assets/styles/app.styles';
import Timer from './pages/Timer/Timer';
import CountDown from './pages/CountDown/CountDown';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
    return (
        <SApp>
            <Router>
                <SHeader>
                    <Header />
                </SHeader>
                <Routes>
                    <Route path='/timer' element={<Timer />} />
                    <Route path='/countdown' element={<CountDown />} />
                </Routes>
            </Router>
        </SApp>
    );
}

export default App;
