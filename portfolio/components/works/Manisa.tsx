import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';
function Manisa() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Computer Engineer{' '}
        <span className="text-textGreen tracking-wide">#MMM</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2022 - July 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {''}I had responsibilities regarding the testing of software
          applications such as EBYS (Electronic Document Management System) and
          e-KLM (electronic Public Leadership Model). Within this scope, I
          undertook tasks such as preparing software test plans specifically for
          EBYS and e-KLM.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {''}Furthermore, I actively engaged in tasks such as creating test
          scenarios and conducting tests with meticulous attention to detail. I
          diligently identified and recorded any discovered errors. It was
          crucial to document all identified errors for subsequent analysis and
          improvement.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {''}Another significant aspect of my role was reporting errors to the
          respective teams and stakeholders. By providing comprehensive error
          reports, I contributed to the overall quality assurance efforts and
          supported effective communication for timely resolutions.
        </li>
      </ul>
    </motion.div>
  );
}

export default Manisa;
