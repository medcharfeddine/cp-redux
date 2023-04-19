import { ADD } from "./ActionType";

export const handleAdd = (newTask) => {
  return {
    type: ADD,
    payload: newTask,
  };
};

// const handleEdit = () => {
//   return {
//     type: EDIT,
//   };
// };

// const handleComplete = () => {
//   return {
//     type: COMPLETE,
//   };
// };

// const handleDelete = () => {
//   return {
//     type: DELETE,
//   };
// };
