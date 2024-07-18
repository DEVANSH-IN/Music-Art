import ChooseUs from "@/components/ChooseUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instrutors";
import MusicSchoolTestimonials from "@/components/TestimonialCard";

import Webinar from "@/components/Webinar";

 



export default function Home () {
 return(

    <main className="min-h-screen bg-black/[0.96}] antialiased bg-grid-white/[0.03]">
        
        <HeroSection />
        <FeaturedCourses />
        < ChooseUs />
        < MusicSchoolTestimonials />
            <Webinar />
            < Instructors />
            < Footer />


    </main>
  

 );
}