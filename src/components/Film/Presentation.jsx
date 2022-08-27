import { Text, Button, Row } from '@nextui-org/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Lpr from './Lpr'

// eslint-disable-next-line space-before-function-paren
export default function PR() {
  const [count, setCount] = useState(0)
  const TN = () => setCount(count + 1)

  return (
    <>
      <Lpr>
        <AnimatePresence>
          {count === 0 && (
            setTimeout(() => {
              setCount(1)
              clearTimeout()
            }, 7015),
            <Text onClick={TN}
              as={motion.h1} css={{ position: 'absolute', fs: '7vw', '@xs': { fs: '4vw' } }}
              key={count}
              initial={{ opacity: 0, scale: 0.1, transition: { duration: 1 } }}
              animate={{ opacity: 1, scale: 2, transition: { duration: 2, delay: 2 } }}
              exit={{ opacity: 0, scale: 2.4, transition: { delay: 0, duration: 2 } }}>#HotelesRasil </Text>)}

          {count === 1 && (
            <Text css={{ fs: '7vw', '@xs': { fs: '4vw' }, position: 'absolute', pt: '10px' }}
              as={motion.h1}
              key={count && setTimeout(() => {
                setCount(1)
                clearTimeout()
              }, 7015)}
              initial={{ opacity: 0, scale: 0.0001, transition: { duration: 1, delay: 0 } }}
              animate={{ opacity: 1, scale: 2, transition: { duration: 2, delay: 2 } }}
              exit={{ opacity: 0, scale: 2.8, transition: { duration: 2, delay: 0 } }}
            >
              #RasilLOGO
              <Text css={{ d: 'flex', justifyItems: 'center', justifyContent: 'center', fs: '3vw', overflow: 'auto', '@xs': { fs: '2vw' } }}>#ComingSoon</Text>
              <Row justify='center' >
                <Button size="xs" css={{
                  position: 'absolute',
                  mt: '9px',
                  ml: '4px',
                  '@sm': {
                    ml: '10px',
                    mb: '10px',
                    mt: '20px'
                  }
                }}>Reserva</Button></Row>
            </Text>
          )}

        </AnimatePresence>
      </Lpr>
    </>
  )
}
