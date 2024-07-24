"use client";
import React from 'react'
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
import { cn } from '@/lib/utils';
import usePlayerState from '@/hooks/usePlayerState'

const Sidebar = ({children}) => {
  const { isVisibleState } = usePlayerState;
  return (
    <div
      className={cn(
        "flex flex-row h-full",
        isVisibleState && "h-[calc(100vh-72px)]"
      )}
    >
      <nav className="hidden lg:block w-[240px] border-r-[1px] border-neutral-600"  >
        <div className="p-[24px]">
          <Logo/>
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="w-full lg:w-[calc(100%-240px)]">{children}</div>
    </div>
  )
}

export default Sidebar;
