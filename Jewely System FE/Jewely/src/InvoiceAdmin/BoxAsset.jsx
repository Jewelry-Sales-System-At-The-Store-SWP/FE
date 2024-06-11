import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useEffect, useState } from 'react';

const BasicInfo = ({ className = "" }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className="w-[463px] flex flex-col items-end justify-start gap-[248px] min-w-[463px] max-w-full text-base text-white font-poppins mq750:min-w-full mq450:gap-[124px] mq1125:flex-1">
            <form className="m-0 self-stretch bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-[55px] px-[49px] pb-[90px] gap-[13px] max-w-full border-[1px] mq750:pt-9 mq750:pb-[58px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                <b className="relative text-base inline-block font-satoshi text-gray-100 text-left min-w-[73px]">
                    Basic Info
                </b>
                <div className="w-[345px] flex flex-col items-start justify-start pt-0 px-0 pb-[11px] box-border gap-[30px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
                        
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative text-lgi leading-[20px] font-medium font-satoshi text-gray-500 text-left inline-block min-w-[49px]">
                                Invoice date
                            </div>
                            <div className="self-stretch rounded-10xs flex flex-row items-start justify-between py-2 pr-[11px] pl-[9px] gap-[20px] border-[1px] border-solid border-gray-400">
                                <input
                                    className="w-[100px] [border:none] [outline:none] font-medium font-satoshi text-xl bg-[transparent] h-5 relative leading-[20px] text-gray-100 text-left inline-block p-0"
                                    placeholder="20 Apr 2022"
                                    type="text"
                                    readOnly
                                    value={startDate.toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric'
                                      })}
                                    onClick={() => setModalIsOpen(true)}
                                />
                                <img
                                    className="h-6 w-6 relative cursor-pointer"
                                    loading="lazy"
                                    alt=""
                                    src="src/assets/vuesaxtwotonecalendar.svg"
                                    onClick={() => setModalIsOpen(true)}
                                    
                                />
                            </div>
                            {modalIsOpen && (
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => {
                                        setStartDate(date);
                                        setModalIsOpen(false);
                                    }}
                                    inline
                                />
                            )}
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
    );
};


export default BasicInfo;