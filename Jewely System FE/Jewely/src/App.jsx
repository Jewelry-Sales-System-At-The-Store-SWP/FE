import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '././Navbar/Navbar'
import React from 'react'
import Sidebar from '././Navbar/Navbar'
import ManageJewely from './ManageJewely/ManageJewely'
import ManagePromotion from './ManagePromotion/ManagePromotion'
import InvoiceTemplate from './InvoiceTemplate/InvoiceTemplate'
import InvoiceAdmin from './InvoiceAdmin/InvoiceAdmin'
import WarrantyCertificate from './WarrantyCertificate/WarrantyCertificate'
import ManageCustomer from './ManageCustomer/ManageCustomer'

export default function App() {
  return (
    <div>
    {/* <ManageJewely/> */}
    <ManagePromotion />
    {/* <InvoiceTemplate /> */}
    {/* <InvoiceAdmin /> */}
    {/* <WarrantyCertificate /> */}
    {/* <ManageCustomer /> */}
   </div>
  );
}
