import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Popup from "../Components/Popup";
import ScrollToTop from "../Components/ScrollToTop";
import "../assets/scss/main.scss";
import { useDispatch, useSelector } from "react-redux";
import { postInformationAccountApiAction } from "../redux/actions/ManageUserReducerAction";
import { getAllFilmApiAction } from "../redux/actions/ManageFilmReducerActions";
import LoadingPage from "../Components/LoadingPage";

export default function CommentFilmTemplate(props) {
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

  const { informationUserSignIn } = useSelector(
    (state) => state.StateManageUser
  );

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

  //Api get list film
  useEffect(() => {
    const fetchDataFilm = async () => {
      dispatch(await getAllFilmApiAction());
    };

    fetchDataFilm();
  }, []);
  //tạo component hometemplate nhận 3 props (exact, path, Component từ parent)
  //route redirect đúng url => chứa component: header và trang chủ
  //propsRoute (history, match, location) truyền các thuộc tính vào thằng component lúc này là TrangChu
  let { Component, ...restParam } = props;
  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <>
            {isLoading ? (
              <div className="commentFilmTemplate">
                <LoadingPage></LoadingPage>
              </div>
            ) : (
              <div className="commentFilmTemplate">
                <Header></Header>
                <Component {...propsRoute} />
                {/* Có thề chứa thêm nhiều component khác */}
                <Footer></Footer>

                <Popup></Popup>
                <ScrollToTop></ScrollToTop>
              </div>
            )}
          </>
        );
      }}
    ></Route>
  );
}
