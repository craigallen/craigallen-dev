import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Craig Allen</a>
      </Link>
    </h2>
  )
}
