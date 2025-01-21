import { forwardRef } from 'react'
import { twClassMerge } from '~/utils/tailwind'

interface PinboardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  // Custom props go here
  title: string
  timestamp: number
}

export const PinboardHeader = forwardRef<HTMLDivElement, PinboardHeaderProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ title, timestamp, className, ...props }, _ref) => {
    return (
      <div
        id="pinboard-header"
        className={twClassMerge(className, 'w-full flex flex-col gap-3')}
        {...props}
      >
        <div
          id="pinboard-title"
          contentEditable
          data-placeholder="Title"
          spellCheck="false"
          className="w-fit max-w-full min-w-32 text-3xl font-extrabold text-center mx-auto bg-transparent border-b-2 border-background-light transition-colors focus:border-body-dark focus:outline-none"
        >
          {title}
        </div>
        <span
          id="pinboard-timestamp"
          className="flex flex-col text-sm font-medium w-full text-center text-body-dark"
        >
          last updated on {/* https://stackoverflow.com/a/71647447 */}
          <span>{new Date(timestamp).toLocaleString()}</span>
        </span>
      </div>
    )
  }
)
