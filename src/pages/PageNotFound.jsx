import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import clouds from "/images/clouds.png";

export default function PageNotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-800"
    >
      <div
        className="flex items-center w-screen bg-cover min-h-96"
        style={{ backgroundImage: `url(${clouds})` }}
      >
        <div className="text-6xl font-bold text-red-500">
          Oops, page not found! 404 🚫
        </div>
      </div>
      <div className="px-4 m-8 rounded-full w-fit bg-slate-500 text-slate-200 hover:bg-slate-700">
        <NavLink to="/">Home</NavLink>
      </div>
      <Footer />
    </motion.div>
  );
}
