import axios from "axios"
import React, { useState, useEffect } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./ManageJewely.css"
const JewelleryDataTable = () => {
  const [jewellery, setJewellery] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5188/api/Jewelry')
      .then(response => {
        setJewellery(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the jewellery data:', error);
      });
  }, []);
  return (
    <main className="absolute top-[117px] left-[266px] shadow-[0px_6.3px_37.5px_rgba(226,_236,_249,_0.5)] rounded-[18.75px] bg-white w-[1132px] h-[726px] text-left text-4xs-8 text-darkslategray-500 font-poppins">
      <img
        className="absolute top-[0px] left-[0px] rounded-[18.75px] w-full h-full hidden"
        alt=""
        src="/rectangle-30.svg"
      />

      <div className="absolute top-[31px] left-[54.9px] text-sm-8 tracking-[-0.01em] font-semibold text-black whitespace-pre-wrap inline-block w-[173.5px] h-[21px] z-[1]">
        ALL JEWELRY
      </div>
      <div class="relative z-10">
        {jewellery.map((item, index) => (
          <div key={item.jewelryId} className="data absolute w-full left-0" style={{ top: `${160 + index * 100}px` }}>
            <div className="absolute left-[48px] font-medium text-black inline-block w-[122.8px] h-4 z-10">{item.name}</div>
            <div className="absolute left-[203px] font-medium inline-block w-[110.2px] h-4 z-10">
              {item.barcode}
            </div>
            <div className="absolute left-[379px] font-medium inline-block w-[114.8px] h-[16.4px] z-10">
              {item.weight /100} g
            </div>
            <div className="absolute left-[546px] font-medium whitespace-pre-wrap inline-block w-[167.9px] h-[16.4px] z-10">
              {item.basePrice * 1000} VnD
            </div>
            <div className="absolute left-[746.3px] font-medium whitespace-pre-wrap inline-block w-[74.6px] h-[19.3px] min-w-[74.6px] z-10">
              {item.stoneCost * 1000} VnD
            </div>
            <button className="absolute left-[922px] rounded-md bg-mediumaquamarine box-border w-[80px] flex items-center justify-center py-px px-[22px] text-seagreen border-[0.6px] border-solid border-mediumseagreen z-10">
              Edit
            </button>
            <button className="absolute left-[1033px] rounded-md bg-firebrick-200 box-border w-[29px] flex items-center justify-start py-px px-[11px] text-firebrick-100 border-[0.6px] border-solid border-firebrick-100 z-10">
              X
            </button>
          </div>
        ))}
      </div >
      {/* <div class="relative z-[1] mt-[0px]">
        <div class="cursor-pointer absolute top-[598.2px] left-[758px] rounded-10xs-5 bg-blueviolet box-border w-[15.5px] flex flex-row items-start justify-start py-[3px] px-1.5 text-5xs-5 text-white border-[0.6px] border-solid border-blueviolet">
          <div class="relative tracking-[-0.01em] leading-[8px] font-medium inline-block min-w-[3px]">1</div>
        </div>
        <div class="cursor-pointer absolute top-[598.2px] left-[797.6px] rounded-10xs-5 bg-whitesmoke-100 box-border w-[16.3px] flex flex-row items-start justify-start py-[3px] pr-1 pl-[5.6px] text-5xs-5 text-darkslategray-100 border-[0.6px] border-solid border-whitesmoke-200">
          <div class="relative tracking-[-0.01em] leading-[8px] font-medium inline-block min-w-[5px]">2</div>
        </div>
        <div class="cursor-pointer absolute top-[598.2px] left-[837.2px] rounded-10xs-5 bg-whitesmoke-100 box-border w-[15px] flex flex-row items-start justify-start py-[3px] px-1 text-5xs-5 text-darkslategray-100 border-[0.6px] border-solid border-whitesmoke-200">
          <div class="relative tracking-[-0.01em] leading-[8px] font-medium inline-block min-w-[5px]">3</div>
        </div>
        <div class="cursor-pointer absolute top-[598.2px] left-[875.8px] rounded-10xs-5 bg-whitesmoke-100 box-border w-[16.3px] flex flex-row items-start justify-start py-[3px] pr-1 pl-[5.6px] text-5xs-5 text-darkslategray-100 border-[0.6px] border-solid border-whitesmoke-200">
          <div class="relative tracking-[-0.01em] leading-[8px] font-medium inline-block min-w-[5px]">4</div>
        </div>
        <div class="cursor-pointer absolute top-[598.2px] left-[938.9px] rounded-10xs-5 bg-whitesmoke-100 box-border w-[16.3px] flex flex-row items-start justify-start py-[3px] pr-0.5 pl-[3px] text-5xs-5 text-darkslategray-100 border-[0.6px] border-solid border-whitesmoke-200">
          <div class="relative tracking-[-0.01em] leading-[8px] font-medium inline-block min-w-[10px]">40</div>
        </div>
        <div class="cursor-pointer absolute top-[598.2px] left-[717.3px] rounded-10xs-5 bg-whitesmoke-100 box-border w-[16.3px] flex flex-row items-start justify-start py-[3px] px-[5px] text-5xs-5 text-darkslategray-100 border-[0.6px] border-solid border-whitesmoke-200">
          <div class="relative tracking-[-0.01em] leading-[8px] font-medium inline-block min-w-[5px]">{`<`}</div>
        </div>
        <div class="cursor-pointer absolute top-[598.2px] left-[979.6px] rounded-10xs-5 bg-whitesmoke-100 box-border w-[16.3px] flex flex-row items-start justify-start py-[3px] pr-1 pl-[5.6px] text-5xs-5 text-darkslategray-100 border-[0.6px] border-solid border-whitesmoke-200">
          <div class="relative tracking-[-0.01em] leading-[8px] font-medium inline-block min-w-[5px]">{`>`}</div>
        </div>
        <div class="absolute top-[604.6px] left-[916.5px] text-5xs-5 tracking-[-0.01em] leading-[10.1px] font-medium text-black inline-block w-[10.3px] h-[10.1px] min-w-[10.3px]">
          ...
        </div>
        <div class="absolute top-[599.8px] left-[54.7px] tracking-[-0.01em] font-medium text-silver whitespace-pre-wrap inline-block w-[260.4px] h-[16.4px] shrink-0 [debug_commit:1de1738]">
          Showing data 1 to 8 of 256K entries
        </div>
      </div> */}
      <div className="header-data">
        <div className="absolute top-[138.1px] left-[14px] box-border w-[1036.9px] h-[0.6px] z-[1] border-t-[0.6px] border-solid border-whitesmoke-200" />

        <div className="absolute top-[110.4px] left-[54.7px] tracking-[-0.01em] font-medium text-silver inline-block w-[123.3px] h-[16.4px] shrink-0 [debug_commit:1de1738] z-[1]">
          Name
        </div>
        <div className="absolute top-[110.6px] left-[216px] tracking-[-0.01em] font-medium text-silver inline-block w-[93.5px] h-[16.3px] shrink-0 [debug_commit:1de1738] z-[1]">
          Barcode
        </div>
        <div className="absolute top-[110.4px] left-[379px] tracking-[-0.01em] font-medium text-silver inline-block w-[111.3px] h-[16.4px] z-[1]">
          Weight Of Gold
        </div>
        <div className="absolute top-[110px] left-[546.3px] tracking-[-0.01em] font-medium text-silver inline-block w-[75.1px] h-[17px] z-[1]">
          Base Price
        </div>
        <div className="absolute top-[112.6px] left-[752.3px] tracking-[-0.01em] font-medium text-silver inline-block w-[59.9px] h-[16.4px] z-[1]">
          Labor Cost
        </div>
      </div>
      <div className="absolute top-[37.3px] left-[591.1px] rounded-[6.25px] bg-ghostwhite-200 w-[229.8px] h-[34.6px] z-[1] text-5xs-5 text-silver">
        <div className="absolute top-[0px] left-[0px] rounded-[6.25px] bg-ghostwhite-100 w-full h-full hidden" />
        <div className="absolute top-[12.2px] left-[41.7px] tracking-[-0.01em] inline-block w-[44.5px] h-[13.9px] z-[1]">
          Search
        </div>
        <img
          className="absolute top-[9.2px] left-[8.9px] w-[20.9px] h-[16.3px] overflow-hidden z-[1]"
          loading="lazy"
          alt=""
          src="src/assets/search-1.svg"
        />
      </div>
      <div className="absolute top-[37.3px] left-[400px] flex gap-[6.25px]">
        <div className="flex w-[97px] h-[28px] items-center justify-center gap-[6.25px] px-[7.5px] py-[2.5px] bg-[#15c09861] rounded-[2.5px] border-[0.63px] mr-[20px] border-solid border-[#00b086]">
          <div className="relative w-fit font-medium text-[#008667] text-[8.8px] tracking-[-0.09px] leading-[normal]">
            Add
          </div>
        </div>
      </div>
      <form className="form absolute left-[848px] w-[169.1px] flex flex-row items-start justify-start whitespace-nowrap z-[1] text-5xs-5 ">
        <select class="custom-select form-select form-select-lg">
          <option>ALL</option>
          <option>Dimond Ring</option>
        </select>
      </form>
    </main>
  );
};

export default JewelleryDataTable;