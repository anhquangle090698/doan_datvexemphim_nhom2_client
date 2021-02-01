import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/main.scss";
import pro4 from "../../assets/images/promotion-film-4.png";
import pro41 from "../../assets/images/promotion-film-4-1.jpg";
import pro42 from "../../assets/images/promotion-film-4-2.png";
import pro43 from "../../assets/images/promotion-film-4-3.png";
import pro44 from "../../assets/images/promotion-film-4-4.jpg";
import promotion4 from "../../assets/images/promotion-300x450_4.jpg";
import promotion5 from "../../assets/images/promotion-300x450_5.jpg";
import promotion6 from "../../assets/images/promotion-300x450_6.jpg";
import promotion7 from "../../assets/images/promotion-300x450_7.png";
import { useSelector } from "react-redux";

export default function PromotionFilm4(props) {
  let { listFilm } = useSelector((state) => state.StateManageFilm);

  const renderFilmMore = () => {
    return listFilm.slice(8, 11).map((film, index) => {
      return (
        <div className="movie__item" key={index}>
          <img src={film.hinhAnh} alt={film.hinhAnh}></img>
          <NavLink
            to={`/lich-chieu-${film.tenPhim
              .toLowerCase()
              .split(" ")
              .join("-")}/${film.maPhim}`}
          >
            <div className="movie__item--overlay">
              <button className="movie__item--button">Mua Vé</button>
            </div>
          </NavLink>
          <p className="movie__item--name">{film.tenPhim}</p>
        </div>
      );
    });
  };

  return (
    <>
      <div className="commentFilm">
        <div className="row">
          <div className="commentFilm__breadcrumb">
            <NavLink to="/">
              <span className="commentFilm__breadcrumb--item">Trang chủ</span>
            </NavLink>
            <i class="fa fa-angle-right"></i>

            <span className="commentFilm__breadcrumb--item active">
              Khuyến mãi
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="commentFilm__left">
              <div className="commentFilm__content">
                <h3 className="commentFilm__content--title">
                  X2 Thành Viên - X2 Quyền Lợi
                </h3>
                <div className="content__text">
                  <p className="line__text">
                    Mở rộng quyền lợi thành viên <b>G2 Cinema</b> với tính năng
                    đổi điểm mới dành cho các Stars thân yêu. Tự do quy đổi SAO
                    sang điểm VUI của TAPTAP để có thêm nhiều lựa chọn ưu đãi
                    hấp dẫn với đa dạng lĩnh vực từ ăn uống, mua sắm, giải trí
                    cho đến du lịch.
                  </p>
                  <p className="line__img">
                    <img
                      src={pro44}
                      alt={pro44}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                    <b>G2 Cinema</b> xin trân trọng giới thiệu sự đồng hành của
                    Ứng dụng tích-đổi điểm TAPTAP. Dễ dàng tích điểm thành viên
                    và đổi ưu đãi cực “hời” ở nhiều thương hiệu khác nhau như:
                    The Pizza Company, Otoké Chicken, Chewy Chewy, The Coffee
                    Club, Jump Arena,...Tất cả trên cùng 1 ứng dụng TAPTAP.
                  </p>
                  <p className="line__text">
                    Với TAPTAP, mỗi điểm nhận được là một niềm “VUI”. <br></br>
                    Các Stars sẽ có thêm lựa chọn quy đổi điểm SAO sang VUI và
                    sử dụng các ưu đãi độc quyền trên TAPTAP với tỉ lệ: 1 VUI =
                    10 SAO.
                  </p>

                  <p className="line__text">Chỉ 4 bước đơn giản:</p>
                  <p className="line__text">
                    ⭐ B1: Đăng nhập vào website Galaxy Cinema
                  </p>
                  <p className="line__img">
                    <img
                      src={pro43}
                      alt={pro43}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                    ⭐ B2: Tại trang Thành Viên, chọn Giao dịch đổi VUI
                  </p>
                  <p className="line__img">
                    <img
                      src={pro4}
                      alt={pro4}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                    ⭐ B3: Nhập số VUI bạn muốn nhận, hệ thống sẽ tự động tính
                    ra số SAO bạn cần dùng để đổi
                  </p>
                  <p className="line__img">
                    <img
                      src={pro42}
                      alt={pro42}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                    ⭐ B4: Xác nhận và mở TAPTAP lên để đón VUI về
                  </p>
                  <p className="line__img">
                    <img
                      src={pro41}
                      alt={pro41}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                    Thật nhiều ưu đãi hấp dẫn trên TAPTAP đang chờ đợi bạn. Thử
                    ngay nhé!
                  </p>
                </div>
              </div>
              <div className="commentFilm__more">
                <h3 className="commentFilm__more--title">Khuyến mãi khác</h3>
                <div className="row">
                  <div className="col-6 col-lg-3">
                    <div className="commentFilm__more--item">
                      <img src={promotion4} alt={promotion4}></img>
                      <div className="item__overlay">
                        <NavLink to="/khuyen-mai/bap-milo-doc-la-chao-2021">
                          <h3 className="item__overlay--title">
                            Bắp Milo Độc Lạ Chào 2021!
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/khuyen-mai/bap-milo-doc-la-chao-2021"
                          className="item__overlay--button"
                        >
                          Chi Tiết
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="commentFilm__more--item">
                      <img src={promotion5} alt={promotion5}></img>
                      <div className="item__overlay">
                        <NavLink to="/khuyen-mai/ngay-tri-an-cua-galaxy-cinema---ngay-thu-hai-dau-tien-moi-thang">
                          <h3 className="item__overlay--title">
                            Ngày Tri Ân Của G2 Cinema - Ngày Thứ Hai ĐẦU TIÊN
                            Mỗi Tháng
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/khuyen-mai/ngay-tri-an-cua-galaxy-cinema---ngay-thu-hai-dau-tien-moi-thang"
                          className="item__overlay--button"
                        >
                          Chi Tiết
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="commentFilm__more--item">
                      <img src={promotion6} alt={promotion6}></img>
                      <div className="item__overlay">
                        <NavLink to="/khuyen-mai/tiec-tra-tat-nien--xem-phim-mien-phi">
                          <h3 className="item__overlay--title">
                            Tiệc Trà Tất Niên – Xem Phim Miễn Phí
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/khuyen-mai/tiec-tra-tat-nien--xem-phim-mien-phi"
                          className="item__overlay--button"
                        >
                          Chi Tiết
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="commentFilm__more--item">
                      <img src={promotion7} alt={promotion7}></img>
                      <div className="item__overlay">
                        <NavLink to="/khuyen-mai/galaxy-cinema-tri-an-thanh-vien">
                          <h3 className="item__overlay--title">
                            G2 Cinema Tri Ân Thành Viên
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/khuyen-mai/galaxy-cinema-tri-an-thanh-vien"
                          className="item__overlay--button"
                        >
                          Chi Tiết
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="commentFilm__right">
              <div className="commentFilm__movies">
                <h3 className="commentFilm__movies--title">Phim đang chiếu</h3>
                <div className="group__movies">{renderFilmMore()}</div>
                <div className="commentFilm__movies--block">
                  <NavLink
                    to="/phim-dang-chieu"
                    className="commentFilm__movies--showMore"
                  >
                    Xem Thêm <i className="fa fa-angle-double-right"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
