import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Authentication from "./Components/Authentication";
import CommentFilm1 from "./Components/comment-film/CommentFilm1";
import CommentFilm2 from "./Components/comment-film/CommentFilm2";
import CommentFilm3 from "./Components/comment-film/CommentFilm3";
import CommentFilm4 from "./Components/comment-film/CommentFilm4";
import CommentFilmTemplate from "./Templates/CommentFilmTemplate";


const Home  = lazy(() => import('./Pages/ClientPages/Home'));
const ShowingFilm = lazy(() => import('./Pages/ClientPages/ShowingFilm'));
const DetailMovie = lazy(() => import('./Pages/ClientPages/DetailMovie'));
const SignInUp = lazy(() => import('./Pages/ClientPages/SignInUp'));
const TicketRoom = lazy(() => import('./Pages/ClientPages/TicketRoom'));
const InformationUser = lazy(() => import('./Pages/ClientPages/CustomerInformation'));


function App() {
  return (
    <>
      <Suspense fallback={
        ""
      }>
      
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/phim-dang-chieu" exact component={ShowingFilm}></Route>
          <Route path="/lich-chieu-:tenPhim/:maPhim" exact component={DetailMovie}></Route>
          <Route path="/dang-nhap" exact component={SignInUp}></Route>
          <Route path='/thong-tin-ca-nhan' exact component={InformationUser}></Route>

          <Authentication path="/chi-tiet-phong-ve/:maLichChieu" exact Component={TicketRoom}></Authentication>
          <Authentication path="/chi-tiet-phong-ve/:maLichChieu" exact Component={SignInUp}></Authentication>

          <CommentFilmTemplate exact path='/binh-luan-phim/preview-demon-slayer-diet-gon-khuong-tu-nha-tren-bang-doanh-thu-phong-ve-toan-cau' Component={CommentFilm1}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/binh-luan-phim/review-gia-dinh-croods-ky-nguyen-moi--vui-nhon-nhung-sau-sac-va-nu-quyen-khong-he-suong' Component={CommentFilm2}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/binh-luan-phim/review-tiec-trang-mau-hoi-tu-anh-tai' Component={CommentFilm3}></CommentFilmTemplate>
          <CommentFilmTemplate exact path='/binh-luan-phim/review-trai-tim-quai-vat-khi-ac-quy-la-ke-luong-thien-bi-ton-thuong' Component={CommentFilm4}></CommentFilmTemplate>
          <Redirect to="/"></Redirect>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
