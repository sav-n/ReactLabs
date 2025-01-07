import 'react';
import { Routes, Route } from 'react-router-dom';
import useCustomHistory from './hooks/useCustomHistory';
import './App.css';
import Refills from './components/Refills';
import Markets from './components/Markets';
import Restaurants from './components/Restaurants';
import Сinemas from './components/Сinemas';

const App = () => {
    const { navigateTo, goBack, goForward } = useCustomHistory();

    return (
        <div className="container">
            <nav>
                <button onClick={() => navigateTo('/refills')}>Авто заправки</button>
                <button onClick={() => navigateTo('/markets')}>Продуктові маркети</button>
                <button onClick={() => navigateTo('/restaurants')}>Ресторани</button>
                <button onClick={() => navigateTo('/cinemas')}>Кінотеатри</button>
            </nav>

            <div className="navigation-buttons">
                <button onClick={goBack}>Назад</button>
                <button onClick={goForward}>Вперед</button>
            </div>

            <Routes>
                <Route path="/refills" element={<Refills />} />
                <Route path="/markets" element={<Markets />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/cinemas" element={<Сinemas />} />
            </Routes>
        </div>
    );
};

export default App;
