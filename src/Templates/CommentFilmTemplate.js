import React from 'react'
import { Route } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Popup from '../Components/Popup';
import ScrollToTop from '../Components/ScrollToTop';
import "../assets/scss/main.scss";

export default function CommentFilmTemplate(props) {
    //tạo component hometemplate nhận 3 props (exact, path, Component từ parent)
    //route redirect đúng url => chứa component: header và trang chủ
    //propsRoute (history, match, location) truyền các thuộc tính vào thằng component lúc này là TrangChu
    let { Component, ...restParam } = props;
    return <Route { ...restParam} render={ (propsRoute) => {
        return <div className="commentFilmTemplate">
            <Header></Header>
            <Component {...propsRoute} />
            {/* Có thề chứa thêm nhiều component khác */}
            <Footer></Footer>

            <Popup></Popup>
            <ScrollToTop></ScrollToTop>
        </div>
    }}>
    </Route>
}
