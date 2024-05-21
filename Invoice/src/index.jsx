import React from "react";
import ReactDOMClient from "react-dom/client";
import { InvoiceTemplate } from "./screens/InvoiceTemplate";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<InvoiceTemplate />);
