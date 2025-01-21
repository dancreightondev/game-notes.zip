import { createElement, ReactNode } from 'react'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2'

export class Block {
  /**
   * Represents a block that can be added to the pinboard.
   */
  palette: {
    icon: ReactNode
    name: string
  }
  pinboard: {
    name: string
    block: ReactNode
  }

  constructor(name?: string, icon?: ReactNode, represents?: ReactNode) {
    this.palette = {
      icon: icon || createElement(HiOutlineQuestionMarkCircle),
      name: name || 'null',
    }
    this.pinboard = {
      name: name || 'null',
      block: represents || createElement('span', {}, name),
    }
  }
}
