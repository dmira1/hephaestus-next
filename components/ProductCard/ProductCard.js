import React from 'react';

import {productCard} from './styles.module.scss'

function ProductCard ({children, product, ...props})  {
  const {productName, productPrice, productDescription, imageUrl} = {...product};

  return (
         <aside>
           <header>
             <img src={imageUrl} alt={productName} />
           </header>
           <ul>
             <li>{productName}</li>
             <li>{productPrice}</li>
             <li>{productDescription}</li>
           </ul>
         </aside>
  )
}

export default ProductCard