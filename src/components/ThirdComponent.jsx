import { useContext } from "react";
import { CtContext } from "../context/Ct";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

const ThirdComponent = () => {
const [CtState, dispatch] = useContext(CtContext);


  return (
    <div>
      <FirstComponent/>
      <SecondComponent/>
    </div>
  )
}

export default ThirdComponent