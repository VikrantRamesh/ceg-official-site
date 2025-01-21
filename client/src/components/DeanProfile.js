import React from 'react';

const DeanProfile = () => {
  return (
    <div>
    <h1 className="lg:text-4xl text-2xl font-bold bg-sky-800 py-7 px-6 pl-10 font-serif text-white text-left" style={{letterSpacing: '0.1rem'}}>
           DEAN'S MESSAGE
    </h1>

    <div className="flex flex-col items-start justify-center p-6 pl-10">
        <p className="mb-6 mt-4 text-md text-black text-left max-w-2xl tracking-wide font-normal font-sans">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum quis ultrices fames risus rutrum mauris habitasse metus. Orci eget adipiscing enim luctus, faucibus hendrerit. Tristique fusce mi cubilia augue aptent neque porttitor. Primis venenatis vivamus et dolor aliquam at. Nisi montes nisl quisque hendrerit eleifend netus eleifend. Eleifend iaculis erat sem turpis ornare dignissim. Laoreet eget eu lacinia magna vestibulum magna quam non maximus.
        </p>
        <div className="text-left mr-12">
                <p className="text-lg font-semibold text-black">Dr. K.S. Easwarakumar</p>
                <p className="text-red-600">Dean</p>
        </div>
        <div className="flex  w-full">
            <button className="my-4 px-4 py-2 bg-sky-800 text-beige font-light text-sm rounded-md hover:bg-teal transition">
                Know More
            </button>
           
        </div>
    </div>
</div>
  );
};

export default DeanProfile;
