import { useState, forwardRef } from 'react'
import { twClassMerge } from '~/utils/tailwind'
import { Block } from '../models/data'

interface PinboardProps extends React.HTMLAttributes<HTMLDivElement> {
  blocks?: Block[]
}

export const Pinboard = forwardRef<HTMLDivElement, PinboardProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ blocks: initialBlocks, className, ...props }, _ref) => {
    const [blocks] = useState(initialBlocks || [])

    return (
      <div id="pinboard" className={twClassMerge(className, 'flex flex-col relative')} {...props}>
        <div id="spacer" className="h-28" />
        <div id="pinboard-drop-zone" className="gap-3 bg-color-purple">
          {blocks.map((block, index) => (
            <div key={index}>{block.pinboard.block}</div>
          ))}
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
          <div>lol</div>
        </div>
        <div id="spacer" className="h-32" />
      </div>
    )
  }
)
