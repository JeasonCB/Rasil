import { Grid } from '@nextui-org/react'
import { motion, AnimatePresence } from 'framer-motion'

const Lpr = ({ children }) => {
  return (
    <AnimatePresence>
      <Grid
        justify='center'
        alignItems='center'
        alignContent='center'
        css={{ h: '101.1vh', w: '100%', d: 'flex', userSelect: 'none', overflow: 'clip', pb: '80px', '@xs': { pb: '80px', h: '105vh' }, '@sm': { pb: '90px', h: '101.1vh' } }}
        as={motion.div}>
        {children}
      </Grid>
    </AnimatePresence>
  )
}

export default Lpr
