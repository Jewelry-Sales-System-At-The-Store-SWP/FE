import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddStaff = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    roleId: "", // Initialize roleId as an empty string
  });

  useEffect(() => {
    // Fetch roles from the API
    axios
      .get("http://localhost:5188/api/Role/GetRoles")
      .then((response) => {
        setRoles(response.data);
        setUserData((prevState) => ({
          ...prevState,
          roleId: response.data[0].roleId, // Set default roleId to the first role
        }));
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to fetch roles.",
          icon: "error",
        });
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const cancel = () => {
    navigate("/manage-staff");
  };

  const save = () => {
    if (!userData.username.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Username must not be empty!",
        icon: "error",
      });
      return;
    }

    if (!userData.email.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Email must not be empty!",
        icon: "error",
      });
      return;
    }

    if (!userData.password.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Password must not be empty!",
        icon: "error",
      });
      return;
    }

    axios
      .post("http://localhost:5188/api/User/AddUser", userData)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "Add Success!",
            text: "User added successfully!",
            icon: "success",
          }).then(() => {
            navigate("/manage-staff");
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to add user.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to add user.",
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
              <p className="ml-20">Add New Staff</p>
            </a>
          </div>
          <div className="w-[411px] flex flex-row items-start justify-start gap-[41px] max-w-full mq450:gap-[20px] mq525:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[37px] min-w-[170px] mq525:flex-1">
              <div className="flex flex-col items-start justify-start gap-[33px]">
                <a className="[text-decoration:none] w-[150px] relative tracking-[-0.01em] font-semibold text-[inherit] inline-block">
                  Staff Name
                </a>
                <div className="flex flex-col items-start justify-start gap-[42px]">
                  <b className="relative tracking-[-0.01em] font-semibold">
                    Email
                  </b>
                  <b className="w-[150px] relative tracking-[-0.01em] font-semibold inline-block">
                    Password
                  </b>
                  <b className="w-[150px] relative tracking-[-0.01em] font-semibold inline-block">
                    Role
                  </b>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[130px]">
              <div className="mb-2 self-stretch rounded bg-white flex flex-row items-start justify-start py-1.5 px-[7px] border-[1px] border-solid border-gray">
                <input
                  name="username"
                  onChange={handleChange}
                  className="w-full [border:none] [outline:none] font-roboto text-xs bg-[transparent] h-3.5 flex-1 relative text-black text-left inline-block min-w-[110px] p-0"
                  placeholder=""
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                <div className="flex-1 rounded bg-white flex flex-row items-start justify-start py-1.5 px-[7px] border-[1px] border-solid border-gray">
                  <input
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="w-full [border:none] [outline:none] font-roboto text-xs bg-[transparent] h-3.5 flex-1 relative text-black text-left inline-block min-w-[110px] p-0"
                    placeholder=""
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                <div className="flex-1 rounded bg-white flex flex-row items-start justify-start py-1.5 px-[7px] border-[1px] border-solid border-gray">
                  <input
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    className="w-full [border:none] [outline:none] font-roboto text-xs bg-[transparent] h-3.5 flex-1 relative text-black text-left inline-block min-w-[110px] p-0"
                    placeholder=""
                    type="password"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px]">
                <div className="flex-1 rounded bg-white flex flex-row items-start justify-start py-1.5 px-[7px] border-[1px] border-solid border-gray">
                  <select
                    name="roleId"
                    value={userData.roleId}
                    onChange={handleChange}
                    className="w-full [border:none] [outline:none] font-roboto text-xs bg-[transparent] h-3.5 flex-1 relative text-black text-left inline-block min-w-[110px] p-0"
                  >
                    {roles.map((role) => (
                      <option key={role.roleId} value={role.roleId}>
                        {role.roleName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[93px] h-[27px] relative overflow-hidden shrink-0 hidden" />
      <div className="w-[293px] flex flex-row items-start justify-between gap-[20px]">
        <button
          onClick={save}
          className="absolute left-[500px] top-[350px] cursor-pointer py-1.5 px-[37px] bg-mediumaquamarine-200 rounded-10xs-5 flex flex-row items-start justify-start border-[0.6px] border-solid border-mediumseagreen hover:bg-seagreen-200 hover:box-border hover:border-[0.6px] hover:border-solid hover:border-mediumaquamarine-100"
        >
          <div className="relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-seagreen-100 text-left inline-block min-w-[22px]">
            Save
          </div>
        </button>
        <button
          onClick={cancel}
          className="absolute left-[660px] top-[350px] cursor-pointer py-1.5 px-8 bg-firebrick-200 w-[97px] rounded-10xs-5 box-border flex flex-row items-start justify-start border-[0.6px] border-solid border-firebrick-100 hover:bg-tomato-200 hover:box-border hover:border-[0.6px] hover:border-solid hover:border-tomato-100"
        >
          <div className="relative text-4xs-8 tracking-[-0.01em] font-medium font-poppins text-firebrick-200 text-left inline-block min-w-[31px]">
            Cancel
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddStaff;

