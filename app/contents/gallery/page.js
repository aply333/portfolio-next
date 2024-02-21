import Backdrop from "@/components/assets/abstract-backdrops/backdrops";
import Cards from "@/components/cards/card";
import HeroCard from "@/components/heros/heroCard";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { projectFetch } from "@/lib/api/strapiGraph";
import styles from "./gallery.module.scss";
import Svg from "@/components/assets/svg/svg";

export default async function Gallery(){
  let galleryData = await projectFetch();
  return(
    <>
    <Header/>

    <main className="container">
      <div className={`section--with-grid ${styles.gallery}`}>

        {/* TODO: Connect this to the database */}

        <HeroCard
          parentClass={styles.hero}
          title="Gallery"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        >
          <div className={styles.search_filters}>
            <input
              type="text"
              placeholder="Search Projects"/>
              <div className={styles.filter_container}>
               <span className="title--4">Filters</span>
               <ul>
                 {/* Todo: Convert these into font awesome icons with tooltip hovers */}
                 <li><button><Svg name="briefcase"/></button></li>
                 <li><button><Svg name="school"/></button></li>
                 <li><button><Svg name="seedling"/></button></li>
               </ul>
            </div>
          </div>

        </HeroCard>


        { galleryData.map(item => (
          <Cards
            primaryClass={styles.card}
            title={item.attributes.Title}
            key={Math.random()}
          />
        ))}

      </div>

      <Backdrop/>
    </main>

    <Footer/>
  </>
  )
}
