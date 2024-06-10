import React from "react";
import Sidebar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import CardSalesAnalytics from "../Dashboard/Data";
import LineChart from "../Dashboard/Chart";
import "./Dashboard.css";
import Header from "../Header/Header";
import Page from "./GoldPrice/Table";
import BarChart from "./BarChart";
import { Bold } from "lucide-react";

const Dashboard = () => {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div className="w-full relative bg-additional-white overflow-hidden flex flex-row items-start justify-start gap-[20px] leading-[normal] tracking-[normal] mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
      <Sidebar />
      <main className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_260px)] mq1050:max-w-full">
        <section className="self-stretch flex flex-col items-end justify-start max-w-full text-left text-xs text-greyscale-500 font-body-medium-bold">
          <main className="flex flex-row items-start justify-end py-0 px-[72px] mq450:pl-5 mq450:pr-5 mq450:box-border"></main>
          <div className="self-stretch h-[864px] bg-greyscale-50 overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[648px] box-border gap-[24px] max-w-full z-[2] mt-[-3px] lg:pb-[421px] lg:box-border mq750:pb-[274px] mq750:box-border mq1050:h-auto">
            <header className="self-stretch bg-additional-white overflow-hidden shrink-0 flex flex-row items-end justify-start pt-[17px] px-8 pb-[18px] gap-[110.2px] top-[0] z-[99] sticky text-left text-sm text-greyscale-900 font-body-medium-bold mq450:gap-[28px] mq750:gap-[55px]">
              <div className="flex flex-col items-start justify-start gap-[4px] text-5xl">
                <h1 className="m-0 relative text-inherit tracking-[0.2px] leading-[125%] font-bold font-inherit inline-block min-w-[114px] whitespace-nowrap">
                  Overview
                </h1>
                {user && (
                  <div
                    className="welcome-back"
                    style={{
                      position: "absolute",
                      fontSize: "14px",
                      marginLeft: "700px",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    <span>Welcome Back: {user.fullName}</span>
                    {user.profilePicture && (
                      <img
                        className="profile-picture"
                        src={user.profilePicture}
                        alt={`${user.fullName}'s profile`}
                        style={{
                          width: "45px",
                          height: "45px",
                          marginLeft: "20px",
                        }}
                      />
                    )}
                  </div>
                )}
                <div className="relative text-xs leading-[160%] text-greyscale-500 whitespace-nowrap">
                  Detailed information about your store
                </div>
              </div>
            </header>
            <div className="w-[1141px] flex flex-row items-start justify-start py-0 px-8 box-border max-w-full">
              <div className="flex-1 overflow-x-auto flex flex-row items-start justify-start gap-[24px] max-w-full">
                <CardSalesAnalytics
                  icon="/icon.svg"
                  sales="Sales"
                  prop="$1,234.00"
                  prop1="+12%"
                  div={false}
                />
                <CardSalesAnalytics
                  icon="/icon-2.svg"
                  sales="Under Warranty"
                  prop="$956.00"
                  prop1="-5%"
                  div={false}
                  propWidth="251px"
                  propMinWidth="91px"
                  propMinWidth1="78px"
                  propWidth1="23px"
                  propColor="#ed4f9d"
                  propHeight="unset"
                />
                <CardSalesAnalytics
                  icon="/icon-1.svg"
                  sales="Total Revenue"
                  prop="$10,566.01"
                  prop1="+35%"
                  div={false}
                  propWidth="252px"
                  propMinWidth="82px"
                  propMinWidth1="101px"
                  propWidth1="33px"
                  propColor="#24d164"
                  propHeight="unset"
                />
                <CardSalesAnalytics
                  icon="/icon-3.svg"
                  sales="Jewely"
                  prop="5,566.01"
                  div
                  propWidth="249px"
                  propMinWidth="41px"
                  propMinWidth1="79px"
                  propWidth1="0px"
                  propColor="#24d164"
                  propHeight="19px"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-[18px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-end justify-start gap-[20px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3.5 box-border gap-[18px] max-w-full mq1050:flex-wrap">
                  <div className="flex-1 rounded-xl bg-additional-white flex flex-col items-start justify-start p-6 box-border gap-[24px] max-w-full mq750:min-w-full">
                    <div className="w-[743px] h-[329px] relative rounded-xl bg-additional-white hidden max-w-full" />
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative leading-[160%] inline-block min-w-[89px] z-[1]">
                          Overall revenue
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[8px] text-lg text-greyscale-900">
                          <b className="relative tracking-[0.2px] leading-[140%] inline-block min-w-[102px] whitespace-nowrap z-[1]">
                            $48,574.21
                          </b>
                        </div>
                      </div>
                      <select
                        className="form border rounded-lg form-select"
                        id="yearSelect"
                      >
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                      </select>
                    </div>
                    <LineChart />
                  </div>
                  <div className="w-[359px] rounded-xl bg-additional-white flex flex-col items-start justify-start p-6 box-border relative gap-[24px] min-w-[359px] max-w-full mq450:min-w-full mq1050:flex-1">
                    <div className="w-[359px] h-[329px] relative rounded-xl bg-additional-white hidden max-w-full z-[0]" />
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative leading-[160%] inline-block min-w-[73px] z-[1]">
                          Number of Customers
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[8px] text-lg text-greyscale-900">
                          <b className="relative tracking-[0.2px] leading-[140%] inline-block min-w-[63px] z-[1]">
                            10,320
                          </b>
                        </div>
                      </div>
                      <select
                        className="formbar border rounded-lg form-select"
                        id="yearSelect"
                      >
                        <option value="ThisWeek">This Week</option>
                        <option value="LastWeek">Last Week</option>
                      </select>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-right mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[178px] text-left">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                            <div className="self-stretch h-[164px] relative">
                              <BarChart />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[47px] max-w-full text-base text-greyscale-900 mq750:gap-[23px] mq1050:flex-wrap">
                  <Page />
                  <div className="w-[359px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[359px] max-w-full mq450:min-w-full mq1050:flex-1">
                    <div className="self-stretch rounded-xl bg-additional-white flex flex-col items-start justify-start pt-5 px-5 pb-[15px] box-border gap-[16px] max-w-full">
                      <div className="w-[359px] h-[275px] relative rounded-xl bg-additional-white hidden max-w-full" />
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <b className="relative tracking-[0.2px] leading-[140%] z-[1]">
                            Transaction history
                          </b>
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                          loading="lazy"
                          alt=""
                          src="/dots.svg"
                        />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[7.5px] text-xs">
                        <div className="self-stretch flex flex-row items-center justify-between py-[7px] px-0 gap-[20px] z-[1] mq450:flex-wrap">
                          <div className="flex flex-row items-start justify-start gap-[12px]">
                            <img
                              className="h-10 w-10 relative rounded-xl overflow-hidden shrink-0"
                              alt=""
                              src="/icon-4.svg"
                            />
                            <div className="flex flex-col items-start justify-start gap-[4px]">
                              <div className="relative leading-[160%] font-semibold inline-block min-w-[122px]">
                                <span>{`Payment from `}</span>
                                <span className="text-primary-600-base">
                                  #0199
                                </span>
                              </div>
                              <div className="relative leading-[160%] font-medium text-greyscale-500 inline-block min-w-[104px] whitespace-nowrap">
                                Dec 23, 04:00 PM
                              </div>
                            </div>
                          </div>
                          <b className="relative text-sm leading-[160%] inline-block text-right min-w-[57px] whitespace-nowrap">
                            $421.00
                          </b>
                        </div>
                        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-greyscale-100" />
                        <div className="self-stretch flex flex-row items-center justify-between py-[7px] px-0 gap-[20px] z-[1] mq450:flex-wrap">
                          <div className="flex flex-row items-start justify-start gap-[12px]">
                            <img
                              className="h-10 w-10 relative rounded-xl overflow-hidden shrink-0"
                              alt=""
                              src="/icon-5.svg"
                            />
                            <div className="flex flex-col items-start justify-start gap-[4px]">
                              <div className="relative leading-[160%] font-semibold inline-block min-w-[122px]">
                                <span>{`Payment from `}</span>
                                <span className="text-primary-600-base">
                                  #0199
                                </span>
                              </div>
                              <div className="relative leading-[160%] font-medium text-greyscale-500 inline-block min-w-[104px] whitespace-nowrap">
                                Dec 23, 04:00 PM
                              </div>
                            </div>
                          </div>
                          <b className="relative text-sm leading-[160%] inline-block text-right min-w-[57px] whitespace-nowrap">
                            $421.00
                          </b>
                        </div>
                        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-greyscale-100" />
                        <div className="self-stretch flex flex-row items-center justify-between py-[7px] px-0 gap-[20px] z-[1] mq450:flex-wrap">
                          <div className="flex flex-row items-start justify-start gap-[12px]">
                            <img
                              className="h-10 w-10 relative rounded-xl overflow-hidden shrink-0"
                              alt=""
                              src="/icon-6.svg"
                            />
                            <div className="flex flex-col items-start justify-start gap-[4px]">
                              <div className="relative leading-[160%] font-semibold inline-block min-w-[122px]">
                                <span>{`Payment from `}</span>
                                <span className="text-primary-600-base">
                                  #0199
                                </span>
                              </div>
                              <div className="relative leading-[160%] font-medium text-greyscale-500 inline-block min-w-[104px] whitespace-nowrap">
                                Dec 23, 04:00 PM
                              </div>
                            </div>
                          </div>
                          <b className="relative text-sm leading-[160%] inline-block text-right min-w-[57px] whitespace-nowrap">
                            $421.00
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
