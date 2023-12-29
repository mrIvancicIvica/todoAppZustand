import Filters from './components/Filters';
import Form from './components/Form';
import Navbar from './components/Navbar';
import ListTasks from './components/ListTasks';
import useTodoStore from './TodoStore';

function App() {
  const { dark } = useTodoStore();
  return (
    <div className={dark ? 'dark text-foreground bg-background' : ''}>
      <div className="flex flex-col justify-center items-center">
        <Navbar />
        <Filters />
        <Form />
        <ListTasks />
      </div>
    </div>
  );
}

export default App;
