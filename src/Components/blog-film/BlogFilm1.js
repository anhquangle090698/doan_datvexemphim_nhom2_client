import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/main.scss";
import blg1 from "../../assets/images/blog-film-1.jpg";
import blg12 from "../../assets/images/blog-fim-1-2.jpg";
import blg13 from "../../assets/images/blog-film-1-3.jpg";
import blg14 from "../../assets/images/blog-film-1-4.jpg";
import blg15 from "../../assets/images/blog-film-1-5.jpg";
import news5 from "../../assets/images/news-450-doanh-thu.png";
import news6 from "../../assets/images/news-450-pixal.png";
import news7 from "../../assets/images/news-450-dead-pool.png";
import news8 from "../../assets/images/news-450-bay-cuu.jpg";
import { useSelector } from "react-redux";

export default function BlogFilm1(props) {
  let { listFilm } = useSelector((state) => state.StateManageFilm);

  const renderFilmMore = () => {
    return listFilm.slice(1, 4).map((film, index) => {
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
              Blog điện ảnh
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="commentFilm__left">
              <div className="commentFilm__content">
                <h3 className="commentFilm__content--title">
                  Những Cái Tên Bảo Chứng Doanh Thu Phòng Vé Tại Việt Nam
                </h3>
                <div className="content__text">
                  <p className="line__text">
                    Tại Hollywood, Tom Cruise, Dwayne Johnson hay Leonardo
                    DiCaprio được coi là ông hoàng phòng vé. Chỉ cần nhìn tên
                    diễn viên, khán giả sẽ ùn ùn kéo ra rạp. Ở Việt Nam, ngôi
                    sao nào có khả năng bảo chứng doanh thu tương tự?
                  </p>
                  <p className="line__text">
                    <b>NSƯT Hoài Linh</b>
                  </p>
                  <p className="line__img">
                    <img
                      src={blg1}
                      alt={blg1}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                    NSƯT Hoài Linh là ông vua phòng vé đầu tiên tại Việt Nam.
                    Một thời, chỉ cần có Hoài Linh xuất hiện, không cần quan tâm
                    kịch bản hay dàn diễn viên phụ, khán giả vẫn đổ xô ra rạp
                    chiếu phim. <i>Hello Cô Ba</i> (doanh thu hơn 25 tỷ),{" "}
                    <i>Nhà Có 5 Nàng Tiên</i> (doanh thu trên 60 tỷ),{" "}
                    <i>Tía Tui Là Cao Thủ</i> (doanh thu hơn 50 tỷ)… đều thắng
                    lớn doanh thu mùa Tết dù chất lượng chưa hẳn là tốt so với
                    các đối thủ cạnh tranh.
                  </p>
                  <p className="line__text">
                    <b>Thái Hòa</b>
                  </p>
                  <p className="line__text">
                    Bất ngờ trở thành hiện tượng nhờ Hội (Để Mai Tính), Thái Hòa
                    trở thành ông vua phòng vé thế hệ tiếp theo sau hàng loạt
                    tác phẩm ăn khách <i>Để Mai Tính 2</i>, <i>Long Ruồi</i>,{" "}
                    <i>Cưới Ngay Kẻo Lỡ</i>,...
                  </p>
                  <p className="line__img">
                    <img
                      src={blg12}
                      alt={blg12}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                    Khác NSƯT Hoài Linh, thành công của những bộ phim Thái Hòa
                    tham gia không chỉ đến từ lối diễn hài rất duyên mà còn tổng
                    hợp nhiều yếu tố như kịch bản, đạo diễn… Từng có lúc, anh bị
                    hụt hơi khi thử nghiệm kịch bản hay nhưng thiếu hấp dẫn với
                    khán giả Việt – <i>Fan Cuồng</i> . Phim theo phong cách
                    phương Tây - <i>Vệ Sĩ Sài Gòn</i> cũng chẳng đạt thành tích
                    như mong đợi. (Bù lại, <i>Saigon Bodyguards</i> đã được
                    Hollyood mua bản quyền chuyển thể cho Ngô Kinh và Chris
                    Pratt đóng chính).
                  </p>
                  <p className="line__text">
                    <i>Chàng Vợ Của Em</i> và <i>Hồn Papa, Da Con Gái</i> giúp
                    Thái Hòa khẳng định diễn xuất nhưng doanh thu chưa thật xuất
                    sắc. Chỉ đến khi <i>Tiệc Trăng Máu</i> bùng nổ vào tháng 10,
                    Thái Hòa mới thật sự trở lại ngôi vương.
                  </p>
                  <p className="line__text">
                    Mới đây nhất, Thái Hòa cameo ở{" "}
                    <i>Người Cần Quên Phải Nhớ</i> do Đức Thịnh làm đạo diễn và
                    Charlie Nguyễn là nhà sản xuất. Dù nhân vật James Bô được
                    khán giả khen ngợi nhưng vài phút Thái Hòa không đủ cứu vãn
                    bộ phim.
                  </p>
                  <p className="line__text">
                    <b>Trường Giang</b>
                  </p>
                  <p className="line__img">
                    <img
                      src={blg13}
                      alt={blg13}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                    Trường Giang nổi lên từ phần 1 franchise <i>Lật Mặt</i> .
                    Tác phẩm thu về 72 tỷ giúp anh tìm được chỗ đứng trên thị
                    trường phim chiếu rạp. Tên tuổi Trường Giang dần khẳng định
                    nhờ doanh thu <i>49 Ngày</i> (67 tỷ đồng),{" "}
                    <i>Taxi, Em Tên Gì</i> (47 tỷ đồng). Tuy kịch bản đều có
                    những điểm yếu nhất định nhưng nhờ Trường Giang vẫn đại
                    thắng.
                  </p>
                  <p className="line__text">
                    Tết 2018, Trường Giang chính thức trở thành ông vua phòng vé
                    khi <i>Siêu Sao Siêu Ngố</i> cán mốc trăm tỷ. Năm 2020, anh
                    tham gia phim Tết tiếp theo, cũng hợp tác với đạo diễn Đức
                    Thịnh. Nội dung <i>30 Chưa Phải Là Tết</i> thiếu chất lượng,
                    kéo luôn Trường Giang tuột dốc. Phim đứng đầu doanh thu mùng
                    1 nhưng đã đuối sức ở giai đoạn sau, để lọt ngôi vương mùa
                    Tết vào tay <i>Gái Già Lắm Chiêu 3</i>.
                  </p>
                  <p className="line__text">
                    <b>Trấn Thành</b>
                  </p>
                  <p className="line__img">
                    <img
                      src={blg14}
                      alt={blg14}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                    Tết 2019 là cuộc đấu giữa Trấn Thành và Trấn Thành. Anh tham
                    gia cả hai bộ phim cạnh tranh gay gắt nhất phòng vé lúc đó.
                    Trấn Thành đóng chính <i>Cua Lại Vợ Bầu</i> còn trong{" "}
                    <i>Trạng Quỳnh</i> thì anh chỉ vào vai phụ - Xẩm. Thế nhưng,
                    vượt hơn cả những diễn viên chuyên nghiệp như Nhã Phương hay
                    Quốc Anh, Trấn Thành mới là người được khen ngợi nhất{" "}
                    <i>Trạng Quỳnh</i> , anh cũng là nhân tố chính thu hút khán
                    giả ra rạp.
                  </p>
                  <p className="line__text">
                    Cuối cùng, <i>Cua Lại Vợ Bầu</i> đứng đầu đạt doanh thu
                    176,5 tỷ đồng còn <i>Trạng Quỳnh</i> cũng phá mốc trăm tỷ.
                    Quá đủ để khẳng định vị thế của Trấn Thành trong lòng khán
                    giả.
                  </p>
                  <p className="line__text">
                    Tết 2021, Trấn Thành sẽ tái xuất với <i>Bố Già</i> . Có sẵn
                    lượng fan hâm mộ đông đảo từ phiên bản webdrama, dàn diễn
                    viên đình đám tham gia và dĩ nhiên là sự góp mặt của “MC
                    quốc dân”, Bố Già đang là ứng cử viên nặng kí cho ngôi vương
                    phòng vé năm nay. Cuộc cạnh tranh giữa các tác phẩm khiến
                    khán giả yên tâm về mặt chất lượng như <i>Trạng Tí</i>,{" "}
                    <i>Lật Mặt 48H</i>, <i>Gái Già Lắm Chiêu V</i> đem đến mùa
                    Tết 2021 sôi nổi chưa từng có!
                  </p>
                  <p className="line__text">
                    <b>Thu Trang</b>
                  </p>
                  <p className="line__text">
                    Sự xuất hiện của “bóng hồng” Thu Trang giữa các “đấng mày
                    râu” không hề bất ngờ. Với những ai theo dõi “hoa hậu hài”
                    nhiều năm qua, thành công của cô là xứng đáng!
                  </p>
                  <p className="line__img">
                    <img
                      src={blg15}
                      alt={blg15}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                    Thu Trang từng được tán thưởng với nhiều vai phụ, cũng từng
                    bùng nổ mẹ Mưa trong <i>Nắng</i>,<i>Nắng 2</i>. Năm 2019,
                    Thu Trang chạy đà bằng{" "}
                    <i>Chị Mười Ba: Phần Kết Thập Tam Muội</i> . Tuy không phá
                    trăm tỷ nhưng doanh thu 62 tỷ đồng vẫn là cột mốc đáng nhớ.
                    Năm 2020, dù phòng vé lao đảo vì Covid-19, Thu Trang lại có
                    bảng thành thích xuất sắc khó tin. Đầu năm,{" "}
                    <i>Đôi Mắt Âm Dương</i> phá 60 tỷ, <i>Tiệc Trăng Máu</i> đạt
                    175 tỷ đồng và <i>Chị Mười Ba: 3 Ngày Sinh Tử</i> hiện đang
                    càn quét rạp chiếu phim, tiến tới mốc trăm tỷ.
                  </p>
                  <p className="line__text">
                    Năm 2021, loạt bom tấn Hollywood trở lại, thị trường phim
                    Việt lại càng cạnh tranh gay gắt. Thái Hòa sẽ giữ vững ngôi
                    vương, Trường Giang sẽ lội ngược dòng hay Trấn Thành hoặc
                    Thu Trang sẽ lên ngôi? Cùng chờ xem!
                  </p>
                </div>
              </div>
              <div className="commentFilm__related">
                <h3 className="commentFilm__related--title">
                  Bài viết liên quan
                </h3>
                <NavLink to="/blog-dien-anh/nhung-cai-ten-bao-chung-doanh-thu-phong-ve-tai-viet-nam">
                  <p className="commentFilm__related--post">
                    <i class="fa fa-angle-double-right"></i>
                    Những Cái Tên Bảo Chứng Doanh Thu Phòng Vé Tại Việt Nam
                  </p>
                </NavLink>
                <NavLink to="/blog-dien-anh/pixar--ngoai-le-duy-nhat-cua-hollywood-p2">
                  <p className="commentFilm__related--post">
                    <i class="fa fa-angle-double-right"></i>
                    Pixar – Ngoại Lệ Duy Nhất Của Hollywood (P.2)
                  </p>
                </NavLink>
                <NavLink to="/blog-dien-anh/black-panther-2-khoi-quay-vao-mua-he-2021-marvel-lam-deadpool-3-voi-ryan-reynolds">
                  <p className="commentFilm__related--post">
                    <i class="fa fa-angle-double-right"></i>
                    Black Panther 2 Khởi Quay Vào Mùa Hè 2021, Marvel Làm
                    Deadpool 3 Với Ryan Reynolds
                  </p>
                </NavLink>
                <NavLink to="/blog-dien-anh/phim-kinh-dien-su-im-lang-cua-bay-cuu--tieng-thet-dam-mau-va-ga-bac-si-benh-hoan">
                  <p className="commentFilm__related--post">
                    <i class="fa fa-angle-double-right"></i>
                    Phim Kinh Điển: Sự Im Lặng Của Bầy Cừu – Tiếng Thét Đẫm Máu
                    Và Gã Bác Sĩ Bệnh Hoạn
                  </p>
                </NavLink>
              </div>
              <div className="commentFilm__more">
                <h3 className="commentFilm__more--title">Bình luận phim</h3>
                <div className="row">
                  <div className="col-6 col-lg-3">
                    <div className="commentFilm__more--item">
                      <img src={news5} alt={news5}></img>
                      <div className="item__overlay">
                        <NavLink to="/blog-dien-anh/nhung-cai-ten-bao-chung-doanh-thu-phong-ve-tai-viet-nam">
                          <h3 className="item__overlay--title">
                            Những Cái Tên Bảo Chứng Doanh Thu Phòng Vé Tại Việt
                            Nam
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/blog-dien-anh/nhung-cai-ten-bao-chung-doanh-thu-phong-ve-tai-viet-nam"
                          className="item__overlay--button"
                        >
                          Chi Tiết
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="commentFilm__more--item">
                      <img src={news6} alt={news6}></img>
                      <div className="item__overlay">
                        <NavLink to="/blog-dien-anh/pixar--ngoai-le-duy-nhat-cua-hollywood-p2">
                          <h3 className="item__overlay--title">
                            Pixar – Ngoại Lệ Duy Nhất Của Hollywood (P.2)
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/blog-dien-anh/pixar--ngoai-le-duy-nhat-cua-hollywood-p2"
                          className="item__overlay--button"
                        >
                          Chi Tiết
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="commentFilm__more--item">
                      <img src={news7} alt={news7}></img>
                      <div className="item__overlay">
                        <NavLink to="/blog-dien-anh/black-panther-2-khoi-quay-vao-mua-he-2021-marvel-lam-deadpool-3-voi-ryan-reynolds">
                          <h3 className="item__overlay--title">
                            Black Panther 2 Khởi Quay Vào Mùa Hè 2021, Marvel
                            Làm Deadpool 3 Với Ryan Reynolds
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/blog-dien-anh/black-panther-2-khoi-quay-vao-mua-he-2021-marvel-lam-deadpool-3-voi-ryan-reynolds"
                          className="item__overlay--button"
                        >
                          Chi Tiết
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="commentFilm__more--item">
                      <img src={news8} alt={news8}></img>
                      <div className="item__overlay">
                        <NavLink to="/blog-dien-anh/phim-kinh-dien-su-im-lang-cua-bay-cuu--tieng-thet-dam-mau-va-ga-bac-si-benh-hoan">
                          <h3 className="item__overlay--title">
                            Phim Kinh Điển: Sự Im Lặng Của Bầy Cừu – Tiếng Thét
                            Đẫm Máu Và Gã Bác Sĩ Bệnh Hoạn
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/blog-dien-anh/phim-kinh-dien-su-im-lang-cua-bay-cuu--tieng-thet-dam-mau-va-ga-bac-si-benh-hoan"
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
