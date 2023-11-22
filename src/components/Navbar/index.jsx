import { AiOutlinePlus } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { more, movies, people, tv_shows } from "./utils";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate();

  const redirectPage = (route) => {
    navigate(route);
  };

  return (
    <div className=" bg-main-bg text-white">
      <div className="container flex justify-between items-center pt-1">
        <div className="left flex justify-between items-center">
          <div className="logo" onClick={() => redirectPage("/")}>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt=""
              className="w-[180px]"
            />
          </div>

          <ul className="relative flex justify-between ml-[28px] z-10">
            <li>
              <li className="peer px-3 py-3 text-white">Movies</li>
              <div className="position-absolute text-sm font-normal hidden peer-hover:flex hover:flex w-[150px] flex-col bg-white text-black drop-shadow-lg text-left">
                {movies.map((item) => (
                  <a
                    key={item.route}
                    onClick={() => redirectPage(item.route)}
                    className="px-3 py-3 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <li className="peer px-3 py-3 text-white">Tv Shows</li>
              <div className="position-absolute text-sm font-normal hidden peer-hover:flex hover:flex w-[150px] flex-col bg-white text-black drop-shadow-lg text-left">
                {tv_shows.map((item) => (
                  <a
                    key={item.route}
                    onClick={() => redirectPage(item.route)}
                    className="px-3 py-3 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <li className="peer px-3 py-3 text-white">People</li>
              <div className="position-absolute text-sm font-normal hidden peer-hover:flex hover:flex w-[150px] flex-col bg-white text-black drop-shadow-lg text-left">
                {people.map((item) => (
                  <a
                    key={item.route}
                    onClick={() => redirectPage(item.route)}
                    className="px-3 py-3 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <li className="peer px-3 py-3 text-white">More</li>
              <div className="position-absolute text-sm font-normal hidden peer-hover:flex hover:flex w-[150px] flex-col bg-white drop-shadow-lg text-black text-left">
                {more.map((item) => (
                  <a
                    key={item.route}
                    onClick={() => redirectPage(item.route)}
                    className="px-3 py-3 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>

        <div className="right flex justify-between items-center">
          <ul className="flex justify-between items-center">
            <li className="py-[8px] mx-[12px]">
              <AiOutlinePlus />
            </li>
            <li className="py-[8px] mx-[12px]">
              <IoNotifications />
            </li>
            <li className="py-[8px] mx-[12px]">
              <Menu as="div" className="relative inline-block text-center">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  bg-transparent  px-3 py-2 text-sm font-semibold text-wh-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    EN
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Duplicate
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Archive
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Move
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className="py-[8px] mx-[12px]">Login</li>
            <li className="py-[8px] mx-[12px]">Join TMDB</li>
            <li>
              <BiSearch />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
