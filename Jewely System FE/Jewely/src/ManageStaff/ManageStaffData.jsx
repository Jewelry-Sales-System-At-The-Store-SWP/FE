import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./ManageStaff.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
const StaffDataTable = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5188/api/User/GetUsers")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching promotion details:", error);
      });
  }, []);
  
  const handleDelete = (userId) => {
    Swal.fire({
      title: "Are you sure that you want to delete this customer?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5188/api/User/DeleteUser/${userId}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your staff has been deleted.",
              icon: "success",
            }).then(() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            });
            setPromotion(
              data.filter((item) => item.customerId !== customerId)
            );
          })
          .catch((error) => {
            console.error("There was an error deleting the user:", error);
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting the user.",
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <main className="main">
      <section className="absolute top-[89px] left-[357px] shadow-[0px_10px_60px_rgba(226,_236,_249,_0.5)] rounded-11xl bg-white w-[968px] flex flex-row items-start justify-between pt-8 pb-[25px] pr-[74px] pl-[50px] box-border gap-[20px] max-w-full text-left text-sm text-darkgray font-poppins mq700:flex-wrap">
        <img
          className="h-[151px] w-[968px] relative rounded-11xl hidden max-w-full"
          alt=""
          src="/rectangle-15.svg"
        />
        <div className="flex flex-row items-start justify-start py-0 pr-[98px] pl-0 gap-[20px] mq450:flex-wrap">
          <img
            className="h-[84px] w-[84px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/group-10.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative tracking-[-0.01em] inline-block min-w-[69px] z-[1]">
              Total Staff
            </div>
            <b className="relative text-13xl tracking-[-0.01em] leading-[100%] font-semibold text-darkslategray-400 inline-block min-w-[32px] z-[1] mq450:text-lgi mq450:leading-[19px] mq925:text-7xl mq925:leading-[26px]">
              10
            </b>
          </div>
        </div>
        <div className="h-[88px] w-px relative box-border z-[1] border-r-[1px] border-solid border-whitesmoke-200 mq700:w-full mq700:h-px" />
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[20px]">
            <img
              className="h-[84px] w-[84px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/group-10-1.svg"
            />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative tracking-[-0.01em] inline-block min-w-[76px] z-[1]">
                Active Now
              </div>
              <b className="relative text-13xl tracking-[-0.01em] leading-[100%] font-semibold text-darkslategray-400 inline-block min-w-[22px] z-[1] mq450:text-lgi mq450:leading-[19px] mq925:text-7xl mq925:leading-[26px]">
                4
              </b>
            </div>
          </div>
        </div>
      </section>

      <section className="absolute top-[280px] left-[326px] shadow-[0px_6.3px_37.5px_rgba(226,_236,_249,_0.5)] rounded-[18.75px] bg-white-lighter w-[1041.5px] h-[600px] items-start justify-start max-w-full">
        <form className="m-0 flex-1 shadow-[0px_6.3px_37.5px_rgba(226,_236,_249,_0.5)] rounded-[18.75px] bg-white flex flex-col items-start justify-start pt-[13.3px] px-0 pb-[42px] box-border gap-[33.4px] max-w-full z-[3]">
          <img
            className="self-stretch h-[631px] relative rounded-[18.75px] max-w-full overflow-hidden shrink-0 hidden"
            alt=""
            src="/rectangle-30.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[47px] pl-10 box-border max-w-full">
            <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq925:flex-wrap">
              <div className="w-[167px] flex flex-col items-start justify-start gap-[10.1px]">
                <b className="self-stretch relative text-sm-8 tracking-[-0.01em] font-semibold font-poppins text-black text-left z-[1]">
                  All STAFF
                </b>
                <div className="w-[120.5px] relative text-4xs-8 tracking-[-0.01em] font-poppins text-green-500 text-left inline-block z-[1]">
                  Active Staff
                </div>
              </div>

              {data && (
  <table className="absolute w-[813px] h-[200px] top-[150px] left-[25px]">
    <tbody>
      {data
        .filter((item) => item.role.roleName === "Staff")
        .map((item, index) => (
          <tr key={index} className="staff-table">
            <td className="absolute left-[0px] text-black inline-block w-[200px]">
              {item.username}
            </td>
            <td className="absolute left-[203px]">{item.counter}1</td>
            <td className="absolute left-[300px]">phone</td>
            <td className="absolute left-[495px]">{item.email}</td>
            <td className="absolute left-[680px]">revenue</td>
            <td className="relative">
              <div className="btn-wrapper">
                <button className="btn-more-info">Active</button>
              </div>
            </td>
            <td className="relative">
              <div className="btn-wrapper" >
                <button className="btn-more-info w-[60px] round-full absolute left-[540px] ">Edit</button>
                <button 
                 onClick={() => handleDelete(item.userId)}
                className="btn-more-info absolute left-[400px] w-[30px]  round-full bg-red-300 text-red-700  border-red-500"
                >
                  X</button>
              </div>
            </td>
            
          </tr>
        ))}
    </tbody>
  </table>
)}


              <div className="absolute ml-50 top-[29.3px] left-[750px] rounded-[6.25px] bg-ghostwhite-200 w-[229.8px] h-[34.6px] z-[1] text-5xs-5 text-silver">
                <div className="absolute top-[0px] left-[0px] rounded-[6.25px] bg-ghostwhite-100 w-full h-full hidden" />
                <div className="absolute top-[12.2px] left-[31.7px] tracking-[-0.01em] inline-block w-[44.5px] h-[13.9px] z-[1]">
                  Search
                </div>
                <img
                  className="absolute top-[9.2px] left-[8.9px] w-[20.9px] h-[16.3px] overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src="src/assets/search-1.svg"
                />
              </div>

              <div className="flex w-[97px] h-[28px] items-center justify-center gap-[6.25px] px-[7.5px] py-[2.5px] bg-[#15c09861] rounded-[2.5px] border-[0.63px] mr-[0px] border-solid border-[#00b086] absolute left-[578px]">
                <div className="relative w-fit font-medium text-[#008667] text-[8.8px] tracking-[-0.09px] leading-[normal]">
                  Add
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[115px] left-[15px] box-border w-[1000px] h-[0.6px] z-[1] border-t-[0.6px] border-solid border-whitesmoke-200" />

          <div className="self-stretch flex flex-col items-start justify-start gap-[8.8px] max-w-full   ">
            <div className="w-[1009.2px] flex flex-row items-start justify-start py-0 px-10 box-border max-w-full  ">
              <div className="w-[123.9px] relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-silver whitespace-pre-wrap text-left inline-block shrink-0 z-[1]">
                Staff Name
              </div>
              <div className="w-[125.7px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border absolute left-[190px]">
                <div className="w-[94px] relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-silver text-left inline-block z-[1]">
                  Checkout Counter
                </div>
              </div>
              <div className="w-[129.6px] flex flex-col items-start justify-start py-0 pr-[17px] pl-0 box-border absolute left-[330px]">
                <div className="self-stretch relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-silver text-left z-[1]">
                  Phone Number
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border min-w-[110px] absolute left-[545.1px]">
                <div className="w-[41.3px] relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-silver text-left inline-block z-[1]">
                  Email
                </div>
              </div>
              <div className="w-[140.8px] flex flex-col items-start justify-start pt-[2.2px] pb-0 pr-5 pl-0 box-border absolute left-[720px]">
                <div className="w-[60.3px] relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-silver text-left inline-block z-[1]">
                  Revenue
                </div>
              </div>
              <div className="w-[48.2px] relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-silver text-center inline-block shrink-0 z-[1] absolute left-[730px]">
                Status
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default StaffDataTable;
