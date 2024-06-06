import './App.css'
import '././Navbar/Navbar'
import React from 'react'
import ManageJewely from './ManageJewely/ManageJewely'
import ManagePromotion from './ManagePromotion/ManagePromotion'
import InvoiceTemplate from './InvoiceTemplate/InvoiceTemplate'
import InvoiceAdmin from './InvoiceAdmin/InvoiceAdmin'
import WarrantyCertificate from './WarrantyCertificate/WarrantyCertificate'
import ManageCustomer from './ManageCustomer/ManageCustomer'
import Dashboard from "./Dashboard/Dashboard"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/manage-jewelry" element={<ManageJewely />} />
        <Route path="/manage-promotion" element={<ManagePromotion />} />
        <Route path="/invoice-template" element={<InvoiceTemplate />} />
        <Route path="/invoice-admin" element={<InvoiceAdmin />} />
        <Route path="/warranty-certificate" element={<WarrantyCertificate />} />
        <Route path="/manage-custom" element={<ManageCustomer />} />       
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} /> 
      </Routes>
    </div>
  </Router>
  );
}
