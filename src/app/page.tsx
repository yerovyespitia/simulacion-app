import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <section className='flex flex-col items-center gap-2 mb-10'>
        <h1 className='text-2xl font-bold'>Simulación</h1>
        <h2>Generador congruencial lineal / mixta</h2>
        <p>Presentado por: Andrés Álvarez y Luis Espitia</p>
      </section>

      <section className='flex gap-2'>
        <Link href={'/congruencial-lineal'}>
          <button className='bg-red-800 p-3 rounded-lg text-white'>
            Generador congruencial lineal
          </button>
        </Link>
        <Link href={"/congruencial-mixto"}>
          <button className='bg-blue-800 p-3 rounded-lg text-white'>
            Generador congruencial mixto
          </button>
        </Link>
      </section>
    </main>
  )
}
