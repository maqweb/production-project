import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {useTheme} from "app/providers/ThemeProvider";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames(cls.Navbar, [className], {})}>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink}>Главная</AppLink>
                <AppLink to={'/about'}>О сайте</AppLink>
            </div>
            <div>
                <button onClick={toggleTheme}>{theme === Theme.DARK ? Theme.LIGHT : Theme.DARK}</button>
            </div>
        </div>
    );
};


