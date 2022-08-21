// Settimeout para cambiar cada 5 segundos el Background y el texto.
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
// eslint-disable-next-line no-unused-vars
import { Col, Row, Text, Container, Grid, Collapse, Link } from '@nextui-org/react'
// eslint-disable-next-line no-unused-vars
import animation from '../../animation/animation'
import { useState } from 'react'
import NLink from 'next/link'
import sea from '../../../public/s.jpg'
import LinkC from './LinkMobile'
import LinkPC from './LinkPC'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      {/* /Condicional DropDown/ */}
      {isOpen &&
        <>
          <Grid sm={0} id='Blur-Layer' css={{ bgBlur: '', zIndex: '11', position: 'fixed', w: '100%', h: '100vh', bgColor: 'rgb(255,255,255,0.2)' }} onTouchMove={toggle} ></Grid>
          <Grid.Container xs={12} sm={0} as='ul' id='Dropdown' css={{ d: 'grid', position: 'fixed', zIndex: '12', h: '100vh', w: '55%' }}>
            <Col span={'12'} offset={'0'}>
              <Row wrap='wrap' id='Row' >
                <Container id='Container' xs={12} css={{ h: '100vh', w: '100%', bg: 'white', pt: '8px', pl: '5%', alignItems: 'center', px: '4%' }} >
                  <Row align='center' id='Row'>
                    <Grid.Container id='Grid-Container' xs={12} css={{ d: 'grid' }}>
                      <Grid sm={0} onClick={toggle} id='Grid-Pointer' css={{ d: 'grid', alignItems: 'center', justifyContent: 'center', pr: '12px', cursor: 'pointer' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      </Grid>
                      <Grid xs={3} css={{ userSelect: 'none' }}>
                        <Text h2>Menu</Text></ Grid>
                    </Grid.Container></Row>
                  <Col offset={0} >
                    <Collapse.Group animated={false} css={{ userSelect: 'none' }} >
                      <Collapse css={{}} title="Option A" expanded>
                        <LinkC />
                      </Collapse>
                    </Collapse.Group>
                  </Col>
                </Container>
              </Row>
            </Col>
          </Grid.Container>
        </>
      }

      {/* // NavBar */}
      <Grid.Container
        id='Contenedor-menu-mobile'
        gap={1}
        css={{ p: '$4', userSelect: 'none', bs: '$sm', bgBlur: '', position: 'fixed', zIndex: '10', boxShadow: '$xs', bg: 'rgb(255,255,255,0.9)', bbrr: '$xl', bblr: '$xl', '@md': { pt: '20px' } }}
        as={motion.nav}
        key={'nav'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.54, delay: 0.44 }}
      >

        <Col>
          <Row>
            <Grid as='ul' justify='space-between' alignContent='center' id='Menú Mobile' xs={12} css={{ zIndex: '10', position: 'relative' }}>

              <Grid as='li' sm={0} css={{ cursor: 'pointer' }} onClick={toggle}>
                <Text h3 color="primary">Menu</Text>
              </Grid>

              <Grid as='li' sm={5} css={{ ml: '4px' }}>
                <Text h3>Logo</Text>
              </Grid>

              <Grid sm={0} as='li'>
                <NLink href='/reserva'>
                  <Link><Text h3 color='primary'>Reserva</Text></Link>
                </NLink>
              </Grid>
              <LinkPC />
            </Grid>
          </Row>
        </Col>
      </Grid.Container>

    </>
  )
}

export default Nav
