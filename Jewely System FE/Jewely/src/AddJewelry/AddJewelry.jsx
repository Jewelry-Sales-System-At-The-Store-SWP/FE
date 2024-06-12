import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";

const AddJewelry = () => {
  const navigate = useNavigate();
  const [jewelleryData, setJewelleryData] = useState({
    name: "",
    barcode: "",
    weight: "",
    stonecost: "",
    // laborcost: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJewelleryData({ ...jewelleryData, [name]: value });
  };

  const cancel = () => {
    navigate("/manage-jewelry");
  };

  const save = () => {
    const weight = parseFloat(jewelleryData.weight);
    const stone = parseFloat(jewelleryData.stonecost);
    // const labor = parseFloat(jewelleryData.laborcost);

    if (isNaN(weight) || weight < 0 || weight === "") {
      Swal.fire({
        title: "Error!",
        text: "Weight must be a valid number and must not be empty!",
        icon: "error",
      });
      return;
    }

    if (isNaN(stone) || stone < 0 || stone === "") {
      Swal.fire({
        title: "Error!",
        text: "Stone Cost must be a valid number and must not be empty!",
        icon: "error",
      });
      return;
    }

    // if (isNaN(labor) || labor < 0 || labor === "") {
    //   Swal.fire({
    //     title: "Error!",
    //     text: "Labor Cost must be a valid number and must not be empty!",
    //     icon: "error",
    //   });
    //   return;
    // }

    if (!jewelleryData.name.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Name must not be empty!",
        icon: "error",
      });
      return;
    }

    if (!jewelleryData.barcode.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Barcode must not be empty!",
        icon: "error",
      });
      return;
    }

    const dataToSend = {
      ...jewelleryData,
    };

    axios
      // .post("http://localhost:5188/api/Promotion/AddNewPromotion", dataToSend)
      .post("https://666427ef932baf9032aa2d16.mockapi.io/Jewely", dataToSend)
      .then((response) => {
        // Could be 200 if applied real api.
        if (response.status === 201) {
          Swal.fire({
            title: "Add Success!",
            text: "Add Jewelry successfully!",
            icon: "success",
          })
            .then(() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .then(() => {
              navigate("/manage-jewelry");
            });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to add jewelry.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to add jewelry.",
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
              <p className="ml-20">Add New Jewelry</p>
            </a>
          </div>
          <div className="w-[411px] flex flex-row items-start justify-start gap-[41px] max-w-full mq450:gap-[20px] mq525:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[37px] min-w-[170px] mq525:flex-1">
              {/* <a className="[text-decoration:none] w-[101px] h-[29px] relative tracking-[-0.01em] font-semibold text-[inherit] inline-block shrink-0">
                ID
              </a> */}
              <div className="flex flex-col items-start justify-start gap-[33px]">
                <a className="[text-decoration:none] w-[150px] relative tracking-[-0.01em] font-semibold text-[inherit] inline-block">
                  Name
                </a>
                <div className="flex flex-col items-start justify-start gap-[42px]">
                  <b className="relative tracking-[-0.01em] font-semibold">
                    Barcode
                  </b>
                  <b className="w-[150px] relative tracking-[-0.01em] font-semibold inline-block">
                    Weight
                  </b>
                  <b className="w-[150px] relative tracking-[-0.01em] font-semibold inline-block">
                    Stone Cost
                  </b>
                  {/* <b className="w-[150px] relative tracking-[-0.01em] font-semibold inline-block">
                    Labor Cost
                  </b> */}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[130px]">
              <div className="mb-2 self-stretch rounded bg-white flex flex-row items-start justify-start py-1.5 px-[7px] border-[1px] border-solid border-gray">
                <input
                  name="name"
                  onChange={handleChange}
                  className="w-full [border:none] [outline:none] font-roboto text-xs bg-[transparent] h-3.5 flex-1 relative text-gray text-left inline-block min-w-[110px] p-0"
                  placeholder=""
                  type="text"
                  value={jewelleryData.name}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                <div className="flex-1 rounded bg-white flex flex-row items-start justify-start py-1.5 px-[7px] border-[1px] border-solid border-gray">
                  <input
                    name="barcode"
                    value={jewelleryData.barcode}
                    onChange={handleChange}
                    className="w-full [border:none] [outline:none] font-roboto text-xs bg-[transparent] h-3.5 flex-1 relative text-gray text-left inline-block min-w-[110px] p-0"
                    placeholder=""
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                <div className="flex-1 rounded bg-white flex flex-row items-start justify-start py-1.5 px-[7px] border-[1px] border-solid border-gray">
                  <input
                    name="weight"
                    value={jewelleryData.weight}
                    onChange={handleChange}
                    className="w-full [border:none] [outline:none] font-roboto text-xs bg-[transparent] h-3.5 flex-1 relative text-gray text-left inline-block min-w-[110px] p-0"
                    placeholder=""
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                <div className="flex-1 rounded bg-white flex flex-row items-start justify-start py-1.5 px-[7px] border-[1px] border-solid border-gray">
                  <input
                    name="stonecost"
                    value={jewelleryData.stonecost}
                    onChange={handleChange}
                    className="w-full [border:none] [outline:none] font-roboto text-xs bg-[transparent] h-3.5 flex-1 relative text-gray text-left inline-block min-w-[110px] p-0"
                    placeholder=""
                    type="text"
                  />
                </div>
              </div>
              {/* <div className="mt-2 self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                <div className="flex-1 rounded bg-white flex flex-row items-start justify-start py-1.5 px-[7px] border-[1px] border-solid border-gray">
                  <input
                    name="laborcost"
                    value={jewelleryData.laborcost}
                    onChange={handleChange}
                    className="w-full [border:none] [outline:none] font-roboto text-xs bg-[transparent] h-3.5 flex-1 relative text-gray text-left inline-block min-w-[110px] p-0"
                    placeholder=""
                    type="text"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="w-[93px] h-[27px] relative overflow-hidden shrink-0 hidden" />
      <div className="w-[293px] flex flex-row items-start justify-between gap-[20px]">
        <button
          onClick={save}
          className="absolute left-[500px] top-[450px] cursor-pointer py-1.5 px-[37px] bg-mediumaquamarine-200 rounded-10xs-5 flex flex-row items-start justify-start border-[0.6px] border-solid border-mediumseagreen hover:bg-seagreen-200 hover:box-border hover:border-[0.6px] hover:border-solid hover:border-mediumaquamarine-100"
        >
          <div className="relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-seagreen-100 text-left inline-block min-w-[22px]">
            Save
          </div>
        </button>
        <button
          onClick={cancel}
          className="absolute left-[660px] top-[450px] cursor-pointer py-1.5 px-8 bg-firebrick-200 w-[97px] rounded-10xs-5 box-border flex flex-row items-start justify-start border-[0.6px] border-solid border-firebrick-100 hover:bg-tomato-200 hover:box-border hover:border-[0.6px] hover:border-solid hover:border-tomato-100"
        >
          <div className="relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-firebrick-200 text-left inline-block min-w-[31px]">
            Cancel
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddJewelry;
