import { ADD_NEW_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../constant";

export const addNewItem = (product) => (dispatch) => {
  if (product) {
    dispatch({
      type: ADD_NEW_ITEM,
      payload: product,
    });
  }
};

export const deleteItem = (product) => (dispatch) => {
  if (product) {
    dispatch({
      type: REMOVE_ITEM,
      payload: product,
    });
  }
};

export const updateItem = (product) => (dispatch) => {
  if (product) {
    dispatch({
      type: UPDATE_ITEM,
      payload: product,
    });
  }
};
