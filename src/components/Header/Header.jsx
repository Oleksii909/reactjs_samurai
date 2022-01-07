import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://create-react-app.dev/img/logo.svg' />
        </header>
    );
}

export default Header;