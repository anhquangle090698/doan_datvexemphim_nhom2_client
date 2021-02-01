import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailInformationUser from "../../Components/DetailInformationUser";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import LoadingPage from "../../Components/LoadingPage";
import Popup from "../../Components/Popup";
import ScrollToTop from "../../Components/ScrollToTop";
import { postInformationAccountApiAction } from "../../redux/actions/ManageUserReducerAction";

export default function CustomerInformation(props) {
  const { informationUserSignIn } = useSelector(
    (state) => state.StateManageUser
  );

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

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
      {isLoading ? (
        <div className="customerInformationPage">
          <LoadingPage></LoadingPage>
        </div>
      ) : (
        <div className="customerInformationPage">
          <Header></Header>
          <DetailInformationUser></DetailInformationUser>
          <Footer></Footer>

          <Popup></Popup>
          <ScrollToTop></ScrollToTop>
        </div>
      )}
    </>
  );
}
