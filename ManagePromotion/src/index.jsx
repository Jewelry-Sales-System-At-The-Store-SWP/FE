import React from "react";
import ReactDOMClient from "react-dom/client";
import { ManagePromotion } from "./screens/ManagePromotion";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ManagePromotion />);
