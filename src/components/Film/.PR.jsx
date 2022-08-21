import { Grid, Text } from '@nextui-org/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

// eslint-disable-next-line space-before-function-paren
export default function PR() {
  const [count, setCount] = useState(0)

  if (count === 0) {
    setTimeout(() => {
      setCount(1)
    }, 2500)
    console.log(count)
    return (
      <>
        <Grid justify='center' alignItems='center' alignContent='center' css={{ h: '100vh', w: '100%', bg: 'rgb(234,230,160)', d: 'flex' }}>
          <AnimatePresence>
            {count === 0 && (
              <Text
                as={motion.h1} css={{ position: 'absolute', fs: '4vw' }}
                key={count}
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 2, transition: { duration: 1, delay: 0 } }}
                exit={{ opacity: 0, scale: 0.1, transition: { duration: 1.5 } }}>#YourBussines </Text>)}
          </AnimatePresence>
        </Grid>
      </>
    )
  } if (count === 1) {
    console.log(count)
    setTimeout(() => {
      setCount(2)
      return () => clearTimeout()
    }, 5000)
    return (
      <>
        <Grid justify='center' alignItems='center' alignContent='center' css={{ h: '100vh', w: '100%', bg: 'rgb(234,230,160)', d: 'flex' }}>
          <AnimatePresence>
            {count === 1 && (
              <Text css={{ fs: '4vw' }}
                as={motion.h1}
                key={count}
                initial={{ opacity: 0, scale: 0.0001 }}
                animate={{ opacity: 1, scale: 2 }}
                transition={{ duration: 2, delay: 0.5 }}
                exit={{ opacity: 0, scale: 0.0001 }}
              >
                #YourLOGO
                <Text css={{ d: 'flex', justifyItems: 'center', justifyContent: 'center', fs: '1.6vw' }}>#ComingSoon</Text>
              </Text>
            )}
          </AnimatePresence>
        </Grid >
        {console.log(count)}
      </>
    )
  }
}
