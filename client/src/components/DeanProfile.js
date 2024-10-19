import React from 'react';

const DeanProfile = () => {
  return (
    <div>
    <hr className="h-0.5 mx-auto border-0 bg-white" />
    <h1 className="lg:text-4xl text-2xl font-medium bg-slate-700 py-4 px-6 pl-10 text-white text-left" style={{fontFamily: "Poppins", letterSpacing: '0.2rem'}}>
           DEAN'S MESSAGE
    </h1>
    <hr className="h-0.5 mx-auto border-0 bg-white" />
    <div className="flex flex-col items-start justify-center p-6 pl-10 bg-gradient-to-b from-slate-700 to-slate-600">
        <p className="mb-6 mt-4 text-md text-white text-left max-w-2xl tracking-wide font-normal">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum quis ultrices fames risus rutrum mauris habitasse metus. Orci eget adipiscing enim luctus, faucibus hendrerit. Tristique fusce mi cubilia augue aptent neque porttitor. Primis venenatis vivamus et dolor aliquam at. Nisi montes nisl quisque hendrerit eleifend netus eleifend. Eleifend iaculis erat sem turpis ornare dignissim. Laoreet eget eu lacinia magna vestibulum magna quam non maximus.
        </p>
        <div className="text-left mr-12">
                <p className="text-lg font-semibold text-white">Dr. K.S. Easwarakumar</p>
                <p className="text-gray-400">Dean</p>
        </div>
        <div className="flex  w-full">
            <button className="my-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Know More
            </button>
           
        </div>
    </div>
</div>
  );
};

export default DeanProfile;
