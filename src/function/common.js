const hiddenStyle = (card)=> card.isDone === true? {display:'none',}:{visibility:'visible',};

export {hiddenStyle};   // 여러개 export하려면 객체 형태로 묶어야 함