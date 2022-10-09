// import { AnimatePresence} from 'framer-motion'

import Layout from "./Components/Layout";
import "./App.css";
import { useEffect } from "react";
import Area from "./pages/Area";
import { useStateValue } from "./context/StateProvider";
import { getAllMenuItems } from "./firebaseFunctions";
import { actionType } from "./context/reducer";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const [{ menuItems }, dispatch] = useStateValue();

  const fetchMenuItems = async () => {
    await getAllMenuItems().then((data) => {
      // console.log(data);
      dispatch({
        type: actionType.SET_MENU_ITEMS,
        menuItems: data,
      });
    });
  };

  useEffect(() => {
    // console.log('data')
    fetchMenuItems();
  }, []);
  //  useEffect(()=>{<Area/>},[])
  return (
    <SkeletonTheme duration= {2} baseColor="#666464" highlightColor="#525252">
      <Layout />
    </SkeletonTheme>
  );
}

export default App;
