import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '././Navbar/Navbar'
import React from 'react'
import Sidebar from '././Navbar/Navbar'
import ManageJewely from './ManageJewely/ManageJewely'
import Dashboard from "./Dashboard/Dashboard"
import LineChart from "./Dashboard/Chart"
import Page from "./Dashboard/GoldPrice/Table"

export default function App() {
  return (
    <div>
    <Dashboard />
   </div>
  );
}
