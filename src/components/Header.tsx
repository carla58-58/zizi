import React from 'react'
import { ZiziLogo } from './ZiziLogo'

export default function Header() {
  return (
    <header className="flex justify-center py-4 -mb-28">
      <div className="group">
        <ZiziLogo className="h-20 z-10 cursor-pointer text-red-800" />
      </div>
    </header>
  )
}