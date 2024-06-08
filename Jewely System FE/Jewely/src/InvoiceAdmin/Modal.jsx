import React from "react";

export default function Modal({ showModal, setShowModal, onBarcodeSubmit }) {
    const [barcode, setBarcode] = React.useState("");
    const handleInputChange = (event) => {
        setBarcode(event.target.value)

    };
    const handleSaveChanges = () => {
        onBarcodeSubmit(barcode);
        setShowModal(false);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        handleSaveChanges();
    };
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h1> INPUT BARCODE</h1>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form onSubmit={handleSubmit} class="col-span-2">
                                        <input type="text"
                                            name="barcode"
                                            id="name"
                                            class="bg-gray-50 text-5xl border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type product Barcode"
                                            required=""
                                            value={barcode}
                                            onChange={handleInputChange}
                                            autoFocus>
                                        </input>
                                    </form>
                                </div>

                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleSaveChanges}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}