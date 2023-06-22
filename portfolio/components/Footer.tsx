import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai';
function Footer() {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://github.com/barkinkoroglu" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
          {' '}
          <AiOutlineGithub />{' '}
        </span>
      </a>
      <a href="https://www.linkedin.com/in/barkinkoroglu/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
          {' '}
          <AiFillLinkedin />{' '}
        </span>
      </a>
      <a href="https://www.instagram.com/koroglu.barkin/?hl=en" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
          {' '}
          <AiOutlineInstagram />{' '}
        </span>
      </a>
      <a
        href="https://www.youtube.com/channel/UCCdIn-CpwSxagYci7beGadQ"
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
          {' '}
          <AiOutlineYoutube />{' '}
        </span>
      </a>
    </div>
  );
}

export default Footer;
