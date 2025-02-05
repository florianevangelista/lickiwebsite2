"use client";
import React from "react";

const StoreLocations3 = () => {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mb-4">Nos Points de Vente</h3>
            
            <div className="maps-container">
              <div className="row">
                {/* Premier point de vente - Herstal */}
                <div className="col-lg-6 mb-4">
                  <div className="location-block">
                    <div className="wrap-map">
                      <div className="map-contact">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.0825843843837!2d5.628638615731999!3d50.67768769498576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f0503085b393%3A0x140353bef9a8fc6!2sLicki%20Sanit%20Herstal!5e0!3m2!1sfr!2sbe!4v1710348523074!5m2!1sfr!2sbe"
                          style={{ border: 0, width: "100%", height: "100%" }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                    <div className="info-box">
                      <p className="address">
                        Rue Louis Demeuse 111, 4040 Herstal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Deuxième point de vente - Seraing */}
                <div className="col-lg-6 mb-4">
                  <div className="location-block">
                    <div className="wrap-map">
                      <div className="map-contact">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.6766666666665!2d5.498879315731771!3d50.60822297949918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f9c83e123b3b%3A0x700fe06c4d36c2de!2sLicki%20Sanit%20Seraing!5e0!3m2!1sfr!2sbe!4v1710349523074!5m2!1sfr!2sbe"
                          style={{ border: 0, width: "100%", height: "100%" }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                    <div className="info-box">
                      <p className="address">
                        Rue Chéravoie 1, 4100 Seraing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .location-block {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          background: white;
        }
        .wrap-map {
          height: 450px;
        }
        .map-contact {
          width: 100%;
          height: 100%;
        }
        .info-box {
          padding: 20px;
          background: #f8f8f8;
          border-top: 1px solid #eee;
        }
        .address {
          margin: 0;
          font-size: 16px;
          color: #666;
          text-align: center;
        }
        @media (max-width: 991px) {
          .wrap-map {
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
};

export default StoreLocations3;
