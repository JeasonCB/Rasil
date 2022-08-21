import { Grid, Link } from '@nextui-org/react'
import NLink from 'next/link'
const LinkMobile = () => {
  return (
    <>
      <Grid sm={0} as='ul' css={{ w: '50%', pl: '1.4rem' }}>
        <Grid as='li'>
          <NLink href='/'>
            <Link css={{ fontWeight: '$semibold' }}>Home</Link>
          </NLink>
        </Grid>

        <Grid as='li'>
          <NLink href='/About'>
            <Link css={{ fontWeight: '$semibold' }} >About</Link>
          </NLink>
        </Grid>

        <Grid as='li'>
          <NLink href='/Habitaciones'>
            <Link css={{ fontWeight: '$semibold' }}>Habitaciones</Link>
          </NLink>
        </Grid>

        <Grid as='li'>
          <NLink href='/Hoteles'>
            <Link css={{ fontWeight: '$semibold' }}>Hoteles</Link>
          </NLink>
        </Grid>

      </Grid>

    </>
  )
}

export default LinkMobile
