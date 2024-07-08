import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {AppRouter} from "app/providers/router";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', [theme], {})}>
            <div>
                <button onClick={toggleTheme}>{theme === Theme.DARK ? Theme.LIGHT : Theme.DARK}</button>
            </div>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter/>
        </div>
    );
};

export default App;