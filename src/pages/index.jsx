/* eslint-disable space-before-function-paren */
// import Head from 'next/head'
// import Image from 'next/image'
import { Grid, Container } from '@nextui-org/react'

import Layout from '../components/Layout/layout'

import Presentation from '../components/Film/Presentation'
import { motion } from 'framer-motion'

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Layout title={'Home'} >

        {/* <Grid.Container css={{ pt: '76px', userSelect: 'none', zIndex: '1000' }}>

        </Grid.Container> */}
        <Presentation />
      </Layout>
 <Container gap={0} css={{ h: '100%' }}>
        <Grid.Container>
          <Grid css={{ bg: '$blue400', h: '100vh', w: '100%', userSelect: 'none' }}
            as={motion.div}

            initial={{ opacity: 0, y: -1 }}
            whileInView={{
              opacity: 1,
              y: 1,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 1.55
              }
            }}
            viewport={{ once: true }}
          >
            Blue
          </Grid>
          <Grid css={{ bg: '$gray100', h: '100vh', w: '100%', userSelect: 'none' }}
            as={motion.div}

            initial={{ opacity: 0, y: -1 }}
            whileInView={{
              opacity: 1,
              y: -1,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 1.55
              }
            }}
            viewport={{ once: true }}
          >
            gray
          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}
