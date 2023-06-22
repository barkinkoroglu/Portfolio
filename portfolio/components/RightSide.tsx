import React from 'react';

function RightSide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-24 text-textLight">
      <a href="mailto:barkin_45_99@hotmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen">
          barkin_45_99@hotmail.com
        </p>
      </a>
      <div className="w-[2px] h-32 bg-textDark inline-flex"></div>
    </div>
  );
}

export default RightSide;
