import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./InvoiceTemplate.css"
const InvoiceTemplate = () => {
    return (
      <div className="w-full h-[1324px] relative bg-colors-white-100 overflow-hidden flex flex-col items-start justify-start pt-10 px-[34px] pb-14 box-border gap-[127px] leading-[normal] tracking-[normal] mq725:gap-[32px] mq450:gap-[16px] mq975:h-auto">
        <main className="self-stretch flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full shrink-0">
          <section className="flex-1 flex flex-col items-start justify-start gap-[40px] shrink-0 [debug_commit:bf4bc93] max-w-full text-left text-lg text-primary-primary-500 font-d8-semibold mq725:gap-[20px]">
            <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-right text-13xl text-neutral-neutral-800 font-d8-semibold">
              <div className="w-[350px] flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <h1 className="m-0 relative text-inherit tracking-[-0.5px] leading-[40px] font-bold font-inherit inline-block min-w-[110px]">
                      Invoice
                    </h1>
                  </div>
                </div>
                <div className="w-[303.5px] flex flex-col items-start justify-start gap-[12px] text-left text-base text-neutral-neutral-500">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                    <div className="w-[116px] relative leading-[24px] inline-block shrink-0 whitespace-nowrap">
                      Invoice No.
                    </div>
                    <div className="flex-1 relative leading-[24px] font-medium text-neutral-neutral-800">
                      #INV0001
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                    <div className="w-[116px] relative leading-[24px] inline-block shrink-0 whitespace-nowrap">
                      Invoice Date
                    </div>
                    <div className="flex-1 relative leading-[24px] font-medium text-neutral-neutral-800 whitespace-nowrap">
                      Sep 24, 2023
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                    <div className="w-[116px] relative leading-[24px] inline-block shrink-0 whitespace-nowrap">
                      Due Date
                    </div>
                    <div className="flex-1 relative leading-[24px] font-medium text-neutral-neutral-800 whitespace-nowrap">
                      Sep 30, 2023
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer py-[31px] pr-[49px] pl-[50px] bg-colors-neutral-25 rounded-2xl flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-dashed border-colors-neutral-200 hover:bg-gainsboro hover:box-border hover:border-[2px] hover:border-solid hover:border-lightgray">
                <div className="relative text-xl tracking-[-0.25px] leading-[32px] font-semibold font-d8-semibold text-neutral-neutral-800 text-left">
                  Your logo here
                </div>
              </button>
            </header>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
              <div className="flex-1 rounded-2xl bg-neutral-neutral-25 box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[12px] min-w-[363px] max-w-full border-[1px] border-solid border-neutral-neutral-100 mq725:min-w-full">
                <div className="relative leading-[28px] font-medium inline-block min-w-[74px]">
                  Billed By
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-neutral-neutral-500">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl text-neutral-neutral-800">
                    <b className="self-stretch relative tracking-[-0.25px] leading-[32px] mq450:text-base mq450:leading-[26px]">
                      Sandeep Maurya
                    </b>
                    <div className="self-stretch relative text-lg leading-[28px] font-medium">
                      305, 3rd Floor Orion mall, Bengaluru, Karnataka, India -
                      560055
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[93px] pl-0 gap-[16px] mq725:flex-wrap mq450:pr-5 mq450:box-border">
                    <div className="w-[50px] relative leading-[24px] inline-block shrink-0">
                      Email
                    </div>
                    <div className="relative leading-[24px] font-medium text-neutral-neutral-800 whitespace-nowrap">
                      sandeepmauryadesigns@gmail.com
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[235px] pl-0 gap-[16px] mq725:flex-wrap mq450:pr-5 mq450:box-border">
                    <div className="relative leading-[24px] inline-block min-w-[50px]">
                      Phone
                    </div>
                    <div className="relative leading-[24px] font-medium text-neutral-neutral-800 whitespace-nowrap">
                      +91 98765 43210
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-2xl bg-neutral-neutral-25 box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[12px] min-w-[363px] max-w-full border-[1px] border-solid border-neutral-neutral-100 mq725:min-w-full">
                <div className="relative leading-[28px] font-medium inline-block min-w-[73px]">
                  Billed To
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-neutral-neutral-500">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl text-neutral-neutral-800">
                    <b className="self-stretch relative tracking-[-0.25px] leading-[32px] mq450:text-base mq450:leading-[26px]">
                      Studio Den
                    </b>
                    <div className="self-stretch relative text-lg leading-[28px] font-medium">
                      305, 3rd Floor Orion mall, Bengaluru, Karnataka, India -
                      560055
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[211px] pl-0 gap-[16px] mq725:flex-wrap mq450:pr-5 mq450:box-border">
                    <div className="w-[50px] relative leading-[24px] inline-block shrink-0">
                      Email
                    </div>
                    <div className="relative leading-[24px] font-medium text-neutral-neutral-800 whitespace-nowrap">
                      info@studioden.com
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[235px] pl-0 gap-[16px] mq725:flex-wrap mq450:pr-5 mq450:box-border">
                    <div className="relative leading-[24px] inline-block min-w-[50px]">
                      Phone
                    </div>
                    <div className="relative leading-[24px] font-medium text-neutral-neutral-800 whitespace-nowrap">
                      +91 98765 43210
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-t-xl rounded-b-none overflow-hidden flex flex-col items-start justify-start max-w-full text-neutral-neutral-800">
              <div className="self-stretch bg-primary-primary-400 flex flex-row items-start justify-start py-3 px-5 box-border max-w-full text-base text-colors-white-100 mq725:gap-[63px] mq1000:gap-[127px]">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[300px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[24px] font-semibold">
                        Service and description
                      </div>
                      <div className="w-[333px] relative text-sm leading-[20px] text-neutral-neutral-800 hidden max-w-full">
                        Create and send unlimited professional invoices for free.
                        Use our unique features to collect payments faster.
                      </div>
                    </div>
                    <div className="w-[292px] overflow-hidden hidden flex-row items-start justify-start gap-[12px]">
                      <div className="h-16 flex-1 relative bg-whitesmoke overflow-hidden" />
                      <div className="h-16 flex-1 relative bg-whitesmoke overflow-hidden" />
                      <div className="h-16 flex-1 relative bg-whitesmoke overflow-hidden" />
                      <div className="h-16 flex-1 relative bg-whitesmoke overflow-hidden" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[24px] min-w-[300px] max-w-full text-center mq725:flex-wrap">
                    <div className="flex-1 relative leading-[24px] font-semibold inline-block min-w-[29px]">
                      Qty
                    </div>
                    <div className="flex-1 relative leading-[24px] font-semibold inline-block min-w-[29px]">
                      Rate
                    </div>
                    <div className="w-[64.2px] relative text-sm leading-[20px] font-medium hidden">
                      IGST
                    </div>
                    <div className="flex-1 relative leading-[24px] font-semibold text-right inline-block min-w-[29px]">
                      Total
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch box-border flex flex-row items-start justify-start pt-5 px-[19px] pb-[18px] max-w-full border-r-[1px] border-solid border-neutral-neutral-200 border-b-[1px] border-l-[1px] mq725:gap-[63px] mq1000:gap-[127px]">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[300px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <b className="self-stretch relative leading-[28px]">
                        UX Strategy
                      </b>
                      <div className="self-stretch relative text-base leading-[24px]">
                        Create and send unlimited professional invoices for free.
                        Use our unique features to collect payments faster.
                      </div>
                    </div>
                    <div className="w-[292px] overflow-hidden hidden flex-row items-start justify-start gap-[12px]">
                      <div className="h-16 flex-1 relative bg-whitesmoke overflow-hidden" />
                      <div className="h-16 flex-1 relative bg-whitesmoke overflow-hidden" />
                      <div className="h-16 flex-1 relative bg-whitesmoke overflow-hidden" />
                      <div className="h-16 flex-1 relative bg-whitesmoke overflow-hidden" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[24px] min-w-[300px] max-w-full text-center mq725:flex-wrap">
                    <b className="flex-1 relative leading-[28px] inline-block min-w-[37px]">
                      1
                    </b>
                    <b className="flex-1 relative leading-[28px] inline-block min-w-[37px] whitespace-nowrap">
                      $500
                    </b>
                    <b className="flex-1 relative leading-[28px] inline-block text-right min-w-[37px] whitespace-nowrap">
                      $500
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch box-border flex flex-row items-start justify-start pt-5 px-[19px] pb-[18px] max-w-full border-r-[1px] border-solid border-neutral-neutral-200 border-b-[1px] border-l-[1px] mq725:gap-[63px] mq1000:gap-[127px]">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[300px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <b className="self-stretch relative leading-[28px]">
                        Design System
                      </b>
                      <div className="self-stretch relative text-base leading-[24px]">
                        Create and send unlimited professional invoices for free.
                        Use our unique features to collect payments faster.
                      </div>
                    </div>
                    <div className="w-[292px] overflow-hidden hidden flex-row items-start justify-start gap-[12px]">
                      <div className="h-16 flex-1 relative bg-whitesmoke overflow-hidden" />
                      <div className="h-16 flex-1 relative bg-whitesmoke overflow-hidden" />
                      <div className="h-16 flex-1 relative bg-whitesmoke overflow-hidden" />
                      <div className="h-16 flex-1 relative bg-whitesmoke overflow-hidden" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[24px] min-w-[300px] max-w-full text-center mq725:flex-wrap">
                    <b className="flex-1 relative leading-[28px] inline-block min-w-[47px]">
                      1
                    </b>
                    <b className="flex-1 relative leading-[28px] inline-block min-w-[47px] whitespace-nowrap">
                      $5000
                    </b>
                    <b className="flex-1 relative leading-[28px] inline-block text-right min-w-[47px] whitespace-nowrap">
                      $5000
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[32px] max-w-full mq725:gap-[16px] mq975:flex-wrap">
              <div className="w-[574px] flex flex-col items-start justify-start gap-[20px] min-w-[574px] max-w-full mq725:min-w-full mq975:flex-1">
                <div className="self-stretch rounded-2xl bg-neutral-neutral-25 box-border flex flex-col items-start justify-start py-[18px] px-[19px] max-w-full border-[1px] border-solid border-neutral-neutral-100">
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
                      <div className="flex flex-row items-center justify-start">
                        <div className="relative leading-[28px] font-medium">
                          Bank Account Details
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full text-base text-neutral-neutral-500 mq725:flex-wrap">
                        <div className="flex flex-col items-start justify-start gap-[8px] min-w-[167px] mq725:flex-1">
                          <div className="relative leading-[24px] inline-block min-w-[87px]">
                            Bank Name
                          </div>
                          <div className="relative leading-[24px]">
                            Account Holder Name
                          </div>
                          <div className="relative leading-[24px] inline-block min-w-[128px]">
                            Account Number
                          </div>
                          <div className="relative leading-[24px] inline-block min-w-[36px]">
                            IFSC
                          </div>
                          <div className="relative leading-[24px] inline-block min-w-[105px]">
                            Account Type
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[226px] max-w-full text-neutral-neutral-800">
                          <div className="self-stretch relative leading-[24px] font-medium">
                            HDFC Bank
                          </div>
                          <div className="self-stretch relative leading-[24px] font-medium">
                            Foobar Labs
                          </div>
                          <div className="self-stretch relative leading-[24px] font-medium">
                            45366287987
                          </div>
                          <div className="self-stretch relative leading-[24px] font-medium">
                            HDFC0018159
                          </div>
                          <div className="self-stretch relative leading-[24px] font-medium">
                            Savings
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-2xl bg-neutral-neutral-25 flex flex-col items-start justify-start py-[18px] px-[19px] gap-[12px] border-[1px] border-solid border-neutral-neutral-100">
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <div className="relative leading-[28px] font-medium">
                      Terms and Conditions
                    </div>
                    <div className="w-[127px] hidden flex-col items-start justify-start text-sm text-neutral-neutral-800">
                      <div className="self-stretch flex flex-col items-start justify-start relative gap-[4px]">
                        <div className="w-full h-full absolute !m-[0] top-[-4px] right-[-4px] bottom-[-4px] left-[-4px] rounded-md bg-neutral-neutral-50 hidden z-[0]" />
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] z-[1]">
                          <div className="flex flex-col items-start justify-start">
                            <img
                              className="w-4 h-4 relative rounded-border-radius-br4 overflow-hidden shrink-0"
                              alt=""
                            />
                          </div>
                          <div className="h-5 flex-1 relative leading-[20px] inline-block">
                            Hide Bank Details
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-row items-start justify-start py-0 pr-0 pl-6 z-[2] text-xs text-neutral-neutral-500">
                          <div className="flex-1 relative leading-[20px] whitespace-nowrap">
                            Add any helptext if any
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base text-neutral-neutral-800">
                    <div className="self-stretch relative leading-[24px]">
                      Please pay within 15 days from the date of invoice, overdue
                      interest @ 14% will be charged on delayed payments.
                    </div>
                    <div className="self-stretch relative leading-[24px]">
                      Please quote invoice number when remitting funds.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start py-0 pr-5 pl-0 box-border min-w-[249px] max-w-full text-base text-neutral-neutral-500 mq450:gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[24px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[110px]">
                      <div className="self-stretch relative leading-[24px] font-medium">
                        Sub Total
                      </div>
                      <div className="self-stretch relative leading-[24px] font-medium">
                        Discount(0%)
                      </div>
                      <div className="self-stretch relative leading-[24px] font-medium">
                        VAT(5%)
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-end justify-start gap-[16px] min-w-[110px] text-right text-neutral-neutral-800">
                      <div className="self-stretch relative leading-[24px] font-semibold whitespace-nowrap">
                        $5500
                      </div>
                      <div className="self-stretch relative leading-[24px] font-semibold whitespace-nowrap">
                        $0
                      </div>
                      <div className="self-stretch relative leading-[24px] font-semibold whitespace-nowrap">
                        $275
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-2.5 px-0 gap-[20px] text-right text-5xl text-neutral-neutral-800 border-t-[1px] border-solid border-neutral-neutral-800 border-b-[1px] mq450:flex-wrap">
                    <h3 className="m-0 relative text-inherit tracking-[-0.5px] leading-[36px] font-semibold font-inherit mq450:text-lgi mq450:leading-[29px]">
                      Amount Due
                    </h3>
                    <div className="w-[73px] relative tracking-[-0.5px] leading-[36px] font-semibold inline-block min-w-[73px] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                      $5775
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-[1062px] bg-primary-primary-50 overflow-hidden flex flex-row items-start justify-center pt-[13px] px-5 pb-3 box-border shrink-0 [debug_commit:bf4bc93] max-w-[107%] text-left text-base text-primary-primary-500 font-d8-semibold">
          <div className="h-6 w-[352px] relative leading-[24px] inline-block max-w-full">
            {`Discover more such templates on `}
            <a
              className="text-[inherit]"
              href="https://www.refrens.com/free-online-invoice-generator"
              target="_blank"
            >
              <span className="[text-decoration:underline]">Refrens.com</span>
            </a>
          </div>
        </footer>
      </div>
    );
  };
  
  export default InvoiceTemplate;
  