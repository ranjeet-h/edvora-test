import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import DropdownIcon from '../assets/drop-down.svg';
import Image from 'next/image';
import { useGetData } from '../helpers/getQuery';

interface Props {
  setProduct: Function;
  setState: Function;
  setCity: Function;
  product: string;
  state: string;
  city: string;
}

const Sidebar = ({
  setCity,
  setProduct,
  setState,
  product,
  state,
  city,
}: Props) => {
  const { isLoading, error, data, isFetching } = useGetData();
  let newProduct;
  let newState;
  let newCity;
  if (!isLoading && !error && data) {
    newProduct = data.map((item: any) => item.product_name);
    newProduct = [...new Set(newProduct)];
  }
  if (!isLoading && !error && data) {
    newState = data.map((item: any) => item.address.state);
    newState = [...new Set(newState)];
  }
  if (!isLoading && !error && data) {
    newCity = data.map((item: any) => item.address.city);
    newCity = [...new Set(newCity)];
  }
  //   console.log('state', newState, 'city', newCity);
  return (
    <div className="flex justify-center">
      <div className=" p-4 rounded-xl bg-[#131313] w-8/12 h-[275px]  ">
        <div className="px-7">
          <h6 className="text-xl font-light text-[#A5A5A5] ">
            Filters
          </h6>
          <hr className="w-12/12 h-[2px] bg-[#CBCBCB80] my-2  " />
        </div>

        <Menu
          as="div"
          className="relative inline-block w-full mt-3 text-left px-7"
        >
          <div>
            <Menu.Button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#232323] rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <div className="flex justify-between w-full">
                {product ? (
                  <span className="truncate">{product}</span>
                ) : (
                  'Products'
                )}
                <Image
                  src={DropdownIcon}
                  alt=""
                  width="15"
                  height="15"
                />
              </div>
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
            <Menu.Items className="absolute right-5 mt-1 z-50 origin-top-right bg-[#232323] divide-y divide-gray-600 rounded-md shadow-lg w-10/12  ring-1 ring-black ring-opacity-5 focus:outline-none">
              {!isLoading &&
                !error &&
                data &&
                newProduct &&
                newProduct.map((item: any, index: any) => (
                  <div className="px-1 py-1 text " key={index}>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-white'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          onClick={() => setProduct(item)}
                        >
                          {/* {active ? (
                          <EditActiveIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        ) : (
                          <EditInactiveIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        )} */}
                          {item}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                ))}
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu
          as="div"
          className="relative inline-block w-full mt-3 text-left px-7"
        >
          <div>
            <Menu.Button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#232323] rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <div className="flex justify-between w-full">
                {state ? (
                  <span className="truncate">{state}</span>
                ) : (
                  'State'
                )}
                <Image
                  src={DropdownIcon}
                  alt=""
                  width="15"
                  height="15"
                />
              </div>
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
            <Menu.Items className="absolute right-5 mt-1 z-50 origin-top-right bg-[#232323] divide-y divide-gray-100 rounded-md shadow-lg w-10/12 ring-1 ring-black ring-opacity-5 focus:outline-none">
              {!isLoading &&
                !error &&
                data &&
                newState &&
                newState.map((item: any, index: any) => (
                  <div className="px-1 py-1 text " key={index}>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-white'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          onClick={() => setState(item)}
                        >
                          {/* {active ? (
                          <EditActiveIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        ) : (
                          <EditInactiveIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        )} */}
                          {item}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                ))}
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu
          as="div"
          className="relative inline-block w-full mt-3 text-left px-7"
        >
          <div>
            <Menu.Button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#232323] rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <div className="flex justify-between w-full">
                {city ? (
                  <span className="truncate">{city}</span>
                ) : (
                  'City'
                )}
                <Image
                  src={DropdownIcon}
                  alt=""
                  width="15"
                  height="15"
                />
              </div>
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
            <Menu.Items className="absolute right-5 mt-1 z-50 origin-top-right bg-[#232323] divide-y divide-gray-100 rounded-md shadow-lg w-10/12 h-96 overflow-y-scroll __hide-scrollbar ring-1 ring-black ring-opacity-5 focus:outline-none">
              {!isLoading &&
                !error &&
                data &&
                newCity &&
                newCity.map((item: any, index: any) => (
                  <div className="px-1 py-1 text " key={index}>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-white'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          onClick={() => setCity(item)}
                        >
                          {/* {active ? (
                          <EditActiveIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        ) : (
                          <EditInactiveIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        )} */}
                          {item}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
