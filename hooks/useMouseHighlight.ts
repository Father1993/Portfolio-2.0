/* eslint-disable max-len */
import { useEffect } from 'react'

export const useMouseHighlight = (elementId: string) => {
  useEffect(() => {
    const element = document.getElementById(elementId)
    if (!element) return

    const originalBG = getComputedStyle(element).backgroundColor
    const lightColor = 'rgba(101,255,127,0.1)'
    const gradientSize = 300

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const bgWebKit = `-webkit-gradient(radial, ${x} ${y}, 0, ${x} ${y}, ${gradientSize}, from(${lightColor}), to(rgba(255,255,255,0.0))), ${originalBG}`
      const bgMoz = `-moz-radial-gradient(${x}px ${y}px 45deg, circle, ${lightColor} 0%, ${originalBG} ${gradientSize}px)`

      element.style.background = bgWebKit
      element.style.background = bgMoz
    }

    const handleMouseLeave = () => {
      element.style.background = originalBG
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [elementId])
}
