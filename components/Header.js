import React from 'react'
import headerStyles from '../styles/Header.module.css'
export default function Header() {
  return (
    
    <div>
        <h1 className={headerStyles.title}>
            <span>WebDev</span> News
        </h1>
        <p className={headerStyles.description}>
            A place to share your knowledge and learn new things.
        </p>
    </div>
  )
}
