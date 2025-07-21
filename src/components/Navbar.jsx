import logo from "../assets/SM.webp" 
import { FaLinkedin , FaGithub , FaInstagram , FaTwitter } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={50} height={50} alt="logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justity-center gap-4 text-2xl">
            <a href="https//www.linkedIn.com/in/your-linkedin-profile" 
               target="_blank"
               rel="noogenre noreferrer"
               aria-label="LinkedIn">
                <FaLinkedin/>
            </a>
            <a href="https//www.github.com/in/your-github-profile" 
               target="_blank"
               rel="noogenre noreferrer"
               aria-label="GitHub">
                <FaGithub/>
            </a>
            <a href="https//www.instagram.com/in/your-instagram-profile" 
               target="_blank"
               rel="noogenre noreferrer"
               aria-label="Instagram">
                <FaInstagram/>
            </a>
            <a href="https//www.twitter.com/in/your-linkedin-profile" 
               target="_blank"
               rel="noogenre noreferrer"
               aria-label="twitter">
                <FaTwitter/>
            </a>

        </div>
    </nav>
  )
}

export default Navbar