import { CONTACT } from "../constants"; 
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; 

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>
        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4">
              {CONTACT.address}
            </motion.p>
            <motion.p 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: 100 }}
             transition={{ duration: 1 }}
             className="my-4">
            <a href="#" className="border-b">
              {CONTACT.email}
            </a>
             </motion.p>
        </div>
        <div className="flex justify-center mt-8">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="cv/Megha_Hubli_cv.pdf"
          download
          className="bg-neutral-900 text-white px-6 py-3 rounded-lg shadow-lg font-semibold">
          Download CV
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;