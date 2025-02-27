import styles from './styles.module.scss'

export default function Page({ params: { slug } }: {
    params: { slug: string }
}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Post {slug}</h1>
        </div>
    )
}
