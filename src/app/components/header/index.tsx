'use client';
import Link from "next/link";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";

export function Header() {
    const [top, setTop] = useState(true);

    const scrollHandler = () => {
        // console.log("fez scroll...");
        window.scrollY > 10 ? setTop(false) : setTop(true);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)

        return () => window.removeEventListener("scroll", scrollHandler)
    }, [top])

    return (
        <header className={`${styles.header} ${top ? styles.background : styles.fixed}`}>

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLogo}>
                        <Link href="/">
                            Dev Motors
                        </Link>
                    </div>

                    <nav className={styles.nav}>
                        <Link href="/">
                            HOME
                        </Link>
                        <Link href="/#servicos">
                            SERVIÇOS
                        </Link>
                        <Link href="/#contatos">
                            CONTATOS
                        </Link>
                    </nav>
                </div>
            </div>

        </header>
    );
}
