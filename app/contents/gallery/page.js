import Backdrop from "@/components/assets/abstract-backdrops/backdrops";
import Cards from "@/components/cards/card";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { projectFetch } from "@/lib/api/strapiGraph";
import styles from "./gallery.module.scss";

export default async function Gallery(){
    let galleryData = await projectFetch();
    console.log(galleryData)
    return(
        <>
        <Header/>
        <main className="container">
            
            <section className={"section--with-grid "+styles.gallery}>
                <div className={styles.filter}>
                    <button>One</button>
                    <button>Two</button>
                </div>

                { galleryData.map(item => (
                    <Cards 
                        primaryClass={styles.card}
                        title={item.attributes.Title}
                    />
                    // <div className={styles.card}>
                    //     <h3 className={styles.card_title}>{item.attributes.Title}</h3>
                    // </div>
                ))}

            </section>

            <Backdrop/>
        </main>
        <Footer/>
        </>
    )
}