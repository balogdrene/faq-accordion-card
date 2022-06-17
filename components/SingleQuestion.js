import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"

export default function SingleQuestion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  function openQuestionHandler() {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <>
      <motion.div
        id="question"
        initial={false}
        onClick={openQuestionHandler}
        className={`flex justify-between py-3 cursor-pointer  ${
          isOpen ? "font-semibold" : "font-normal"
        } ${isOpen ? "text-veryDarkSaturatedBlue" : "text-darkGrayishBlue"}`}
      >
        {question}
        {isOpen ? (
          <FaChevronDown className="text-softRed" />
        ) : (
          <FaChevronUp className="text-softRed" />
        )}
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className="py-2 font-normal text-darkGrayishBlue"
            id="answer"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.1, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {answer}
          </motion.section>
        )}
      </AnimatePresence>
      <hr />
    </>
  )
}
