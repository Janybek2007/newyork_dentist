import React from 'react'
import { useDropDown } from '../../hooks/useDropDown'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const variants = {
  hidden: {
    opacity: 0,
    translateY: 10,
  },
  visible: { opacity: 1, translateY: 0 },
}

const DropDown = ({ initialSelectedItem, links, width }) => {
  const { selectedItem, isOpen, toggleDropDown, onSelectItem, dropDownRef } = useDropDown({
    initialSelectedItem,
    items: links,
    isState: false,
  })

  return (
    <div className={styles.dropdownContainer}>
      <button
        onMouseOver={() => toggleDropDown(true)}
        onMouseOut={() => toggleDropDown(false)}
        onClick={() => {
          toggleDropDown(true)
        }}
        className={styles.dropdownButton}
      >
        {selectedItem}
      </button>
      <div
        onMouseOver={() => toggleDropDown(true)}
        onMouseOut={() => toggleDropDown(false)}
        ref={!isOpen ? dropDownRef : null}
        style={{
          minWidth: width,
        }}
        className={clsx(styles.dropdownContent, {
          [styles.show]: isOpen,
        })}
      >
        {links.map(
          (link, idx) =>
            isOpen && (
              <motion.li
                key={link}
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: idx * 0.2,
                  ease: 'easeInOut',
                  duration: 0.25,
                }}
                viewport={{ amount: 0 }}
              >
                <Link onClick={() => onSelectItem(link)}>{link}</Link>
              </motion.li>
            )
        )}
      </div>
    </div>
  )
}

export default DropDown