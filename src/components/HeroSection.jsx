import profilePic from "../assets/photo-shot.png"
import { motion } from "framer-motion"
const containerVariant = {
    hidden: { opacity: 0 , x: -100},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }
    }
}

const childVariant = {
     hidden: {opacity: 0, x: -100},
     visible: {opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
}
const HeroSection = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    <motion.img  src={profilePic} alt="profile" className="border border-stone-900 rounded-3xl " initial={{ x: 100 , opacity: 0}} animate={{x: 0 , opacity: 1}} transition={{ duration: 0.5, delay: 0.5}} width={650} height={650}/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <motion.div className="flex flex-col items-center lg:items-start mt-10" initial="hidden" animate="visible" variants={containerVariant}>
                    <motion.h2 variants={childVariant} className="pb-2 text-4xl tracking-tighter lg:text-8xl capitalize ">
                        Sourav Mesta
                    </motion.h2>
                    <motion.span variants={childVariant} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
                        Full stack developer
                    </motion.span>
                    <motion.p  variants={childVariant} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                        Full-stack developer with hands-on experience in building practical web applications using the MERN stack. Skilled in creating responsive user interfaces, integrating APIs, and working with real-time and image processing tools. Focused on writing clean code, learning new technologies, and delivering user-friendly solutions.                    </motion.p>
                    <motion.a variants={childVariant} href="/resume.pdf" targer="_blank" rel="noopener noreferre" download className="bg-white rounded-full p-4 text-sm text-stone-800">
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection