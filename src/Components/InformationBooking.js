import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

export default function InformationBooking(props) {

    const { informationAccount } = useSelector(
        (state) => state.StateManageUser
      );

      console.log(informationAccount);

    const randomNumber = () => {
        return Math.floor(Math.random() * 5000) + 1000;
    }

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

    const renderInformationBooking = () => {
        return informationAccount?.thongTinDatVe?.map((deal, index) => {
            return <tr key={index}>
                <td>{randomNumber()}</td>
                <td>{deal.maVe}</td>
                <td>{deal.tenPhim}</td>
                <td>{deal.danhSachGhe[0].maHeThongRap}</td>
                <td>{moment(deal.ngayDat).format("DD/MM/YYYY")}</td>
                <td>{deal?.danhSachGhe.map((chair, index) => {
                    return <span key={index}>{logicNumberChairTicket(chair.tenGhe)}, </span>
                })}</td>
            </tr>
        })
    }
  return (
    <>
      <div className="information__booking">
        <table className="table table-warning table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Số giao dịch</th>
              <th scope="col">Mã vé</th>
              <th scope="col">Tên phim</th>
              <th scope="col">Tên rạp</th>
              <th scope="col">Ngày đặt</th>
              <th scope="col">Danh sách ghế</th>
            </tr>
          </thead>
          <tbody>
           {renderInformationBooking()}
          </tbody>
        </table>
      </div>
    </>
  );
}
