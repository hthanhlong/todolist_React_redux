import { ADD_NEW_ITEM, UPDATE_ITEM, REMOVE_ITEM } from "../constant";

const toDoList = JSON.parse(localStorage.getItem("todo")) || [];
export const itemReducer = (state = toDoList, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM:
      const newList = [...state];
      newList.push(action.payload);
      localStorage.setItem("todo", JSON.stringify(newList));
      return newList;
    case UPDATE_ITEM:
      const itemNeedUpdate = action.payload.id;
      const newUpdate = [...state].map((item) => {
        if (item.id === itemNeedUpdate) {
          return {
            ...item,
            description: action.payload.description,
          };
        } else {
          return item;
        }
      });
      localStorage.setItem("todo", JSON.stringify(newUpdate));
      return newUpdate;
    case REMOVE_ITEM:
      const deleteItem = action.payload.id;
      const newListItem = [...state].filter((x) => x.id !== deleteItem);
      localStorage.setItem("todo", JSON.stringify(newListItem));
      return newListItem;
    default:
      return state;
  }
};
