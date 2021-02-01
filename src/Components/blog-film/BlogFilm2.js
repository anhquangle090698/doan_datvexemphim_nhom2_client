import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/main.scss";
import blg2 from "../../assets/images/blog-film-2.jpg";
import blg21 from "../../assets/images/blog-film-2-1.jpg";
import news5 from "../../assets/images/news-450-doanh-thu.png";
import news6 from "../../assets/images/news-450-pixal.png";
import news7 from "../../assets/images/news-450-dead-pool.png";
import news8 from "../../assets/images/news-450-bay-cuu.jpg";
import { useSelector } from "react-redux";

export default function BlogFilm2(props) {
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
              Blog điện ảnh
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="commentFilm__left">
              <div className="commentFilm__content">
                <h3 className="commentFilm__content--title">
                  Pixar – Ngoại Lệ Duy Nhất Của Hollywood (P.2)
                </h3>
                <div className="content__text">
                  <p className="line__text">
                    Nói về sự nghiệp của Pixar, những câu chuyện xoay quanh quá
                    trình ra đời tác phẩm đầu tiên của họ - phim hay{" "}
                    <b>Toy Story</b> dường như đã trở thành huyền thoại trong
                    nền công nghiệp điện ảnh.
                  </p>
                  <p className="line__text">
                    Disney là nhà đồng sản xuất <b>Toy Story</b> vì vào lúc này
                    Pixar đang gặp khó khăn về tài chính. Các giám đốc điều hành
                    của Nhà Chuột hầu hết đều phản đối phương thức làm việc của
                    Lasseter và các cộng tác viên của anh (những người có tư
                    tưởng độc lập không kém cạnh Lasseter). Disney muốn nó phải
                    là một bộ phim nhạc kịch chứ không phải nói về tình bạn, họ
                    không thích từ “đồ chơi” trong tiêu đề, họ ghét việc cắt
                    giảm sớm và tạm dừng sản xuất trong thời gian ngắn. Tựu
                    chung lại, Toy Story dường như đã bị “ghẻ lạnh” ngay từ khi
                    mới bắt đầu.
                  </p>
                  <p className="line__text">
                    Có thể ví mối quan hệ ban đầu của Pixar và Disney như David
                    và Goliath – một mối quan hệ không mấy tốt đẹp giữa người
                    nghệ sĩ nhỏ bé, kém may mắn và một “kẻ khổng lồ”. Thế nhưng
                    trên thực tế, họ cần nhau để thành công.
                  </p>
                  <p className="line__img">
                    <img
                      src={blg2}
                      alt={blg2}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>

                  <p className="line__text">
                    Có một tin đồn cho rằng vào lúc bấy giờ, Jeffrey Katzenberg
                    thuộc Disney (sau này trở thành người sáng lập DreamWorks
                    cùng Teven Spielberg và David Geffen) đã có nhiều bất đồng
                    với Jobs cũng như nhóm nhân viên của Pixar. Tuy nhiên, cũng
                    chính ông là người đã thúc đẩy ý tưởng xây dựng Toy Story
                    thành một câu chuyện về tình bạn thân đồng thời đem đến cho
                    nó nhiều giá trị, góc nhìn hơn so với các phim hoạt hình cổ
                    điển.
                  </p>
                  <p className="line__text">
                    Nếu không có túi tiền sâu rộng của Disney, có thể Pixar sẽ
                    không bao giờ trở thành một hiện tượng văn hóa khổng lồ như
                    ngày nay.
                  </p>
                  <p className="line__text">
                    “Chúng tôi là những người đã tạo nên sự thành công của Toy
                    Story. Chúng tôi đã tập hợp mọi bộ phận của mình, từ các nhà
                    tiếp thị tiêu dùng đến Disney Channel – tất cả chỉ để giúp
                    cho bộ phim trở nên thành công” - Ông chủ của Disney,
                    Michael Eisner nhận xét trong cuốn sách Disney War của James
                    B Stewart.
                  </p>
                  <p className="line__text">
                    Thành công của <b>Toy Story</b> đã cho phép Pixar có quyền
                    xây dựng một thương hiệu bình đẳng với Disney trong tất cả
                    các dự án sau này, bao gồm việc quảng bá và bán các sản phẩm
                    ăn theo. Điều này đồng nghĩa với việc Pixar được công nhận
                    là một hãng phim lớn theo đúng nghĩa đen chứ không chỉ là
                    một bộ phận trực thuộc hay nhà cung cấp cho Disney.
                  </p>
                  <p className="line__text">
                    Sau một thập kỷ, khi Disney mua lại Pixar với giá 7.4 tỷ đô
                    la vào năm 2006, lúc bấy giờ, Lasseter và các cộng tác viên
                    chủ chốt của ông đã có thể giữ quyền tự chủ sáng tạo của
                    chính họ.
                  </p>
                  <p className="line__text">
                    Trên tờ New York, nhà phê bình Anthony Lane đã khẳng định:
                    Không có ai đi xem một bộ phim vì nó được làm bởi Universal
                    hay 20th Century Fox. Đấng mày râu khi rời khỏi rạp chiếu
                    phim đều không bận tâm công ty nào sản xuất bộ phim mà họ
                    vừa xem bằng việc ai đã chế tạo ra cái máy sấy tay trong nhà
                    vệ sinh nam. Tuy nhiên, Pixar là ngoại lệ. Mọi người đều
                    biết Pixar.
                  </p>
                  <p className="line__text">
                    Nhận xét của Lane đã gợi mở lý do tại sao các bộ phim của
                    Pixar lại thành công đến như vậy trong thời gian dài. Chúng
                    được quảng bá rất thông minh. Họ không chỉ đầu tư vào quá
                    trình làm phim mà còn rất coi trọng khâu xây dựng thương
                    hiệu và đưa sản phẩm của mình tiếp cận đến công chúng.
                  </p>
                  <p className="line__text">
                    Các tác phẩm của Pixar là ví dụ hoàn hảo về cái mà Hollywood
                    gọi là “phim của mọi nhà”. Chúng thu hút trẻ em, người già,
                    đàn ông và phụ nữ. Điều kỳ diệu là những bộ phim chiếu rạp{" "}
                    <b>
                      The Incredibles, Wall-E, Inside Out, Finding Nemo, Cars{" "}
                    </b>{" "}
                    và <b>CoCo</b> đều đạt được sức hấp dẫn trên toàn cầu mà
                    không hề bị trùng lặp hay nhạt nhẽo theo thời gian. Chúng
                    đưa người xem tiếp cận với những cảm xúc đen tối trong{" "}
                    <b>Inside Out</b> , hay cái chết trong <b>Coco</b> một cách
                    rất cuốn hút và tươi mới. Pixar cũng đã chứng minh được một
                    điều rằng phim hoạt hình được làm bằng máy tính vẫn giàu cảm
                    xúc nhiệm màu như các tác phẩm được vẽ bằng tay đáng yêu
                    nhất mà Disney đã tạo ra được trong thời kỳ hoàng kim.
                  </p>
                  <p className="line__img">
                    <img
                      src={blg21}
                      alt={blg21}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="line__text">
                    Một điều mà Pixar thường bị chỉ trích nhiều nhất đó chính là
                    người ta gọi hãng “chỉ là câu lạc bộ dành cho cánh đàn ông”.
                    Từ vị trí đạo diễn, nhân vật chính là người, một chú cá hay
                    đồ chơi – tất cả đều có giới tính nam.
                  </p>
                  <p className="line__text">
                    Năm 2012, giới điện ảnh được một dịp xôn xao khi Brenda
                    Chapman trả lời trên The New York Times rằng việc bị loại
                    khỏi ekip làm phim <b>Brave</b> đã khiến bà cảm thấy thật
                    kinh khủng. Tuy nhiên sau đó, bà cho biết vì “tầm nhìn của
                    tôi vẫn ảnh hưởng xuyên suốt bộ phim và vì tôi đã dám lên
                    tiếng cho chính bản thân mình” nên “tôi vẫn rất tự hào về
                    nó”.
                  </p>
                  <p className="line__text">
                    Năm 2017, hai nhà biên kịch Rashida Jones và Will McCormack
                    - những người đang đảm nhiệm vai trò biên kịch cho{" "}
                    <b>Toy Story 4</b> tuyên bồ rằng Pixar đã tạo nên “một nền
                    văn hóa không có sự bình đẳng cho phụ nữ và người da màu”.
                    Điều này khiến một hãng phim được yêu thích hàng đầu bỗng
                    dưng trở thành “kẻ tội đồ”. Mọi chuyện trở nên tồi tệ hơn
                    khi phong trào #MeToo nổ ra và kế tiếp, John Lasseter phải
                    ra đi sau khi có nhiều đồng nghiệp nữ lên tiếng về việc ông
                    thường xuyên có những hành động quá trớn với họ.
                  </p>
                  <p className="line__text">
                    Tuy nhiên như đã nói từ đầu, những bê bối này không ảnh
                    hưởng đến chất lượng làm phim của Pixar. <b>Toy Story 4</b>{" "}
                    hay <b>Onward</b> vẫn hay và hấp dẫn, vẫn nhận được nhiều
                    đánh giá cao từ giới chuyên môn và sự thích thú lớn của khán
                    giả.
                  </p>
                  <p className="line__text">
                    Kết thúc năm 2020, Pixar cho ra mắt dự án mới mang tên{" "}
                    <b>Soul</b> – một bộ phim mà hầu hết các nhà phê bình đều
                    nhận định rằng “nó sẽ khiến trẻ em vỗ tay vì thích thú và
                    người lớn phải rớm lệ vì cảm động”. Giữa một năm mà cả thế
                    giới lao đao vì dịch bệnh, sự thành công của Pixar một lần
                    nữa khẳng định vị thế của họ: Ngoại lệ duy nhất có 1-0-2 của
                    Hollywood!
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
