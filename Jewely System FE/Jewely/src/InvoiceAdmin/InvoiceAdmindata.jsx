import "./InvoiceAdmin.css";
import React, { useEffect, useState } from 'react';
import Modal from "./Modal"
import axios from "axios";
import Autosuggest from 'react-autosuggest';
import ModalCustomer from "./ModalCreateCustomer";

const InvoiceAdmin = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [suggestedCustomers, setSuggestedCustomers] = useState([]);
  const [result, setresult] = useState([]);
  const [addData, SetaddData] = useState("");
  const [add, setAdd] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // const [BillData, setBillData] = useState({
  //   name: "",
  //   barcode: "",
  //   weight: "",
  //   stonecost: "",
  //   // laborcost: "",
  // });
  const openModal = () => {
    setShowModal(true);
  };

  const handleSaveChanges = (onBarcodeSubmit) => {
    SetaddData(onBarcodeSubmit);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://66641bf4932baf9032aa0150.mockapi.io/api/testBarcode/Barcode');
        setresult(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [])

  useEffect(() => {
    if (addData) {
      const filteredItems = result.filter(item => item.Barcode === addData);

      if (filteredItems.length > 0) {
        setAdd(prevItems => {
          const existingIds = new Set(prevItems.map(item => item.id));
          const newItems = filteredItems.filter(item => !existingIds.has(item.id));
          return [...prevItems, ...newItems];
        });
      }
    }
  }, [addData, result]);

  const handleRemoveItem = (id) => {
    setAdd(prevItems => prevItems.filter(item => item.id !== id));
  }

  const subtotal = add.reduce((total, item) => {
    return total + item.Amount;
  }, 0);

  const formattedSubtotal = subtotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : suggestedCustomers.filter(
      customer =>
        customer.fullName.toLowerCase().includes(inputValue) ||
        customer.phone.includes(inputValue)
    );
  };

  const renderSuggestion = (suggestion) => (
    <div>
      <div>{suggestion.fullName}</div>
      <div>{suggestion.phone}</div>
      <div>{suggestion.address}</div>
    </div>
  );
  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setName(suggestion.fullName);
    setPhone(suggestion.phone);
    setAddress(suggestion.address);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5188/api/Customer');
        setSuggestedCustomers(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [])

  const noValidSuggestions = suggestions.length === 0 || suggestions.every(suggestion => suggestion.phone === null);

  const handleAddButtonClick = () => {
    // Handle the logic to add a new customer
    console.log('Add new customer:', { name, phone, address });
  };
  return (
    <div className="w-full relative overflow-hidden flex flex-row items-start justify-start pt-9 pb-[83px] pr-0 pl-[203px] box-border gap-[70px] leading-[normal] tracking-[normal] text-left text-xs text-gray-100 font-satoshi mq750:gap-[35px] mq750:pl-[101px] mq750:box-border mq450:gap-[17px] mq450:pl-5 mq450:box-border mq1125:flex-wrap">
      <div className="flex-1 bg-white overflow-hidden flex flex-col items-start justify-start pt-[54px] px-[35px] pb-[35px] box-border gap-[19px] max-w-full mq750:min-w-full mq450:pt-[23px] mq450:pb-5 mq450:box-border mq1050:pt-[35px] mq1050:pb-[23px] mq1050:box-border">
        <div className="w-[251px] flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border text-[20px]">
          <b className="h-[27px] flex-1 relative inline-block mq450:text-base">
            New Invoices:
          </b>
        </div>
        <div className="w-[619px] flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[12px] max-w-full text-base text-white">
          <div className="self-stretch bg-gray-100 overflow-hidden flex flex-row items-start justify-between py-[26px] pr-9 pl-[35px] gap-[20px] mq450:flex-wrap">
            <div className="w-[116px] flex flex-col items-start justify-start">
              <b className="relative inline-block min-w-[86px]">Jewelry Store.</b>
              <div className="self-stretch relative text-xs font-medium text-gray-200 whitespace-nowrap">
                sales@anbucorp.com
              </div>
            </div>
            <div className="relative text-xs leading-[14px] font-medium text-right inline-block min-h-[48px]">
              <p className="m-0">133 Grey Fox Farm Road</p>
              <p className="m-0">Hidden Leaf village,</p>
              <p className="m-0">Land of fire.</p>
            </div>
          </div>
          <div className="self-stretch bg-dimgray-200 overflow-hidden flex flex-row items-start justify-between pt-[13px] px-[35px] pb-[18px] gap-[20px] text-gray-100 mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[17px]">
              <b className="relative inline-block min-w-[119px]">
                Invoice Number
              </b>
              <div className="relative text-xs leading-[20px] font-medium text-gray-300">
                <p className="m-0">MAG 2541420</p>
                <p className="m-0">Issued Date: {dateString}</p>
              </div>
            </div>
            <div className="w-[136px] flex flex-col items-end justify-start gap-[17px] text-right">
              <b className="w-[61px] relative inline-block min-w-[61px]">
                Billed to
              </b>
              <div className="self-stretch relative text-xs leading-[20px] font-medium text-gray-300">
                <input
                  type="text"
                  className="w-full m-0 bg-transparent border-none text-gray-300 placeholder-gray-300"
                  placeholder="Hatake Kakashi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  getSuggestionValue={(suggestion) => suggestion.phone}  // Only show the phone in the input field
                  renderSuggestion={renderSuggestion}
                  onSuggestionSelected={onSuggestionSelected}
                  inputProps={{
                    className: "w-full m-0 bg-transparent border-none text-gray-300 placeholder-gray-300",
                    placeholder: 'Enter phone number',
                    value,
                    onChange
                  }}
                />
                {noValidSuggestions && value.trim() && (
                  <button
                    className="mt-2 p-2 bg-blue-500 text-white rounded"
                    onClick={handleAddButtonClick}
                  >
                    + Add New Customer                                       
                  </button>
                  
                )}
                <input
                  type="text"
                  className="w-full m-0 bg-transparent border-none text-gray-300 placeholder-gray-300"
                  placeholder="Hidden Leaf, Land of fire."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3.5 text-base">
          <b className="relative inline-block min-w-[88px] z-[1]">
            Item Details
          </b>
          <div className="relative text-xs leading-[20px] font-medium text-gray-300 inline-block min-w-[118px]">
            Details with more info
          </div>
        </div>
        <div className="w-[619px] flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border gap-[18px] max-w-full font-abeezee">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-gray-300 font-satoshi mq750:flex-wrap">
            <b className="relative leading-[20px] inline-block min-w-[33px]">
              ITEM
            </b>
            <div className="flex flex-row items-start justify-start gap-[44.5px] mq450:flex-wrap mq450:gap-[22px]">
              <b className="relative leading-[20px] inline-block min-w-[79px]">
                ORDER/TYPE
              </b>
              <div className="w-[95px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <b className="relative leading-[20px] inline-block min-w-[33px]">
                  GOLD WEIGHT
                </b>
              </div>
              <b className="relative leading-[20px] inline-block text-right min-w-[55px]">
                AMOUNT
              </b>
            </div>
          </div>
          {add.map((item) => (
            <div key={item.id} className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
              <button
                onClick={() => handleRemoveItem(item.id)}
                style={{ color: 'Black', marginLeft: '-35px', marginRight: '-8px', marginTop: '10px' }}
                className=" w-5 h-5 flex items-center justify-center"
              >
                -
              </button>
              <div className="w-[186px] rounded-10xs box-border flex flex-row items-start justify-start py-2 px-2.5 border-[1px] border-solid border-lightslategray-200">
                <div className="relative leading-[20px] inline-block min-w-[72px]">
                  {item.name}
                </div>
              </div>
              <div className="w-[318px] flex flex-row items-start justify-start gap-[37px] font-satoshi mq450:gap-[18px]">
                <div className="w-[76px] rounded-10xs box-border flex flex-row items-start justify-start py-2 pr-[30px] pl-[31px] border-[1px] border-solid border-lightslategray-200">
                  <div className="relative leading-[20px] font-medium inline-block min-w-[13px]">
                    {item.Type}
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[49px] rounded-10xs box-border flex flex-row items-start justify-start py-2 px-[9px] border-[1px] border-solid border-lightslategray-200">
                    <div className="relative leading-[20px] font-medium inline-block min-w-[29px]">
                      {item.GoldWeight}
                    </div>
                  </div>
                </div>
                <div className="w-[78px] rounded-10xs box-border flex flex-row items-start justify-start py-2 px-3.5 border-[1px] border-solid border-lightslategray-200">
                  <div className="w-12 relative leading-[20px] font-medium inline-block">
                    {item.Amount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[604px] flex flex-row items-start justify-between gap-[20px] max-w-full text-lightslategray-100 mq450:flex-wrap">
          <div>
            <button className="relative leading-[20px] inline-block min-w-[62px] bg-white text-black" onClick={openModal}>
              Add Item +
            </button>
            <Modal showModal={showModal} setShowModal={setShowModal} onBarcodeSubmit={handleSaveChanges} />
          </div>
          <div className="w-[175px] flex flex-row items-start justify-start gap-[75px] text-gray-100">
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <b className="relative leading-[20px] inline-block min-w-[47px]">
                Subtotal
              </b>
              <b className="relative leading-[20px] inline-block min-w-[50px]">
                Discount
              </b>
              <b className="relative leading-[20px] inline-block min-w-[50px]">
                Discount
              </b>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start gap-[12px] text-right text-lightslategray-100">
              <b className="self-stretch relative leading-[20px] text-gray-100 whitespace-nowrap">
                {formattedSubtotal}
              </b>
              <b className="w-[34px] relative leading-[20px] inline-block min-w-[34px]">
                Add +
              </b>
              <b className="w-[34px] relative leading-[20px] inline-block min-w-[34px]">
                Add +
              </b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-6">
          <div className="w-[246px] flex flex-col items-end justify-start gap-[12px]">
            <img
              className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="src/assets/vector-1549.svg"
            />
            <div className="w-[205px] flex flex-row items-start justify-end py-0 px-[15px] box-border">
              <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                <b className="relative leading-[20px] inline-block min-w-[27px]">
                  Total
                </b>
                <b className="w-[50px] relative leading-[20px] inline-block text-right whitespace-nowrap">
                  {formattedSubtotal}
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100px] h-[100px] relative overflow-hidden shrink-0 hidden" />
      </div>

    </div>
  );
};

export default InvoiceAdmin;
