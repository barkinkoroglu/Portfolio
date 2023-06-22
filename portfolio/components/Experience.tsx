import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Manisa from './works/Manisa';

function Experience() {
  const [work, setWorkManisa] = useState(true);

  const handleManisa = () => {
    setWorkManisa(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul onClick={handleManisa}>
          <li
            className={`${
              workManisa
                ? 'border-l-textGreen text-textGreen'
                : 'text-hoverColor border-l-textDark'
            } border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Manisa Metropolitan Municipality
          </li>
        </ul>
        {workManisa && <Manisa />}
      </div>
    </section>
  );
}

export default Experience;
