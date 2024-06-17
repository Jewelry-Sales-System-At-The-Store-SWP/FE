import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./ManageStaff.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Group10 from '../assets/Group 10.png'; 
import Group11 from '../assets/Group 11.png'; 

const StaffDataTable = () => {
  const [data, setStaff] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const navigate = useNavigate();
  const navigateToAddStaff = () => {
    navigate("/add-staff");
  };

  const navigateToEditStaff = (id) => {
    navigate(`/edit-staff/${id}`);
  };

  const activeStaffCount = data.filter(
    (staff) => staff.status === "online"
  ).length;
  const totalStaffCount = data.length;
  // useEffect(() => {
  //   axios
  //     .get("https://666427ef932baf9032aa2d16.mockapi.io/Staffs")
  //     .then((response) => {
  //       // Adjust the status property to always be "online"
  //       const modifiedData = response.data.map((staff) => ({
  //         ...staff,
  //         status: "online",
  //       }));
  //       setStaff(modifiedData);
  //       console.log(modifiedData);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user details:", error);
  //     });
  // }, []);

  useEffect(() => {
    axios
       .get("http://localhost:5188/api/User/GetUsers")
      //.get("https://666427ef932baf9032aa2d16.mockapi.io/Staffs")
      .then((response) => {
        setStaff(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleDelete = (userId) => {
    Swal.fire({
      title: "Are you sure that you want to delete this user?",
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
              text: "Your user has been deleted.",
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
            setStaff(data.filter((item) => item.userId !== userId));
          })
          .catch((error) => {
            console.error("There was an error deleting a user:", error);
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting a user.",
              icon: "error",
            });
          });
      }
    });
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

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
            src={Group10}
          />
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative tracking-[-0.01em] inline-block min-w-[69px] z-[1]">
              Total Staff
            </div>
            <b className="relative text-13xl tracking-[-0.01em] leading-[100%] font-semibold text-darkslategray-400 inline-block min-w-[32px] z-[1] mq450:text-lgi mq450:leading-[19px] mq925:text-7xl mq925:leading-[26px]">
              {totalStaffCount}
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
              src={Group11}
            />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative tracking-[-0.01em] inline-block min-w-[76px] z-[1]">
                Active Now
              </div>
              <b className="relative text-13xl tracking-[-0.01em] leading-[100%] font-semibold text-darkslategray-400 inline-block min-w-[22px] z-[1] mq450:text-lgi mq450:leading-[19px] mq925:text-7xl mq925:leading-[26px]">
                {activeStaffCount}
              </b>
            </div>
          </div>
        </div>
      </section>

      <section className="absolute top-[285px] left-[300px] shadow-lg rounded-xl bg-white w-[1190px] h-[600px] max-w-full overflow-hidden">
        <form className="flex flex-col space-y-4 w-full min-h-screen p-4">
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
                  Active
                </div>
              </div>
              <div className="relative z-10">
                {currentPageData.map((item, index) => (
                  <div
                    key={item.userId}
                    className="absolute w-full right-[100px] ml-2"
                    style={{ top: `${160 + index * 80}px` }}
                  >
                    <div
                      className="absolute right-[845px] top-[-90px] font-medium text-black inline-block w-[122.8px] h-4 z-10"
                      style={{ fontSize: "10px" }}
                    >
                      {item.username}
                    </div>
                    <div
                      className="absolute right-[670px] top-[-90px] ml-5 font-medium inline-block w-[110.2px] h-4 z-10 "
                      style={{ fontSize: "10px" }}
                    >
                      null
                    </div>
                    <div
                      className="absolute right-[530px] top-[-90px] ml-6  font-medium inline-block w-[114.8px] h-[16.4px] z-10"
                      style={{ fontSize: "10px" }}
                    >
                      null
                    </div>
                    <div
                      className="absolute right-[330px] top-[-90px] font-medium whitespace-pre-wrap inline-block w-[167.9px] h-[16.4px] z-10"
                      style={{ fontSize: "10px" }}
                    >
                      {item.email}
                    </div>
                    <div
                      className="absolute right-[185px] top-[-90px] font-medium whitespace-pre-wrap inline-block w-[74.6px] h-[19.3px] min-w-[74.6px] z-10"
                      style={{ fontSize: "10px" }}
                    >
                      null
                    </div>
                    <div
                      className="absolute right-[100px] top-[-90px] font-medium whitespace-pre-wrap inline-block w-[74.6px] h-[19.3px] min-w-[74.6px] z-10"
                      style={{ fontSize: "10px" }}
                    >
                      {item.status}
                    </div>
                    <div
                      onClick={() => navigateToEditStaff(item.userId)}
                      className="cursor-pointer bg-[#15c09861] text-[#008667] top-[-90px] absolute right-[-100px] rounded-md box-border w-[80px] h-[17px] flex items-center justify-center text-seagreen border-[0.6px] border-solid border-mediumseagreen z-10"
                      style={{
                        fontSize: "10px",
                        borderRadius: "8px",
                        padding: "5px 10px",
                      }}
                    >
                      Edit
                    </div>
                    <div
                      onClick={() => handleDelete(item.userId)}
                      className="cursor-pointer absolute top-[-90px] right-[-160px] rounded-md bg-firebrick-200 box-border w-[28px] h-[17px] flex items-center justify-start py-px px-[11px] text-firebrick-100 border-[0.6px] border-solid border-firebrick-100 z-10"
                      style={{
                        fontSize: "10px",
                        borderRadius: "8px",
                        padding: "5px 11px",
                      }}
                    >
                      X
                    </div>
                    {item.status === "online" ? (
                      <button
                        className="bg-[#15c09861] text-[#008667] top-[-90px] absolute right-[13px] rounded-md box-border w-[80px] h-[17px] flex items-center justify-center text-seagreen border-[0.6px] border-solid border-mediumseagreen z-10"
                        style={{
                          fontSize: "10px",
                          borderRadius: "2px",
                          padding: "5px 10px",
                        }}
                      >
                        Active
                      </button>
                    ) : (
                      <button
                        className="bg-[#f0a0a0] text-[#ff0000] top-[-90px] absolute right-[13px] rounded-md box-border w-[80px] h-[17px] flex items-center justify-center text-seagreen border-[0.6px] border-solid border-firebrick-100 z-10"
                        style={{
                          fontSize: "10px",
                          borderRadius: "2px",
                          padding: "5px 10px",
                        }}
                      >
                        Inactive
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="absolute ml-50 top-[37.3px] left-[571.1px] rounded-[6.25px] bg-ghostwhite-200 w-[229.8px] h-[34.6px] z-[1] text-5xs-5 text-silver">
                <div className="absolute top-[0px] left-[0px] rounded-[6.25px] bg-ghostwhite-100 w-full h-full hidden" />
                <input
                  type="text"
                  className="absolute top-[12.2px] left-[41.7px] tracking-[-0.01em] inline-block w-[150px] h-[13.9px] z-[1] border-none outline-none bg-transparent text-black placeholder-black"
                  placeholder="Search"
                />
                <img
                  className="absolute top-[9.2px] left-[8.9px] w-[20.9px] h-[16.3px] overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src="src/assets/search-1.svg"
                />
              </div>

              <div
                onClick={navigateToAddStaff}
                className="cursor-pointer absolute top-[37.3px] ml-42.5 left-[380px] flex gap-[6.25px]"
              >
                <div className="flex w-[97px] h-[28px] items-center justify-center gap-[6.25px] px-[7.5px] py-[2.5px] bg-[#15c09861] rounded-[2.5px] border-[0.63px] mr-[0px] border-solid border-[#00b086]">
                  <div className=" relative w-fit font-medium text-[#008667] text-[8.8px] tracking-[-0.09px] leading-[normal]">
                    Add
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[115px] left-[15px] box-border w-[1000px] h-[0.6px] z-[1] border-t-[0.6px] border-solid border-whitesmoke-200" />

          <div className="self-stretch flex flex-col items-end justify-start gap-[17.4px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8.8px] max-w-full">
              <div className="w-[1009.2px] flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[38.2px] max-w-full">
                  <div className="w-[123.9px] relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-silver whitespace-pre-wrap text-left inline-block shrink-0 z-[1]">
                    Staff Name
                  </div>
                  <div className="w-[125.7px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                    <div className="w-[94px] relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-silver text-left inline-block z-[1]">
                      Checkout Counter
                    </div>
                  </div>
                  <div className="w-[129.6px] flex flex-col items-start justify-start py-0 pr-[17px] pl-0 box-border">
                    <div className="self-stretch relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-silver text-left z-[1]">
                      Phone Number
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border min-w-[110px]">
                    <div className="w-[41.3px] relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-silver text-left inline-block z-[1]">
                      Email
                    </div>
                  </div>
                  <div className="w-[140.8px] flex flex-col items-start justify-start pt-[2.2px] pb-0 pr-5 pl-0 box-border">
                    <div className="w-[60.3px] relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-silver text-left inline-block z-[1]">
                      Revenue
                    </div>
                  </div>
                  <div className="w-[48.2px] relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-silver text-center inline-block shrink-0 z-[1]">
                    Status
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination-staff"}
        subContainerClassName={"pages pagination-staff"}
        activeClassName={"active"}
      />
    </main>
  );
};

export default StaffDataTable;
