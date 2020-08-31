import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewItem, deleteItem, updateItem } from "../action/Itemaction";

const Todolist = (props) => {
  const listItem = useSelector((state) => state.itemList);
  const dispatch = useDispatch();

  //
  const [description, setDescription] = useState("");
  const [value, setValue] = useState({ id: "", description: "" });

  const [openModal, setOpenModal] = useState(false);

  const id = Math.floor(Math.random() * 1000);
  /// Add new Item
  const handleOnClick = async (e) => {
    e.preventDefault();
    const newTodo = { id, description };
    if (description === "") {
      alert("vui long nhap todo");
    } else {
      await dispatch(addNewItem(newTodo));
    }
    setDescription("");
  };
  //// Delete Item
  const handleOnDelete = (item) => {
    dispatch(deleteItem(item));
  };
  //// Update item
  const handleEdit = async (item) => {
    await setOpenModal(!openModal);
    await setValue(item);
  };
  // xu ly du lieu nhap vao input
  const handleOnChange = (e) => {
    setValue({ ...value, description: e.target.value });
  };
  //// update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const itemUpdated = value;
    await dispatch(updateItem(itemUpdated));
    await setOpenModal(!openModal);
  };
  //

  return (
    <>
      <div>
        <div className="form">
          <form>
            <h3>Add new todo here</h3>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                className="form-group__input"
                type="text"
                name="description"
                value={description}
                placeholder="Type your todo at here..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit" className="btn" onClick={handleOnClick}>
              Add todo
            </button>
          </form>
        </div>
        <table className="table-content">
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!listItem
              ? "Loading"
              : listItem.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>
                      <p>{item.description}</p>
                    </td>
                    <td>
                      <button onClick={() => handleEdit(item)} className="btn">
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleOnDelete(item)}
                        className="btn primary"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      {/******************* Modal*********************/}
      {!openModal ? (
        ""
      ) : (
        <div className="modalsection">
          <div className="modal">
            <form>
              <h3>Update todo</h3>
              <div className="form-group plus">
                <label htmlFor="description">Description</label>
                <input
                  className="form-group__input"
                  type="text"
                  name="description"
                  value={value.description}
                  onChange={handleOnChange}
                />
              </div>

              <button
                type="button"
                onClick={() => setOpenModal(!openModal)}
                className="btn-close"
              >
                X
              </button>
              <button onClick={(e) => handleUpdate(e)} className="btn">
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Todolist;
