'use client'
import React, { useState } from 'react'

const CongruencialMixto = () => {
  const [multiplicador, setMultiplicador] = useState('')
  const [incremento, setIncremento] = useState('')
  const [modulo, setModulo] = useState('')
  const [secuenciaGenerada, setSecuenciaGenerada] = useState<number[]>([])
  const semilla = 123456789
  const cantidadNumeros = 10

  const generarSecuencia = () => {
    if (!multiplicador || !incremento || !modulo) {
      alert('Por favor ingresa todos los valores.')
      return
    }

    // Verificar que el incremento sea impar y no divisible por el módulo
    if (
      parseInt(incremento) % 2 === 0 ||
      parseInt(incremento) % parseInt(modulo) === 0
    ) {
      alert(
        'El incremento debe ser un número impar y no divisible por el módulo.'
      )
      return
    }

    let secuencia = []
    let xn = semilla

    for (let i = 0; i < cantidadNumeros; i++) {
      let numeroGenerado =
        (parseInt(multiplicador) * xn + parseInt(incremento)) % parseInt(modulo)
      secuencia.push(numeroGenerado)
      xn = numeroGenerado
    }

    setSecuenciaGenerada(secuencia)
  }

  return (
    <main className='flex min-h-screen flex-col items-center p-8 md:p-24'>
      <h1 className='text-2xl font-bold mb-1'>Generador Congruencial Mixto</h1>
      <h3 className='text-lg mb-5 text-gray-300'>Se recomienda el uso de números de más de dos dígitos</h3>
      <section className='flex flex-col gap-2 mb-10'>
        <section className='flex gap-2 mb-2'>
          <label htmlFor=''>Multiplicador</label>
          <input
            type='number'
            className='rounded-md bg-gray-300 outline-none font-medium text-black'
            value={multiplicador}
            onChange={(e) => setMultiplicador(e.target.value)}
          />
        </section>

        <section className='flex gap-2 mb-2'>
          <label htmlFor=''>Incremento</label>
          <input
            type='number'
            className='rounded-md bg-gray-300 outline-none font-medium text-black'
            value={incremento}
            onChange={(e) => setIncremento(e.target.value)}
          />
        </section>

        <section className='flex gap-2 mb-2'>
          <label htmlFor=''>Módulo</label>
          <input
            type='number'
            className='rounded-md bg-gray-300 outline-none font-medium text-black'
            value={modulo}
            onChange={(e) => setModulo(e.target.value)}
          />
        </section>

        <p className='text-gray-300'>
          La semilla definida por defecto es 123456789
        </p>
        <p className='text-gray-300'>
          La cantidad de números a generar por defecto son 10
        </p>

        <button
          onClick={generarSecuencia}
          className='bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded'
        >
          Generar Secuencia
        </button>

        {secuenciaGenerada.length > 0 && (
          <section className='mt-5'>
            <h2 className='text-xl font-bold mb-3'>Secuencia Generada</h2>
            <ul className='flex flex-col gap-2'>
              {secuenciaGenerada.map((numero, index) => (
                <li key={index}>{numero}</li>
              ))}
            </ul>
          </section>
        )}
      </section>
    </main>
  )
}

export default CongruencialMixto
