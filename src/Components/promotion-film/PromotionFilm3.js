import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/main.scss";
import pro3 from "../../assets/images/promotion-film-3.jpg";
import pro31 from "../../assets/images/promotion-film-3-1.jpg";
import pro32 from "../../assets/images/promotion-film-3-2.jpg";
import promotion4 from "../../assets/images/promotion-300x450_4.jpg";
import promotion5 from "../../assets/images/promotion-300x450_5.jpg";
import promotion6 from "../../assets/images/promotion-300x450_6.jpg";
import promotion7 from "../../assets/images/promotion-300x450_7.png";
import { useSelector } from "react-redux";

export default function PromotionFilm3(props) {
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
                  TƯNG BỪNG HÁI "SAO" – NHẬN ƯU ĐÃI KHỦNG
                </h3>
                <div className="content__text">
                  <p className="line__text">
                    <i>
                      Galaxy Cinema ra mắt hệ thống tích điểm thành viên hoàn
                      toàn mới!
                    </i>
                  </p>
                  <p className="line__text">
                    Từ 31.12.2019, các Star <b>sẽ được thăng hạng thành </b>{" "}
                    Star, G-star, X-star tương ứng với{" "}
                    <b> tổng chi tiêu trong năm 2019</b> và{" "}
                    <b> nhận các ưu đãi đặc biệt mới</b>:
                  </p>
                  <p className="line__img">
                    <img
                      src={pro32}
                      alt={pro32}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__img">
                    <img
                      src={pro3}
                      alt={pro3}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                    Sau khi phân loại lại thành viên dựa trên tổng chi tiêu
                    trong năm 2019, <b>mỗi khách hàng G-Star </b> được tặng{" "}
                    <b> 02 vé 2D miễn phí </b> trong tài khoản và{" "}
                    <b>miễn phí đổi vị bắp</b> từ ngày 01/01/2020;{" "}
                    <b>khách hàng X-Star </b> được tặng{" "}
                    <b>04 vé 2D miễn phí </b> trong tài khoản và{" "}
                    <b>miễn phí đổi vị bắp</b> từ ngày 01/01/2020.
                  </p>

                  <p className="line__text">
                    Bên cạnh đó, Từ 01/01/2020, GLX sẽ thay đổi chính sách tích
                    lũy điểm: <b>10.000 VNĐ (chi tiêu) = 1 Star</b>
                  </p>
                  <p className="line__text">
                    Thành viên mua bất kỳ sản phẩm vé xem phim, nước uống, thức
                    ăn, combo … tại các cụm rạp Galaxy hoặc thanh toán trực
                    tuyến sẽ được tích lũy điểm thưởng tương ứng vào tài khoản
                  </p>
                  <p className="line__text">
                    Lưu ý: Đối với những giao dịch trực tuyến, thành viên phải
                    đăng nhập vào tài khoản mới được quyền tích điểm hợp lệ.
                  </p>
                  <p className="line__text">
                    <b>Đổi quà hấp dẫn:</b>
                  </p>
                  <p className="line__img">
                    <img
                      src={pro31}
                      alt={pro31}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                    <b>Lưu ý: </b>
                  </p>
                  <p className="line__text">
                    Điểm tích lũy còn tồn đọng sẽ bị trừ khỏi tài khoản thành
                    viên sau ngày 31/12/2019
                  </p>
                  <p className="line__text">
                    <b>Thông tin định danh thành viên</b> gồm có <b>email</b> và{" "}
                    <b>số điện thoại</b> bắt buộc phải hợp lệ.
                  </p>
                  <p className="line__text">
                    <b>Số điện thoại không hợp lệ</b> là số điện thoại không
                    liên lạc được hoặc số điện thoại không thuộc sở hữu của chủ
                    tài khoản thành viên ở thời điểm Galaxy Cinema rà soát dữ
                    liệu thành viên.
                  </p>
                  <p className="line__text">
                    Với các trường hợp không hợp lệ, Galaxy Cinema có quyền xóa
                    tài khoản thành viên mà không cần thông báo trước.
                  </p>
                  <p className="line__text">
                    Tài khoản thành viên không có đủ thông tin định danh gồm{" "}
                    <b>Email</b> và <b>số điện thoại hợp lệ</b> , Galaxy Cinema
                    có quyền xóa tài khoản thành viên mà không cần thông báo
                    trước.
                  </p>
                  <p className="line__text">
                    Điểm tích lũy có giá trị áp dụng tại tất cả các rạp Galaxy
                    Cinema trên toàn quốc.
                  </p>
                  <p className="line__text">
                    Bạn có thể dễ dàng kiểm tra điểm tích lũy của mình trên
                    Website Galaxy Cinema hoặc Ứng dụng GLX trên điện thoại
                    (Mobile App).
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
