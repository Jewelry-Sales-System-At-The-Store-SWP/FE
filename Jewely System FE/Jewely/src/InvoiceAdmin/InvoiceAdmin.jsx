import InvoiceAdmin from "./InvoiceAdmindata";
import Sidebar from "../Navbar/Navbar";
import BasicInfo from "./BoxAsset";
const InvoiceAdminPage = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-row flex-wrap items-start justify-start gap-[33px] leading-[normal] tracking-[normal] text-left text-xs text-darkslategray-100 font-poppins mq800:gap-[16px]">
      <Sidebar />
      <div className="flex-1 flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border min-w-[463px] max-w-full mq675:min-w-full">
        <InvoiceAdmin />
      </div>
      <div className="w-[430px] flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-col items-end justify-start gap-[246px] max-w-full mq450:gap-[123px]">
          <div className="w-[403px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="shadow-[0px_6.3px_37.5px_rgba(226,_236,_249,_0.5)] rounded-[18.75px] bg-cornflowerblue flex flex-row items-start justify-start py-[13px] pr-[22px] pl-6 whitespace-nowrap">
              <img
                className="h-[39px] w-[153px] relative rounded-[18.75px] hidden"
                alt=""
                src="/rectangle-30.svg"
              />
              <div className="relative tracking-[0.5px] leading-[13px] inline-block min-w-[106.2px] z-[1]">{`Delicious Burger `}</div>
            </div>
          </div>
          <BasicInfo />
        </div>
      </div>
    </div>
     
  );
};

export default InvoiceAdminPage;