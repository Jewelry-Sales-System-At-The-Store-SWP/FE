import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditPromotion = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [promotionData, setPromotionData] = useState({
    description: "",
    discountRate: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5188/api/Promotion/GetPromotionById/${id}`)
      .then((response) => {
        const data = response.data;
        setPromotionData({
          ...data,
          startDate: new Date(data.startDate),
          endDate: new Date(data.endDate),
        });
      })
      .catch((error) => {
        console.error("Error fetching promotion data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPromotionData({ ...promotionData, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setPromotionData({ ...promotionData, [name]: date });
  };

  const cancel = () => {
    navigate("/manage-promotion");
  };

  const save = () => {
    const { description, discountRate, startDate, endDate } = promotionData;

    if (description === "" || description.trim() === ""){
      Swal.fire({
        title: "Error!",
        text: "Description must not be empty!",
        icon: "error",
      });
      return;
    }

    if (
      isNaN(discountRate) ||
      discountRate < 0 ||
      discountRate > 100 ||
      discountRate === ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "Discount Rate must be a valid number and from 0 to 100 and must not be left empty!",
        icon: "error",
      });
      return;
    }

    if (
      isNaN(startDate.getTime()) ||
      isNaN(endDate.getTime()) ||
      startDate.getTime() > endDate.getTime() ||
      startDate.getTime() === null ||
      endDate.getTime() === null
    ) {
      Swal.fire({
        title: "Error!",
        text: "Start Date and End Date must be valid dates.",
        icon: "error",
      });
      return;
    }

    axios
      .put(
        `http://localhost:5188/api/Promotion/UpdatePromotion?id=${id}`,
        promotionData
      )
      .then((response) => {
        Swal.fire({
          title: "Success!",
          text: "Promotion updated successfully!",
          icon: "success",
        })
          .then(() => {
            navigate("/manage-promotion");
          })
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      })
      .catch((error) => {
        console.error("Error updating promotion:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to update promotion.",
          icon: "error",
        });
      });
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[27px] pb-[85px] pr-[228px] pl-[93px] box-border gap-[118px] leading-[normal] tracking-[normal] mq450:gap-[29px] mq450:pl-5 mq450:pr-5 mq450:box-border mq525:gap-[59px] mq525:pl-[46px] mq525:pr-[114px] mq525:box-border">
      <section className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-base text-black font-poppins">
        <div className="w-[568px] flex flex-col items-start justify-start gap-[22px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end">
            <a className="ml-20 [text-decoration:none] relative tracking-[-0.01em] font-semibold text-[inherit]">
              <p className="ml-20">Edit Promotion</p>
            </a>
          </div>
          <div className="w-[411px] flex flex-row items-start justify-start gap-[41px] max-w-full mq450:gap-[20px] mq525:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[37px] min-w-[170px] mq525:flex-1">
              <div className="flex flex-col items-start justify-start gap-[33px]">
                <a className="[text-decoration:none] w-[150px] relative tracking-[-0.01em] font-semibold text-[inherit] inline-block">
                  Name
                </a>
                <div className="flex flex-col items-start justify-start gap-[42px]">
                  <b className="relative tracking-[-0.01em] font-semibold">
                    Discount Percentage
                  </b>
                  <b className="w-[150px] relative tracking-[-0.01em] font-semibold inline-block">
                    Start Date
                  </b>
                  <b className="w-[150px] relative tracking-[-0.01em] font-semibold inline-block">
                    End Date
                  </b>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[130px]">
              <div className="mb-2 self-stretch rounded bg-white flex flex-row items-start justify-start py-1.5 px-[7px] border-[1px] border-solid border-gray">
                <input
                  name="description"
                  value={promotionData.description}
                  onChange={handleChange}
                  className="w-full [border:none] [outline:none] font-roboto text-xs bg-[transparent] h-3.5 flex-1 relative text-gray text-left inline-block min-w-[110px] p-0"
                  placeholder={promotionData.description}
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                <div className="flex-1 rounded bg-white flex flex-row items-start justify-start py-1.5 px-[7px] border-[1px] border-solid border-gray">
                  <input
                    name="discountRate"
                    value={promotionData.discountRate}
                    onChange={handleChange}
                    className="w-full [border:none] [outline:none] font-roboto text-xs bg-[transparent] h-3.5 flex-1 relative text-gray text-left inline-block min-w-[110px] p-0"
                    placeholder={
                      promotionData.discountRate
                        ? `${promotionData.discountRate}%`
                        : "Enter Discount Rate"
                    }
                    type="text"
                  />
                </div>
              </div>
              <DatePicker
                name="startDate"
                selected={promotionData.startDate}
                onChange={(date) => handleDateChange("startDate", date)}
                className="px-4 w-full border border-gray-300 rounded p-1 text-xs"
                placeholder={promotionData.startDate}
                placeholderClassName="text-center"
              />
              <DatePicker
                name="endDate"
                selected={promotionData.endDate}
                onChange={(date) => handleDateChange("endDate", date)}
                className="px-4 w-full border border-gray-300 rounded p-1 text-xs mt-3"
                placeholder={promotionData.endDate}
                placeholderClassName="text-center"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-[93px] h-[27px] relative overflow-hidden shrink-0 hidden" />
      <div className="w-[293px] flex flex-row items-start justify-between gap-[20px]">
        <button
          onClick={save}
          className="absolute left-[500px] top-[350px]  cursor-pointer py-1.5 px-[37px] bg-mediumaquamarine-200 rounded-10xs-5 flex flex-row items-start justify-start border-[0.6px] border-solid border-mediumseagreen hover:bg-seagreen-200 hover:box-border hover:border-[0.6px] hover:border-solid hover:border-mediumaquamarine-100"
        >
          <div className="relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-seagreen-100 text-left inline-block min-w-[22px]">
            Save
          </div>
        </button>
        <button
          onClick={cancel}
          className="absolute left-[680px] top-[350px] cursor-pointer py-1.5 px-8 bg-firebrick-200 w-[97px] rounded-10xs-5 box-border flex flex-row items-start justify-start border-[0.6px] border-solid border-firebrick-100 hover:bg-tomato-200 hover:box-border hover:border-[0.6px] hover:border-solid hover:border-tomato-100"
        >
          <div className="relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-firebrick-200 text-left inline-block min-w-[31px]">
            Cancel
          </div>
        </button>
      </div>
    </div>
  );
};

export default EditPromotion;
