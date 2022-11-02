import styles from './index.less'
export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerTop}>
            <span>Powered by Way Network</span>
        </div>
        <div className={styles.footerBot}>
            <a target="_blank" href="https://send-finance.gitbook.io/untitled/">Gitbook</a>
            <a target="_blank" href="https://github.com/Send-Labs" style={{marginLeft: '24px'}}>Github</a>
            <a target="_blank" href="https://twitter.com/Send_Finance" style={{marginLeft: '24px'}}>Twitter</a>
            {/* <a style={{marginLeft: '24px'}}>Discord</a>
            <a style={{marginLeft: '24px'}}>Medium</a> */}
            <a target="_blank" href="https://t.me/Send_Finance" style={{marginLeft: '24px'}}>Telegram</a>
            {/* <a style={{marginLeft: '24px'}}>Youtube</a> */}
        </div>
    </footer>
  )
}
