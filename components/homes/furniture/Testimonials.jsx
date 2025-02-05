"use client";

import { testimonialsWithProduct3 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContextElement } from "@/context/Context";
import Image from "next/image";
import { Pagination } from "swiper/modules";

const getRandomPastelColor = (name) => {
  // Utilise le nom comme seed pour avoir toujours la même couleur pour le même nom
  const stringToHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  };

  // Couleurs pastel de Google
  const colors = [
    '#e84135', // Rouge
    '#4285f4', // Bleu
    '#34a853', // Vert
    '#fbbc05', // Jaune
    '#ea4335', // Rouge foncé
    '#4286f5', // Bleu clair
    '#7baaf7', // Bleu pastel
    '#f94f37', // Orange
    '#aa46bb', // Violet
    '#00a1f1', // Bleu ciel
  ];

  const hash = Math.abs(stringToHash(name));
  return colors[hash % colors.length];
};

export default function Testimonials() {
  const { setQuickViewItem } = useContextElement();
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Customer Say!</h3>
          <p className="subheading">
            Our customers adore our products, and we constantly aim to delight
            them.
          </p>
        </div>

        <Swiper
          dir="ltr"
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1.3,
              spaceBetween: 30,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd53",
          }}
          className="swiper tf-sw-testimonial wow fadeInUp"
        >
          {testimonialsWithProduct3.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item hover-img">
                <div className="img-style">
                  <Image
                    data-src={testimonial.imgSrc}
                    alt={testimonial.alt}
                    src={testimonial.imgSrc}
                    width={351}
                    height={468}
                  />
                </div>
                <div className="content">
                  <div className="content-top">
                    <div className="list-star-default">
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                    </div>
                    <p className="text-secondary">{testimonial.quote}</p>
                    <div className="box-author">
                      <div className="text-title author">
                        {testimonial.author}
                      </div>
                    </div>
                  </div>
                  <div className="box-avt">
                    <div className="avatar avt-60 round">
                      <div 
                        className="letter-avatar"
                        style={{
                          backgroundColor: getRandomPastelColor(testimonial.author),
                          color: '#ffffff'
                        }}
                      >
                        {testimonial.author.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <div className="box-price">
                      <p className="text-title text-line-clamp-1">
                        {testimonial.productTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd53" />
      </div>

      <style jsx>{`
        .letter-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
