import React from 'react';
import {GiAnvilImpact} from 'react-icons/gi'

import styles from './styles.module.css'

function PageTitle ({children, title, tagline, ...props})  {
  return (
        <header className={styles.pageTitle}>
          <GiAnvilImpact size="10rem" color='#d8d8d8'/>
          <h1>{title || "uiTitle"}</h1>
          <p>{tagline || "uiTagline"}</p>
        </header>
  )
}

export default PageTitle