import { Spin } from 'antd'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-24">
      <h1>Coming Soon</h1>
      <Spin />
    </main>
  )
}
