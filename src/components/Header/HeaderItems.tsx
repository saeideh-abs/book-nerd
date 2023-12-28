'use client'
import React from 'react'
import { HeaderItemsType } from './types'
import HeaderItem from './HeaderItem'
import { usePathname } from 'next/navigation'

export interface HeaderItemsProps {
  items: HeaderItemsType
}

export default function HeaderItems({ items }: HeaderItemsProps) {
  const pathname = usePathname()

  return (
    <div className="flex items-center h-16 gap-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <HeaderItem item={item} active={item.route === pathname} />

          {index !== items.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  )
}

const Divider = () => <div className="w-[1px] h-[15px] bg-white"></div>
