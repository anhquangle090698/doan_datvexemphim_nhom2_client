import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailInformationUser from "../../Components/DetailInformationUser";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Popup from "../../Components/Popup";
import ScrollToTop from "../../Components/ScrollToTop";
import { postInformationAccountApiAction } from "../../redux/actions/ManageUserReducerAction";

export default function CustomerInformation(props) {

  const { informationUserSignIn } = useSelector(
    (state) => state.StateManageUser
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataSCinema = async () => {
      dispatch(
        await postInformationAccountApiAction({
          taiKhoan: informationUserSignIn.taiKhoan,
        })
      );
    };

    fetchDataSCinema();
  }, []);

  return (
    <>
      <div className="customerInformationPage">
        <Header></Header>
        <DetailInformationUser></DetailInformationUser>
        <Footer></Footer>

        <Popup></Popup>
        <ScrollToTop></ScrollToTop>
      </div>
    </>
  );
}
