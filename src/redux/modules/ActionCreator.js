//Card 
export const SAVE = 'card/SAVE';
export const ERASE = 'card/ERASE';
export const CHANGE = 'card/CHANGE';
export const COMPLETE = 'card/COMPLETE';

export const save = (payLoad) => {
    return {
    type: SAVE,
    payLoad
    };
}

export const change = (payLoad) => {
    return {
    type: CHANGE,
    payLoad
    };
}

export const erase = (payLoad) => {
    return {
    type: ERASE,
    payLoad
    };
}

export const complete = (payLoad) => {
    return {
    type: COMPLETE,
    payLoad
    };
}

//SaveContent
export const TITLE = 'content/TITLE';
export const CONTEXT = 'content/CONTEXT';
export const DATE = 'content/DATE';
export const CLEAR = 'content/CLEAR'

export const title = (payLoad) => {
    return {
    type: TITLE,
    payLoad
    };
}

export const context = (payLoad) => {
    return {
    type: CONTEXT,
    payLoad
    };
}

export const date = (payLoad) => {
    return {
    type: DATE,
    payLoad
    };
}

export const clear = () => {
    return {
    type: CLEAR,
    };
}


