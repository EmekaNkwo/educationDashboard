"use client"

import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
export default function Home() {
  const path = usePathname()
  const { push } = useRouter()
  console.log(path);

  useEffect(() => {
    if (path === '/') {
      push('/teacher')
    }
  }, [path, push])
  return (
    <></>
  )
}
