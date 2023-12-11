'use client'
import { useRef, useEffect } from 'react';

export const useLockBodyScroll = (toggle: boolean) => {
  const position = useRef(window.scrollY);
  useEffect(() => {
    if (toggle) position.current = window.scrollY;
    document.body.style.top = toggle ? `-${position.current}px` : '';
    document.body.style.height = toggle ? `100vh` : '';
    document.body.style.position = toggle ? 'fixed' : '';
    window.scrollTo(0, position.current);
  }, [toggle]);
};