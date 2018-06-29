import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses"
import { setTextFilter } from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

// add expense 'water'
// add expense 'gas'
// set text filter 'bill'
store.dispatch(addExpense({ description: 'Water bill', amount: 10900 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 6787 }));
store.dispatch(setTextFilter('water'));
const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
