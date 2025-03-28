import React, { useState } from 'react'
import SpaceAvatar from './SpaceAvatar'

const SpaceCard = () => {
  const [isLeaving, setIsLeaving] = useState(false)

  const handleClick = () => {
    setIsLeaving(true)
  }

  return (
    <div
      className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 card perspective-wrapper cursor-pointer
        ${isLeaving ? 'animate-fall-down' : 'animate-rise-up'}`}
      style={{ perspective: '1800px' }}
      onClick={handleClick}
    >
      <div className="bg-white w-[320px] h-[500px] shadow-2xl flex flex-col items-center justify-center p-4 rounded-2xl animate-tilt relative overflow-hidden">
        {/* <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-neutral-50 via-white to-neutral-50"></div> */}
        <div className="relative z-10">
          <SpaceAvatar size={150} />
          <div className="absolute bottom-0 right-0 w-[50px] h-[50px] rounded-full bg-white text-center flex items-center justify-center text-2xl">
            🚀
          </div>
        </div>
        <div className="h-[16px] relative z-10"></div>
        <div className="font-semibold text-2xl text-center mb-2 relative z-10">Hello Kitty</div>
        <div className="text-content-dim-light text-center mx-4 relative z-10">
          has completed <div className="font-semibold">Vibe Coding</div>
        </div>
      </div>
    </div>
  )
}

export default SpaceCard
