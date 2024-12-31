import React, {useState} from 'react'
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils.js"

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">MAYLEENA CHAUDHARY</a>
      <div className={styles.menu}>
        <img className={styles.menubtn} src={getImageUrl("nav/menuIcon.png")} alt='menu-button'/>
        <ul className={styles.menuItems}>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#about">Experience</a>
            </li>
            <li>
                <a href="#about">Projects</a>
            </li>
            <li>
                <a href="#about">Contact</a>
            </li>
        </ul>
      </div>
    </nav>
  )
}
