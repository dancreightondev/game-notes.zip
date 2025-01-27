import { FC, useRef } from 'react'
import { twClassMerge } from '~/utils/tailwind'
import { Pinboard } from './components/Pinboard'
import { PinboardHeader } from './components/PinboardHeader'
import { BlockPalette } from './components/BlockPalette'
import { Block } from './models/data'
import {
  HiPencilSquare,
  HiTrophy,
  HiAcademicCap,
  HiNumberedList,
  HiCalendarDateRange
} from 'react-icons/hi2'

interface NotesRouteProps extends React.HTMLAttributes<HTMLDivElement> {
  // Custom props go here
  pinboardBlocks?: Block[]
  paletteBlocks?: Block[]
}

const NotesRoute: FC<NotesRouteProps> = ({
  pinboardBlocks,
  paletteBlocks,
  className,
  ...props
}) => {
  const defaultPaletteBlocks = [
    new Block(
      'Note',
      <HiPencilSquare />,
      <p>This is a Note block! Enter some text to remember.</p>
    ),
    new Block(
      'Checklist',
      <HiNumberedList />,
      <p>This is a Checklist block! Add something to do.</p>
    ),
    new Block(
      'Goal',
      <HiTrophy />,
      <p>This is a Goal block! Set an achievement to work towards.</p>
    ),
    new Block(
      'Calendar',
      <HiCalendarDateRange />,
      <p>This is a Calendar block! Track in-game dates and events.</p>
    ),
    new Block(
      'Skill Tree',
      <HiAcademicCap />,
      <p>This is a Skill Tree block! Plan your progression.</p>
    )
  ]

  const dragAreaRef = useRef(null)

  return (
    <div
      id="notes-route"
      className={twClassMerge(className, 'py-5 content-between max-w-[75%] mx-auto')}
      ref={dragAreaRef}
      {...props}
    >
      <div id="pinboard-wrapper" className="flex flex-col min-h-full">
        <PinboardHeader
          title="Pinboard"
          timestamp={+new Date()}
          className="fixed top-0 mb-6 z-50 left-1/2 transform -translate-x-1/2"
        />
        <Pinboard blocks={pinboardBlocks} className="flex-grow overflow-auto" />
      </div>
      <BlockPalette
        blocks={paletteBlocks || defaultPaletteBlocks}
        className="fixed bottom-0 my-6 z-50 left-1/2 transform -translate-x-1/2"
      />
    </div>
  )
}

export default NotesRoute
