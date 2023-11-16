"use client"

import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


export default function Home() {
  const path = usePathname()
  const { push } = useRouter()

  useEffect(() => {
    if (path === '/') {
      const currentOrigin = window.location.origin;
      sessionStorage.setItem("baseUrl", currentOrigin);
      push('/teacher')
    }



  }, [path, push])
  return (
    <></>
  )
}
