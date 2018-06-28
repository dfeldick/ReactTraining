import {createStore} from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  }
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  }
};

const setCount = ({ count }) => {
  return {
    type: 'SET',
    count
  }
};

// Reducer
// 1 - pure function
// 2 - never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'RESET': {
      return {
        count: 0
      }
    }
    case 'INCREMENT': {
      return {
        count: state.count + action.incrementBy
      }
    }
    case 'DECREMENT': {
      return {
        count: state.count - action.decrementBy
      }
    }
    case 'SET': {
      return {
        count: action.count
      }
    }
    default: {
      return state;
    }
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(
// {
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

//unsubscribe();

// store.dispatch(
//   {
//     type: 'INCREMENT'
//   });

store.dispatch(incrementCount());

store.dispatch(
  {
    type: 'RESET'
  });

// store.dispatch(
//   {
//     type: 'DECREMENT'
//   });
store.dispatch(decrementCount());
// store.dispatch(
//   {
//     type: 'DECREMENT',
//     decrementBy: 10
//   });
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));
  // {
  //   type: 'SET',
  //   count: 101
  // });
