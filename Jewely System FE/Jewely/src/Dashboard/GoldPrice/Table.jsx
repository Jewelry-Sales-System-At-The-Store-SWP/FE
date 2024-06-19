import "./Table.css"
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

const Page = () => {
  const [goldPrices, setGoldPrices] = useState([]);
  const [updateTime, setUpdateTime] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);


  useEffect(() => {
<<<<<<< Updated upstream
    axios
      .get("http://localhost:5188/api/GoldPrice")
      // axios.get('https://666427ef932baf9032aa2d16.mockapi.io/Promotions')
      .then((response) => {
        setGoldPrices(response.data);
        setUpdateTime(response.data.lastUpdated)
      })
      .catch((error) => {
        console.error("There was an error fetching the promotion data:", error);
=======
    axios.get('http://localhost:5188/api/GoldPrice')
      .then(response => {
        console.log('Data retrieved:', response.data);
        setGoldPrices(response.data);
        setUpdateTime(response.data.lastUpdated)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
>>>>>>> Stashed changes
      });
  }, []);

  useEffect(() => {
    if (goldPrices.length > 0) {
      const lastElement = goldPrices[goldPrices.length - 1];
      const formattedDate = format(parseISO(lastElement.lastUpdated), 'yyyy-MM-dd HH:mm:ss');
      setUpdateTime(formattedDate);
    }
  }, [goldPrices]);

  const toggleFullScreen = () => {
    const container = containerRef.current;
    if (!document.fullscreenElement) {
      container.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch((err) => {
        console.error(`Error attempting to disable full-screen mode: ${err.message} (${err.name})`);
      });
    }
  };

  return (
    <main ref={containerRef} className={`gold flex flex-col items-start justify-start pt-4 pb-[59px] pr-[5px] pl-5 box-border relative gap-[16px] max-w-full mq750:min-w-full ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="w-[743px] h-full absolute !m-[0] top-[0px] right-[-15px] bottom-[0px] rounded-xl bg-additional-white full-screen-width" />
      <div className="w-[688px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap full-screen-width">
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <b className="relative tracking-[0.2px] leading-[140%] inline-block min-w-[99px] z-[1]">
            GOLD PRICE
          </b>
        </div>
        <div className="flex flex-row items-center justify-end gap-[4px]">
          <div className="rounded-lg bg-greyscale-50 flex flex-row items-start justify-start py-[6.5px] px-2 gap-[4px] z-[1] text-xs text-greyscale-500">
            <div className="relative leading-[160%] font-medium inline-block min-w-[92px]">
              Last update Time: {updateTime}
            </div>
          </div>
          <button onClick={toggleFullScreen} className="relative ml-2 bg-blue-500 text-white py-1 px-3 rounded">
            Fullscreen
          </button>
        </div>
      </div>
      <div className={`salebuy self-stretch flex flex-row items-start justify-start pt-[11px] px-3 pb-2.5 relative ${isFullscreen ? 'gap-8' : 'gap-[143px]'} shrink-0 text-greyscale-500 mq450:${isFullscreen ? 'gap-4' : 'gap-[36px]'} mq750:flex-wrap mq750:${isFullscreen ? 'gap-6' : 'gap-[71px]'} ${isFullscreen ? 'full-screen-gap' : ''}`}>
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-greyscale-50"></div>
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <input className="m-0 h-4 w-3.5" type="checkbox" />
          <div className="relative leading-[160%] font-medium inline-block min-w-[81px] z-[1]">
            Product name
          </div>
        </div>
        <div className="tablerow w-[225px] flex flex-row items-start justify-between gap-[8px]">
          <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0 relative leading-[160%] font-medium inline-block min-w-[25px] z-[1]">
            Sale
          </div>
          <div className="relative leading-[160%] font-medium inline-block min-w-[22px] z-[1] full-screen-buytile ">
            Buy
          </div>
        </div>
      </div>
<<<<<<< Updated upstream
      {goldPrices.length > 0 ? goldPrices.map((price) => (
        <div key={price.goldPriceId} className="self-stretch h-[57px] relative shrink-0 max-w-full mq750:h-auto mq750:min-h-[57] text-xs">
=======
      {goldPrices.map((item) => (
        <div key={item.goldPriceId} className="self-stretch h-[57px] relative shrink-0 [debug_commit:bf4bc93] max-w-full mq750:h-auto mq750:min-h-[57] text-xs">
>>>>>>> Stashed changes
          <div className="max-w-full overflow-x-auto">
            <div className="min-w-[600px] bg-white p-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="font-semibold col-span-1">
<<<<<<< Updated upstream
                  {price.type}
=======
                  {item.type}
>>>>>>> Stashed changes
                </div>
                <div className="font-semibold text-right col-span-1 pr-5">
                  {item.sellPrice} triệu đồng VND
                </div>
                <div className="buytab font-semibold text-right col-span-1 ">
                  {item.buyPrice} triệu đồng VND
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[56px] left-[0px] box-border w-[704px] h-px border-t-[1px] border-solid border-greyscale-100" />
        </div>
<<<<<<< Updated upstream
      )) : (
        <p>No gold prices available.</p>
      )}
    </main>
=======
      ))}
    </div>
>>>>>>> Stashed changes
  );
};
export default Page;
