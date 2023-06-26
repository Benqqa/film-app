import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCartItem = {
  id: string;
  image: string;
  description: string;
  count: number;
  title: string;
  genre: string;
};

type TCartState = {
  list: TCartItem[];
};

function getInitialState(): TCartState {
  return {
    list: [],
  };
}

type TCartAddAction = PayloadAction<Omit<TCartItem, "count">>;
type TCartRemoveAction = PayloadAction<{ id: string }>;

const CartSlice = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    AddItemAction: (state, action: TCartAddAction) => {
      const item = state.list.find((_item) => _item.id === action.payload.id);
      if (item) {
        item.count += 1;
      } else {
        state.list.push({ ...action.payload, count: 1 });
      }
    },
    RemoveItemAction: (state, action: TCartRemoveAction) => {
      const item = state.list.find((_item) => _item.id === action.payload.id);
      if (item && item.count > 1) {
        item.count -= 1;
      } else {
        state.list = state.list.filter((_item) => _item.id !== action.payload.id);
      }
    },
    ClearCartAction: (state) => {
      state.list = [];
    },
  },
});

export const { AddItemAction, RemoveItemAction, ClearCartAction } = CartSlice.actions;

export default CartSlice.reducer;

export function selectDeliveryCartList(state: { cart: TCartState }) {
  return state.cart.list;
}

export function selectCartCount(state: { cart: TCartState }) {
  return state.cart.list.reduce((acc, item) => {
    acc += item.count;
    return acc;
  }, 0);
}

export const selectCartItemCountById = (itemId: string) => (state: { cart: TCartState }) => {
  const item = state.cart.list.find((_item) => _item.id === itemId);
  return item ? item.count : 0;
};

export const selectCartItemById = (itemId: string) => (state: { cart: TCartState }) => {
  const item = state.cart.list.find((_item) => _item.id === itemId);
  return item;
};
