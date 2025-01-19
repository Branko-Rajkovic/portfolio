import { motion } from "framer-motion";
import Skills from "../components/Skills";
import SocialMedia from "../components/SocialMedia";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center min-h-screen bg-slate-800"
    >
      <Header />
      <div className="flex items-center">
        <Skills
          title="Coding Skills"
          skillList="Javascript HTML CSS Tailwind React Node Solidity"
        />
        <Skills title="Languages" skillList="Serbian English Dutch" />
      </div>

      <div className="m-4 rounded-lg w-fit">
        <SocialMedia
          icon="/icons/icons8-github.png"
          link="https://github.com/Branko-Rajkovic"
          name="GitHub"
        />
        <SocialMedia
          icon="/icons/icons8-linkedin-48.png"
          link="www.linkedin.com/in/branko-rajkovic-755804153"
          name="LinkedIn"
        />
      </div>

      <Footer />
    </motion.div>
  );
}
