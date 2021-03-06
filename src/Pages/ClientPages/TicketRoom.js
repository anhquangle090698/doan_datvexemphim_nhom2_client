import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailTicketRoomByIdShowTimeApiAction,
  postManageBookingApiAction,
} from "../../redux/actions/ManageFilmReducerActions";
import { handleChairBookingAction } from "../../redux/actions/ManageFilmReducerActions";
import screen from "../../assets/images/screen.png";
import notify from "../../assets/images/exclamation.png";
import "../../assets/scss/main.scss";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import LoadingPage from "../../Components/LoadingPage";

export default function TicketRoom(props) {
  // console.log(props);

  const { detailTicketRoom, listChairBooking } = useSelector(
    (state) => state.StateManageFilm
  );

  const { informationUserSignIn } = useSelector(
    (state) => state.StateManageUser
  );
  const dispatch = useDispatch();

  const [timer, setTimer] = useState(300);

  const secondsToHms = (d) => {
    d = Number(d);

    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    const minute = m < 10 ? `0${m}` : m;
    const second = s < 10 ? `0${s}` : s;
    return `${minute}:${second}`;
  };

  useEffect(() => {
    let intervalTimer;

    if (timer > 0) {
      intervalTimer = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      clearInterval(intervalTimer);
    }

    return () => {
      clearInterval(intervalTimer);
    };
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  useEffect(() => {
    const maLichChieu = props.match.params.maLichChieu;

    const fetchDataDetailTicketRoom = async () => {
      dispatch(await getDetailTicketRoomByIdShowTimeApiAction(maLichChieu));
    };

    fetchDataDetailTicketRoom();
  }, []);

  const logicNumberChair = (numberChair) => {
    return numberChair % 16 === 1
      ? "01"
      : numberChair % 16 === 2
      ? "02"
      : numberChair % 16 === 3
      ? "03"
      : numberChair % 16 === 4
      ? "04"
      : numberChair % 16 === 5
      ? "05"
      : numberChair % 16 === 6
      ? "06"
      : numberChair % 16 === 7
      ? "07"
      : numberChair % 16 === 8
      ? "08"
      : numberChair % 16 === 9
      ? "09"
      : numberChair % 16 === 10
      ? "10"
      : numberChair % 16 === 11
      ? "11"
      : numberChair % 16 === 12
      ? "12"
      : numberChair % 16 === 13
      ? "13"
      : numberChair % 16 === 14
      ? "14"
      : numberChair % 16 === 15
      ? "15"
      : numberChair % 16 === 0
      ? "16"
      : "";
  };

  const logicNumberChairTicket = (numberChair) => {
    return numberChair < 17
      ? `A${logicNumberChair(numberChair)}`
      : numberChair < 33
      ? `B${logicNumberChair(numberChair)}`
      : numberChair < 49
      ? `C${logicNumberChair(numberChair)}`
      : numberChair < 65
      ? `D${logicNumberChair(numberChair)}`
      : numberChair < 81
      ? `E${logicNumberChair(numberChair)}`
      : numberChair < 97
      ? `F${logicNumberChair(numberChair)}`
      : numberChair < 113
      ? `G${logicNumberChair(numberChair)}`
      : numberChair < 129
      ? `H${logicNumberChair(numberChair)}`
      : numberChair < 145
      ? `I${logicNumberChair(numberChair)}`
      : numberChair < 161
      ? `J${logicNumberChair(numberChair)}`
      : "";
  };

  const logicCharacterChair = (numberChair) => {
    return numberChair / 1 === 1 ? (
      <span className="ticket__diagram--character">A</span>
    ) : numberChair / 17 === 1 ? (
      <span className="ticket__diagram--character">B</span>
    ) : numberChair / 33 === 1 ? (
      <span className="ticket__diagram--character">C</span>
    ) : numberChair / 49 === 1 ? (
      <span className="ticket__diagram--character">D</span>
    ) : numberChair / 65 === 1 ? (
      <span className="ticket__diagram--character">E</span>
    ) : numberChair / 81 === 1 ? (
      <span className="ticket__diagram--character">F</span>
    ) : numberChair / 97 === 1 ? (
      <span className="ticket__diagram--character">G</span>
    ) : numberChair / 113 === 1 ? (
      <span className="ticket__diagram--character">H</span>
    ) : numberChair / 129 === 1 ? (
      <span className="ticket__diagram--character">I</span>
    ) : numberChair / 145 === 1 ? (
      <span className="ticket__diagram--character">J</span>
    ) : (
      ""
    );
  };

  const renderListChair = () => {
    return detailTicketRoom.danhSachGhe?.map((chair, index) => {
      let chairVip = chair.loaiGhe === "Vip" ? "chairVip" : "";
      let numberChairVip = chair.loaiGhe === "Vip" ? "number__chairVip" : "";

      let chairBooked = chair.daDat ? "chairBooked" : "";
      let numberChairBooked = chair.daDat ? "number__chairBooked" : "";
      let disabled = chair.daDat ? "disabled" : "";

      let indexChairBooking = listChairBooking.findIndex((chairBook, index) => {
        return chairBook.maGhe === chair.maGhe;
      });

      let chairBooking = indexChairBooking !== -1 ? "chairBooking" : "";
      let numberChairBooking =
        indexChairBooking !== -1 ? "number__chairBooking" : "";

      return (
        <Fragment key={index}>
          {logicCharacterChair(chair.stt)}

          <span
            className={`ticket__diagram--chair ${chairVip} ${chairBooking} ${chairBooked} ${disabled}`}
            key={index}
            onClick={() => {
              const chairB = {
                maGhe: chair.maGhe,
                stt: chair.stt,
                giaVe: chair.giaVe,
              };

              dispatch(handleChairBookingAction(chairB));
            }}
          >
            <svg
              x="10px"
              y="10px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 113.4"
            >
              <g>
                <path d="M100.73,106.44v6.96h-4.29v-6.96h-0.7c-0.05,0-0.11,0.01-0.17,0.01H28.28c-0.08,0.01-0.16,0.01-0.24,0.01h-0.03h-1.77v6.94 h-4.29v-6.94h-2.47v-0.01c-2.42-0.01-4.41-0.49-5.91-1.77c-1.54-1.31-2.41-3.29-2.49-6.2c0-0.03,0-0.07,0-0.1l0.01-31.2 c-1.94-0.56-3.64-1.28-5.08-2.19c-1.98-1.25-3.46-2.85-4.37-4.85c-3.07-6.74-1.52-12.41,2.11-16.23c1.65-1.74,3.74-3.07,6.02-3.92 c2.27-0.85,4.73-1.22,7.12-1.03c1.8,0.14,3.57,0.58,5.2,1.35V18.73c0-8.88,1.33-13.51,4.75-16.1C30.18,0.1,35,0,42.3,0h38.22 c7.94,0,12.76,0.31,15.94,3.15c3.18,2.84,4.11,7.71,4.11,16.72v21.26c2.18-1.04,4.58-1.52,6.97-1.5c2.33,0.02,4.64,0.51,6.72,1.4 c2.11,0.91,4.01,2.24,5.5,3.93c3.26,3.73,4.44,9.06,1.28,15.26c-0.96,1.89-2.42,3.46-4.34,4.71c-1.44,0.93-3.13,1.68-5.07,2.25 v31.23h-0.01l0,0.05c-0.08,2.92-0.95,4.89-2.49,6.2c-1.5,1.27-3.49,1.76-5.91,1.77v0.01H100.73L100.73,106.44z M26.37,43.54 c1.32,1.5,2.39,3.4,3.1,5.71c0.34,1.1,0.58,2.3,0.7,3.6c0.12,1.25,0.12,2.59-0.01,4.04l0,5.73h62.37V56.8 c-0.12-1.41-0.16-2.72-0.07-3.92c0.1-1.37,0.36-2.64,0.83-3.79c0.77-1.9,1.79-3.49,2.99-4.79V19.87c0-7.7-0.6-11.69-2.67-13.54 c-2.06-1.84-6.19-2.04-13.09-2.04H42.3c-6.42,0-10.64,0.07-12.89,1.77c-2.19,1.65-3.04,5.31-3.04,12.68V43.54L26.37,43.54z M30.16,66.91l0,7.21h62.37v-7.21H30.16L30.16,66.91z M23.06,46.31c-0.25-0.16-0.47-0.38-0.63-0.63c-1.66-1.5-3.73-2.28-5.86-2.45 c-1.79-0.14-3.62,0.13-5.31,0.76c-1.68,0.63-3.21,1.6-4.41,2.87c-2.5,2.64-3.53,6.64-1.32,11.51c0.55,1.2,1.49,2.19,2.78,3.01 c1.42,0.9,3.24,1.58,5.39,2.06l0,0c0.95,0.21,1.67,1.07,1.67,2.09l-0.01,32.86c0.04,1.57,0.38,2.53,0.98,3.04 c0.64,0.55,1.72,0.76,3.15,0.76v-0.01h4.98c0.08-0.01,0.16-0.01,0.24-0.01h1.17l0.01-45.32c0-0.08,0-0.15,0.01-0.23 c0.11-1.22,0.11-2.34,0.01-3.36c-0.09-1-0.27-1.91-0.53-2.74C24.85,48.78,24.05,47.39,23.06,46.31L23.06,46.31z M96.82,64.1 c0.07,0.21,0.11,0.43,0.11,0.67c0,0.23-0.04,0.46-0.11,0.67v10.35c0.04,0.15,0.05,0.32,0.05,0.48s-0.02,0.33-0.05,0.48v25.41h6.39 v0.01c1.42,0,2.5-0.21,3.15-0.76c0.59-0.5,0.93-1.44,0.98-2.99h-0.01V65.52c0-1.08,0.8-1.97,1.83-2.12 c2.09-0.48,3.83-1.17,5.2-2.06c1.27-0.83,2.23-1.85,2.85-3.06c2.23-4.37,1.5-8.02-0.68-10.5c-1.04-1.19-2.42-2.14-3.97-2.81 c-1.58-0.68-3.32-1.05-5.06-1.07c-4.14-0.03-8.31,1.99-10.24,6.77c-0.29,0.72-0.46,1.56-0.52,2.5c-0.08,1.06-0.04,2.2,0.07,3.43 c0.01,0.06,0.01,0.13,0.01,0.19h0.01V64.1L96.82,64.1z M30.15,102.16h62.38V78.41H30.15L30.15,102.16L30.15,102.16z" />
              </g>
            </svg>
            <span
              className={`number__chair ${numberChairVip} ${numberChairBooking} ${numberChairBooked}`}
            >
              {logicNumberChair(chair.stt)}
            </span>
          </span>
          {(index + 1) % 16 === 0 ? (
            <div className="ticket__diagram--line"></div>
          ) : (
            ""
          )}
        </Fragment>
      );
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="homePage">
          <LoadingPage></LoadingPage>
        </div>
      ) : (
        <div className="ticketRoom">
          <div className="row">
            <div className="col-12 col-lg-9">
              <NavLink to="/" className="ticketRoom__back"><i className="fa fa-angle-left"></i> Trở về trang chủ</NavLink>
              <div className="ticket__chooseChair">
                <div className="ticket__content">
                  <div className="ticket__cinema">
                    <h3>{detailTicketRoom.thongTinPhim?.tenCumRap}</h3>
                    <p>{detailTicketRoom.thongTinPhim?.diaChi}</p>
                  </div>
                  <div className="ticket__price">
                      <h3>
                          {listChairBooking
                        .reduce((tongTien, chair, index) => {
                          return tongTien + chair.giaVe;
                        }, 0)
                        .toLocaleString(2) + " đ"}
                      </h3>
                  </div>
                  <div className="ticket__timer">
                    <p>Thời gian giữ ghế</p>
                    <h3>{secondsToHms(timer)}</h3>
                  </div>
                </div>
                <div className="ticket__diagram">
                  <div className="ticket__diagram--screen">
                    <img src={screen} alt={screen}></img>
                  </div>
                  <div className="ticket__diagram--listChair">
                    {renderListChair()}
                  </div>
                  <div className="ticket__diagram--note">
                    <div className="note__chair--normal">
                      <div className="note__chair--small normal">
                        <svg
                          x="10px"
                          y="10px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 122.88 113.4"
                        >
                          <g>
                            <path d="M100.73,106.44v6.96h-4.29v-6.96h-0.7c-0.05,0-0.11,0.01-0.17,0.01H28.28c-0.08,0.01-0.16,0.01-0.24,0.01h-0.03h-1.77v6.94 h-4.29v-6.94h-2.47v-0.01c-2.42-0.01-4.41-0.49-5.91-1.77c-1.54-1.31-2.41-3.29-2.49-6.2c0-0.03,0-0.07,0-0.1l0.01-31.2 c-1.94-0.56-3.64-1.28-5.08-2.19c-1.98-1.25-3.46-2.85-4.37-4.85c-3.07-6.74-1.52-12.41,2.11-16.23c1.65-1.74,3.74-3.07,6.02-3.92 c2.27-0.85,4.73-1.22,7.12-1.03c1.8,0.14,3.57,0.58,5.2,1.35V18.73c0-8.88,1.33-13.51,4.75-16.1C30.18,0.1,35,0,42.3,0h38.22 c7.94,0,12.76,0.31,15.94,3.15c3.18,2.84,4.11,7.71,4.11,16.72v21.26c2.18-1.04,4.58-1.52,6.97-1.5c2.33,0.02,4.64,0.51,6.72,1.4 c2.11,0.91,4.01,2.24,5.5,3.93c3.26,3.73,4.44,9.06,1.28,15.26c-0.96,1.89-2.42,3.46-4.34,4.71c-1.44,0.93-3.13,1.68-5.07,2.25 v31.23h-0.01l0,0.05c-0.08,2.92-0.95,4.89-2.49,6.2c-1.5,1.27-3.49,1.76-5.91,1.77v0.01H100.73L100.73,106.44z M26.37,43.54 c1.32,1.5,2.39,3.4,3.1,5.71c0.34,1.1,0.58,2.3,0.7,3.6c0.12,1.25,0.12,2.59-0.01,4.04l0,5.73h62.37V56.8 c-0.12-1.41-0.16-2.72-0.07-3.92c0.1-1.37,0.36-2.64,0.83-3.79c0.77-1.9,1.79-3.49,2.99-4.79V19.87c0-7.7-0.6-11.69-2.67-13.54 c-2.06-1.84-6.19-2.04-13.09-2.04H42.3c-6.42,0-10.64,0.07-12.89,1.77c-2.19,1.65-3.04,5.31-3.04,12.68V43.54L26.37,43.54z M30.16,66.91l0,7.21h62.37v-7.21H30.16L30.16,66.91z M23.06,46.31c-0.25-0.16-0.47-0.38-0.63-0.63c-1.66-1.5-3.73-2.28-5.86-2.45 c-1.79-0.14-3.62,0.13-5.31,0.76c-1.68,0.63-3.21,1.6-4.41,2.87c-2.5,2.64-3.53,6.64-1.32,11.51c0.55,1.2,1.49,2.19,2.78,3.01 c1.42,0.9,3.24,1.58,5.39,2.06l0,0c0.95,0.21,1.67,1.07,1.67,2.09l-0.01,32.86c0.04,1.57,0.38,2.53,0.98,3.04 c0.64,0.55,1.72,0.76,3.15,0.76v-0.01h4.98c0.08-0.01,0.16-0.01,0.24-0.01h1.17l0.01-45.32c0-0.08,0-0.15,0.01-0.23 c0.11-1.22,0.11-2.34,0.01-3.36c-0.09-1-0.27-1.91-0.53-2.74C24.85,48.78,24.05,47.39,23.06,46.31L23.06,46.31z M96.82,64.1 c0.07,0.21,0.11,0.43,0.11,0.67c0,0.23-0.04,0.46-0.11,0.67v10.35c0.04,0.15,0.05,0.32,0.05,0.48s-0.02,0.33-0.05,0.48v25.41h6.39 v0.01c1.42,0,2.5-0.21,3.15-0.76c0.59-0.5,0.93-1.44,0.98-2.99h-0.01V65.52c0-1.08,0.8-1.97,1.83-2.12 c2.09-0.48,3.83-1.17,5.2-2.06c1.27-0.83,2.23-1.85,2.85-3.06c2.23-4.37,1.5-8.02-0.68-10.5c-1.04-1.19-2.42-2.14-3.97-2.81 c-1.58-0.68-3.32-1.05-5.06-1.07c-4.14-0.03-8.31,1.99-10.24,6.77c-0.29,0.72-0.46,1.56-0.52,2.5c-0.08,1.06-0.04,2.2,0.07,3.43 c0.01,0.06,0.01,0.13,0.01,0.19h0.01V64.1L96.82,64.1z M30.15,102.16h62.38V78.41H30.15L30.15,102.16L30.15,102.16z" />
                          </g>
                        </svg>
                      </div>
                      <p className="note__chair--title">Ghế thường</p>
                    </div>
                    <div className="note__chair--normal">
                      <div className="note__chair--small vip">
                        <svg
                          x="10px"
                          y="10px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 122.88 113.4"
                        >
                          <g>
                            <path d="M100.73,106.44v6.96h-4.29v-6.96h-0.7c-0.05,0-0.11,0.01-0.17,0.01H28.28c-0.08,0.01-0.16,0.01-0.24,0.01h-0.03h-1.77v6.94 h-4.29v-6.94h-2.47v-0.01c-2.42-0.01-4.41-0.49-5.91-1.77c-1.54-1.31-2.41-3.29-2.49-6.2c0-0.03,0-0.07,0-0.1l0.01-31.2 c-1.94-0.56-3.64-1.28-5.08-2.19c-1.98-1.25-3.46-2.85-4.37-4.85c-3.07-6.74-1.52-12.41,2.11-16.23c1.65-1.74,3.74-3.07,6.02-3.92 c2.27-0.85,4.73-1.22,7.12-1.03c1.8,0.14,3.57,0.58,5.2,1.35V18.73c0-8.88,1.33-13.51,4.75-16.1C30.18,0.1,35,0,42.3,0h38.22 c7.94,0,12.76,0.31,15.94,3.15c3.18,2.84,4.11,7.71,4.11,16.72v21.26c2.18-1.04,4.58-1.52,6.97-1.5c2.33,0.02,4.64,0.51,6.72,1.4 c2.11,0.91,4.01,2.24,5.5,3.93c3.26,3.73,4.44,9.06,1.28,15.26c-0.96,1.89-2.42,3.46-4.34,4.71c-1.44,0.93-3.13,1.68-5.07,2.25 v31.23h-0.01l0,0.05c-0.08,2.92-0.95,4.89-2.49,6.2c-1.5,1.27-3.49,1.76-5.91,1.77v0.01H100.73L100.73,106.44z M26.37,43.54 c1.32,1.5,2.39,3.4,3.1,5.71c0.34,1.1,0.58,2.3,0.7,3.6c0.12,1.25,0.12,2.59-0.01,4.04l0,5.73h62.37V56.8 c-0.12-1.41-0.16-2.72-0.07-3.92c0.1-1.37,0.36-2.64,0.83-3.79c0.77-1.9,1.79-3.49,2.99-4.79V19.87c0-7.7-0.6-11.69-2.67-13.54 c-2.06-1.84-6.19-2.04-13.09-2.04H42.3c-6.42,0-10.64,0.07-12.89,1.77c-2.19,1.65-3.04,5.31-3.04,12.68V43.54L26.37,43.54z M30.16,66.91l0,7.21h62.37v-7.21H30.16L30.16,66.91z M23.06,46.31c-0.25-0.16-0.47-0.38-0.63-0.63c-1.66-1.5-3.73-2.28-5.86-2.45 c-1.79-0.14-3.62,0.13-5.31,0.76c-1.68,0.63-3.21,1.6-4.41,2.87c-2.5,2.64-3.53,6.64-1.32,11.51c0.55,1.2,1.49,2.19,2.78,3.01 c1.42,0.9,3.24,1.58,5.39,2.06l0,0c0.95,0.21,1.67,1.07,1.67,2.09l-0.01,32.86c0.04,1.57,0.38,2.53,0.98,3.04 c0.64,0.55,1.72,0.76,3.15,0.76v-0.01h4.98c0.08-0.01,0.16-0.01,0.24-0.01h1.17l0.01-45.32c0-0.08,0-0.15,0.01-0.23 c0.11-1.22,0.11-2.34,0.01-3.36c-0.09-1-0.27-1.91-0.53-2.74C24.85,48.78,24.05,47.39,23.06,46.31L23.06,46.31z M96.82,64.1 c0.07,0.21,0.11,0.43,0.11,0.67c0,0.23-0.04,0.46-0.11,0.67v10.35c0.04,0.15,0.05,0.32,0.05,0.48s-0.02,0.33-0.05,0.48v25.41h6.39 v0.01c1.42,0,2.5-0.21,3.15-0.76c0.59-0.5,0.93-1.44,0.98-2.99h-0.01V65.52c0-1.08,0.8-1.97,1.83-2.12 c2.09-0.48,3.83-1.17,5.2-2.06c1.27-0.83,2.23-1.85,2.85-3.06c2.23-4.37,1.5-8.02-0.68-10.5c-1.04-1.19-2.42-2.14-3.97-2.81 c-1.58-0.68-3.32-1.05-5.06-1.07c-4.14-0.03-8.31,1.99-10.24,6.77c-0.29,0.72-0.46,1.56-0.52,2.5c-0.08,1.06-0.04,2.2,0.07,3.43 c0.01,0.06,0.01,0.13,0.01,0.19h0.01V64.1L96.82,64.1z M30.15,102.16h62.38V78.41H30.15L30.15,102.16L30.15,102.16z" />
                          </g>
                        </svg>
                      </div>
                      <p className="note__chair--title">Ghế VIP</p>
                    </div>
                    <div className="note__chair--normal">
                      <div className="note__chair--small booking">
                        <svg
                          x="10px"
                          y="10px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 122.88 113.4"
                        >
                          <g>
                            <path d="M100.73,106.44v6.96h-4.29v-6.96h-0.7c-0.05,0-0.11,0.01-0.17,0.01H28.28c-0.08,0.01-0.16,0.01-0.24,0.01h-0.03h-1.77v6.94 h-4.29v-6.94h-2.47v-0.01c-2.42-0.01-4.41-0.49-5.91-1.77c-1.54-1.31-2.41-3.29-2.49-6.2c0-0.03,0-0.07,0-0.1l0.01-31.2 c-1.94-0.56-3.64-1.28-5.08-2.19c-1.98-1.25-3.46-2.85-4.37-4.85c-3.07-6.74-1.52-12.41,2.11-16.23c1.65-1.74,3.74-3.07,6.02-3.92 c2.27-0.85,4.73-1.22,7.12-1.03c1.8,0.14,3.57,0.58,5.2,1.35V18.73c0-8.88,1.33-13.51,4.75-16.1C30.18,0.1,35,0,42.3,0h38.22 c7.94,0,12.76,0.31,15.94,3.15c3.18,2.84,4.11,7.71,4.11,16.72v21.26c2.18-1.04,4.58-1.52,6.97-1.5c2.33,0.02,4.64,0.51,6.72,1.4 c2.11,0.91,4.01,2.24,5.5,3.93c3.26,3.73,4.44,9.06,1.28,15.26c-0.96,1.89-2.42,3.46-4.34,4.71c-1.44,0.93-3.13,1.68-5.07,2.25 v31.23h-0.01l0,0.05c-0.08,2.92-0.95,4.89-2.49,6.2c-1.5,1.27-3.49,1.76-5.91,1.77v0.01H100.73L100.73,106.44z M26.37,43.54 c1.32,1.5,2.39,3.4,3.1,5.71c0.34,1.1,0.58,2.3,0.7,3.6c0.12,1.25,0.12,2.59-0.01,4.04l0,5.73h62.37V56.8 c-0.12-1.41-0.16-2.72-0.07-3.92c0.1-1.37,0.36-2.64,0.83-3.79c0.77-1.9,1.79-3.49,2.99-4.79V19.87c0-7.7-0.6-11.69-2.67-13.54 c-2.06-1.84-6.19-2.04-13.09-2.04H42.3c-6.42,0-10.64,0.07-12.89,1.77c-2.19,1.65-3.04,5.31-3.04,12.68V43.54L26.37,43.54z M30.16,66.91l0,7.21h62.37v-7.21H30.16L30.16,66.91z M23.06,46.31c-0.25-0.16-0.47-0.38-0.63-0.63c-1.66-1.5-3.73-2.28-5.86-2.45 c-1.79-0.14-3.62,0.13-5.31,0.76c-1.68,0.63-3.21,1.6-4.41,2.87c-2.5,2.64-3.53,6.64-1.32,11.51c0.55,1.2,1.49,2.19,2.78,3.01 c1.42,0.9,3.24,1.58,5.39,2.06l0,0c0.95,0.21,1.67,1.07,1.67,2.09l-0.01,32.86c0.04,1.57,0.38,2.53,0.98,3.04 c0.64,0.55,1.72,0.76,3.15,0.76v-0.01h4.98c0.08-0.01,0.16-0.01,0.24-0.01h1.17l0.01-45.32c0-0.08,0-0.15,0.01-0.23 c0.11-1.22,0.11-2.34,0.01-3.36c-0.09-1-0.27-1.91-0.53-2.74C24.85,48.78,24.05,47.39,23.06,46.31L23.06,46.31z M96.82,64.1 c0.07,0.21,0.11,0.43,0.11,0.67c0,0.23-0.04,0.46-0.11,0.67v10.35c0.04,0.15,0.05,0.32,0.05,0.48s-0.02,0.33-0.05,0.48v25.41h6.39 v0.01c1.42,0,2.5-0.21,3.15-0.76c0.59-0.5,0.93-1.44,0.98-2.99h-0.01V65.52c0-1.08,0.8-1.97,1.83-2.12 c2.09-0.48,3.83-1.17,5.2-2.06c1.27-0.83,2.23-1.85,2.85-3.06c2.23-4.37,1.5-8.02-0.68-10.5c-1.04-1.19-2.42-2.14-3.97-2.81 c-1.58-0.68-3.32-1.05-5.06-1.07c-4.14-0.03-8.31,1.99-10.24,6.77c-0.29,0.72-0.46,1.56-0.52,2.5c-0.08,1.06-0.04,2.2,0.07,3.43 c0.01,0.06,0.01,0.13,0.01,0.19h0.01V64.1L96.82,64.1z M30.15,102.16h62.38V78.41H30.15L30.15,102.16L30.15,102.16z" />
                          </g>
                        </svg>
                      </div>
                      <p className="note__chair--title">Ghế đang chọn</p>
                    </div>
                    <div className="note__chair--normal">
                      <div className="note__chair--small booked">
                        <svg
                          x="10px"
                          y="10px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 122.88 113.4"
                        >
                          <g>
                            <path d="M100.73,106.44v6.96h-4.29v-6.96h-0.7c-0.05,0-0.11,0.01-0.17,0.01H28.28c-0.08,0.01-0.16,0.01-0.24,0.01h-0.03h-1.77v6.94 h-4.29v-6.94h-2.47v-0.01c-2.42-0.01-4.41-0.49-5.91-1.77c-1.54-1.31-2.41-3.29-2.49-6.2c0-0.03,0-0.07,0-0.1l0.01-31.2 c-1.94-0.56-3.64-1.28-5.08-2.19c-1.98-1.25-3.46-2.85-4.37-4.85c-3.07-6.74-1.52-12.41,2.11-16.23c1.65-1.74,3.74-3.07,6.02-3.92 c2.27-0.85,4.73-1.22,7.12-1.03c1.8,0.14,3.57,0.58,5.2,1.35V18.73c0-8.88,1.33-13.51,4.75-16.1C30.18,0.1,35,0,42.3,0h38.22 c7.94,0,12.76,0.31,15.94,3.15c3.18,2.84,4.11,7.71,4.11,16.72v21.26c2.18-1.04,4.58-1.52,6.97-1.5c2.33,0.02,4.64,0.51,6.72,1.4 c2.11,0.91,4.01,2.24,5.5,3.93c3.26,3.73,4.44,9.06,1.28,15.26c-0.96,1.89-2.42,3.46-4.34,4.71c-1.44,0.93-3.13,1.68-5.07,2.25 v31.23h-0.01l0,0.05c-0.08,2.92-0.95,4.89-2.49,6.2c-1.5,1.27-3.49,1.76-5.91,1.77v0.01H100.73L100.73,106.44z M26.37,43.54 c1.32,1.5,2.39,3.4,3.1,5.71c0.34,1.1,0.58,2.3,0.7,3.6c0.12,1.25,0.12,2.59-0.01,4.04l0,5.73h62.37V56.8 c-0.12-1.41-0.16-2.72-0.07-3.92c0.1-1.37,0.36-2.64,0.83-3.79c0.77-1.9,1.79-3.49,2.99-4.79V19.87c0-7.7-0.6-11.69-2.67-13.54 c-2.06-1.84-6.19-2.04-13.09-2.04H42.3c-6.42,0-10.64,0.07-12.89,1.77c-2.19,1.65-3.04,5.31-3.04,12.68V43.54L26.37,43.54z M30.16,66.91l0,7.21h62.37v-7.21H30.16L30.16,66.91z M23.06,46.31c-0.25-0.16-0.47-0.38-0.63-0.63c-1.66-1.5-3.73-2.28-5.86-2.45 c-1.79-0.14-3.62,0.13-5.31,0.76c-1.68,0.63-3.21,1.6-4.41,2.87c-2.5,2.64-3.53,6.64-1.32,11.51c0.55,1.2,1.49,2.19,2.78,3.01 c1.42,0.9,3.24,1.58,5.39,2.06l0,0c0.95,0.21,1.67,1.07,1.67,2.09l-0.01,32.86c0.04,1.57,0.38,2.53,0.98,3.04 c0.64,0.55,1.72,0.76,3.15,0.76v-0.01h4.98c0.08-0.01,0.16-0.01,0.24-0.01h1.17l0.01-45.32c0-0.08,0-0.15,0.01-0.23 c0.11-1.22,0.11-2.34,0.01-3.36c-0.09-1-0.27-1.91-0.53-2.74C24.85,48.78,24.05,47.39,23.06,46.31L23.06,46.31z M96.82,64.1 c0.07,0.21,0.11,0.43,0.11,0.67c0,0.23-0.04,0.46-0.11,0.67v10.35c0.04,0.15,0.05,0.32,0.05,0.48s-0.02,0.33-0.05,0.48v25.41h6.39 v0.01c1.42,0,2.5-0.21,3.15-0.76c0.59-0.5,0.93-1.44,0.98-2.99h-0.01V65.52c0-1.08,0.8-1.97,1.83-2.12 c2.09-0.48,3.83-1.17,5.2-2.06c1.27-0.83,2.23-1.85,2.85-3.06c2.23-4.37,1.5-8.02-0.68-10.5c-1.04-1.19-2.42-2.14-3.97-2.81 c-1.58-0.68-3.32-1.05-5.06-1.07c-4.14-0.03-8.31,1.99-10.24,6.77c-0.29,0.72-0.46,1.56-0.52,2.5c-0.08,1.06-0.04,2.2,0.07,3.43 c0.01,0.06,0.01,0.13,0.01,0.19h0.01V64.1L96.82,64.1z M30.15,102.16h62.38V78.41H30.15L30.15,102.16L30.15,102.16z" />
                          </g>
                        </svg>
                      </div>
                      <p className="note__chair--title">Ghế đã được đặt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="ticket__checkout">
                <p className="ticket__totalPrice">
                  {/* {formatVND(listChairBooking.reduce((tongTien, chair, index) => {
                        return tongTien + chair.giaVe;
                    }, 0), ' đ')} */}

                  {listChairBooking
                    .reduce((tongTien, chair, index) => {
                      return tongTien + chair.giaVe;
                    }, 0)
                    .toLocaleString(2) + " đ"}
                </p>
                <div className="ticket__information">
                  <div className="ticket__information--image">
                    <img
                      src={detailTicketRoom.thongTinPhim?.hinhAnh}
                      alt={detailTicketRoom.thongTinPhim?.hinhAnh}
                    ></img>
                  </div>
                  <div className="ticket__information--detail">
                    <h3 className="information__nameFilm">
                      {detailTicketRoom.thongTinPhim?.tenPhim}
                    </h3>
                    <p className="information__nameSystemCinema">
                      {detailTicketRoom.thongTinPhim?.tenCumRap}
                    </p>
                    <p className="information__daytime">
                      {detailTicketRoom.thongTinPhim?.ngayChieu} -{" "}
                      {detailTicketRoom.thongTinPhim?.gioChieu} -{" "}
                      {detailTicketRoom.thongTinPhim?.tenRap}
                    </p>
                  </div>
                </div>
                <div className="ticket__listChair">
                  Ghế :{" "}
                  {listChairBooking.map((chair, index) => {
                    return (
                      <Fragment key={index}>
                        <span className="ticket__chair">
                          {logicNumberChairTicket(chair.stt)},{" "}
                        </span>
                      </Fragment>
                    );
                  })}
                </div>
                <div className="ticket__notify">
                  <img src={notify} alt={notify}></img>
                  <span>
                    Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua
                    tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.
                  </span>
                </div>
                <div className="ticket__confirm">
                  <button
                    className="button__confirm"
                    onClick={async () => {
                      if (
                        typeof listChairBooking !== "undefined" &&
                        listChairBooking.length > 0
                      ) {
                        let objectBooking = {
                          maLichChieu: props.match.params.maLichChieu,
                          danhSachVe: listChairBooking,
                          taiKhoanNguoiDung: informationUserSignIn.taiKhoan,
                        };

                        dispatch(
                          await postManageBookingApiAction(objectBooking)
                        );
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "Bạn Chưa Chọn Ghế!",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                      }
                    }}
                  >
                    Đặt Vé
                  </button>
                </div>
              </div>
            </div>
          </div>

          {timer <= 0 ? (
            <div className="ticket__timeout">
              <div className="timeout__content">
                <p className="timeout__title">
                  Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong
                  thời hạn 5 phút.
                  <NavLink
                    to="/"
                    className="timeout__rebook"
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    Đặt vé lại
                  </NavLink>
                </p>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="ticket__checkOutSmall">
              <div className="ticket__checkOutSmall--listChair">
                {listChairBooking.map((chair, index) => {
                      return (
                        <Fragment key={index}>
                          <span className="ticket__checkOutSmall--chair">
                            {logicNumberChairTicket(chair.stt)},{" "}
                          </span>
                        </Fragment>
                      );
                    })}
              </div>
              <div className="ticket__checkOutSmall--confirm"
                onClick={async () => {
                  if (
                    typeof listChairBooking !== "undefined" &&
                    listChairBooking.length > 0
                  ) {
                    let objectBooking = {
                      maLichChieu: props.match.params.maLichChieu,
                      danhSachVe: listChairBooking,
                      taiKhoanNguoiDung: informationUserSignIn.taiKhoan,
                    };

                    dispatch(
                      await postManageBookingApiAction(objectBooking)
                    );
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: "Bạn Chưa Chọn Ghế!",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                }}
              >
                Đặt Vé
              </div>
          </div>
        </div>
      )}
    </>
  );
}
