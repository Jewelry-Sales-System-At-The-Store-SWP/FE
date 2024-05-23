import "./Table.css"
const Page = () => {
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
          Dec 20 - Dec 31
        </div>
        <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
          <img
            className="w-4 h-4 relative overflow-hidden shrink-0"
            alt=""
            src="/calendar.svg"
          />
        </div>
      </div>
    </div>
    <div className="self-stretch h-[152px] flex flex-col items-start justify-start pt-0 px-0 pb-14 box-border max-w-full z-[1] text-xs mq750:h-auto">
      <div className="self-stretch flex flex-row items-start justify-start pt-[11px] px-3 pb-2.5 relative gap-[143px] shrink-0 [debug_commit:bf4bc93] text-greyscale-500 mq450:gap-[36px] mq750:flex-wrap mq750:gap-[71px]">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-greyscale-50" />
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <input className="m-0 h-4 w-3.5" type="checkbox" />
          <div className="relative leading-[160%] font-medium inline-block min-w-[81px] z-[1]">
            Product name
          </div>
        </div>
        <div className="w-[225px] flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
            <div className="relative leading-[160%] font-medium inline-block min-w-[34px] z-[1]">
              Brand
            </div>
          </div>
          <div className="relative leading-[160%] font-medium inline-block min-w-[25px] z-[1]">
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
      <div className="w-[480px] h-[19px] relative hidden max-w-full">
        <div className="absolute top-[-19px] left-[-12px] bg-additional-white w-[703px] h-14 hidden" />
        <div className="absolute top-[2px] left-[0px] w-3.5 h-3.5 overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded box-border border-[1px] border-solid border-greyscale-200" />
        </div>
        <div className="absolute top-[-7px] left-[30px] hidden flex-row items-center justify-start gap-[12px]">
          <div className="h-8 w-8 relative rounded-md bg-greyscale-100 overflow-hidden shrink-0 hidden">
            <img
              className="absolute top-[5px] left-[4px] w-6 h-[22px] object-cover"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
          <div className="relative leading-[160%] font-semibold">
            iPhone 12 Mini
          </div>
        </div>
        <div className="absolute top-[0px] left-[254px] leading-[160%] font-semibold">
          Apple
        </div>
        <div className="absolute top-[0px] left-[365px] leading-[160%] font-semibold">
          110
        </div>
        <div className="absolute top-[0px] left-[457px] leading-[160%] font-semibold">
          789
        </div>
        <div className="absolute top-[0px] left-[549px] leading-[160%] font-semibold hidden whitespace-nowrap">
          $2,699.00
        </div>
        <img
          className="absolute top-[-1px] left-[655px] w-5 h-5 overflow-hidden hidden"
          alt=""
          src="/dots.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-3 px-3 pb-[18px] relative gap-[77px] shrink-0 [debug_commit:bf4bc93] mq450:gap-[19px] mq750:flex-wrap mq750:gap-[38px]">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-additional-white" />
        <div className="flex flex-row items-end justify-start py-0 pr-[123px] pl-0 gap-[16px]">
          <input
            className="m-0 h-3.5 w-3.5 relative overflow-hidden shrink-0 z-[1]"
            type="checkbox"
          />
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
            <div className="flex flex-row items-start justify-start gap-[12px] z-[1]">
              <div className="h-8 w-8 relative rounded-md bg-greyscale-100 overflow-hidden shrink-0 hidden">
                <img
                  className="absolute top-[6px] left-[5px] w-[22px] h-5 object-cover"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
              <div className="relative leading-[160%] font-semibold inline-block min-w-[24px]">
                SCJ
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <div className="relative leading-[160%] font-semibold inline-block min-w-[34px] z-[1]">
            Apple
          </div>
        </div>
        <div className="w-[135px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[160%] font-semibold inline-block min-w-[43px] z-[1]">
              88.500
            </div>
            <div className="relative leading-[160%] font-semibold inline-block min-w-[43px] z-[1]">
              90.500
            </div>
          </div>
        </div>
        <div className="w-[42px] relative leading-[160%] font-semibold hidden whitespace-nowrap z-[4]">
          $399.0
        </div>
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 hidden z-[5]"
          alt=""
          src="/dots.svg"
        />
      </div>
      <div className="self-stretch h-[57px] relative shrink-0 [debug_commit:bf4bc93] max-w-full mq750:h-auto mq750:min-h-[57]">
        <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start pt-3 px-3 pb-[18px] box-border gap-[84px] max-w-full h-full mq450:gap-[21px] mq750:flex-wrap mq750:gap-[42px]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-additional-white" />
          <div className="flex flex-row items-end justify-start py-0 pr-[116px] pl-0 gap-[16px]">
            <input
              className="m-0 h-3.5 w-3.5 relative overflow-hidden shrink-0 z-[1]"
              type="checkbox"
            />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <div className="flex flex-row items-start justify-start gap-[12px] z-[1]">
                <div className="h-8 w-8 relative rounded-md bg-greyscale-100 overflow-hidden shrink-0 hidden">
                  <img
                    className="absolute top-[6px] left-[5px] w-[22px] h-5 object-cover"
                    alt=""
                    src="/image-2@2x.png"
                  />
                </div>
                <div className="relative leading-[160%] font-semibold inline-block min-w-[24px]">
                  999
                </div>
              </div>
            </div>
          </div>
          <div className="w-[119px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative leading-[160%] font-semibold inline-block min-w-[34px] z-[1]">
                Apple
              </div>
              <div className="relative leading-[160%] font-semibold text-secondary-glamour-pink-500-base inline-block min-w-[8px] z-[1]">
                2
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <div className="relative leading-[160%] font-semibold inline-block min-w-[24px] z-[1]">
              500
            </div>
          </div>
          <div className="w-[61px] relative leading-[160%] font-semibold hidden whitespace-nowrap z-[4]">
            $2,999.00
          </div>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 hidden z-[5]"
            alt=""
            src="/dots.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[0px] box-border w-[704px] h-px border-t-[1px] border-solid border-greyscale-100" />
        <div className="absolute top-[56px] left-[0px] box-border w-[704px] h-px border-t-[1px] border-solid border-greyscale-100" />
      </div>
    </div>
  </div>
  );
};

export default Page;
