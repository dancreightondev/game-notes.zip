import { cloneElement, FC, ReactNode, useRef, useState } from 'react'
import { twClassMerge } from '~/utils/tailwind'
import { motion, useDragControls } from 'motion/react'
import { Block } from '../models/data'

interface PaletteBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: ReactNode
  name?: string
  ttPos?: 'top' | 'bottom'
  ttDelay?: number
}

const PaletteBlock: FC<PaletteBlockProps> = ({
  icon,
  name,
  ttPos = 'top', // tooltip shows above the block by default
  ttDelay = 800, // 0.8 second delay by default
  className,
  ...props
}) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  const handleMouseEnter = () => {
    timeoutRef.current = window.setTimeout(() => {
      if (!dragging) {
        setShowTooltip(true)
      }
    }, ttDelay)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setShowTooltip(false)
  }

  const dragControls = useDragControls()
  const [opacity, setOpacity] = useState(1)
  const [dragging, setDragging] = useState(false)

  const handleDragStart = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setShowTooltip(false)
    setDragging(true)
  }

  const handleDragEnd = () => {
    setOpacity(0)
    setTimeout(() => {
      setDragging(false)
      setOpacity(1)
    }, 750)
  }

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragElastic={1}
      whileDrag={{ scale: 1.1 }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      className={twClassMerge(
        'transition-opacity',
        opacity === 0 ? 'duration-0 opacity-0' : 'duration-300 opacity-100'
      )}
    >
      <div
        id={name ? `palette-block-${name.toLowerCase()}` : `palette-block`}
        className={twClassMerge(
          'relative group size-16 bg-background border border-background-light rounded flex items-center justify-center shadow-lg transition-colors cursor-grab hover:bg-background-medium',
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {cloneElement(icon as React.ReactElement, {
          className: twClassMerge(
            'size-[90%] transition-colors text-body-dark group-hover:text-primary'
          )
        })}
        {showTooltip && (
          <div
            className={twClassMerge(
              'absolute z-10 bg-background-dark text-body rounded py-1 px-2 w-auto max-w-96 whitespace-nowrap truncate',
              ttPos === 'top' ? 'bottom-full mb-1.5' : 'top-full mt-1.5'
            )}
          >
            {name}
          </div>
        )}
      </div>
    </motion.div>
  )
}

interface BlockPaletteProps extends React.HTMLAttributes<HTMLDivElement> {
  blocks?: Block[]
}

export const BlockPalette: FC<BlockPaletteProps> = ({ blocks, className, ...props }) => {
  return (
    <div
      id="block-palette"
      className={twClassMerge(
        'bg-background border border-background-light rounded-lg shadow-lg p-5 w-min mx-auto',
        className
      )}
      {...props}
    >
      <div id="block-palette-content" className="flex flex-row gap-3">
        {blocks?.map((block, index) => (
          <PaletteBlock key={index} icon={block.palette.icon} name={block.palette.name} />
        ))}
      </div>
    </div>
  )
}
