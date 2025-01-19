import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-auto bg-slate-800"
    >
      <div className="text-6xl text-red-400">Oops, something went wrong!</div>
      <div className="px-2 py-1 rounded-full bg-slate-500 text-slate-200 hover:bg-slate-700">
        <NavLink to="/">Home</NavLink>
      </div>

      <Footer />
    </motion.div>
  );
}
