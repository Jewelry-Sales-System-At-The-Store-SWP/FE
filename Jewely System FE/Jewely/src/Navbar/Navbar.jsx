import { useCallback } from "react";
import React from "react";
import helplogo from "../assets/Info Square.png"
import Setinglogo from "../assets/Setting.png"
import accountlogo from "../assets/Profile.png"
import dashboardlogo from "../assets/Chart.png"
import profilelog from "../assets/Document.png"
import wallet from "../assets/Wallet.png"
import ManagePromotion from "../ManagePromotion/ManagePromotion";

const Sidebar = () => {
  const onDashboardContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onManageStaffContainerClick = useCallback(() => {
    // Please sync "Manage Staff" to the project
  }, []);

  const onManageCustomClick = useCallback(() => {
    // Please sync "Manage customers" to the project
  }, []);

  const onManagePromotionContainerClick = useCallback(() => {
    // Please sync "Manage Promotion" to the project
  }, []);
  const onManageJewelyContainerClick = useCallback(() => {
    // Please sync "Manage Promotion" to the project
    <ManagePromotion />
  }, []);
  const onPaymentTextClick = useCallback(() => {
    // Please sync "INVOICE" to the project
  }, []);

  return (
    <div className=" w-60 bg-ghostwhite-200 flex flex-col items-start justify-start pt-5 pb-[467px] pr-4 pl-6 box-border gap-[60px] z-[1] text-left text-2xs text-white font-poppins mq1025:hidden mq1025:pb-[304px] mq1025:box-border mq450:pb-[198px] mq450:box-border">
      <div className=" w-60 h-[960px] relative bg-ghostwhite-200 hidden" />
      <div className="flex flex-row items-start justify-start py-0 px-4">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="h-6 w-6 relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkslateblue w-full h-full z-[2]" />
            <b className="absolute top-[7px] left-[8px] leading-[11px] inline-block min-w-[9px] z-[3]">
              G
            </b>
          </div>
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-darkslateblue">
            <b className="relative tracking-[0.5px] leading-[11px] inline-block mix-blend-normal min-w-[33px] z-[2]">
              GOLD
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-gray">
        <div className="flex flex-row items-start justify-start py-0 px-4">
          <div className="relative tracking-[1px] leading-[11px] inline-block min-w-[86px] z-[2]">
            MANAGEMENT
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px] text-xs text-darkslategray-300">
          <div className="flex flex-row items-start justify-start pt-0 px-4 pb-[5px]">
            <div
              className="flex flex-row items-start justify-start gap-[12px] opacity-[0.6] cursor-pointer z-[2]"
              onClick={onDashboardContainerClick}
            >
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px]"
                alt=""
                src="src/assets/iconlyboldchart@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative tracking-[0.5px] leading-[12px] inline-block min-w-[72px]">
                  Dashboard
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-4 pb-[5px]">
            <div
              className="flex flex-row items-start justify-start gap-[10px] opacity-[0.6] cursor-pointer z-[2]"
              onClick={onManageStaffContainerClick}
            >
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px] shrink-0 [debug_commit:1de1738]"
                alt=""
                src="/iconlyboldprofile@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <div className="relative tracking-[0.5px] leading-[12px] inline-block min-w-[87px] shrink-0 [debug_commit:1de1738]">
                  Manage Staff
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-4 pb-[5px]">
            <div
              className="flex flex-row items-start justify-start gap-[12px] opacity-[0.6] cursor-pointer z-[2]"
              onClick={onManageCustomClick}
            >
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px] shrink-0 [debug_commit:1de1738]"
                alt=""
                src="/iconlybolddocument@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative tracking-[0.5px] leading-[12px] inline-block min-w-[108px] shrink-0 [debug_commit:1de1738]">
                  Manage Custom
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="flex flex-row items-start justify-start py-0 px-4">
              <div
                className="flex flex-row items-start justify-start gap-[11px] opacity-[0.6] cursor-pointer z-[2]"
                onClick={onManagePromotionContainerClick}
              >
                <img
                  className="h-[18px] w-[18px] relative object-cover min-h-[18px]"
                  alt=""
                  src="/iconlyboldchat@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="relative tracking-[0.5px] leading-[12px] inline-block min-w-[123px]">
                    Manage Promotion
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-3 px-4 relative">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full z-[2]"
                alt=""
                src="/active-background.svg"
              />
              <div className="flex flex-row items-start justify-start gap-[11px] opacity-[0.6] cursor-pointer z-[3]"
                 onClick={onManageJewelyContainerClick}
              >
                <img
                  className="h-[18px] w-[18px] relative object-cover min-h-[18px] shrink-0 [debug_commit:1de1738]"
                  alt=""
                  src="/iconlyboldchat@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 ">
                  <div className="relative tracking-[0.5px] leading-[12px] inline-block min-w-[101px] shrink-0 [debug_commit:1de1738]">
                    Manage Jewely
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-[17px] pb-[5px] text-2xs text-gray">
            <div className="relative tracking-[1px] leading-[11px] inline-block min-w-[47px] z-[2]">
              OTHERS
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-4 pb-[5px]">
            <div className="flex flex-row items-start justify-start gap-[12px] opacity-[0.6] z-[2]">
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px] shrink-0 [debug_commit:1de1738]"
                alt=""
                src="/iconlyboldwallet@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div
                  className="relative tracking-[0.5px] leading-[12px] inline-block min-w-[47px] shrink-0 [debug_commit:1de1738] cursor-pointer"
                  onClick={onPaymentTextClick}
                >
                  Invoice
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-4 pb-[5px]">
            <div className="flex flex-row items-start justify-start gap-[12px] opacity-[0.6] z-[2]">
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px] shrink-0 [debug_commit:1de1738]"
                alt=""
                src="/iconlyboldprofile@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative tracking-[0.5px] leading-[12px] inline-block min-w-[61px] shrink-0 [debug_commit:1de1738]">
                  Accounts
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-4">
            <div className="flex flex-row items-start justify-start gap-[12px] opacity-[0.6] z-[2]">
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px]"
                alt=""
                src="/iconlyboldinfo-square@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative tracking-[0.5px] leading-[12px] inline-block min-w-[38px]">
                  Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
