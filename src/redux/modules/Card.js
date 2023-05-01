const initialState = [];

const Card = (state = initialState, action) => {

    const createDate = new Date();
    const random = Math.random();

    switch (action.type) {
        case 'save':
            const diff = new Date(action.payLoad.date) - createDate;
            const diffDay = Math.floor(diff / (1000*60*60*24));
            const diffHour = Math.floor((diff / (1000*60*60)) % 24);
            const diffMin = Math.floor((diff / (1000*60)) % 60);
            const diffSec = Math.floor(diff / 1000 % 60);
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
            const ChangeCardList = state.map((card)=>{
                if(card.id === action.payLoad){
                    return {...card, isDone: card.isDone? false:true}
                } else {
                    return card;
                }
            })
            return ChangeCardList;
        default:
            return state;
    }
}

export default Card;