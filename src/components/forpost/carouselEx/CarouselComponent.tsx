// Carousel.tsx
import { useCallback, useEffect, useRef, useState } from 'react'
interface Props {
  images: {
    src: string
    alt: string
  }[]
}

const Carousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const debounceTimer = useRef(null as NodeJS.Timeout | null)
  const isMouseOver = useRef(false)

  const move = useCallback(
    (direction: number) => {
      setCurrentIndex(
        prevIndex => (prevIndex + direction + images.length) % images.length,
      )
    },
    [images.length],
  )

  const debounceMouseEvent = useCallback(
    (callback: () => void, delay = 100) => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
      debounceTimer.current = setTimeout(callback, delay)
    },
    [],
  )

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    const autoplay = async () => {
      if (isPlaying && !isMouseOver.current) {
        intervalId = setInterval(() => {
          move(1)
        }, 3000)
      }
    }

    autoplay()

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isPlaying, move])

  const handleMouseEnter = () => {
    isMouseOver.current = true
    debounceMouseEvent(() => setIsPlaying(false))
  }

  const handleMouseLeave = () => {
    isMouseOver.current = false
    debounceMouseEvent(() => setIsPlaying(true))
  }

  useEffect(() => {
    setIsPlaying(true)
    return () => setIsPlaying(false)
  }, [])

  return (
    <div
      className='container'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='carousel'>
        <div
          className='carousel-inner'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map(image => (
            <div key={image.alt} className='carousel-slide'>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        <button
          type='button'
          className='carousel-btn prev-btn'
          onClick={() => {
            move(-1)
          }}
        >
          上一張
        </button>
        <button
          type='button'
          className='carousel-btn next-btn'
          onClick={() => {
            move(1)
          }}
        >
          下一張
        </button>
      </div>
    </div>
  )
}

export default Carousel
