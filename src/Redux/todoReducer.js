const initialState = {
  tasks: [
    { id: 1, description: "Task 1", isDone: false },
    { id: 2, description: "Task 2", isDone: true },
    { id: 3, description: "Task 3", isDone: false },
  ],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length + 1,
            description: action.payload,
            isDone: false,
          },
        ],
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, isDone: !task.isDone };
          } else {
            return task;
          }
        }),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, description: action.payload.description };
          } else {
            return task;
          }
        }),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
}

export default todoReducer;
