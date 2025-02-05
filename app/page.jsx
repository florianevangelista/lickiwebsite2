import Features from "@/components/common/Features";
import MarqueeSection2 from "@/components/common/MarqueeSection2";
import Products6 from "@/components/common/Products6";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Topbar3 from "@/components/headers/Topbar3";
import Collections from "@/components/homes/furniture/Collections";
import Collections2 from "@/components/homes/furniture/Collections2";
import About from "@/components/otherPages/About";
import Features2 from "@/components/common/Features2";
import Hero from "@/components/homes/furniture/Hero";
import Lookbook from "@/components/homes/furniture/Lookbook";
import Products from "@/components/homes/furniture/Products";
import StoreLocations3 from "@/components/otherPages/StoreLocations3";
import Testimonials from "@/components/homes/furniture/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Home Furniture || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Topbar3 />
      <Header1 fullWidth />
      <Hero />
      <MarqueeSection2 parentClass="tf-marquee bg-light-blue-4 border-0" />
      <Collections />
      <About />
      <Features2 parentClass="flat-spacing line-bottom-container" />
      <Products />
      <Lookbook />
      <Products6 />
      <Collections2 />
      <Testimonials />
      <StoreLocations3 />
      <Footer1 border={false} />
    </>
  );
}
