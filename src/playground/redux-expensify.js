import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// EDIT_EXPENSE
// REMOVE_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

const demoState = {
  expenses: [{
    id: 'dldld',
    description: 'Jan rent',
    note: 'final pmt',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',    // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// ExpenseReducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// FiltersReducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// create store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
  );

console.log(store.getState());

