const SAVE = "card/SAVE";
const ERASE = "card/ERASE";
const CHANGE = "card/CHANGE";
const COMPLETE = "card/COMPLETE";

export const save = (payLoad) => {
  return {
    type: SAVE,
    payLoad,
  };
};

export const change = (payLoad) => {
  return {
    type: CHANGE,
    payLoad,
  };
};

export const erase = (payLoad) => {
  return {
    type: ERASE,
    payLoad,
  };
};

export const complete = (payLoad) => {
  return {
    type: COMPLETE,
    payLoad,
  };
};

const initialState = [];

const Card = (state = initialState, action) => {
  const createDate = Date.now();
  const random = Math.random();

  switch (action.type) {
    case SAVE:
      // //향후 실시간 남은 시간 계산 시 사용
      // let diff = new Date(action.payLoad.date) - createDate;
      // let diffDay = Math.floor(diff / (1000*60*60*24));
      // let diffHour = Math.floor((diff / (1000*60*60)) % 24);
      // let diffMin = Math.floor((diff / (1000*60)) % 60);
      // let diffSec = Math.floor(diff / 1000 % 60);
      return [
        ...state,
        {
          id: (createDate + random).toString(),
          title: action.payLoad.title,
          context: action.payLoad.context,
          date: action.payLoad.date, //`${diffDay}일 ${diffHour}시 ${diffMin}분 ${diffSec}초`
          isDone: false,
        },
      ];
    case ERASE:
      const newCardList = state.filter((card) => card.id !== action.payLoad);
      return newCardList;
    case COMPLETE:
      const completeCardList = state.map((card) =>
        card.id === action.payLoad ? { ...card, isDone: !card.isDone } : card
      );
      return completeCardList;
    case CHANGE:
      const changeCardList = state.map((card) =>
        card.id === action.payLoad.id ? action.payLoad : card
      );
      return changeCardList;
    default:
      return state;
  }
};

export default Card;
