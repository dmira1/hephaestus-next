import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button'
import {productCard, price, name, description} from './styles.module.scss'

function ProductCard ({children, product, ...props})  {
  const {productName, productPrice, productDescription, imageUrl, uid} = {...product};

  return (
        <aside className={productCard}>
          <header>
            <Image 
            src={imageUrl} 
            alt={productName} 
            width={418} 
            height={248}
            />
          </header>
          <h2 className={name}>{productName}</h2>
          <p className={price}>${productPrice}</p>
          <p className={description}>{productDescription}</p>
          <footer>
            <form action="/api/checkout" method="POST">
              <input type="hidden" name="uid" value={uid}/>
              <Button type="submit">Buy Now</Button>
            </form>
          </footer>
        </aside>
  )
}

export default ProductCard