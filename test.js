const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { id: action.id, text: action.text, completed: false };
      break;
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return { ...state, completed: !state.completed };
    default:
      return state;
  }
};
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
      break;
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
      break;
    default:
      return state;
  }
};
const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
      break;
    default:
      return state;
  }
};
const getVisibleTodos = (filter, todos) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
      break;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
      break;
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
      break;
    default:
      return todos;
  }
};
const { combineReducers, createStore } = Redux;
const { Component } = React;

const todoApp = combineReducers({
  todos,
  visibilityFilter
});
const store = createStore(todoApp);

const FilterLink = ({ filter, currentFilter, onClick, children }) => {
  if (filter == currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
};

const Footer = ({ visibilityFilter, onFilterClick }) => {
  return (
    <p>
      show:{" "}
      <FilterLink
        filter="SHOW_ALL"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        Show All
      </FilterLink>{" "}
      <FilterLink
        filter="SHOW_ACTIVE"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        Show Active
      </FilterLink>{" "}
      <FilterLink
        filter="SHOW_COMPLETED"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        Show Completed
      </FilterLink>
    </p>
  );
};
const AddTodo = ({ addTodoClick }) => {
  let input;
  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          addTodoClick(input.value);
          input.value = "";
        }}
      >
        ADD TODO
      </button>
    </div>
  );
};
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {" "}
    {text}
  </li>
);
const TodoList = ({ onTodoClick, todos }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);
let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    const { visibilityFilter, todos } = this.props;
    const visibleTodos = getVisibleTodos(visibilityFilter, todos);
    return (
      <div>
        <AddTodo
          addTodoClick={text => {
            store.dispatch({
              type: "ADD_TODO",
              text: text,
              id: nextTodoId++
            });
          }}
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={id => {
            store.dispatch({ type: "TOGGLE_TODO", id: id });
          }}
        />
        <Footer
          visibilityFilter={visibilityFilter}
          onFilterClick={filter => {
            store.dispatch({ type: "SET_VISIBILITY_FILTER", filter });
          }}
        />
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
      visibilityFilter={store.getState().visibilityFilter}
    />,
    document.getElementById("root")
  );
};
store.subscribe(render);
render();
