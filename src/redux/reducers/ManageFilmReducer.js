import {
  ACTIVE_CINEMA_ACTION,
  CLOSE_ACTIVE_CINEMA_ACTION,
  GET_DETAIL_MOVIE_BY_ID_FILM,
  GET_ALL_FILM_ACTION,
  GET_ALL_SYSTEM_CINEMA_ACTION,
  GET_SHOW_TIMES_BY_ID_CINEMA_ACTION,
  GET_SHOW_TIMES_BY_ID_SYSTEM_CINEMA_ACTION,
  GET_DETAIL_TICKET_ROOM_BY_ID_SHOW_TIMES,
  HANDLE_CHAIR_BOOKING,
  HANDLE_CHAIR_BOOKED_SUCCESS,
  GET_SEARCH_FILM_BY_NAME_FILM,
} from "../constants/ManageFilmConst";

const stateInit = {
  listFilm: [],
  listSystemCinema: [],
  showTimesByIdSystemCinema: [],
  showTimesByIdCinema: [],
  activeAction: "",

  detailMovie: [],
  detailTicketRoom: {},

  listChairBooking: [],

  listSearchFilm: [],
};

const ManageFilmReducer = (state = stateInit, action) => {
  switch (action.type) {
    case GET_ALL_FILM_ACTION: {
      state.listFilm = action.payload;

      return { ...state };
    }

    case GET_ALL_SYSTEM_CINEMA_ACTION: {
      state.listSystemCinema = action.payload;

      return { ...state };
    }

    case GET_SHOW_TIMES_BY_ID_SYSTEM_CINEMA_ACTION: {
      state.showTimesByIdSystemCinema = action.payload;

      return { ...state };
    }

    case GET_SHOW_TIMES_BY_ID_CINEMA_ACTION: {
      let cinema = state.showTimesByIdSystemCinema[0].lstCumRap.find(
        (cumRap) => {
          return cumRap.maCumRap === action.payload;
        }
      );

      state.showTimesByIdCinema = cinema.danhSachPhim;

      return { ...state };
    }

    case ACTIVE_CINEMA_ACTION: {
      let cinema = state.showTimesByIdSystemCinema[0].lstCumRap.find(
        (cumRap) => {
          return cumRap.maCumRap === action.payload;
        }
      );

      state.activeAction = cinema.maCumRap;

      return { ...state };
    }

    case CLOSE_ACTIVE_CINEMA_ACTION: {
      state.activeAction = "";

      return { ...state };
    }

    case GET_DETAIL_MOVIE_BY_ID_FILM: {
      state.detailMovie = action.payload;

      return { ...state };
    }

    case GET_DETAIL_TICKET_ROOM_BY_ID_SHOW_TIMES: {
      state.detailTicketRoom = action.payload;

      return { ...state };
    }

    case HANDLE_CHAIR_BOOKING: {
      const arrayChairBooking = [...state.listChairBooking];

      let index = arrayChairBooking.findIndex((arrayChair, index) => {
        return arrayChair.maGhe === action.payload.maGhe;
      });

      index !== -1
        ? arrayChairBooking.splice(index, 1)
        : arrayChairBooking.push(action.payload);

      state.listChairBooking = arrayChairBooking;

      return { ...state };
    }

    case HANDLE_CHAIR_BOOKED_SUCCESS: {
      return { ...state, listChairBooking: [] };
    }

    case GET_SEARCH_FILM_BY_NAME_FILM: {
      state.listSearchFilm = action.payload;

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default ManageFilmReducer;
