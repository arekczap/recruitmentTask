import React, { useState, useEffect } from 'react'
import './ProgressBar.scss'

const ProgressBar = ({ time }) => {
  const [progressBarWidth, setprogressBarWidth] = useState(0)

  useEffect(() => {
    let rafId = null
    let start = null
    let step = timestamp => {
      if (!start) start = timestamp
      let progress = timestamp - start
      setprogressBarWidth(progress)
      if (progress < time) {
        rafId = requestAnimationFrame(step)
      }
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [time])


  return (
    <div className={'progressBar__bar'}>
      <div style={{ width: `${Math.min(progressBarWidth / time, time) * 100}%` }} className={'progressBar__actualPoogress'} />
    </div>
  )

}
export default ProgressBar
