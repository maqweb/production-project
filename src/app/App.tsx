import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {About} from "pages/About";
import {Main} from "pages/Main";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', [theme], {})}>
            <div>
                <button onClick={toggleTheme}>{theme === Theme.DARK ? Theme.LIGHT : Theme.DARK}</button>
            </div>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/'} element={<Main/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;