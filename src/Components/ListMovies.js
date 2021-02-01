import React from "react";
import "../assets/scss/main.scss";

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Movie from "./Movie";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FastField, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { getSearchFilmByNameApiAction } from "../redux/actions/ManageFilmReducerActions";
// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

export default function ListMovies(props) {
  let { listFilm } = useSelector((state) => state.StateManageFilm);

  const dispatch = useDispatch();

  const initialValues = {
    nameFilm: "",
  };

  const validationSchema = Yup.object().shape({
    nameFilm : Yup.string().required('Vui lập nhập phim muốn tìm')
  });

  const renderListFilm = (startFilm, endFilm) => {
    return listFilm.slice(startFilm, endFilm).map((film, index) => {
      return (
        <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
          <Movie phim={film}></Movie>
        </div>
      );
    });
  };

  return (
    <>
      <div className="listMovies" id="lich-chieu">
        <div className="listMovies__top">
          <h1 className="listMovies__top--title">Phim Đang Chiếu</h1>
          <div className="listMovies__search">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                // alert(JSON.stringify(values, null, 2));
                dispatch(await getSearchFilmByNameApiAction(values.nameFilm));
              }}
            >
              {(formikProps) => {
                const { values, errors, touched, isSubmitting } = formikProps; //attribute offered by formik
                // console.log({ values, errors, touched, isSubmitting });

                return (
                  <Form>
                    <FastField
                      type="text"
                      name="nameFilm"
                      id="nameFilm"
                      placeholder="Tìm tên phim"
                      className="listMovies__search--input"
                    ></FastField>

                    <button
                      className="listMovies__search--submit"
                      type="submit"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                    {errors.nameFilm && touched.nameFilm ? <p className="listMovies__search--error">{errors.nameFilm}</p> : ''}
                  </Form>
                  
                );
              }}
            </Formik>
          </div>
        </div>
        <div className="listMovies__body">
          <Swiper
            slidesPerView={1}
            navigation
            loop={true}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="row">
                {renderListFilm(0, 8)}
                <NavLink to="/phim-dang-chieu" className="listMovies__showMore">
                  Xem Thêm <i className="fa fa-angle-double-right"></i>
                </NavLink>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                {renderListFilm(8, 16)}
                <NavLink to="/phim-dang-chieu" className="listMovies__showMore">
                  Xem Thêm <i className="fa fa-angle-double-right"></i>
                </NavLink>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                {renderListFilm(16, 24)}
                <NavLink to="/phim-dang-chieu" className="listMovies__showMore">
                  Xem Thêm <i className="fa fa-angle-double-right"></i>
                </NavLink>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
