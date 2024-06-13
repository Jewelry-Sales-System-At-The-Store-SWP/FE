import { useCallback } from "react";
import { Link } from "react-router-dom"
import React from "react";

const Sidebar = () => {
  const onDashboardContainerClick = useCallback(() => {
    <Link to="/">Dashboard</Link>
  }, []);

  const onManageStaffContainerClick = useCallback(() => {
    <Link to="/">ManagerStaff</Link>
  }, []);

  const onManageCustomClick = useCallback(() => {
    <Link to="/">ManageCustomer</Link>
  }, []);

  const onManagePromotionContainerClick = useCallback(() => {
    <Link to="/">ManagePromotion</Link>
  }, []);
  const onManageJewelyContainerClick = useCallback(() => {
    <Link to="/">ManageJewely</Link>

  }, []);
  const onInvoiceTextClick = useCallback(() => {
    <Link to="/">Invoice</Link>
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
            <Link
              to="/"
              className="flex flex-row items-start justify-start gap-[12px] opacity-[0.6] cursor-pointer z-[2]"
              style={{ textDecoration: 'none', color: 'inherit' }}
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
            </Link>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-4 pb-[5px]">
            <Link
              to="/manage-staff"
              className="flex flex-row items-start justify-start gap-[10px] opacity-[0.6] cursor-pointer z-[2]"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={onManageStaffContainerClick}
            >
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px] shrink-0 [debug_commit:1de1738]"
                alt=""
                src="src/assets/iconlyboldprofile@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <div className="relative tracking-[0.5px] leading-[12px] inline-block min-w-[87px] shrink-0 [debug_commit:1de1738]">
                  Manage Staff
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-4 pb-[5px]">
            <Link
              to="/manage-custom"
              className="flex flex-row items-start justify-start gap-[12px] opacity-[0.6] cursor-pointer z-[2]"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={onManageCustomClick}
            >
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px] shrink-0 [debug_commit:1de1738]"
                alt=""
                src="src/assets/iconlybolddocument@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative tracking-[0.5px] leading-[12px] inline-block min-w-[108px] shrink-0 [debug_commit:1de1738]">
                  Manage Custom
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-4 pb-[5px]">
            <Link
              to="/manage-promotion"
              className="flex flex-row items-start justify-start gap-[12px] opacity-[0.6] cursor-pointer z-[2]"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={onManagePromotionContainerClick}
            >
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px] shrink-0 [debug_commit:1de1738]"
                src="src/assets/iconlyboldchat@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative tracking-[0.5px] leading-[12px] inline-block min-w-[123px] shrink-0 [debug_commit:1de1738]">
                  Manage Promotion
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-4 pb-[20px]">
            <Link
              to="/manage-jewelry"
              className="flex flex-row items-start justify-start gap-[12px] opacity-[0.6] cursor-pointer z-[3]"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={onManageJewelyContainerClick}
            >
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px] shrink-0 [debug_commit:1de1738]"
                alt=""
                src="src/assets/iconlyboldchat@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative tracking-[0.5px] leading-[12px] inline-block min-w-[123px] shrink-0 [debug_commit:1de1738]">
                  Manage Jewelry
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-[17px] pb-[5px] text-2xs text-gray">
            <div className="relative tracking-[1px] leading-[11px] inline-block min-w-[47px] z-[2]">
              OTHERS
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-4 pb-[5px]">
            <Link
              to="/invoice-admin"  
              className="flex flex-row items-start justify-start gap-[12px] opacity-[0.6] cursor-pointer z-[2]"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={onInvoiceTextClick}
            >
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px] shrink-0 [debug_commit:1de1738]"
                alt=""
                src="src/assets/iconlyboldwallet@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative tracking-[0.5px] leading-[12px] inline-block min-w-[47px] shrink-0 [debug_commit:1de1738]">
                  Invoice
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-4 pb-[5px]">
            <div className="flex flex-row items-start justify-start gap-[12px] opacity-[0.6] z-[2]">
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px] shrink-0 [debug_commit:1de1738]"
                alt=""
                src="src/assets/iconlyboldprofile@2x.png"
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
                src="src/assets/iconlyboldinfo-square@2x.png"
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
