import React from 'react';

import Styles from './styles.module.css'

function Button ({children, ...props})  {
  return (
        <button className={Styles.button}>
          {children}
        </button>
  )
}

export default Button