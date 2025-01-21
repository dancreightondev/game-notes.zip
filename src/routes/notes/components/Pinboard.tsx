import { useState, forwardRef } from 'react'
import { twClassMerge } from '~/utils/tailwind'
import { Block } from '../models/data'
import { PinboardHeader } from './PinboardHeader'

interface PinboardProps extends React.HTMLAttributes<HTMLDivElement> {
  blocks?: Block[]
}

export const Pinboard = forwardRef<HTMLDivElement, PinboardProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ blocks: initialBlocks, className, ...props }, _ref) => {
    const [blocks, setBlocks] = useState(initialBlocks || [])

    return (
      <div id="pinboard" className={twClassMerge(className, '')} {...props}>
        <PinboardHeader title="Pinboard" timestamp={+new Date()} />
        <div id="pinboard-drop-zone" className="flex flex-col h-full gap-3 bg-color-purple">
          {blocks.map((block, index) => (
            <div key={index}>{block.pinboard.block}</div>
          ))}
        </div>
      </div>
    )
  }
)
