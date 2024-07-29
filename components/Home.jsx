import FAQ from './FAQ'
import GetStarted from './GetStarted'
import JoinUs from './JoinUs'
import MicroAppStorePage from './MicroAppStorePage'
import Showcases from './Showcases'
import Snippets from './Snippets'
import Wall from './Wall'

const Home = () => {
  return (
    <>
      <Snippets/>
      <MicroAppStorePage/>
      <FAQ/>
      <Showcases/>
      <GetStarted/>
      <Wall/>
      <JoinUs/>
    </>
  )
}

export default Home