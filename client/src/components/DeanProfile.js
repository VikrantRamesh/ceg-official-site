import React from 'react';

const DeanProfile = () => {
  return (
    <div>
    <h1 className="lg:text-4xl text-2xl font-medium bg-red-700 py-6 px-6 pl-10 text-white text-left" style={{letterSpacing: '0.1rem'}}>
           DEAN'S MESSAGE
    </h1>

    <div className="flex flex-col items-start justify-center p-6 pl-10 bg-gradient-to-b from-red-300 to-red-100">
        <p className="mb-6 mt-4 text-md text-black text-left max-w-2xl tracking-wide font-normal font-sans">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum quis ultrices fames risus rutrum mauris habitasse metus. Orci eget adipiscing enim luctus, faucibus hendrerit. Tristique fusce mi cubilia augue aptent neque porttitor. Primis venenatis vivamus et dolor aliquam at. Nisi montes nisl quisque hendrerit eleifend netus eleifend. Eleifend iaculis erat sem turpis ornare dignissim. Laoreet eget eu lacinia magna vestibulum magna quam non maximus.
        </p>
        <div className="text-left mr-12">
                <p className="text-lg font-semibold text-black">Dr. K.S. Easwarakumar</p>
                <p className="text-red-700">Dean</p>
        </div>
        <div className="flex  w-full">
            <button className="my-4 px-4 py-2 bg-slate-50 text-zinc-900 text-sm rounded-md hover:bg-red-300 transition">
                Know More
            </button>
           
        </div>
    </div>
</div>
  );
};

export default DeanProfile;
