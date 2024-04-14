'use client'
import Link from 'next/link'
import classNames from 'classnames'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export default function DropdownItem({
  href,
  children
}: {
  href: string
  children: ReactNode
}) {
  const pathname = usePathname() ?? ''
  const device = pathname.split('/')[2]

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
