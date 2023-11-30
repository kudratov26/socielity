import styles from './Button.module.css'
export const Button = ({ type, children }) => {
    return (
        <div>
            <button className={styles[type]}>{children}</button>
        </div>
    )
}
