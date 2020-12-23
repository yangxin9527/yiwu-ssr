import styles from './Button.module.scss'
export default function Index({children}) {
    return <button className={styles.btn}>
        {children}
        <span className={styles.test}>test</span>
        <span className='test222'>test</span>
    </button>
}
