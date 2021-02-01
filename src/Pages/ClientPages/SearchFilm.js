import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import LoadingPage from "../../Components/LoadingPage";
import Movie from "../../Components/Movie";
import Popup from "../../Components/Popup";
import ScrollToTop from "../../Components/ScrollToTop";
import { getAllFilmApiAction } from "../../redux/actions/ManageFilmReducerActions";
import { postInformationAccountApiAction } from "../../redux/actions/ManageUserReducerAction";

export default function SearchFilm(props) {
  let { listSearchFilm } = useSelector((state) => state.StateManageFilm);
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

  const renderListSearchFilm = () => {
    return listSearchFilm.map((film, index) => {
      return (
        <div className="col-sm-6 col-md-3" key={index}>
          <Movie phim={film}></Movie>
        </div>
      );
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="showingFilm">
          <LoadingPage></LoadingPage>
        </div>
      ) : (
        <div className="showingFilm">
          <Header></Header>
          <div className="listMovies">
            <div className="listMovies__top">
              <h1 className="listMovies__top--title">Kết Quả Tìm Kiếm</h1>
            </div>
            <div className="listMovies__body">
              <div className="row">
                {typeof listSearchFilm !== "undefined" &&
                listSearchFilm.length > 0 ? (
                  renderListSearchFilm()
                ) : (
                  <p className="no--result">Không tìm thấy kết quả</p>
                )}
              </div>
            </div>
          </div>
          <Footer></Footer>

          <ScrollToTop></ScrollToTop>
          <Popup></Popup>
        </div>
      )}
    </>
  );
}
