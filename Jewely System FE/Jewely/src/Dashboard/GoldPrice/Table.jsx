import "./Table.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Page = () => {
  const [goldPrices, setGoldPrices] = useState([]);
  const [updateTime, setUpdateTime] = useState('');

  useEffect(() => {
    const fetchGoldPrices = async () => {
      try {
        const response = await axios.get('http://localhost:5188/api/GoldPrice');
        if (response.data && response.data.goldPrices) {
          setGoldPrices(response.data.goldPrices);
        }
        if (response.data && response.data.updateTime) {
          setUpdateTime(response.data.updateTime);
        }
      } catch (error) {
        console.error('Failed to fetch gold prices:', error);
      }
    };

    fetchGoldPrices();
  }, []);

  return (

    <div className=" gold flex flex-col items-start justify-start pt-4 pb-[59px] pr-[5px] pl-5 box-border relative gap-[16px] max-w-full mq750:min-w-full">
      <div className="w-[743px] h-full absolute !m-[0] top-[0px] right-[-15px] bottom-[0px] rounded-xl bg-additional-white" />
      <div className="w-[688px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <b className="relative tracking-[0.2px] leading-[140%] inline-block min-w-[99px] z-[1]">
            GOLD PRICE
          </b>
        </div>
        <div className="rounded-lg bg-greyscale-50 flex flex-row items-start justify-start py-[6.5px] px-2 gap-[4px] z-[1] text-xs text-greyscale-500">
          <div className="relative leading-[160%] font-medium inline-block min-w-[92px]">
            Last update Time: {updateTime}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[11px] px-3 pb-2.5 relative gap-[143px] shrink-0 [debug_commit:bf4bc93] text-greyscale-500 mq450:gap-[36px] mq750:flex-wrap mq750:gap-[71px]">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-greyscale-50" />
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <input className="m-0 h-4 w-3.5" type="checkbox" />
          <div className="relative leading-[160%] font-medium inline-block min-w-[81px] z-[1]">
            Product name
          </div>
        </div>
        <div className="tablerow w-[225px] flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0 relative leading-[160%] font-medium inline-block min-w-[25px] z-[1]">
            Sale
          </div>
          <div className="relative leading-[160%] font-medium inline-block min-w-[22px] z-[1]">
            Buy
          </div>
        </div>
        <div className="self-stretch w-[30px] relative leading-[160%] font-medium hidden z-[3]">
          Price
        </div>
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 hidden z-[4]"
          alt=""
          src="/dots.svg"
        />
      </div>
      {goldPrices.length > 0 ? goldPrices.map((price, index) => (
        <div key={index} className="self-stretch h-[57px] relative shrink-0 [debug_commit:bf4bc93] max-w-full mq750:h-auto mq750:min-h-[57] text-xs">
          <div className="max-w-full overflow-x-auto">
            <div className="min-w-[600px] bg-white p-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="font-semibold col-span-1">
                  {price.type}
                </div>
                <div className="font-semibold text-right col-span-1 pr-5">
                  {price.sellPrice}
                </div>
                <div className="buytab font-semibold text-right col-span-1 ">
                  {price.buyPrice}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[56px] left-[0px] box-border w-[704px] h-px border-t-[1px] border-solid border-greyscale-100" />
        </div>

      )) : (
        <p>No gold prices available.</p>
      )}
    </div>
  );
};
export default Page;
