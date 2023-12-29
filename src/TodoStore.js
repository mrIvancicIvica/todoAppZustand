import { create } from 'zustand';

const useTodoStore = create((set) => ({
  todos: [
    { id: 1, task: 'Buy groceries', completed: false },
    { id: 2, task: 'Finish coding assignment', completed: false },
    { id: 3, task: 'Read a book', completed: false },
    { id: 4, task: 'Go for a run', completed: false },
    { id: 5, task: 'Call a friend', completed: false },
    { id: 6, task: 'Learn a new language', completed: false },
    { id: 7, task: 'Clean the house', completed: false },
    { id: 8, task: 'Watch a movie', completed: false },
    { id: 9, task: 'Practice an instrument', completed: false },
    { id: 10, task: 'Plan a vacation', completed: false },
  ],
  filter: 'all',
  dark: true,
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  setFilter: (filter) => set({ filter }),
  updateTask: (idTask, newTask) =>
    set((state) => {
      const updateTodos = state.todos.map((todo) => {
        if (todo.id === idTask) {
          return { ...todo, task: newTask };
        }
        return todo;
      });
      return { ...state, todos: updateTodos };
    }),
  switchTheme: () => set((state) => ({dark: !state.dark})),
}));

export default useTodoStore;
