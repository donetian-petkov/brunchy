import styles from './Header.module.sass'

export const Header = () => {

    return (
        <header className={styles.header}>
            <h1>BRUNCHY</h1>
            <div className={styles.headerMenu}>
                <a href="https://dreamshot.bg/" target="_blank"><h2>About</h2></a>
                <a href="https://dreamshot.bg/" target="_blank"><h2>Call Us</h2></a>
                <img src='/images/delivery.png' alt="delivery"/>
            </div>
        </header>
    )
}
