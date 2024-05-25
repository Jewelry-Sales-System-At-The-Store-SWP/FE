import "./InvoiceAdmin.css";
const InvoiceAdmin = () => {
    return (
      <div className="w-full relative overflow-hidden flex flex-row items-start justify-start pt-9 pb-[83px] pr-0 pl-[203px] box-border gap-[70px] leading-[normal] tracking-[normal] text-left text-xs text-gray-100 font-satoshi mq750:gap-[35px] mq750:pl-[101px] mq750:box-border mq450:gap-[17px] mq450:pl-5 mq450:box-border mq1125:flex-wrap">
        <div className="flex-1 bg-white overflow-hidden flex flex-col items-start justify-start pt-[54px] px-[35px] pb-[35px] box-border gap-[19px] max-w-full mq750:min-w-full mq450:pt-[23px] mq450:pb-5 mq450:box-border mq1050:pt-[35px] mq1050:pb-[23px] mq1050:box-border">
          <div className="w-[251px] flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border text-[20px]">
            <b className="h-[27px] flex-1 relative inline-block mq450:text-base">
              New Invoices: MGL524874
            </b>
          </div>
          <div className="w-[619px] flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[12px] max-w-full text-base text-white">
            <div className="self-stretch bg-gray-100 overflow-hidden flex flex-row items-start justify-between py-[26px] pr-9 pl-[35px] gap-[20px] mq450:flex-wrap">
              <div className="w-[116px] flex flex-col items-start justify-start">
                <b className="relative inline-block min-w-[86px]">Anbu Corp.</b>
                <div className="self-stretch relative text-xs font-medium text-gray-200 whitespace-nowrap">
                  sales@anbucorp.com
                </div>
              </div>
              <div className="relative text-xs leading-[14px] font-medium text-right inline-block min-h-[48px]">
                <p className="m-0">133 Grey Fox Farm Road</p>
                <p className="m-0">Hidden Leaf village,</p>
                <p className="m-0">Land of fire.</p>
              </div>
            </div>
            <div className="self-stretch bg-dimgray-200 overflow-hidden flex flex-row items-start justify-between pt-[13px] px-[35px] pb-[18px] gap-[20px] text-gray-100 mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[17px]">
                <b className="relative inline-block min-w-[119px]">
                  Invoice Number
                </b>
                <div className="relative text-xs leading-[20px] font-medium text-gray-300">
                  <p className="m-0">MAG 2541420</p>
                  <p className="m-0">Issued Date: 10 Apr 2022</p>
                  <p className="m-0">Due Date: 20 Apr 2022</p>
                </div>
              </div>
              <div className="w-[136px] flex flex-col items-end justify-start gap-[17px] text-right">
                <b className="w-[61px] relative inline-block min-w-[61px]">
                  Billed to
                </b>
                <div className="self-stretch relative text-xs leading-[20px] font-medium text-gray-300">
                  <p className="m-0">Hatake Kakashi</p>
                  <p className="m-0">3471 Hiruzen Avenue,</p>
                  <p className="m-0">Hidden Leaf, Land of fire.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3.5 text-base">
            <b className="relative inline-block min-w-[88px] z-[1]">
              Item Details
            </b>
            <div className="relative text-xs leading-[20px] font-medium text-gray-300 inline-block min-w-[118px]">
              Details with more info
            </div>
          </div>
          <div className="w-[619px] flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border gap-[18px] max-w-full font-abeezee">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-gray-300 font-satoshi mq750:flex-wrap">
              <b className="relative leading-[20px] inline-block min-w-[33px]">
                ITEM
              </b>
              <div className="flex flex-row items-start justify-start gap-[44.5px] mq450:flex-wrap mq450:gap-[22px]">
                <b className="relative leading-[20px] inline-block min-w-[79px]">
                  ORDER/TYPE
                </b>
                <div className="w-[95px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                  <b className="relative leading-[20px] inline-block min-w-[33px]">
                    RATE
                  </b>
                </div>
                <b className="relative leading-[20px] inline-block text-right min-w-[55px]">
                  AMOUNT
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
              <div className="w-[186px] rounded-10xs box-border flex flex-row items-start justify-start py-2 px-2.5 border-[1px] border-solid border-lightslategray-200">
                <div className="relative leading-[20px] inline-block min-w-[72px]">{`Dimond Ring `}</div>
              </div>
              <div className="w-[318px] flex flex-row items-start justify-start gap-[37px] font-satoshi mq450:gap-[18px]">
                <div className="w-[76px] rounded-10xs box-border flex flex-row items-start justify-start py-2 pr-[30px] pl-[31px] border-[1px] border-solid border-lightslategray-200">
                  <div className="relative leading-[20px] font-medium inline-block min-w-[13px]">
                    01
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[49px] rounded-10xs box-border flex flex-row items-start justify-start py-2 px-[9px] border-[1px] border-solid border-lightslategray-200">
                    <div className="relative leading-[20px] font-medium inline-block min-w-[29px]">
                      5244
                    </div>
                  </div>
                </div>
                <div className="w-[78px] rounded-10xs box-border flex flex-row items-start justify-start py-2 px-3.5 border-[1px] border-solid border-lightslategray-200">
                  <div className="w-12 relative leading-[20px] font-medium inline-block">
                    5244.00
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
              <div className="w-[186px] rounded-10xs box-border flex flex-row items-start justify-start py-2 px-2.5 border-[1px] border-solid border-lightslategray-200">
                <div className="relative leading-[20px] inline-block min-w-[52px]">
                  Gold 999
                </div>
              </div>
              <div className="w-[318px] flex flex-row items-start justify-start gap-[37px] font-satoshi mq450:gap-[18px]">
                <div className="w-[76px] rounded-10xs box-border flex flex-row items-start justify-start py-2 pr-[30px] pl-[31px] border-[1px] border-solid border-lightslategray-200">
                  <div className="relative leading-[20px] font-medium inline-block min-w-[13px]">
                    01
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[49px] rounded-10xs box-border flex flex-row items-start justify-start py-2 px-[9px] border-[1px] border-solid border-lightslategray-200">
                    <div className="relative leading-[20px] font-medium inline-block min-w-[29px]">
                      5244
                    </div>
                  </div>
                </div>
                <div className="w-[78px] rounded-10xs box-border flex flex-row items-start justify-start py-2 px-3.5 border-[1px] border-solid border-lightslategray-200">
                  <div className="w-12 relative leading-[20px] font-medium inline-block">
                    5244.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[604px] flex flex-row items-start justify-between gap-[20px] max-w-full text-lightslategray-100 mq450:flex-wrap">
            <b className="relative leading-[20px] inline-block min-w-[62px]">
              Add Item +
            </b>
            <div className="w-[175px] flex flex-row items-start justify-start gap-[75px] text-gray-100">
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <b className="relative leading-[20px] inline-block min-w-[47px]">
                  Subtotal
                </b>
                <b className="relative leading-[20px] inline-block min-w-[50px]">
                  Discount
                </b>
                <b className="relative leading-[20px] inline-block min-w-[50px]">
                  Discount
                </b>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start gap-[12px] text-right text-lightslategray-100">
                <b className="self-stretch relative leading-[20px] text-gray-100 whitespace-nowrap">
                  $664.00
                </b>
                <b className="w-[34px] relative leading-[20px] inline-block min-w-[34px]">
                  Add +
                </b>
                <b className="w-[34px] relative leading-[20px] inline-block min-w-[34px]">
                  Add +
                </b>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-6">
            <div className="w-[246px] flex flex-col items-end justify-start gap-[12px]">
              <img
                className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="src/assets/vector-1549.svg" 
              />
              <div className="w-[205px] flex flex-row items-start justify-end py-0 px-[15px] box-border">
                <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                  <b className="relative leading-[20px] inline-block min-w-[27px]">
                    Total
                  </b>
                  <b className="w-[50px] relative leading-[20px] inline-block text-right whitespace-nowrap">
                    $664.00
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100px] h-[100px] relative overflow-hidden shrink-0 hidden" />
        </div>
        <div className="w-[463px] flex flex-col items-end justify-start gap-[248px] min-w-[463px] max-w-full text-base text-white font-poppins mq750:min-w-full mq450:gap-[124px] mq1125:flex-1">
          <div className="w-[402px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="flex flex-row items-end justify-start gap-[12px]">
              <div className="h-8 w-8 relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-blanchedalmond w-full h-full" />
                <div className="absolute top-[9px] left-[8px] tracking-[0.5px] leading-[13px] z-[1]">
                  🍔
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1 text-xs text-darkslategray">
                <div className="flex flex-row items-start justify-start gap-[3px]">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="relative tracking-[0.5px] leading-[13px] inline-block min-w-[105px]">{`Delicious Burger `}</div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="src/assets/arrow--chevron-down.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <form className="m-0 self-stretch bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-[55px] px-[49px] pb-[90px] gap-[13px] max-w-full border-[1px] border-solid border-gray-600 mq750:pt-9 mq750:pb-[58px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <b className="relative text-base inline-block font-satoshi text-gray-100 text-left min-w-[73px]">
              Basic Info
            </b>
            <div className="w-[345px] flex flex-col items-start justify-start pt-0 px-0 pb-[11px] box-border gap-[30px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                  <div className="relative text-xs leading-[20px] font-medium font-satoshi text-gray-500 text-left inline-block min-w-[67px]">
                    Invoice Date
                  </div>
                  <div className="self-stretch rounded-10xs flex flex-row items-start justify-between py-2 pr-[11px] pl-[9px] gap-[20px] border-[1px] border-solid border-gray-400">
                    <input
                      className="w-[68px] [border:none] [outline:none] font-medium font-satoshi text-xs bg-[transparent] h-5 relative leading-[20px] text-gray-100 text-left inline-block p-0"
                      placeholder="14 Apr 2022"
                      type="text"
                    />
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="src/assets/vuesaxtwotonecalendar.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                  <div className="relative text-xs leading-[20px] font-medium font-satoshi text-gray-500 text-left inline-block min-w-[49px]">
                    Due date
                  </div>
                  <div className="self-stretch rounded-10xs flex flex-row items-start justify-between py-2 pr-[11px] pl-[9px] gap-[20px] border-[1px] border-solid border-gray-400">
                    <input
                      className="w-[71px] [border:none] [outline:none] font-medium font-satoshi text-xs bg-[transparent] h-5 relative leading-[20px] text-gray-100 text-left inline-block p-0"
                      placeholder="20 Apr 2022"
                      type="text"
                    />
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="src/assets/vuesaxtwotonecalendar.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
                <button className="cursor-pointer [border:none] py-4 pr-5 pl-[22px] bg-gray-100 self-stretch flex flex-row items-start justify-center whitespace-nowrap hover:bg-dimgray-100">
                  <div className="relative text-sm font-poppins text-white text-center inline-block min-w-[94px]">
                    SAVE INVOICE
                  </div>
                </button>
                <div className="flex flex-row items-start justify-center gap-[9px] mq450:flex-wrap">
                  <div className="h-[51px] box-border flex flex-row items-center justify-center py-4 px-[71px] border-[1px] border-solid border-gray-500">
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="src/assets/vuesaxtwotoneeye.svg"
                    />
                  </div>
                  <div className="h-[51px] box-border flex flex-row items-center justify-center py-4 px-[71px] border-[1px] border-solid border-gray-500">
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="src/assets/vuesaxoutlinedocumentdownload.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-4 pb-[18px] pr-5 pl-[45px] bg-gray-100 w-[342px] flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full hover:bg-dimgray-100">
              <div className="relative text-sm font-poppins text-white text-left inline-block min-w-[117px]">
                PRINT WARRANTY
              </div>
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default InvoiceAdmin;
  