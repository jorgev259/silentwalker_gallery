'use client'
import Link from 'next/link'
import classNames from 'classnames'
import { ReactNode, useContext } from 'react'
import { usePathname } from 'next/navigation'
import { SearchContext } from './SearchProvider'

export default function DropdownItem({
  href,
  children
}: {
  href: string
  children: ReactNode
}) {
  const pathname = usePathname()
  const { device } = useContext(SearchContext)

  const linkHref = href.replace('[device]', device)
  const active = pathname === linkHref

  return (
    <Link
      href={linkHref}
      prefetch={false}
      className={classNames('dropdown-item', { active })}
    >
      {children}
    </Link>
  )
}
