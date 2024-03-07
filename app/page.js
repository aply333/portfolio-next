import { landingGraphFetch } from "@/lib/api/strapiGraph";
import Banner from "@/components/banner/banner";
import ContentPane from "@/components/content_pane/ContentPane";
import QuickLinks from "@/components/quick_links/QuickLinks";
import KeyValues from "@/components/key_values/KeyValues";
import "./page.scss";


export default async function Home() {
  let landing_data = await landingGraphFetch();

  // console.log(landing_data.Contact);

  return (
    <>
      <main className='container'>
        <section className='section--with-grid landing-page'>
          <Banner data={landing_data.Intro}/>
          <ContentPane 
            about = {landing_data.About.Content}
            projects = {landing_data.Gallery.Projects.data}
            contact = {landing_data.Contact}
            values = {landing_data.Stack.Stacks.data}
          />
          <QuickLinks/>
          <KeyValues data={landing_data.Stack.Stacks.data}/>
        </section>
      </main>
      </>
  )
}
