import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export const useTyped = (strings: string[], typeSpeed = 130) => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [strings, typeSpeed])

  return el
}
