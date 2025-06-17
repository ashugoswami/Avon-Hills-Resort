import Header from "@/components/header/header"
import Hero from "@/components/hero/hero"
import AboutSection from "@/components/about-section"
import FeaturedSection from "@/components/featured-section"
import WhyChooseSection from "@/components/why-choose-section"
import KeyDistanceSection from "@/components/key-distance-section"
import KeyHighlightsSection from "@/components/key-highlights-section"
import MasterPlanSection from "@/components/master-plan-section"
import ResortPlanSection from "@/components/resort-plan-section"
import ResortAmenitiesSection from "@/components/resort-amenities-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section id="home">
          <Hero />
        </section>
        <section id="featured">
          <FeaturedSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <WhyChooseSection />
        <section id="location">
          <KeyDistanceSection />
        </section>
        <section id="key-highlights">
          <KeyHighlightsSection />
        </section>
        <section id="site-map">
          <MasterPlanSection />
        </section>
        <section id="resort-plan">
          <ResortPlanSection />
        </section>
        <section id="amenities">
          <ResortAmenitiesSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  )
}

