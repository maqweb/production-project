import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {AboutLazy} from "./pages/About/About.lazy";
import {MainLazy} from "./pages/Main/Main.lazy";
import {Theme} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={`app ${theme}`}>
            <div>
                <button onClick={toggleTheme}>{theme === Theme.DARK ? Theme.LIGHT : Theme.DARK}</button>
            </div>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutLazy/>}/>
                    <Route path={'/'} element={<MainLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;