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
    </>
  )
}
