import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/main.scss";
import pro6 from "../../assets/images/promotion-film-6.jpg";
import promotion4 from "../../assets/images/promotion-300x450_4.jpg";
import promotion5 from "../../assets/images/promotion-300x450_5.jpg";
import promotion6 from "../../assets/images/promotion-300x450_6.jpg";
import promotion7 from "../../assets/images/promotion-300x450_7.png";
import { useSelector } from "react-redux";

export default function PromotionFilm6(props) {
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
                  Tiệc Trà Tất Niên – Xem Phim Miễn Phí
                </h3>
                <div className="content__text">
                  <p className="line__text">
                    <i>
                      Từng bừng với tiệc trà mừng năm mới tại Galaxy Cinema!
                    </i>
                  </p>
                  <p className="line__text">
                    Không khí xuân tràn ngập khắp rạp chiếu, còn gì tuyệt hơn
                    khi thưởng thức những thước phim chất lượng, lại còn được
                    miễn phí vé và thỏa thích nhâm nhi trà cực đã.
                  </p>
                  <p className="line__text">
                    Chần chờ gì nữa, hãy tới ngay Trạm Dừng Điện Ảnh Galaxy
                    Cinema để check-in và chính thức tham gia vào tuần lễ tiệc
                    trà tất niên lớn nhất trong năm!
                  </p>

                  <p className="line__text">
                    <b>Thời gian:</b>
                  </p>
                  <p className="line__text">- 15.01.2021 – 31.01.2021</p>
                  <p className="line__text">
                    <b>Điều kiện:</b>
                  </p>
                  <p className="line__text">
                    - Miễn phí vé cho khách hàng có ngày sinh nhật trong khoảng
                    từ 15/01 – 31/01. (Áp dụng khi đi từ nhóm 05 người trở lên.)
                  </p>
                  <p className="line__text">
                    - Miễn phí trà Táo/Red Velvet cho nhóm khách đi từ 05 người
                    trở lên. (Áp dụng cho tất cả thành viên trong nhóm.)
                  </p>
                  <p className="line__text">
                    - Khách hàng phải xuất trình giấy tờ tùy thân để chứng minh
                    ngày sinh.
                  </p>
                  <p className="line__text">
                    - Mỗi khách chỉ được miễn phí 01 vé xem phim trong suốt thời
                    gian diễn ra chương trình.
                  </p>
                  <p className="line__text">
                    - Vé xem phim được áp dụng trực tiếp cho suất chiếu trong
                    ngày.
                  </p>
                  <p className="line__text">
                    - Mỗi nhóm khách được miễn phí nước 01 lần trà Táo/Red
                    Velvet.
                  </p>
                  <p className="line__img">
                    <img
                      src={pro6}
                      alt={pro6}
                      width="600px"
                      height="350px"
                    ></img>
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
