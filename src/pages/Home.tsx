
import Nav from '../components/nav';
import { motion } from "framer-motion"
import Typewriter from '../components/typewriter';

/**
 * (this comment is shown to the user when we have a hover on the composant name in another composant)
 * composant de la page d'accueil
 */

function Home() {

  return (
    <>
       <main className="flex flex-col items-center justify-center gap-5 px-5 py-10"></main>
      <Nav />
      <div className='flex gap-5 px-5 py-10'>
        <div className='w-1/2'>
          <img src='../assets/application_developper.png' width={5000} height={5000} />
        </div>
        <div className='w-1/2'>
          <Typewriter text=" My Dream In My Own Words." delay={100} />
          <p className='justify-items-center'>A passionate computer application developer originally from Tibet. I have a deep interest in programming languages and software development, driven by my curiosity to create innovative solutions that can positively impact our world. My journey in computer applications began with a fascination for technology and a desire to harness its power to solve real-world challenges. I am dedicated to mastering various programming languages and frameworks to build robust and user-friendly applications. Beyond coding, I am also enthusiastic about exploring how technology can contribute to the cultural richness and development of Tibet. </p>
        </div>        
      </div>
      <div className="w-screen mt-10 text-5xl">
        <h1>Languages that i speak</h1>
      </div>
      <div className='flex flex-row w-screen gap-40 m-10'>
      <motion.div />
        <div>
          <h1 className='w-1/4 text-8xl'> 01</h1>
          <h3>Tibetan(Maternal language)</h3>
        </div>
        <div>
          <h1 className='w-1/4 text-8xl'> 02</h1>
          <h3>French</h3>
        </div>
        <div>
          <h1 className='w-1/4 text-8xl '> 03</h1>
          <h3>English</h3>
        </div>
        <div>
          <h1 className='w-1/4 text-8xl '> 04</h1>
          <h3>Hindi</h3>
        </div>
      </div>
    </>
  )
}

export default Home
