import React from 'react'
import { cn } from './tw-utils'

interface Props {
  size?: number
}

const SpaceAvatar = ({ size = 32 }: Props) => {
  return (
    <div
      className={cn(`rounded-full bg-neutral-600 text-white overflow-hidden`)}
      style={{
        ...(size ? { width: size, height: size } : {}),
      }}
    >
      <img className={cn(`w-full`)} src={`https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg`} />
    </div>
  )
}

export default SpaceAvatar
