import {btn,test} from './Button.module.scss'
export default function Index({children}) {
    return <button className={btn}>
        {children}
        <span className={test}>test</span>
    </button>
}
