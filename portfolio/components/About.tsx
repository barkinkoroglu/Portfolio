import { profilephoto } from '@/public/assets';
import SectionTitle from './SectionTitle';
import { AiFillThunderbolt } from 'react-icons/ai';
import Image from 'next/image';
function About() {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello, I&apos;m Barkın Köroğlu, a computer engineer. I graduated
            from Yaşar University Computer Engineering in June 2023 with 3.51
            /4.00 GPA. I am committed to improving my skills in both front-end
            and back-end development, constantly seeking opportunities to
            enhance my proficiency. With a passion for continuous learning, I
            strive to stay updated with the latest technologies and trends in
            the field.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              React.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              Redux.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              C
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              Java
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              SQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              Firebase
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              HTML
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              ROS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              C#
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              Unity
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />{' '}
              </span>
              Flask
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profilephoto}
                alt="profile"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/10 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden lgl:inline-flex absolute -bottom-4 -right-4  w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
