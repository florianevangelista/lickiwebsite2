"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
export default function ProductCard1({ product, gridClass = "" }) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);

  const {
    addProductToCart,
  } = useContextElement();

  useEffect(() => {
    setCurrentImage(product.imgSrc);
  }, [product]);

  return (
    <div
      className={`card-product wow fadeInUp ${gridClass} ${
        product.isOnSale ? "on-sale" : ""
      } ${product.sizes ? "card-product-size" : ""}`}
    >
      <div className="card-product-wrapper">
        <Link href={`/product-detail/${product.id}`} className="product-img">
          <Image
            className="lazyload img-product"
            src={currentImage}
            alt={product.title}
            width={600}
            height={800}
          />

          <Image
            className="lazyload img-hover"
            src={product.imgHover}
            alt={product.title}
            width={600}
            height={800}
          />
        </Link>
        {product.isOnSale && (
          <div className="on-sale-wrap">
            <span className="on-sale-item">-{product.salePercentage}</span>
          </div>
        )}
        <div className="list-btn-main">
          <a
            className="btn-main-product"
            onClick={() => addProductToCart(product.id)}
          >
            VOIR PLUS
          </a>
        </div>
      </div>
      <div className="card-product-info">
        <Link href={`/product-detail/${product.id}`} className="title link">
          {product.title}
        </Link>
      </div>
    </div>
  );
}
