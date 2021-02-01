import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Authentication from "./Components/Authentication";
import BlogFilm1 from "./Components/blog-film/BlogFilm1";
import BlogFilm2 from "./Components/blog-film/BlogFilm2";
import BlogFilm3 from "./Components/blog-film/BlogFilm3";
import BlogFilm4 from "./Components/blog-film/BlogFilm4";
import CommentFilm1 from "./Components/comment-film/CommentFilm1";
import CommentFilm2 from "./Components/comment-film/CommentFilm2";
import CommentFilm3 from "./Components/comment-film/CommentFilm3";
import CommentFilm4 from "./Components/comment-film/CommentFilm4";
import PromotionFilm1 from "./Components/promotion-film/PromotionFilm1";
import PromotionFilm2 from "./Components/promotion-film/PromotionFilm2";
import PromotionFilm3 from "./Components/promotion-film/PromotionFilm3";
import PromotionFilm4 from "./Components/promotion-film/PromotionFilm4";
import PromotionFilm5 from "./Components/promotion-film/PromotionFilm5";
import PromotionFilm6 from "./Components/promotion-film/PromotionFilm6";
import PromotionFilm7 from "./Components/promotion-film/PromotionFilm7";
import PromotionFilm8 from "./Components/promotion-film/PromotionFilm8";
import CommentFilmTemplate from "./Templates/CommentFilmTemplate";


const Home  = lazy(() => import('./Pages/ClientPages/Home'));
const ShowingFilm = lazy(() => import('./Pages/ClientPages/ShowingFilm'));
const DetailMovie = lazy(() => import('./Pages/ClientPages/DetailMovie'));
const SignInUp = lazy(() => import('./Pages/ClientPages/SignInUp'));
const TicketRoom = lazy(() => import('./Pages/ClientPages/TicketRoom'));
const InformationUser = lazy(() => import('./Pages/ClientPages/CustomerInformation'));
const SearchFilm = lazy(() => import('./Pages/ClientPages/SearchFilm'));


function App() {
  return (
    <>
      <Suspense fallback={
        ""
      }>
      
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/phim-dang-chieu" exact component={ShowingFilm}></Route>
          <Route path="/tim-kiem-phim" exact component={SearchFilm}></Route>
          <Route path="/lich-chieu-:tenPhim/:maPhim" exact component={DetailMovie}></Route>
          <Route path="/dang-nhap" exact component={SignInUp}></Route>
          <Route path='/thong-tin-ca-nhan' exact component={InformationUser}></Route>

          <Authentication path="/chi-tiet-phong-ve/:maLichChieu" exact Component={TicketRoom}></Authentication>
          <Authentication path="/chi-tiet-phong-ve/:maLichChieu" exact Component={SignInUp}></Authentication>

          <CommentFilmTemplate exact path='/binh-luan-phim/preview-demon-slayer-diet-gon-khuong-tu-nha-tren-bang-doanh-thu-phong-ve-toan-cau' Component={CommentFilm1}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/binh-luan-phim/review-gia-dinh-croods-ky-nguyen-moi--vui-nhon-nhung-sau-sac-va-nu-quyen-khong-he-suong' Component={CommentFilm2}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/binh-luan-phim/review-tiec-trang-mau-hoi-tu-anh-tai' Component={CommentFilm3}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/binh-luan-phim/review-trai-tim-quai-vat-khi-ac-quy-la-ke-luong-thien-bi-ton-thuong' Component={CommentFilm4}></CommentFilmTemplate>
          
          <CommentFilmTemplate exact path='/blog-dien-anh/nhung-cai-ten-bao-chung-doanh-thu-phong-ve-tai-viet-nam' Component={BlogFilm1}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/blog-dien-anh/pixar--ngoai-le-duy-nhat-cua-hollywood-p2' Component={BlogFilm2}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/blog-dien-anh/black-panther-2-khoi-quay-vao-mua-he-2021-marvel-lam-deadpool-3-voi-ryan-reynolds' Component={BlogFilm3}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/blog-dien-anh/phim-kinh-dien-su-im-lang-cua-bay-cuu--tieng-thet-dam-mau-va-ga-bac-si-benh-hoan' Component={BlogFilm4}></CommentFilmTemplate>

          <CommentFilmTemplate exact path='/khuyen-mai/bap-milo-doc-la-chao-2021' Component={PromotionFilm1}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/khuyen-mai/ngay-thanh-vien---milo-day' Component={PromotionFilm2}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/khuyen-mai/tung-bung-hai-sao--nhan-uu-dai-khung' Component={PromotionFilm3}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/khuyen-mai/khuyen-mai/x2-thanh-vien-x2-quyen-loi' Component={PromotionFilm4}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/khuyen-mai/ngay-tri-an-cua-galaxy-cinema---ngay-thu-hai-dau-tien-moi-thang' Component={PromotionFilm5}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/khuyen-mai/tiec-tra-tat-nien--xem-phim-mien-phi' Component={PromotionFilm6}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/khuyen-mai/galaxy-cinema-tri-an-thanh-vien' Component={PromotionFilm7}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/khuyen-mai/xem-phim-hay--nhan-li-xi-chat' Component={PromotionFilm8}></CommentFilmTemplate>

          <Redirect to="/"></Redirect>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
