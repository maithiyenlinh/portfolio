import { useEffect, useRef, useState } from 'react';

const default_style = 'pointer-events-none absolute translate-x-[-50%] translate-y-[-50%] rounded-full transition-opacity transition-transform duration-300 ease-in-out'

const Cursor = () => {
  const dot = useRef(null);
  const dotOutline = useRef(null);

  const delay = 5;

  const cursorVisible = useRef(true)
  const cursorEnlarged = useRef(false)

  const endX = useRef(window.innerWidth / 2);
  const endY =  useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0)

  const requestRef = useRef(null)

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveEvent);
    animationDotOutline();
    return () => {
      document.removeEventListener('mousemove', mouseMoveEvent);
      cancelAnimationFrame(requestRef.current);
    }
  })

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  }

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();
    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  }

  const animationDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + 'px';
    dotOutline.current.style.left = _x.current + 'px';

    requestRef.current = requestAnimationFrame(animationDotOutline);
  }

  return (
    <>
      <div ref={dotOutline} className={`cursor-dot-outline ${default_style} z-50 h-10 w-10 bg-transparent border-2 border-primary-white shadow-default`}></div>
      <div ref={dot} className={`cursor-dot ${default_style} z-[55] h-2 w-2 bg-primary-white`}></div>
    </>
  )
}

export default Cursor;