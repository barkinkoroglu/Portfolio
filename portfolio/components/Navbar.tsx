import { logo } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai';
export const Navbar = () => {
  const ref = useRef<string | any>('');
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = (e: any) => {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  };
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setShowMenu(false);
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetID = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetID);
    elem?.scrollIntoView({ behavior: 'smooth' });

    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  };
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image className="w-14" src={logo} alt="logo" />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#home"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#about"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-textGreen">01. {''}</span>
                About
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#experience"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className="text-textGreen">02. {''}</span>
                Experience
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#project"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-textGreen">03. {''}</span>
                Project
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#contact"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className="text-textGreen">04. {''}</span>
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/Barkin_Koroglu_CV.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen tex[13px] border border-textGreen  hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Small Icon */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300" />
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300" />
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300" />
        </div>
        {showMenu && (
          <div
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
          >
            <motion.div
              onClick={() => setShowMenu(false)}
              initial={{ x: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4" />
              <div>
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#home"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: 'easeIn' }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#about"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: 'easeIn' }}
                    >
                      <span className="text-textGreen">01. {''}</span>
                      About
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#experience"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: 'easeIn' }}
                    >
                      <span className="text-textGreen">02. {''}</span>
                      Experience
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#project"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: 'easeIn' }}
                    >
                      <span className="text-textGreen">03. {''}</span>
                      Project
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#contact"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: 'easeIn' }}
                    >
                      <span className="text-textGreen">04. {''}</span>
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/Barkin_Koroglu_CV.pdf" target="_blank">
                  <motion.button
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.6, ease: 'easeIn' }}
                    className="px-4 py-2 my-4 rounded-md text-textGreen tex[13px] border border-textGreen  hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>

                <div>
                  <div className="inline-flex  items-center justify-center w-full py-6 gap-4">
                    <motion.a
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.7, ease: 'easeIn' }}
                      href="https://github.com/barkinkoroglu"
                      target="_blank"
                    >
                      <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        {' '}
                        <AiOutlineGithub />{' '}
                      </span>
                    </motion.a>
                    <motion.a
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.8, ease: 'easeIn' }}
                      href="https://www.linkedin.com/in/barkinkoroglu/"
                      target="_blank"
                    >
                      <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        {' '}
                        <AiFillLinkedin />{' '}
                      </span>
                    </motion.a>
                    <motion.a
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.9, ease: 'easeIn' }}
                      href="https://www.instagram.com/koroglu.barkin/?hl=en"
                      target="_blank"
                    >
                      <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        {' '}
                        <AiOutlineInstagram />{' '}
                      </span>
                    </motion.a>
                    <motion.a
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 1.0, ease: 'easeIn' }}
                      href="https://www.youtube.com/channel/UCCdIn-CpwSxagYci7beGadQ"
                      target="_blank"
                    >
                      <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        {' '}
                        <AiOutlineYoutube />{' '}
                      </span>
                    </motion.a>
                  </div>
                </div>
                <motion.a
                  href="mailto:barkin_45_99@hotmail.com"
                  className="text-sm w-72 tracking-widest text-textGreen text-center mt-4 "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, ease: 'easeIn' }}
                >
                  {' '}
                  <p>barkin_45_99@hotmail.com</p>{' '}
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};
