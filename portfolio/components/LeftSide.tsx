import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai';
function LeftSide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/barkinkoroglu" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            {' '}
            <AiOutlineGithub />{' '}
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://www.linkedin.com/in/barkinkoroglu/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            {' '}
            <AiFillLinkedin />{' '}
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a
          href="https://www.instagram.com/koroglu.barkin/?hl=en"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            {' '}
            <AiOutlineInstagram />{' '}
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
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
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
}

export default LeftSide;
