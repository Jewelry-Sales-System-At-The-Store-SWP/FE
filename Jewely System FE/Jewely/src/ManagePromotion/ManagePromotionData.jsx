import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./ManagePromotion.css";
import { useState, useEffect } from "react";
import axios from "axios";
const PromotionDataTable = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5188/api/Promotion/GetAll")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching promotion details:", error);
      });
  }, []);

  return (
    <div className="absolute w-[1236px] h-[726px] top-[106px] left-[280px]">
      <div className="absolute w-[1236px] h-[726px] top-0 left-0">
        <div className="relative w-[1260px] h-[733px] top-[-7px]">
          <div className="relative w-[1198px] h-[801px] top-[-24px] left-[-38px] bg-[url(/static/img/rectangle-30-1.svg)] bg-[100%_100%]">
            <div className="absolute w-[1063px] h-[465px] top-[152px] left-[38px]">
              <div className="absolute w-[102px] top-[210px] left-[838px] [font-family:'Poppins',Helvetica] font-medium text-[#292d32] text-[8.8px] tracking-[-0.09px] leading-[normal]">
                {""}
              </div>
              <div className="w-[102px] top-[155px] left-[838px] text-[#292d32] text-[8.8px] tracking-[-0.09px] leading-[normal] absolute [font-family:'Poppins',Helvetica] font-medium">
                {""}
              </div>
              <div className="w-[102px] top-[102px] left-[838px] text-[#292d32] text-[8.8px] tracking-[-0.09px] leading-[normal] absolute [font-family:'Poppins',Helvetica] font-medium">
                {""}
              </div>

              <div className="absolute w-[1063px] h-[465px] top-0 left-0">
                <div className="absolute w-[787px] h-[19px] top-0 left-[42px]">
                  <div className="absolute w-[126px] top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#b5b7c0] text-[8.8px] tracking-[-0.09px] leading-[normal]">
                    ID
                  </div>
                  <div className="absolute w-[96px] top-px left-[165px] [font-family:'Poppins',Helvetica] font-medium text-[#b5b7c0] text-[8.8px] tracking-[-0.09px] leading-[normal]">
                    Name
                  </div>
                  <div className="absolute w-[114px] top-0 left-[313px] [font-family:'Poppins',Helvetica] font-medium text-[#b5b7c0] text-[8.8px] tracking-[-0.09px] leading-[normal]">
                    Discount Percentage
                  </div>
                  <div className="absolute w-[77px] top-0 left-[504px] [font-family:'Poppins',Helvetica] font-medium text-[#b5b7c0] text-[8.8px] tracking-[-0.09px] leading-[normal]">
                    Start Date
                  </div>
                  <div className="absolute w-[61px] top-[3px] left-[680px] [font-family:'Poppins',Helvetica] font-medium text-[#b5b7c0] text-[8.8px] tracking-[-0.09px] leading-[normal]">
                    End Date
                  </div>
                </div>
                {data && (
                  <table className="absolute w-[813px] h-[19px] top-[20px] left-[25px] promotion-table">
                    <tbody>
                      {data.map((item, index) => {
                        const startDate = new Date(item.startDate);
                        const formattedStartDate = `${startDate.getDate()}/${
                          startDate.getMonth() + 1
                        }/${startDate.getFullYear()}`;

                        const endDate = new Date(item.endDate);
                        const formattedEndDate = `${endDate.getDate()}/${
                          endDate.getMonth() + 1
                        }/${endDate.getFullYear()}`;
                        return (
                          <tr key={index} className="promotion-table">
                            <td className="promotion-id">{item.promotionId}</td>
                            <td className="promotion-type">{item.type}</td>
                            <td className="promotion-discount">
                              {item.discountRate * 100}%
                            </td>
                            <td className="promotion-start-date">
                              {formattedStartDate}
                            </td>
                            <td className="promotion-end-date">
                              {formattedEndDate}
                            </td>
                            <td>
                              <button className="btn-more-info">
                                More Info
                              </button>
                            </td>
                            <td>
                              <button className="btn-x">X</button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
            <p className="absolute w-[267px] top-[642px] left-[79px] [font-family:'Poppins',Helvetica] font-medium text-[#b5b7c0] text-[8.8px] tracking-[-0.09px] leading-[normal]">
              Showing data 1 to 8 of&nbsp;&nbsp;256K entries
            </p>
            <div className="absolute w-[178px] top-[73px] left-[80px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[13.8px] tracking-[-0.14px] leading-[normal]">
              ALL&nbsp;&nbsp;PROMOTION
            </div>
            <div className="absolute w-[238px] h-[35px] top-[80px] left-[629px]">
              <div className="relative w-[236px] h-[35px] bg-[#f9fbff] rounded-[6.25px]">
                <div className="absolute w-[46px] top-[12px] left-[43px] [font-family:'Poppins',Helvetica] font-normal text-[#b5b7c0] text-[7.5px] tracking-[-0.08px] leading-[normal]">
                  Search
                </div>
                <img
                  className="absolute w-[21px] h-[16px] top-[9px] left-[9px]"
                  alt="Search"
                  src="./src/assets/search-1.svg"
                />
              </div>
            </div>
            <div className="absolute w-[171px] h-[30px] top-[84px] left-[883px]">
              <div className="relative w-[169px] h-[30px] bg-[#f9fbff] rounded-[6.25px]">
                <img
                  className="absolute w-[20px] h-[14px] top-[8px] left-[136px]"
                  alt="Chevron down"
                  src="src/assets/chevron-down-1.svg"
                />
                <p className="absolute w-[112px] top-[8px] left-[16px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-[7.5px] tracking-[-0.08px] leading-[normal]">
                  <span className="text-[#7e7e7e] tracking-[-0.01px]">
                    Short by :{" "}
                  </span>
                  <span className="font-semibold text-[#3d3b41] tracking-[-0.01px]">
                    Newest
                  </span>
                </p>
              </div>
            </div>
            <div className="absolute w-[287px] h-[16px] top-[640px] left-[759px]">
              <div className="inline-flex flex-col items-center justify-center gap-[6.25px] px-[6.25px] py-[3.75px] absolute top-0 left-[42px] bg-[#5932ea] rounded-[2.5px] border-[0.63px] border-solid">
                <div className="relative w-fit mt-[-0.63px] [font-family:'Poppins',Helvetica] font-medium text-white text-[7.5px] tracking-[-0.08px] leading-[7.5px] whitespace-nowrap">
                  1
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-[6.25px] px-[5.62px] py-[3.75px] absolute top-0 left-[82px] bg-neutral-100 rounded-[2.5px] border-[0.63px] border-solid border-[#eeeeee]">
                <div className="relative w-fit mt-[-0.63px] [font-family:'Poppins',Helvetica] font-medium text-[#404b52] text-[7.5px] tracking-[-0.08px] leading-[7.5px] whitespace-nowrap">
                  2
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-[6.25px] px-[5.62px] py-[3.75px] absolute top-0 left-[163px] bg-neutral-100 rounded-[2.5px] border-[0.63px] border-solid border-[#eeeeee]">
                <div className="relative w-fit mt-[-0.63px] [font-family:'Poppins',Helvetica] font-medium text-[#404b52] text-[7.5px] tracking-[-0.08px] leading-[7.5px] whitespace-nowrap">
                  4
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-[6.25px] px-[3.12px] py-[3.75px] absolute top-0 left-[227px] bg-neutral-100 rounded-[2.5px] border-[0.63px] border-solid border-[#eeeeee]">
                <div className="relative w-fit mt-[-0.63px] [font-family:'Poppins',Helvetica] font-medium text-[#404b52] text-[7.5px] tracking-[-0.08px] leading-[7.5px] whitespace-nowrap">
                  40
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-[6.25px] px-[5.62px] py-[3.75px] absolute top-0 left-[269px] bg-neutral-100 rounded-[2.5px] border-[0.63px] border-solid border-[#eeeeee]">
                <div className="relative w-fit mt-[-0.63px] [font-family:'Poppins',Helvetica] font-medium text-[#404b52] text-[7.5px] tracking-[-0.08px] leading-[7.5px] whitespace-nowrap">
                  &gt;
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-[6.25px] px-[5.62px] py-[3.75px] absolute top-0 left-0 bg-neutral-100 rounded-[2.5px] border-[0.63px] border-solid border-[#eeeeee]">
                <div className="relative w-fit mt-[-0.63px] [font-family:'Poppins',Helvetica] font-medium text-[#404b52] text-[7.5px] tracking-[-0.08px] leading-[7.5px] whitespace-nowrap">
                  &lt;
                </div>
              </div>
              <div className="w-[11px] top-[6px] left-[204px] text-black text-[7.5px] tracking-[-0.08px] leading-[7.5px] absolute [font-family:'Poppins',Helvetica] font-medium">
                ...
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-[6.25px] px-[5px] py-[3.75px] absolute top-0 left-[123px] bg-neutral-100 rounded-[2.5px] border-[0.63px] border-solid border-[#eeeeee]">
                <div className="relative w-fit mt-[-0.63px] [font-family:'Poppins',Helvetica] font-medium text-[#404b52] text-[7.5px] tracking-[-0.08px] leading-[7.5px] whitespace-nowrap">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex absolute top-[52px] left-[350px] gap-[6.25px]">
        <div className="flex w-[97px] h-[28px] items-center justify-center gap-[6.25px] px-[7.5px] py-[2.5px] bg-[#D1262661] rounded-[2.5px] border-[0.63px] ml-[-10px] border-solid border-[#D1262661] cursor-pointer">
          <div className=" relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#D1262661] text-[8.8px] tracking-[-0.09px] leading-[normal]">
            Edit
          </div>
        </div>
        <div className="flex w-[97px] h-[28px] items-center justify-center gap-[6.25px] px-[7.5px] py-[2.5px] bg-[#15c09861] rounded-[2.5px] border-[0.63px] mr[20px] border-solid border-[#00b086] cursor-pointer">
          <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#008667] text-[8.8px] tracking-[-0.09px] leading-[normal]">
            Add
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionDataTable;