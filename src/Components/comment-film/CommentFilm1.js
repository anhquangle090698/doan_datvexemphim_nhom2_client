import React  from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/main.scss";
import cmt1 from "../../assets/images/comment-film-1.jpg";
import news1 from "../../assets/images/news-450-diet-quy.jpg";
import news2 from "../../assets/images/news-450-crood.jpg";
import news3 from "../../assets/images/news-tiectrangmau450x300.jpg";
import news4 from "../../assets/images/news-450-trai-tim.jpg";
import { useSelector } from "react-redux";


export default function CommentFilm1(props) {
  let { listFilm } = useSelector((state) => state.StateManageFilm);


  const renderFilmMore = () => {
    return listFilm.slice(5, 8).map((film, index) => {
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
              Bình luận phim
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="commentFilm__left">
              <div className="commentFilm__content">
                <h3 className="commentFilm__content--title">
                  [Preview] Demon Slayer: "Diệt Gọn" Khương Tử Nha Trên Bảng
                  Doanh Thu Phòng Vé Toàn Cầu
                </h3>
                <div className="content__text">
                  <p className="line__text">
                    Trong năm 2020, khi phòng vé vô cùng ảm đạm vì đại dịch
                    Covid-19, phim điện ảnh Demon Slayer: Kimetsu No Yaiba the
                    Movie: Mugen Train thắng lớn ở Nhật Bản với hơn 20 triệu
                    lượt người xem, thu về xấp xỉ 265 triệu $.
                  </p>
                  <p className="line__text">
                    Trong năm 2020, <em>Kimetsu No Yaiba</em> hiện diện khắp
                    nơi, với hàng loạt vật phẩm ăn theo, gây sốt khắp thế giới.
                  </p>
                  <p className="line__text">
                    <b>Thanh Gươm Diệt Quỷ</b> xuất sắc đánh bại các bậc đàn anh
                    sừng sỏ như{" "}
                    <i>Thám Tử Lừng Danh Conan, Doraemon, One Piece</i> ; thành
                    tích ra phá vỡ kỷ lục tồn tại suốt vài chục năm của siêu
                    phẩm và chỉ chịu thua hoạt hình kinh điển Spirited Away.
                  </p>
                  <p className="line__text">
                    Tại Việt Nam, nơi chú mèo máy Doraemon luôn vững vàng ngồi
                    top 1 doanh thu phòng vé, cuộc “so găng” tháng 12 – Kimetsu
                    No Yaiba và Doraemon: Nobita's New Dinosaur có xảy đến bất
                    ngờ?
                  </p>
                  <p className="line__text">
                    <i>Kimetsu No Yaiba</i> / <i>Demon Slayer</i> /{" "}
                    <i>Thanh Gươm Diệt Quỷ</i> gồm 23 tập, ra mắt vào 15.02.2016
                    và vừa kết thúc hồi 18.05.2020. Đây là bộ truyện dài đầu tay
                    của tác giả Gotouge Koyoharu – biệt danh Cá Sấu-sensei. So
                    với những tuyệt phẩm lừng lẫy giới manga như{" "}
                    <i>One Piece</i> <b>Kimetsu No Yaiba</b> kết thúc khá nhanh.
                    Tuy vậy, điều này không hề ảnh hưởng tới sự nổi tiếng nó tạo
                    ra. Mới vài năm ngắn ngủi, <b>Demon Slayer</b> đã trở thành
                    “thế lực” lớn. Cá Sấu-sensei nay có thể học theo hai bậc
                    tiền bối Takeuchi Naoko (tác giả Sailormoon / Thủy Thủ Mặt
                    Trăng) và Takahashi Kazuki (tác giả Yu-Gi-Oh! / Vua Trò
                    Chơi) chỉ cần một tác phẩm là đủ ăn cả đời.
                  </p>
                  <p className="line__text">
                    Lấy bối cảnh thời cận đại, <i>Kimetsu No Yaiba</i> kể về
                    Kamado Tanjiro 13 tuổi – một cậu bé hết sức bình thường. Cha
                    mất sớm, Tanjiro nhận trách nhiệm chăm lo cho mẹ và 5 đứa
                    em. Ngày nọ, lỡ đem than xuống núi bán rồi về trễ, Tanjiro
                    bàng hoàng phát hiện cả nhà đều bị sát hại dã man. Cõng trên
                    lưng cô em gái Nezuko vẫn còn hơi ấm, cậu chạy thục mạng
                    giữa trời tuyết để tìm thầy thuốc. Trong khi đó, Nezuko từ
                    từ biến đổi. Truyền thuyết quỷ dữ mà Tanjirou tưởng chỉ có
                    nơi truyền thuyết bỗng hóa thành hiện thực bi thương.
                  </p>
                  <p className="line__text">
                    Lúc Tanjiro đang bị Nezuko tấn công, một người lạ mặt xuất
                    hiện. Anh ta giải cứu cậu và đòi chặt đầu Nezuko. Đó là
                    Tomioka Giyuu – thành viên Đội Diệt quỷ. Tuy vậy, cảm động
                    trước tình cảm Tanjiro dành cho em, cũng như chứng kiến
                    Nezuko bảo vệ anh mình, Tomioka giới thiệu họ đến gặp ông
                    lão Urokodaki Sankoji để học tập trở thành kiếm sĩ diệt quỷ.
                    Tanjiro – với quyết tâm tìm ra kẻ sát hại gia đình và giúp
                    em gái Nezuko trở lại thành người, dấn thân vào cuộc phiêu
                    lưu đầy nguy hiểm.
                  </p>
                  <p className="line__img">
                    <img src={cmt1} alt={cmt1}></img>
                  </p>
                  <p className="line__text">
                    Tổ chức Diệt quỷ không được chính phủ công nhận nhưng đã tồn
                    tại từ xa xưa. Tomioka là Thủy trụ - thành viên Trụ Cột.
                    Ngoài anh, nhóm còn có Âm trụ, Luyến trụ, Nham trụ, Hà trụ,
                    Xà trụ, Trùng trụ, Phong trụ và Viêm trụ. Viêm trụ Rengoku
                    Kyoujurou cũng thuộc dàn nhân vật quan trọng góp mặt ở{" "}
                    <b>Demon Slayer: Kimetsu no Yaiba the Movie: Mugen Train</b>{" "}
                    . Đối đầu với họ - phe quỷ dữ của “chúa trùm” Kibutsuji
                    Muzan. Dưới trướng hắn là Thập nhị quỷ nguyệt – nửa Thượng
                    Huyền, nửa Hạ Huyền.
                  </p>
                  <p className="line__text">
                    Sau hai năm huấn luyện gian khổ, Tanjiro “thi đậu” vào Đội
                    Diệt quỷ, trải qua nhiều nhiệm vụ ngàn cân treo sợi tóc.{" "}
                  </p>
                  <p className="line__text">
                    Lần này, cậu và hai người bạn Inosuke đầu heo cùng Zenitsu
                    nhát gan theo Viêm trụ lên chuyến tàu Vô Tận để điều tra
                    việc 40 người mất tích. Sứ mệnh tưởng chừng đơn giản ấy lại
                    ẩn chứa muôn vàn hiểm nguy. Liệu Tanjiro và các đồng đội có
                    vượt qua nổi?
                  </p>
                  <p className="line__text">
                    Hoạt hình <i>Kimetsu No Yaiba</i> mùa 1 kết thúc ở tập 26,
                    lúc Tanjiro tới nhà ga. Phim hoạt hình điện ảnh trực tiếp
                    kết nối với đoạn kết này.
                  </p>
                  <p className="line__text">
                    Được xem là một trong những phân đoạn hay nhất bộ truyện
                    tranh <i>Kimetsu No Yaiba</i> phim hay <b>Mugen Train</b>{" "}
                    còn hấp dẫn bội phần khi Trụ Cột vốn đông người hâm mộ -
                    Viêm trụ giữ vai trò chính. Ở cuộc khảo sát bên lề, đến hơn
                    70% khán giả chọn Rengoku làm lý do họ ra rạp.
                  </p>
                  <p className="line__text">
                    Qua trailer, đồ họa và màu sắc vốn là điểm mạnh, hút fan của
                    phiên bản anime vẫn hoàn hảo như thế trên bản điện ảnh. Âm
                    nhạc khơi gợi cảm xúc cũng thành điểm cộng hoàn hảo.{" "}
                  </p>
                  <p className="line__text">
                    26 tập <i>Demon Slayer</i> nhận nhiều lời khen nồng nhiệt
                    nhờ việc bám cực kỳ sát cốt truyện. Làm sao tiếp tục giữ
                    nhịp độ nhanh gọn từ manga và để những ai chưa từng đọc
                    truyện mà tò mò đi xem theo kịp là thử thách lớn nhưng{" "}
                    <b>Kimetsu No Yaiba The Movie</b> thực hiện rất tốt điểm
                    này. Lượng người “càn quét” tại Nhật Bản chính là bằng chứng
                    về độ xuất sắc của{" "}
                    <b>Thanh Gươm Diệt Quỷ. Kimetsu No Yaiba</b> vượt qua{" "}
                    <i>Khương Tử Nha</i> , đứng thứ 5 bảng xếp hạng doanh thu
                    toàn cầu.
                  </p>
                  <p className="line__text">
                    Tại Việt Nam, nếu đặt suất chiếu sớm, các fan còn nhận thêm
                    bộ quà khủng gồm 05 huy hiệu đầy đủ các nhân vật, 03 poster
                    A2, 01 áo thun và 01 bìa hồ sơ.
                  </p>
                </div>
              </div>
              <div className="commentFilm__related">
                <h3 className="commentFilm__related--title">
                  Bài viết liên quan
                </h3>
                <NavLink to="/binh-luan-phim/preview-demon-slayer-diet-gon-khuong-tu-nha-tren-bang-doanh-thu-phong-ve-toan-cau">
                  <p className="commentFilm__related--post">
                    <i class="fa fa-angle-double-right"></i> [Review] Demon
                    Slayer: "Diệt Gọn" Khương Tử Nha Trên Bảng Doanh Thu Phòng
                    Vé Toàn Cầu
                  </p>
                </NavLink>
                <NavLink to="/binh-luan-phim/review-gia-dinh-croods-ky-nguyen-moi--vui-nhon-nhung-sau-sac-va-nu-quyen-khong-he-suong">
                  <p className="commentFilm__related--post">
                    <i class="fa fa-angle-double-right"></i> [Review] Gia Đình
                    Croods: Kỷ Nguyên Mới – Vui Nhộn Nhưng Sâu Sắc Và Nữ Quyền
                    Không Hề “Sượng”
                  </p>
                </NavLink>
                <NavLink to="/binh-luan-phim/review-tiec-trang-mau-hoi-tu-anh-tai">
                  <p className="commentFilm__related--post">
                    <i class="fa fa-angle-double-right"></i> [Review] Tiệc Trăng
                    Máu: Hội Tụ Anh Tài
                  </p>
                </NavLink>
                <NavLink to="/binh-luan-phim/review-trai-tim-quai-vat-khi-ac-quy-la-ke-luong-thien-bi-ton-thuong">
                  <p className="commentFilm__related--post">
                    <i class="fa fa-angle-double-right"></i> [Review] Trái Tim
                    Quái Vật: Khi Ác Quỷ Là Kẻ Lương Thiện Bị Tổn Thương
                  </p>
                </NavLink>
              </div>
              <div className="commentFilm__more">
                <h3 className="commentFilm__more--title">Bình luận phim</h3>
                <div className="row">
                  <div className="col-6 col-lg-3">
                    <div className="commentFilm__more--item">
                      <img src={news1} alt={news1}></img>
                      <div className="item__overlay">
                        <NavLink to="/binh-luan-phim/preview-demon-slayer-diet-gon-khuong-tu-nha-tren-bang-doanh-thu-phong-ve-toan-cau">
                          <h3 className="item__overlay--title">
                            [Review] Demon Slayer: "Diệt Gọn" Khương Tử Nha Trên
                            Bảng Doanh Thu Phòng Vé Toàn Cầu
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/binh-luan-phim/preview-demon-slayer-diet-gon-khuong-tu-nha-tren-bang-doanh-thu-phong-ve-toan-cau"
                          className="item__overlay--button"
                        >
                          Chi Tiết
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="commentFilm__more--item">
                      <img src={news2} alt={news2}></img>
                      <div className="item__overlay">
                        <NavLink to="/binh-luan-phim/review-gia-dinh-croods-ky-nguyen-moi--vui-nhon-nhung-sau-sac-va-nu-quyen-khong-he-suong">
                          <h3 className="item__overlay--title">
                            [Review] Gia Đình Croods: Kỷ Nguyên Mới – Vui Nhộn
                            Nhưng Sâu Sắc Và Nữ Quyền Không Hề “Sượng”
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/binh-luan-phim/review-gia-dinh-croods-ky-nguyen-moi--vui-nhon-nhung-sau-sac-va-nu-quyen-khong-he-suong"
                          className="item__overlay--button"
                        >
                          Chi Tiết
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="commentFilm__more--item">
                      <img src={news3} alt={news3}></img>
                      <div className="item__overlay">
                        <NavLink to="/binh-luan-phim/review-tiec-trang-mau-hoi-tu-anh-tai">
                          <h3 className="item__overlay--title">
                            [Review] Tiệc Trăng Máu: Hội Tụ Anh Tài
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/binh-luan-phim/review-tiec-trang-mau-hoi-tu-anh-tai"
                          className="item__overlay--button"
                        >
                          Chi Tiết
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="commentFilm__more--item">
                      <img src={news4} alt={news4}></img>
                      <div className="item__overlay">
                        <NavLink to="/binh-luan-phim/review-trai-tim-quai-vat-khi-ac-quy-la-ke-luong-thien-bi-ton-thuong">
                          <h3 className="item__overlay--title">
                            [Review] Trái Tim Quái Vật: Khi Ác Quỷ Là Kẻ Lương
                            Thiện Bị Tổn Thương
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/binh-luan-phim/review-trai-tim-quai-vat-khi-ac-quy-la-ke-luong-thien-bi-ton-thuong"
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
