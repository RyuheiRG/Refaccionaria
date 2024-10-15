export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CHANGE_QUANTITY: 'CHANGE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload, // product
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)

    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.CHANGE_QUANTITY]: (state, action) => {
    const { id, quantity, stock } = action.payload;
    const productInCartIndex = state.findIndex(item => item.id === id);

    let limitStock = false
  
    if (productInCartIndex >= 0) {
      if (quantity > 0 && quantity <= stock && !limitStock) {
        limitStock = false

        const newState = [
          ...state.slice(0, productInCartIndex),
          { ...state[productInCartIndex], quantity},
          ...state.slice(productInCartIndex + 1)
        ];
  
        updateLocalStorage(newState);
        return newState;
      } else if(quantity >= stock) {
        limitStock = true

      } else {
        const newState = state.filter(item => item.id !== id);
  
        updateLocalStorage(newState);
        return newState;
      }
    }
  
    return state;
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}

export const cartReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
