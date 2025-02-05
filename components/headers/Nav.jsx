"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { sanitaireSubmenu } from "@/data/menu";

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      <li className={`menu-item ${pathname.split("/")[1] == "sanitaire" ? "active" : ""}`}>
        <a href="#" className="item-link">
          Sanitaires
        </a>
        <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row">
              {sanitaireSubmenu.map((category, index) => (
                <div className="col" key={index}>
                  <div className="mega-menu-item">
                    <div className="menu-heading">{category.title}</div>
                    <ul className="menu-list">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={`menu-item-li ${
                            pathname === item.href ? "active" : ""
                          }`}
                        >
                          <Link href={item.href} className="menu-link-text">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </li>
      <li className={`menu-item ${pathname.split("/")[1] == "outillage" ? "active" : ""}`}>
        <a href="/outillage" className="item-link">
          Outillage
        </a>
      </li>
      <li className={`menu-item ${pathname.split("/")[1] == "electricite" ? "active" : ""}`}>
        <a href="/electricite" className="item-link">
          Électricité
        </a>
      </li>
      <li className={`menu-item ${pathname.split("/")[1] == "chauffage" ? "active" : ""}`}>
        <a href="/chauffage" className="item-link">
          Chauffage
        </a>
      </li>
      <li className={`menu-item ${pathname.split("/")[1] == "hvac" ? "active" : ""}`}>
        <a href="/hvac" className="item-link">
          HVAC
        </a>
      </li>
      <li className={`menu-item ${pathname.split("/")[1] == "carrelages" ? "active" : ""}`}>
        <a href="/carrelages" className="item-link">
          Carrelages
        </a>
      </li>
      <li className={`menu-item ${pathname.split("/")[1] == "traitement-eau" ? "active" : ""}`}>
        <a href="/traitement-eau" className="item-link">
          Traitement&nbsp;d'eau
        </a>
      </li>
    </>
  );
}
