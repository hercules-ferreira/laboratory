import { ReactNode, ButtonHTMLAttributes, useRef, useLayoutEffect } from 'react';
import styles from './styles.module.css';
import { FaSpinner } from 'react-icons/fa'
import React from 'react';



export function ButtonStyle({ loading, children, ...rest }){
  return(
    <button 
    className={styles.button}
    disabled={loading}
    {...rest}
    >
      { loading ? (
        <FaSpinner color="#FFF" size={160} />
      ) : (
        <a className={styles.buttonText}>
          {children}
        </a>
      )}
    </button>
  )
}