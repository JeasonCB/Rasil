/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Card, Col, Row, Text, Container, Grid, StyledCard, StyledContainer, StyledGridContainer, StyledGridItem, Spacer } from '@nextui-org/react'
import animation from '../../animation/animation'

// Settimeout para cambiar cada 5 segundos el Background y el texto.

const Watch = () => {
  return (
    <>
    <Container gap={3}>

      <Grid offset={6}>
        <hr />
<Spacer y={5}></Spacer>
          <motion.div animate={{ rotate: [0, 90, 180, 270, 360] }}
  transition={{ duration: [20], times: [0, 0.1, 0.1, 0.5], repeat: Infinity, ease: [0.15, 1.21, -0.05, 0.99] }} className=' border-4 border-solid border-black/50 h-72 w-72 rounded-[50%] border-l-yellow-300'></motion.div>

      </Grid>
    </Container>
    </>
  )
}

export default Watch
