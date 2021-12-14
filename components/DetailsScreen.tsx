/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import RightArrow from '../assets/right-arrow.svg';
import TestImage from '../assets/Rectangle.png';
import { useGetData } from '../helpers/getQuery';

interface Props {
  product: string;
  state: string;
  city: string;
}

const DetailsScreen = ({ state, city, product }: Props) => {
  const [allProducts, setAllProducts] = useState<any>({});
  const [filteredArr, setFilteredArr] = useState([]);
  const { isLoading, error, data, isFetching } = useGetData();

  useEffect(() => {
    if (state && city && product) {
      const filteredArr = data.filter(
        (item: any) =>
          item.address.state === state.toString() &&
          item.address.city === city.toString() &&
          item.address.state === state.toString()
      );
      setFilteredArr(filteredArr);
    } else {
      const allData = data?.reduce((p: any, n: any) => {
        return {
          ...p,
          [n['product_name']]: [...(p[n['product_name']] || []), n],
        };
      }, {});
      setAllProducts(allData);
    }
  }, [city, data, isFetching, isLoading, product, state]);

  if (!isLoading && !isFetching && data) {
    console.log(
      'test',
      data.filter(
        (item: any, index: any, array: any) =>
          item.product_name === 'Saudi Aramco'
      )
    );
  }
  console.log('filteredArr', filteredArr);
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Edvora</h1>
      <h4 className="text-[#ffffff7a] font-medium text-2xl my-5">
        Products
      </h4>
      {product && state && city ? (
        <>
          {' '}
          <h6 className="text-xl font-normal text-white">
            {' '}
            {product ? (
              <span className="truncate">{product}</span>
            ) : (
              'Products'
            )}
          </h6>
          <hr className="w-10/12 h-[2px] bg-[#CBCBCB80] my-2" />
          <div className="flex gap-3 ">
            <div className="flex items-center gap-2 p-4 rounded-xl bg-[#131313] w-10/12 h-48  overflow-hidden  ">
              {!isLoading &&
                !isFetching &&
                data &&
                filteredArr &&
                filteredArr
                  .slice(0, 4)
                  .map((item: any, index: any) => (
                    <div
                      key={index}
                      className="w-[310px] h-full my-2 p-3 bg-[#232323] rounded-lg flex flex-col gap-2 hover:scale-110 transition-all cursor-pointer "
                    >
                      <div className="flex items-center gap-6">
                        <img
                          src={item.image ? item.image : TestImage}
                          alt=""
                          className="w-16 h-16 rounded-lg"
                        />
                        <div className="flex flex-col gap-2">
                          <h3 className="text-sm font-normal text-white truncate">
                            {item.product_name}
                          </h3>
                          <h4 className="text-[#ffffff94] text-xs font-normal">
                            {item.brand_name}
                          </h4>
                          <h6 className="text-sm text-white">
                            $ {item.price}
                          </h6>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <h6 className="text-[#ffffff94] text-xs font-normal">
                          {item.address.state} {item.address.city}
                        </h6>
                        <h6 className="text-[#ffffff94] text-xs font-normal">
                          Date:{' '}
                          {new Date(item.date).toLocaleDateString()}
                        </h6>
                      </div>
                      <h4 className="text-[#ffffff94] text-xs font-normal">
                        {item.discription}
                      </h4>
                    </div>
                  ))}
            </div>
            <div className="flex items-center justify-center w-1/12 cursor-pointer">
              <Image
                src={RightArrow}
                alt=""
                className=""
                width="10"
                height="33"
              />
            </div>
          </div>
        </>
      ) : (
        Object.keys(allProducts || {}).map(
          (product_name: any, index: any) => {
            const products = allProducts[product_name];

            return (
              <>
                <h6 className="mt-20 text-xl font-normal text-white">
                  {product_name}
                </h6>
                <hr className="w-10/12 h-[2px] bg-[#CBCBCB80] my-2 " />
                <div className="flex w-full gap-3">
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-[#131313] w-10/12 h-48  overflow-hidden  ">
                    {products
                      .slice(0, 4)
                      .map(({ brand_name }: any) => (
                        <>
                          <div className="w-[310px] h-full my-2 p-3 bg-[#232323] rounded-lg flex flex-col gap-2 hover:scale-110 transition-all cursor-pointer ">
                            <div className="flex items-center gap-6">
                              <Image
                                src={TestImage}
                                alt=""
                                width="70"
                                height="70"
                              />
                              <div className="flex flex-col gap-2">
                                <h3 className="text-sm font-normal text-white">
                                  {product_name}
                                </h3>
                                <h4 className="text-[#ffffff94] text-xs font-normal">
                                  {brand_name}
                                </h4>
                                <h6 className="text-sm text-white">
                                  $ 29.99
                                </h6>
                              </div>
                            </div>
                            <div className="flex gap-5">
                              <h6 className="text-[#ffffff94] text-xs font-normal">
                                Location
                              </h6>
                              <h6 className="text-[#ffffff94] text-xs font-normal">
                                Date:10:12:2021
                              </h6>
                            </div>
                            <h4 className="text-[#ffffff94] text-xs font-normal">
                              Description of the Product / Item
                            </h4>
                          </div>
                        </>
                      ))}
                  </div>
                  <div className="flex items-center justify-center w-1/12 cursor-pointer">
                    <Image
                      src={RightArrow}
                      alt=""
                      className=""
                      width="10"
                      height="33"
                    />
                  </div>
                </div>
              </>
            );
          }
        )
      )}
    </div>
  );
};

export default DetailsScreen;
