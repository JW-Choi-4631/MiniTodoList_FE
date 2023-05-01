const initialState = [];

const Card = (state = initialState, action) => {

    const createDate = new Date();
    const random = Math.random();

    switch (action.type) {
        case 'save':
            console.log('createdcard.id=>',createDate + random);
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
            console.log('deletepayLoad.id=>',action.payLoad);
            const newCardList = state.filter(card => {
                console.log('card.id=>',card.id);
                return card.id !== action.payLoad});
                console.log('newCard=>',newCardList);
            return newCardList;
        default:
            return state;
    }
}

export default Card;