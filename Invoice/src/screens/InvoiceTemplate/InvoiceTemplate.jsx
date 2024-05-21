import React from "react";

export const InvoiceTemplate = () => {
  return (
    <div className="flex flex-col h-[1324px] items-start gap-[40px] p-[40px] relative bg-white overflow-hidden">
      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
            <div className="flex w-[350px] items-center gap-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-h5 font-[number:var(--h5-font-weight)] text-neutralneutral-800 text-[length:var(--h5-font-size)] text-right tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] whitespace-nowrap [font-style:var(--h5-font-style)]">
                Invoice
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[303.5px] items-start gap-[12px] relative flex-[0_0_auto]">
            <div className="flex items-start gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[116px] mt-[-1.00px] font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-500 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] [font-style:var(--d4-regular-font-style)]">
                Invoice No.
              </div>
              <div className="relative flex-1 mt-[-1.00px] font-d4-medium font-[number:var(--d4-medium-font-weight)] text-neutralneutral-800 text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] [font-style:var(--d4-medium-font-style)]">
                #INV0001
              </div>
            </div>
            <div className="flex items-start gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[116px] mt-[-1.00px] font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-500 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] [font-style:var(--d4-regular-font-style)]">
                Invoice Date
              </div>
              <div className="relative flex-1 mt-[-1.00px] font-d4-medium font-[number:var(--d4-medium-font-weight)] text-neutralneutral-800 text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] [font-style:var(--d4-medium-font-style)]">
                Sep 24, 2023
              </div>
            </div>
            <div className="flex items-start gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[116px] mt-[-1.00px] font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-500 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] [font-style:var(--d4-regular-font-style)]">
                Due Date
              </div>
              <div className="relative flex-1 mt-[-1.00px] font-d4-medium font-[number:var(--d4-medium-font-weight)] text-neutralneutral-800 text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] [font-style:var(--d4-medium-font-style)]">
                Sep 30, 2023
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[240px] h-[100px] bg-primitives-raw-values-colors-neutral-25 rounded-[16px] border-2 border-dashed border-primitives-raw-values-colors-neutral-200">
          <div className="absolute top-[32px] left-[52px] font-d6-semibold font-[number:var(--d6-semibold-font-weight)] text-neutralneutral-800 text-[length:var(--d6-semibold-font-size)] tracking-[var(--d6-semibold-letter-spacing)] leading-[var(--d6-semibold-line-height)] whitespace-nowrap [font-style:var(--d6-semibold-font-style)]">
            Your logo here
          </div>
        </div>
      </div>
      <div className="flex items-start gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[12px] p-[24px] relative flex-1 grow bg-neutralneutral-25 rounded-[16px] border border-solid border-neutralneutral-100">
          <div className="relative w-fit mt-[-1.00px] font-d5-medium font-[number:var(--d5-medium-font-weight)] text-primaryprimary-500 text-[length:var(--d5-medium-font-size)] tracking-[var(--d5-medium-letter-spacing)] leading-[var(--d5-medium-line-height)] whitespace-nowrap [font-style:var(--d5-medium-font-style)]">
            Billed By
          </div>
          <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] font-d6-bold font-[number:var(--d6-bold-font-weight)] text-neutralneutral-800 text-[length:var(--d6-bold-font-size)] tracking-[var(--d6-bold-letter-spacing)] leading-[var(--d6-bold-line-height)] [font-style:var(--d6-bold-font-style)]">
                Sandeep Maurya
              </div>
              <p className="relative self-stretch font-d5-medium font-[number:var(--d5-medium-font-weight)] text-neutralneutral-800 text-[length:var(--d5-medium-font-size)] tracking-[var(--d5-medium-letter-spacing)] leading-[var(--d5-medium-line-height)] [font-style:var(--d5-medium-font-style)]">
                305, 3rd Floor Orion mall, Bengaluru, Karnataka, India - 560055
              </p>
            </div>
            <div className="flex items-start gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[50px] mt-[-1.00px] font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-500 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] [font-style:var(--d4-regular-font-style)]">
                Email
              </div>
              <div className="relative w-fit mt-[-1.00px] font-d4-medium font-[number:var(--d4-medium-font-weight)] text-neutralneutral-800 text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] whitespace-nowrap [font-style:var(--d4-medium-font-style)]">
                sandeepmauryadesigns@gmail.com
              </div>
            </div>
            <div className="flex items-start gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[50px] mt-[-1.00px] font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-500 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] [font-style:var(--d4-regular-font-style)]">
                Phone
              </div>
              <div className="w-fit font-[number:var(--d4-medium-font-weight)] text-neutralneutral-800 whitespace-nowrap relative mt-[-1.00px] font-d4-medium text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] [font-style:var(--d4-medium-font-style)]">
                +91 98765 43210
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[12px] p-[24px] relative flex-1 grow bg-neutralneutral-25 rounded-[16px] border border-solid border-neutralneutral-100">
          <div className="relative w-fit mt-[-1.00px] font-d5-medium font-[number:var(--d5-medium-font-weight)] text-primaryprimary-500 text-[length:var(--d5-medium-font-size)] tracking-[var(--d5-medium-letter-spacing)] leading-[var(--d5-medium-line-height)] whitespace-nowrap [font-style:var(--d5-medium-font-style)]">
            Billed To
          </div>
          <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] font-d6-bold font-[number:var(--d6-bold-font-weight)] text-neutralneutral-800 text-[length:var(--d6-bold-font-size)] tracking-[var(--d6-bold-letter-spacing)] leading-[var(--d6-bold-line-height)] [font-style:var(--d6-bold-font-style)]">
                Studio Den
              </div>
              <p className="relative self-stretch font-d5-medium font-[number:var(--d5-medium-font-weight)] text-neutralneutral-800 text-[length:var(--d5-medium-font-size)] tracking-[var(--d5-medium-letter-spacing)] leading-[var(--d5-medium-line-height)] [font-style:var(--d5-medium-font-style)]">
                305, 3rd Floor Orion mall, Bengaluru, Karnataka, India - 560055
              </p>
            </div>
            <div className="flex items-start gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[50px] mt-[-1.00px] font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-500 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] [font-style:var(--d4-regular-font-style)]">
                Email
              </div>
              <div className="relative w-fit mt-[-1.00px] font-d4-medium font-[number:var(--d4-medium-font-weight)] text-neutralneutral-800 text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] whitespace-nowrap [font-style:var(--d4-medium-font-style)]">
                info@studioden.com
              </div>
            </div>
            <div className="flex items-start gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="w-[50px] font-[number:var(--d4-regular-font-weight)] text-neutralneutral-500 relative mt-[-1.00px] font-d4-regular text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] [font-style:var(--d4-regular-font-style)]">
                Phone
              </div>
              <div className="w-fit font-[number:var(--d4-medium-font-weight)] text-neutralneutral-800 whitespace-nowrap relative mt-[-1.00px] font-d4-medium text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] [font-style:var(--d4-medium-font-style)]">
                +91 98765 43210
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] rounded-[12px_12px_0px_0px] overflow-hidden">
        <div className="flex items-start gap-[254px] px-[20px] py-[12px] relative self-stretch w-full flex-[0_0_auto] z-[2] bg-disco-jupiter-primary-primary-400">
          <div className="flex items-start gap-[24px] relative flex-1 grow">
            <div className="flex flex-col items-start gap-[20px] relative flex-1 grow">
              <div className="flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] font-d4-semibold font-[number:var(--d4-semibold-font-weight)] text-white-100 text-[length:var(--d4-semibold-font-size)] tracking-[var(--d4-semibold-letter-spacing)] leading-[var(--d4-semibold-line-height)] [font-style:var(--d4-semibold-font-style)]">
                  Service and description
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[24px] relative flex-1 grow">
              <div className="relative flex-1 mt-[-1.00px] font-d4-semibold font-[number:var(--d4-semibold-font-weight)] text-primitives-raw-values-colors-white-100 text-[length:var(--d4-semibold-font-size)] text-center tracking-[var(--d4-semibold-letter-spacing)] leading-[var(--d4-semibold-line-height)] [font-style:var(--d4-semibold-font-style)]">
                Qty
              </div>
              <div className="relative flex-1 mt-[-1.00px] font-d4-semibold font-[number:var(--d4-semibold-font-weight)] text-white-100 text-[length:var(--d4-semibold-font-size)] text-center tracking-[var(--d4-semibold-letter-spacing)] leading-[var(--d4-semibold-line-height)] [font-style:var(--d4-semibold-font-style)]">
                Rate
              </div>
              <div className="relative flex-1 mt-[-1.00px] font-d4-semibold font-[number:var(--d4-semibold-font-weight)] text-white-100 text-[length:var(--d4-semibold-font-size)] text-right tracking-[var(--d4-semibold-letter-spacing)] leading-[var(--d4-semibold-line-height)] [font-style:var(--d4-semibold-font-style)]">
                Total
              </div>
            </div>
          </div>
        </div>
        <div className="z-[1] flex items-start gap-[254px] p-[20px] relative self-stretch w-full flex-[0_0_auto] border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-l [border-left-style:solid] border-neutralneutral-200">
          <div className="flex items-start gap-[24px] relative flex-1 grow">
            <div className="flex flex-col items-start gap-[20px] relative flex-1 grow">
              <div className="flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] font-d5-bold font-[number:var(--d5-bold-font-weight)] text-neutralneutral-800 text-[length:var(--d5-bold-font-size)] tracking-[var(--d5-bold-letter-spacing)] leading-[var(--d5-bold-line-height)] [font-style:var(--d5-bold-font-style)]">
                  UX Strategy
                </div>
                <p className="relative self-stretch font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-800 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] [font-style:var(--d4-regular-font-style)]">
                  Create and send unlimited professional invoices for free. Use our unique features to collect payments
                  faster.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[24px] relative flex-1 grow">
              <div className="relative flex-1 mt-[-1.00px] font-d5-bold font-[number:var(--d5-bold-font-weight)] text-neutralneutral-800 text-[length:var(--d5-bold-font-size)] text-center tracking-[var(--d5-bold-letter-spacing)] leading-[var(--d5-bold-line-height)] [font-style:var(--d5-bold-font-style)]">
                1
              </div>
              <div className="flex-1 mt-[-1.00px] font-[number:var(--d5-bold-font-weight)] text-[length:var(--d5-bold-font-size)] text-center leading-[var(--d5-bold-line-height)] relative font-d5-bold text-neutralneutral-800 tracking-[var(--d5-bold-letter-spacing)] [font-style:var(--d5-bold-font-style)]">
                $500
              </div>
              <div className="relative flex-1 mt-[-1.00px] font-d5-bold font-[number:var(--d5-bold-font-weight)] text-neutralneutral-800 text-[length:var(--d5-bold-font-size)] text-right tracking-[var(--d5-bold-letter-spacing)] leading-[var(--d5-bold-line-height)] [font-style:var(--d5-bold-font-style)]">
                $500
              </div>
            </div>
          </div>
        </div>
        <div className="z-0 flex items-start gap-[254px] p-[20px] relative self-stretch w-full flex-[0_0_auto] border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-l [border-left-style:solid] border-neutralneutral-200">
          <div className="flex items-start gap-[24px] relative flex-1 grow">
            <div className="flex flex-col items-start gap-[20px] relative flex-1 grow">
              <div className="flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] font-d5-bold font-[number:var(--d5-bold-font-weight)] text-neutralneutral-800 text-[length:var(--d5-bold-font-size)] tracking-[var(--d5-bold-letter-spacing)] leading-[var(--d5-bold-line-height)] [font-style:var(--d5-bold-font-style)]">
                  Design System
                </div>
                <p className="relative self-stretch font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-800 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] [font-style:var(--d4-regular-font-style)]">
                  Create and send unlimited professional invoices for free. Use our unique features to collect payments
                  faster.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[24px] relative flex-1 grow">
              <div className="relative flex-1 mt-[-1.00px] font-d5-bold font-[number:var(--d5-bold-font-weight)] text-neutralneutral-800 text-[length:var(--d5-bold-font-size)] text-center tracking-[var(--d5-bold-letter-spacing)] leading-[var(--d5-bold-line-height)] [font-style:var(--d5-bold-font-style)]">
                1
              </div>
              <div className="flex-1 mt-[-1.00px] font-[number:var(--d5-bold-font-weight)] text-[length:var(--d5-bold-font-size)] text-center leading-[var(--d5-bold-line-height)] relative font-d5-bold text-neutralneutral-800 tracking-[var(--d5-bold-letter-spacing)] [font-style:var(--d5-bold-font-style)]">
                $5000
              </div>
              <div className="relative flex-1 mt-[-1.00px] font-d5-bold font-[number:var(--d5-bold-font-weight)] text-neutralneutral-800 text-[length:var(--d5-bold-font-size)] text-right tracking-[var(--d5-bold-letter-spacing)] leading-[var(--d5-bold-line-height)] [font-style:var(--d5-bold-font-style)]">
                $5000
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-[32px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[574px] items-start gap-[20px] relative">
          <div className="flex flex-col items-start gap-[12px] p-[20px] relative self-stretch w-full flex-[0_0_auto] bg-neutralneutral-25 rounded-[16px] border border-solid border-primitives-raw-values-colors-neutral-100">
            <div className="flex items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[16px] relative flex-1 grow">
                <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-d5-medium font-[number:var(--d5-medium-font-weight)] text-primaryprimary-500 text-[length:var(--d5-medium-font-size)] tracking-[var(--d5-medium-letter-spacing)] leading-[var(--d5-medium-line-height)] whitespace-nowrap [font-style:var(--d5-medium-font-style)]">
                    Bank Account Details
                  </div>
                </div>
                <div className="flex items-start gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-500 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] whitespace-nowrap [font-style:var(--d4-regular-font-style)]">
                      Bank Name
                    </div>
                    <div className="relative w-fit font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-500 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] whitespace-nowrap [font-style:var(--d4-regular-font-style)]">
                      Account Holder Name
                    </div>
                    <div className="relative w-fit font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-500 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] whitespace-nowrap [font-style:var(--d4-regular-font-style)]">
                      Account Number
                    </div>
                    <div className="relative w-fit font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-500 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] whitespace-nowrap [font-style:var(--d4-regular-font-style)]">
                      IFSC
                    </div>
                    <div className="relative w-fit font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-500 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] whitespace-nowrap [font-style:var(--d4-regular-font-style)]">
                      Account Type
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-d4-medium font-[number:var(--d4-medium-font-weight)] text-neutralneutral-800 text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] [font-style:var(--d4-medium-font-style)]">
                      HDFC Bank
                    </div>
                    <div className="relative self-stretch font-d4-medium font-[number:var(--d4-medium-font-weight)] text-neutralneutral-800 text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] [font-style:var(--d4-medium-font-style)]">
                      Foobar Labs
                    </div>
                    <div className="relative self-stretch font-d4-medium font-[number:var(--d4-medium-font-weight)] text-neutralneutral-800 text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] [font-style:var(--d4-medium-font-style)]">
                      45366287987
                    </div>
                    <div className="relative self-stretch font-d4-medium font-[number:var(--d4-medium-font-weight)] text-neutralneutral-800 text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] [font-style:var(--d4-medium-font-style)]">
                      HDFC0018159
                    </div>
                    <div className="relative self-stretch font-d4-medium font-[number:var(--d4-medium-font-weight)] text-neutralneutral-800 text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] [font-style:var(--d4-medium-font-style)]">
                      Savings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[12px] p-[20px] relative self-stretch w-full flex-[0_0_auto] bg-neutralneutral-25 rounded-[16px] border border-solid border-neutralneutral-100">
            <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-d5-medium font-[number:var(--d5-medium-font-weight)] text-primaryprimary-500 text-[length:var(--d5-medium-font-size)] tracking-[var(--d5-medium-letter-spacing)] leading-[var(--d5-medium-line-height)] whitespace-nowrap [font-style:var(--d5-medium-font-style)]">
                Terms and Conditions
              </div>
            </div>
            <div className="flex flex-col items-start gap-[12px] relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-800 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] [font-style:var(--d4-regular-font-style)]">
                Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed
                payments.
              </p>
              <p className="relative self-stretch font-d4-regular font-[number:var(--d4-regular-font-weight)] text-neutralneutral-800 text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] [font-style:var(--d4-regular-font-style)]">
                Please quote invoice number when remitting funds.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-[40px] pl-0 pr-[20px] py-0 relative flex-1 grow">
          <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[16px] relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-d4-medium font-[number:var(--d4-medium-font-weight)] text-neutralneutral-500 text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] [font-style:var(--d4-medium-font-style)]">
                  Sub Total
                </div>
                <div className="relative self-stretch font-d4-medium font-[number:var(--d4-medium-font-weight)] text-neutralneutral-500 text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] [font-style:var(--d4-medium-font-style)]">
                  Discount(0%)
                </div>
                <div className="relative self-stretch font-d4-medium font-[number:var(--d4-medium-font-weight)] text-neutralneutral-500 text-[length:var(--d4-medium-font-size)] tracking-[var(--d4-medium-letter-spacing)] leading-[var(--d4-medium-line-height)] [font-style:var(--d4-medium-font-style)]">
                  VAT(5%)
                </div>
              </div>
              <div className="flex flex-col items-end gap-[16px] relative flex-1 grow">
                <div className="self-stretch mt-[-1.00px] font-[number:var(--d4-semibold-font-weight)] text-[length:var(--d4-semibold-font-size)] text-right leading-[var(--d4-semibold-line-height)] relative font-d4-semibold text-neutralneutral-800 tracking-[var(--d4-semibold-letter-spacing)] [font-style:var(--d4-semibold-font-style)]">
                  $5500
                </div>
                <div className="self-stretch font-[number:var(--d4-semibold-font-weight)] text-[length:var(--d4-semibold-font-size)] text-right leading-[var(--d4-semibold-line-height)] relative font-d4-semibold text-neutralneutral-800 tracking-[var(--d4-semibold-letter-spacing)] [font-style:var(--d4-semibold-font-style)]">
                  $0
                </div>
                <div className="self-stretch font-[number:var(--d4-semibold-font-weight)] text-[length:var(--d4-semibold-font-size)] text-right leading-[var(--d4-semibold-line-height)] relative font-d4-semibold text-neutralneutral-800 tracking-[var(--d4-semibold-letter-spacing)] [font-style:var(--d4-semibold-font-style)]">
                  $275
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-0 py-[12px] relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-neutralneutral-800">
              <div className="relative w-fit mt-[-1.00px] font-d8-semibold font-[number:var(--d8-semibold-font-weight)] text-neutralneutral-800 text-[length:var(--d8-semibold-font-size)] text-right tracking-[var(--d8-semibold-letter-spacing)] leading-[var(--d8-semibold-line-height)] whitespace-nowrap [font-style:var(--d8-semibold-font-style)]">
                Amount Due
              </div>
              <div className="relative w-fit mt-[-1.00px] font-d8-semibold font-[number:var(--d8-semibold-font-weight)] text-neutralneutral-800 text-[length:var(--d8-semibold-font-size)] text-right tracking-[var(--d8-semibold-letter-spacing)] leading-[var(--d8-semibold-line-height)] whitespace-nowrap [font-style:var(--d8-semibold-font-style)]">
                $5775
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[1062px] h-[49px] top-[1395px] left-[34px] bg-disco-jupiter-primary-primary-50">
        <p className="absolute top-[12px] left-[355px] [font-family:'Inter',Helvetica] font-normal text-disco-jupiter-primary-primary-500 text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
          <span className="font-d4-regular font-[number:var(--d4-regular-font-weight)] text-[#7341fb] text-[length:var(--d4-regular-font-size)] tracking-[var(--d4-regular-letter-spacing)] leading-[var(--d4-regular-line-height)] [font-style:var(--d4-regular-font-style)]">
            Discover more such templates on{" "}
          </span>
          <a href="https://www.refrens.com/free-online-invoice-generator" rel="noopener noreferrer" target="_blank">
            <span className="underline">Refrens.com</span>
          </a>
        </p>
      </div>
    </div>
  );
};
