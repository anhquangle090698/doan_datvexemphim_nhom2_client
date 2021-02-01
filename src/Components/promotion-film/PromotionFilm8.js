import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/main.scss";
import pro8 from "../../assets/images/promotion-film-8.jpg";
import promotion4 from "../../assets/images/promotion-300x450_4.jpg";
import promotion5 from "../../assets/images/promotion-300x450_5.jpg";
import promotion6 from "../../assets/images/promotion-300x450_6.jpg";
import promotion7 from "../../assets/images/promotion-300x450_7.png";
import { useSelector } from "react-redux";

export default function PromotionFilm8(props) {
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
            <i className="fa fa-angle-right"></i>

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
                Xem Phim Hay – Nhận Lì Xì Chất
                </h3>
                <div className="content__text">
                  <p className="line__text">
                    <i>Xuân an nhiên cạnh nhau là đủ.</i>
                  </p>
                  
                  <p className="line__text">
                  Trạm Dừng Chân Điện Ảnh <b>G2 Cinema</b>  dành tặng lì xì may mắn cho các Stars, khi đến thưởng thức loạt siêu phẩm mùa phim Tết đang được mong chờ nhất.
                  </p>
                  <p className="line__text">
                  Hãy chuẩn bị bước vào chuyến phiêu lưu cùng Tí và nhóm bạn thân trong <i>Trạng Tí Phiêu Lưu Ký</i> . Sau đấy là trải nghiệm một kỳ nghỉ ngắn hạn tại Huế, để chiêm ngưỡng sự giàu sang vương giả tại Bạch Trà Viên  với <i>Gái Già Lắm Chiêu V</i> . Kế đó, đi tour về miền Tây sông nước, tham gia vào những pha hành động rượt đuổi đầy thót tim bằng <i>Lật Mặt 48H</i> . Cuối cùng di chuyển về Sài Gòn để cùng cười, cùng khóc với <i>Bố Già</i>  tuy lắm chuyện nhưng đáng mến.
                  </p>

                  <p className="line__text">
                  Mua vé liền tay, nhận ngay lì xì nào các Stars ơi!
                  </p>
                  <p className="line__img">
                    <img
                      src={pro8}
                      alt={pro8}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                   <b>Điều kiện chương trình:</b>
                  </p>
                  <p className="line__text">
                    -   Khách hàng mua 02 vé xem phim sẽ được tặng 05 bao lì xì.
                  </p>
                  <p className="line__text">
                    -   Áp dụng từ ngày 25/01 – 10/02/2021.
                  </p>
                  <p className="line__text">
                    -   Không giới hạn số lần nhận bao lì xì của khách.
                  </p>
                  <p className="line__text">
                    -   Số lượng quà tặng có hạn, chương trình có thể kết thúc sớm hơn dự kiến.
                  </p>
                  <p className="line__text">
                    -   Trong mọi trường hợp quyết định của <b>G2 Cinema</b>  là quyết định cuối cùng.
                  </p>
                  <p className="line__text">
                      <div style={{height : 200}}>

                      </div>
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
