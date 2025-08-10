import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AddCardLayout from "./AddCardLayout";
import StepCardNumber from "./StepCardNumber";
import StepExpirationDate from "./StepExpirationDate";
import StepBrand from "./StepBrand";
import StepSuccess from "./StepSuccess";


function Main() {
  const [cardInfo, setCardInfo] = useState({
    cardNumbers: [],
    expirationDate: [],
    brandName: "",
  });

  return (
      <Routes>
        {/* <Route path="/" element={<div>홈 페이지</div>} /> */}
        <Route path="/add-card" element={<AddCardLayout cardInfo={cardInfo} setCardInfo={setCardInfo} />}>
          <Route index element={<StepCardNumber />} />
          <Route path="expiration" element={<StepExpirationDate />} />
          <Route path="brand" element={<StepBrand />} />
          <Route path="success" element={<StepSuccess />} />
        </Route>
      </Routes>
  );
}
export default Main;
