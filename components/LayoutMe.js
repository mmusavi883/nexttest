import styles from './layout.module.css';

const LayoutMe = ({children})=>{
    return <div className={styles.text}>{children}</div>;
}

export default LayoutMe;