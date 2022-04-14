import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Coin, Gps, Help, LayoutGrid, Menu2, Settings, SteeringWheel, User, X } from 'tabler-icons-react';
import Logo from '../../assets/icons/logo';

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const [navOptions, setNavOptions] = useState([
    { name: 'Bid', link: '/bid', icon: Coin, active: window.location.pathname === '/bid' },
    { name: 'Track', link: '/track', icon: Gps, active: window.location.pathname === '/track' },
    { name: 'Drivers', link: '/drivers', icon: SteeringWheel, active: window.location.pathname === '/drivers' },
    { name: 'Dashboard', link: '/dashboard', icon: LayoutGrid, active: window.location.pathname === '/dashboard' },
  ]);

  const profileNavOptions = [
    { name: 'My Profile', link: '/profile', icon: User },
    { name: 'Help Center', link: '/help', icon: Help },
    { name: 'Account Settings', link: '/settings', icon: Settings },
  ];

  const setCurrentNav = (clickedNav) => {
    setNavOptions(
      navOptions.map((nav) => {
        if (nav.name === clickedNav) return { ...nav, active: true };
        return { ...nav, active: false };
      })
    );
  };

  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        <nav className="bg-white shadow lg:block hidden">
          <div className="mx-auto container px-6 py-2 lg:py-0">
            <div className="flex items-center justify-between">
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <Link to={'/'} className="flex items-center">
                  <Logo />
                  <h2 className="text-base text-gray-700 font-bold leading-normal pl-3">DELIWER</h2>
                </Link>
              </div>
              <div className="flex">
                <div className="flex md:mr-6 lg:mr-32">
                  {navOptions.map((nav) => (
                    <Link
                      to={nav.link}
                      key={nav.name}
                      className={`flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none transition duration-150 ease-in-out ${
                        nav.active ? 'border-b-2 border-b-indigo-700/50 bg-gray-100 text-indigo-700' : ''
                      }`}
                      onClick={() => setCurrentNav(nav.name)}
                    >
                      <span className="mr-2">
                        <nav.icon strokeWidth={1.5} className="w-full h-full" />
                      </span>
                      {nav.name}
                    </Link>
                  ))}
                </div>
                <div className="flex items-center">
                  <div className="ml-6 relative">
                    <div className="flex items-center relative" onClick={() => setProfile(!profile)}>
                      {profile && (
                        <ul className="p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 ">
                          {profileNavOptions.map((nav) => (
                            <li
                              key={nav.name}
                              className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal first:mt-0 mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center"
                            >
                              <Link to={nav.link}>
                                <div className="flex items-center">
                                  <nav.icon strokeWidth={1.5} className="w-4 h-4" />
                                  <span className="ml-2">{nav.name}</span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                        <img
                          className="rounded-full h-10 w-10 object-cover"
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png"
                          alt="logo"
                        />
                      </div>
                      <div className="cursor-pointer ml-2 text-gray-600">
                        <ChevronDown strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="bg-white shadow">
          <div className={`py-4 px-6 w-full flex lg:hidden justify-between items-center bg-white ${show ? 'fixed ' : ''}top-0 z-40`}>
            <div>
              <Logo />
            </div>
            {show ? '' : <h2 className="text-base text-gray-700 font-bold leading-normal">DELIWER</h2>}
            <div className="flex items-center">
              <div id="menu" className="text-gray-800" onClick={() => setShow(!show)}>
                {show ? '' : <Menu2 strokeWidth={1.5} />}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? 'w-full lg:hidden h-full absolute z-40  transform  translate-x-0'
                : 'w-full lg:hidden h-full absolute z-40  transform -translate-x-full'
            }
          >
            <div className="bg-gray-800 opacity-50 w-full h-full" onClick={() => setShow(!show)} />
            <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <Logo />
                          <h2 className="text-base text-gray-700 font-bold leading-normal ml-3">DELIWER</h2>
                        </div>
                        <div id="cross" className="text-gray-800" onClick={() => setShow(!show)}>
                          <X strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      {navOptions.map((nav) => (
                        <li className="text-gray-800 pt-8" key={nav.name}>
                          <Link
                            to={nav.link}
                            onClick={() => setShow(!show)}
                            className="cursor-pointer text-gray-700 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none transition duration-150 ease-in-out"
                          >
                            <div className="flex items-center">
                              <div className="w-6 h-6">
                                <nav.icon strokeWidth={1.5} className="w-full h-full" />
                              </div>
                              <p className="text-base ml-3 ">{nav.name}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full pt-4">
                    <div className="border-t border-gray-300">
                      <div className="w-full flex items-center justify-between pt-1">
                        <div className="flex items-center">
                          <img
                            alt="profile-pic"
                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                            className="w-8 h-8 rounded-md"
                          />
                          <p className=" text-gray-800 text-base leading-4 ml-2">Jane Doe</p>
                        </div>
                        <ul className="flex">
                          <li className="cursor-pointer text-gray-800 pt-5 pb-3">
                            <div className="w-6 h-6">
                              <Help strokeWidth={1.5} className="w-full h-full" />
                            </div>
                          </li>
                          <li className="cursor-pointer text-gray-800 pt-5 pb-3 pl-3">
                            <div className="w-6 h-6">
                              <Settings strokeWidth={1.5} className="w-full h-full" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
