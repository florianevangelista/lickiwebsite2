"use client";
import React from "react";
import Link from "next/link";
import { sanitaireSubmenu } from "@/data/menu";
import { usePathname } from "next/navigation";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
import {
  blogLinks,
  otherPageLinks,
  otherShopMenus,
  productFeatures,
  productLinks,
  productStyles,
  shopFeatures,
  swatchLinks,
} from "@/data/menu";

export default function MobileMenu() {
  const pathname = usePathname();
  return (
    <div className="offcanvas offcanvas-start" id="mobileMenu">
      <div className="offcanvas-header">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <ul className="nav-ul-mb">
          <li className="nav-mb-item">
            <a
              href="#sub-menu-1"
              className={`nav-link-mb ${
                pathname.split("/")[1] == "sanitaire" ? "active" : ""
              }`}
              data-bs-toggle="collapse"
            >
              Sanitaires
              <span className="btn-open-sub" />
            </a>
            <div id="sub-menu-1" className="collapse">
              {sanitaireSubmenu.map((category, index) => (
                <div key={index}>
                  <div className="menu-heading-mb">{category.title}</div>
                  <ul className="sub-nav-menu">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.href}
                          className={`sub-nav-link ${
                            pathname === item.href ? "active" : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
          <li className="nav-mb-item">
            <Link
              href="/outillage"
              className={`nav-link-mb ${
                pathname.split("/")[1] == "outillage" ? "active" : ""
              }`}
            >
              Outillage
            </Link>
          </li>
          <li className="nav-mb-item">
            <Link
              href="/electricite"
              className={`nav-link-mb ${
                pathname.split("/")[1] == "electricite" ? "active" : ""
              }`}
            >
              Électricité
            </Link>
          </li>
          <li className="nav-mb-item">
            <Link
              href="/chauffage"
              className={`nav-link-mb ${
                pathname.split("/")[1] == "chauffage" ? "active" : ""
              }`}
            >
              Chauffage
            </Link>
          </li>
          <li className="nav-mb-item">
            <Link
              href="/hvac"
              className={`nav-link-mb ${
                pathname.split("/")[1] == "hvac" ? "active" : ""
              }`}
            >
              HVAC
            </Link>
          </li>
          <li className="nav-mb-item">
            <Link
              href="/carrelages"
              className={`nav-link-mb ${
                pathname.split("/")[1] == "carrelages" ? "active" : ""
              }`}
            >
              Carrelages
            </Link>
          </li>
          <li className="nav-mb-item">
            <Link
              href="/traitement-eau"
              className={`nav-link-mb ${
                pathname.split("/")[1] == "traitement-eau" ? "active" : ""
              }`}
            >
              Traitement d'eau
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
