import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Authentication from "./Components/Authentication";
import CommentFilm1 from "./Components/comment-film/CommentFilm1";
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

          <Redirect to="/"></Redirect>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
