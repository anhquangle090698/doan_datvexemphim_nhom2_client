import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/main.scss";
import pro5 from "../../assets/images/promotion-film-5.jpg";
import promotion4 from "../../assets/images/promotion-300x450_4.jpg";
import promotion5 from "../../assets/images/promotion-300x450_5.jpg";
import promotion6 from "../../assets/images/promotion-300x450_6.jpg";
import promotion7 from "../../assets/images/promotion-300x450_7.png";
import { useSelector } from "react-redux";

export default function PromotionFilm5(props) {
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
                  Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai ĐẦU TIÊN Mỗi
                  Tháng
                </h3>
                <div className="content__text">
                  <p className="line__text">
                    Từ lâu, chương trình <b>Ngày Tri Ân</b> Nhằm tạo điều kiện
                    thuận lợi hơn cho các khách hàng thả ga xem phim đã trở nên
                    quen thuộc với các khách hàng thân yêu của Galaxy Cinema.
                  </p>
                  <p className="line__text">
                    Vậy là, ngày 01/02/2021, các Stars sẽ được xem phim thả ga
                    với giá vé đồng nhất <b> 45.000 đ</b> cho tất cả các phim
                    2D. Ngoài ra, trong <b>Ngày Tri Ân</b> này, khách hàng còn
                    được nhận một ưu đãi đặc biệt - thoải mái thưởng thức bắp
                    nước khi được 01 lần Refill miễn phí với tất cả các phần bắp
                    và nước ngọt dạng ly (Pepsi, 7Up, Mirinda Cam/Mirinda
                    Sarsi), Lipton Trà Chanh 22oz và Combo đang bán tại rạp.
                  </p>
                  <p className="line__img">
                    <img
                      src={pro5}
                      alt={pro5}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">Điều kiện chương trình:</p>

                  <p className="line__text">
                    - Áp dụng cho ngày thứ 2 ĐẦU TIÊN của mỗi tháng
                  </p>
                  <p className="line__text">
                    - Áp dụng cho mọi loại ghế & suất chiếu (Không áp dụng cho
                    suất chiếu đặc biệt & suất chiếu sớm)
                  </p>
                  <p className="line__text">
                    - Trong mọi trường hợp, quyết định của Galaxy Cinema là
                    quyết định cuối cùng
                  </p>
                  <p className="line__text">
                    - Movie Voucher không áp dụng cho suất chiếu sớm (nếu có)
                  </p>
                  <p className="line__text">
                    * Áp dụng refill miễn phí 01 lần bắp ngọt/ nước ngọt ly đối
                    với các hóa đơn:
                  </p>
                  <p className="line__text">- Bắp</p>
                  <p className="line__text">
                    - Nước ngọt ly (Pepsi/ 7 Up/ Mirinda cam/ Mirinda Sarsi)
                  </p>
                  <p className="line__text">- Lipton Trà Chanh 22oz</p>
                  <p className="line__text">- Combo 1, Combo 2 & Combo phim</p>
                  <p className="line__text">
                    ** Vui lòng xuất trình hóa đơn và hộp bắp/ ly nước khi yêu
                    cầu refill, chỉ áp dụng refill bắp nước trước 22:00.
                  </p>
                  <p className="line__text">
                    Đừng bỏ lỡ Ngày Tri Ân tại <b>G2 Cinema</b> -{" "}
                    <b>Ngày thứ Hai ĐẦU TIÊN</b> của mỗi tháng. Với{" "}
                    <b>Ngày Tri Ân</b> , các Stars chắc chắn sẽ có thêm nhiều
                    trải nghiệm tuyệt vời và một buổi xem phim thú vị tại{" "}
                    <b>G2 Cinema</b>. Đặt vé ngay vào ngày 01/02/2021 này nhé!
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
