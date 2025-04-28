import "./globals.css";
import Header from "@/components/header";
import HeroSection from "@/components/section/section1";
import HowWeWork from "@/components/section/section2";
import AboutUs from "@/components/section/section3";
import Testimonials from "@/components/section/section4";
import WhyChooseUs from "@/components/section/section5";
import PricingPlans from "@/components/section/section6";
import ResumeBuilding from "@/components/section/section7";
import IconButton from "@/components/ui/icon-button";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/footer";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="mx-auto font-sans">
      <div className="mx-auto gradient-background text-white ">
        <div className="container">
          {/* Navigation */}
          <Header />

          {/* Hero Section */}
          <HeroSection />
        </div>
      </div>
      {/* How We Work Section */}
      <HowWeWork />

      {/* About Us Section */}
      <AboutUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Why Choose Us Section */}

      <WhyChooseUs />

      {/* Pricing Plans Section */}
      <PricingPlans />

      {/* Resume Building Section */}
      <ResumeBuilding />

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary text-white p-8 rounded-[35px] shadow-md flex justify-between items-center py-16">
            <h2 className="text-4xl font-medium mb-2 w-xs">
              STILL HAVE DOUBTS?
            </h2>
            <h3 className="text-7xl font-medium w-full text-center">
              Contact us
            </h3>
            <div className="w-xs flex justify-end ">
              <Image src='/right-arrow.svg' width={100} height={100} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
