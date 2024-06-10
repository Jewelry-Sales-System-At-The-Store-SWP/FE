import "./App.css";
import "././Navbar/Navbar";
import React from "react";
import ManageJewely from "./ManageJewely/ManageJewely";
import ManagePromotion from "./ManagePromotion/ManagePromotion";
import InvoiceTemplate from "./InvoiceTemplate/InvoiceTemplate";
import InvoiceAdmin from "./InvoiceAdmin/InvoiceAdmin";
import WarrantyCertificate from "./WarrantyCertificate/WarrantyCertificate";
import ManageCustomer from "./ManageCustomer/ManageCustomer";
import Dashboard from "./Dashboard/Dashboard";
import ManageStaff from "./ManageStaff/ManageStaff";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddPromotion from "./AddPromotion/AddPromotion";
import EditPromotion from "./EditPromotion/EditPromotion";
import AddCustomer from "./AddCustomer/AddCustomer";
import EditCustomer from "./EditCustomer/EditCustomer";
import AddJewelry from "./AddJewelry/AddJewelry";
import EditJewelry from "./EditJewelry/EditJewelry";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/manage-jewelry" element={<ManageJewely />} />
          <Route path="/manage-promotion" element={<ManagePromotion />} />
          <Route path="/manage-staff" element={<ManageStaff />} />
          <Route path="/invoice-template" element={<InvoiceTemplate />} />
          <Route path="/invoice-admin" element={<InvoiceAdmin />} />
          <Route
            path="/warranty-certificate"
            element={<WarrantyCertificate />}
          />
          <Route path="/manage-custom" element={<ManageCustomer />} />
          <Route path="/manage-staff" element={<ManageStaff />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-promotion" element={<AddPromotion />} />
          <Route path="/edit-promotion" element={<EditPromotion />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/edit-customer" element={<EditCustomer />} />
          <Route path="/add-jewelry" element={<AddJewelry />} />
          <Route path="/edit-jewelry" element={<EditJewelry />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}
