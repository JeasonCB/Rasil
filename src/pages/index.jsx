/* eslint-disable space-before-function-paren */
// import Head from 'next/head'
// import Image from 'next/image'

import Layout from '../components/Layout/layout'

import Presentation from '../components/Film/Presentation'
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
