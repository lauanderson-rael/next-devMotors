
import styles from './styles.module.scss'
import { getItemBySlug } from '@/app/utils/actions/get-data'
import { PostProps } from '@/app/utils/post.type'
import { Hero } from '@/app/components/hero'
import { Phone } from 'lucide-react'
import { Container } from '@/app/components/container'
import Image from 'next/image'
import { Metadata } from 'next'

// metadados dinâmicos da pagina

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//     try {
//         const { slug } = await params  // desestruturação para funcionar sem erro ou  'const paramsSlug = await params
//         const { objects }: PostProps = await getItemBySlug(slug)
//             .catch(() => {
//                 return {
//                     title: 'DevMotors - Sua oficina especializada',
//                     description: 'Oficina de carros em Coelho Neto-MA',
//                 }
//             })

//         return {
//             title: `DevMotors - ${objects[0].title}`,
//             description: `${objects[0].metadata.description.text}`,
//             keywords: ['devMotors troca de óleo', 'devmotors', 'troca de óleo'],
//             openGraph: {
//                 title: `DevMotors - ${objects[0].title}`,
//                 images: [`${objects[0].metadata.banner.url}`],
//             },
//             robots: {
//                 index: true,
//                 follow: true,
//                 nocache: true,
//                 googleBot: {
//                     index: true,
//                     follow: true,
//                     noimageindex: true,
//                 }
//             }
//         }

//     } catch (error) {
//         return {
//             title: 'DevMotors - Sua oficina especializada',
//             description: 'Oficina de carros em Coelho Neto-MA',
//         }
//     }
// }

// fim metadados dinâmicos da pagina

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const { objects }: PostProps = await getItemBySlug(slug)
    //console.log(JSON.stringify(objects, null, 2));

    return (
        <>
            <Hero
                heading={objects[0].title}
                buttonTitle={objects[0].metadata.button.title}
                buttonUrl={objects[0].metadata.button.url}
                bannerUrl={objects[0].metadata.banner.url}
                icon={<Phone size={24} />}
            />

            <Container>
                <section className={styles.about}>

                    <article className={styles.innerAbout}>
                        <h1 className={styles.title}>{objects[0].metadata.description.title}</h1>
                        <p>{objects[0].metadata.description.text}</p>

                        {objects[0].metadata.description.button_active && (
                            <a href={objects[0].metadata.description.button_url as string}
                                target='_blank'
                                className={styles.link}
                            >
                                {objects[0].metadata.description.button_title}
                            </a>
                        )}
                    </article>

                    <div className={styles.bannerAbout}>
                        <Image
                            className={styles.imageAbout}
                            alt={objects[0].title}
                            quality={100}
                            fill
                            priority
                            sizes='(max-width: 480px) 100vw, (max-width: 1024px)75vw, 60vw'
                            src={objects[0].metadata.description.banner.url}
                        />

                    </div>

                </section>
            </Container>
        </>
    )
}


//Page({ params: { slug } }: { params: { slug: string } })
