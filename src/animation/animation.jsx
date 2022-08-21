export default {
  title: 'Animation',
  perro: {
    initial: { x: '-100vh' },
    animate: { x: 0, transition: { duration: 2 } }
  },
  rotati: {
    rotate: 90,
    transition: {
      repeat: Infinity,
      repeatDelay: 2,
      duration: 1
    }
  }
  //   as={ motion.h1 } css={{ position: 'absolute', fs: '4vw' }}
  // key = { count && setTimeout(() => {
  //   console.log(count)
  // }, 2000)}
  // initial = {{ opacity: 0, scale: 0.1 }}
  // animate = {{ opacity: 1, scale: 2, transition: { duration: 1, delay: 50 } }}
  // exit = {{ opacity: 0, scale: 0.1, transition: { duration: 2 } }}
}
