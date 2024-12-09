import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

function ProductPage() {
  return (
    <div className="product-container">
      <div className="product-image">
        <Image src="t-shirt-image.jpg" alt="One Life Graphic T-Shirt" width={444} height={530}/>
        <div className="product-images">
          <Image src="t-shirt-image2.jpg" alt="T-Shirt Image 2" width={152} height={167}/>
          <Image src="t-shirt-image3.jpg" alt="T-Shirt Image 3" width={152} height={167} />
          <Image src="t-shirt-model.jpg" alt="Model Wearing T-Shirt" width={152} height={167} />
        </div>
      </div>

      <div className="product-info">
        <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="rating">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">½</span>
          <span>4.5/5</span>
        </div>
        <div className="price">
          <span className="sale-price">$260</span>
          <span className="original-price">$300</span>
          <span className="discount">-40%</span>
        </div>
        <p>This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

        {/* ... rest of the product info elements ... */}

        <div className="quantity">
          <button className="decrease">-</button>
          <input type="number" name="quantity" value="1" />
          <button className="increase">+</button>
        </div>

        <Button className="add-to-cart">Add to Cart</Button>
      </div>

      {/* ... rest of the product details, ratings, and FAQs sections ... */}
    </div>
  );
}

export default ProductPage;