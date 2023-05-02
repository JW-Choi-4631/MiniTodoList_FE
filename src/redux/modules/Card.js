import { useDispatch } from "react-redux";

const initialState = [];

const Card = (state = initialState, action) => {

    const createDate = new Date();
    const random = Math.random();

    switch (action.type) {
        case 'save':
            let diff = new Date(action.payLoad.date) - createDate;
            let diffDay = Math.floor(diff / (1000*60*60*24));
            let diffHour = Math.floor((diff / (1000*60*60)) % 24);
            let diffMin = Math.floor((diff / (1000*60)) % 60);
            let diffSec = Math.floor(diff / 1000 % 60);
            return [...state, {
                id : createDate + random,
                title : action.payLoad.title,
                context : action.payLoad.context,
                date : `${diffDay}일 ${diffHour}시 ${diffMin}분 ${diffSec}초`,
                isDone : false,
            }];
        case 'delete':
            const newCardList = state.filter(card => card.id !== action.payLoad);
            return newCardList;
        case 'complete':
            const completeCardList = state.map((card)=>{
                if(card.id === action.payLoad){
                    return {...card, isDone: card.isDone? false:true}
                } else {
                    return card;
                }
            })
            return completeCardList;
        case 'change':
            const changeCardList = state.filter(card => card.id !== action.payLoad.id);
            const testArr = [...changeCardList, action.payLoad]
            return testArr;
        default:
            return state;
    }
}

export default Card;