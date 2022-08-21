import { Grid, Link, Text } from '@nextui-org/react'
import NLink from 'next/link'

// eslint-disable-next-line space-before-function-paren
export default function LinkPC() {
  return (
    <>

      <Grid sm={0.1} xs={0} as='li' css={{ fs: '1.15rem', fontWeight: '$semibold' }}>
        <NLink href='/'>
          <Link block color='primary' >Home</Link>
        </NLink>
      </Grid >

      <Grid sm={0.1} xs={0} as='li' css={{ fs: '1.15rem', fontWeight: '$semibold' }}>
        <NLink href='/About'>
          <Link block color='primary'>About</Link>
        </NLink>
      </Grid >

      <Grid sm={0.6} xs={0} as='li' css={{ fs: '1.15rem', fontWeight: '$semibold' }}>
        <NLink href='/Habitaciones'>
          <Link block color='primary'>Habitaciones</Link>
        </NLink>
      </Grid >

      <Grid sm={1.2} xs={0} as='li' css={{ fs: '1.2rem', fontWeight: '$bold' }}>
        <NLink href='/Reserva'>
          <Link block color='primary'>Reserva</Link>
        </NLink>
      </Grid >

    </>
  )
}
