import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialMedia from "../components/SocialMedia";
import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center min-h-screen bg-slate-800"
    >
      <Header />
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
        <SocialMedia
          icon="/icons/email.png"
          link="home.branko@gmail.com"
          name="email"
        />
      </div>
      <div className="px-4 m-8 rounded-full w-fit bg-slate-500 text-slate-200 hover:bg-slate-700">
        <NavLink to="/">Back to overview</NavLink>
      </div>

      <Footer />
    </motion.div>
  );
}
