import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Features from '@/components/sections/Features';
import Products from '@/components/sections/Products';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
    return (
        <div className="min-h-screen selection:bg-primary selection:text-white overflow-x-hidden">
            <Navbar />

            <main>
                <Hero />
                <SocialProof />
                <ServicesGrid />
                <Features />
                <Products />
                <Stats />
                <Testimonials />
            </main>

            <Footer />
        </div>
    );
}
