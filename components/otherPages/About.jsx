"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function About() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="flat-spacing about-us-main pb_0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-us-features wow fadeInLeft">
              <Image
                className="lazyload"
                data-src="/images/banner/about-us.jpg"
                alt="image-team"
                src="/images/banner/about.jpg"
                width={930}
                height={618}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-us-content">
              <h3 className="title wow fadeInUp">
                Plus de <span className="highlight-text">60 ans</span> d'expérience
              </h3>
              <div className="widget-tabs style-3">
                <ul className="widget-menu-tab wow fadeInUp">
                  <li
                    className={`item-title ${activeTab == 1 ? "active" : ""} `}
                    onClick={() => setActiveTab(1)}
                  >
                    <span className="inner text-button">Introduction</span>
                  </li>
                  <li
                    className={`item-title ${activeTab == 2 ? "active" : ""} `}
                    onClick={() => setActiveTab(2)}
                  >
                    <span className="inner text-button">Notre vision</span>
                  </li>
                  <li
                    className={`item-title ${activeTab == 3 ? "active" : ""} `}
                    onClick={() => setActiveTab(3)}
                  >
                    <span className="inner text-button">
                      Notre force
                    </span>
                  </li>
                  <li
                    className={`item-title ${activeTab == 4 ? "active" : ""} `}
                    onClick={() => setActiveTab(4)}
                  >
                    <span className="inner text-button">Notre engagement</span>
                  </li>
                </ul>
                <div className="widget-content-tab wow fadeInUp">
                  <div
                    className={`widget-content-inner ${
                      activeTab == 1 ? "active" : ""
                    } `}
                  >
                    <p>
                      Forte de ses 60 ans d'expérience, Licki Sanit est une entreprise familiale spécialisée en chauffage, sanitaire, carrelage et éclairage. Située à Herstal, Licki Sanit bénéficie d'un showroom de plus de 1000m², d'une surface d'entreposage de 2500 m² et d'un stock de carrelages de 15000 m².
                    </p>
                  </div>
                  <div
                    className={`widget-content-inner ${
                      activeTab == 2 ? "active" : ""
                    } `}
                  >
                    <p>
                      Chez Licki Sanit, nous croyons que la qualité doit être accessible à tous.
                      Notre vision est d’être le partenaire de confiance pour tous vos projets, en vous offrant des solutions fiables, des prix compétitifs et un service irréprochable. Nous nous engageons à respecter vos délais, à assurer un suivi rigoureux et à faire de votre satisfaction notre priorité.
                      Licki Sanit, la qualité au meilleur prix.
                    </p>
                  </div>
                  <div
                    className={`widget-content-inner ${
                      activeTab == 3 ? "active" : ""
                    } `}
                  >
                    <p>
                      Notre force réside dans notre esprit familial et notre flexibilité.
                      En tant qu’entreprise familiale, nous mettons un point d’honneur à bâtir des relations de confiance avec nos clients. Nous sommes à vos côtés à chaque étape, prêts à écouter vos besoins et à trouver des solutions adaptées pour vous accompagner dans vos projets. Avec Licki Sanit, vous avez la garantie d’un partenaire fiable, toujours prêt à faire le nécessaire pour vous aider à réussir.
                      Votre satisfaction est notre priorité.
                    </p>
                  </div>
                  <div
                    className={`widget-content-inner ${
                      activeTab == 4 ? "active" : ""
                    } `}
                  >
                    <p>
                      Chez Licki Sanit, nous comprenons que chaque projet est unique et peut présenter des défis spécifiques. C’est pourquoi nous prenons le temps d’écouter attentivement vos besoins et vos attentes. Que ce soit pour un conseil technique, une demande urgente ou une solution sur mesure, nous mettons tout en œuvre pour répondre à vos exigences.
                      Notre flexibilité et notre réactivité nous permettent de trouver des solutions adaptées, même dans les situations les plus complexes. Vous pouvez compter sur nous pour vous accompagner du début à la fin, en veillant à ce que chaque étape de votre projet se déroule dans les meilleures conditions.
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" className="tf-btn btn-fill wow fadeInUp">
                <span className="text text-button">Lire la suite</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
