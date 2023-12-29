import { Button, Input } from '@nextui-org/react';
import useTodoStore from '../TodoStore';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const { addTodo } = useTodoStore();
  const { register, handleSubmit, reset } = useForm();
  const id = uuidv4();
  const onSubmit = (data) => {
    addTodo({ id: id, task: data.task, taskCheked: false });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center mt-10 mb-10">
      <Input {...register('task')} radius='sm' size="sm" label="Input task" />
      <Button className='ml-4' type="submit"  size="md">
        Add task
      </Button>
    </form>
  );
};
export default Form;
