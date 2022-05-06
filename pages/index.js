import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home (props) {
  const router = useRouter()

  useEffect(() => router.replace('/destiny2/desktop/emblems'), [])

  return null
}
