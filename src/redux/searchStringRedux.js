// selectors
export const getSearchString = ({searchString}) => searchString;

export const countVisibleCards = ({cards, searchString}) => 
  cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const ADD_SEARCH = createActionName('ADD_SEARCH');

// action creators
export const createActionChangeSearchString = payload => ({ payload, type: ADD_SEARCH });

// reducer
export default function reducer(state = '', action = {}) {
  
  console.log('searchString', state);

  switch (action.type) {
    case ADD_SEARCH:
      return action.payload;
    default:
      return state;
  }
}