import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Card,
  Modal,
  useDisclosure,
  ModalContent,
  Button,
  CardHeader,
  ModalHeader,
  ModalBody,
  Input,
  Checkbox,
} from '@nextui-org/react';
import useTodoStore from '../TodoStore';
import { EditIcon } from './Icons/EditIcon';
import { TrashIcon } from './Icons/TrashIcon';

const ListTasks = () => {
  const { todos, toggleTodo, deleteTodo, filter, updateTask, dark } =
    useTodoStore();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [editTask, setEditTask] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmitEdit = (data) => {
    updateTask(editTask.id, data.editTask);
  };

  const filteredTodos =
    filter === 'all'
      ? todos
      : filter === 'active'
      ? todos.filter((t) => !t.completed)
      : todos.filter((t) => t.completed);

  const handleEditTask = (taskForEdit) => {
    setEditTask(taskForEdit);
  };

  return (
    <div className="h-dvh">
      {filteredTodos.map((task) => (
        <Card key={task.id} className="max-w-[640px] m-3">
          <CardHeader
            onClick={() => toggleTodo(task.id)}
            className="justify-between"
          >
            <Checkbox
              isSelected={task.completed}
              onValueChange={() => toggleTodo(task.id)}
              lineThrough
            >
              {task.task}
            </Checkbox>
            <div>
              <Button
                isIconOnly
                className="mr-4"
                onClick={() => {
                  onOpen();
                  handleEditTask(task);
                }}
                size="sm"
              >
                <EditIcon />
              </Button>
              <Button isIconOnly onClick={() => deleteTodo(task.id)} size="sm">
                <TrashIcon />
              </Button>
            </div>
          </CardHeader>
        </Card>
      ))}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit task
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmitEdit)}>
                  <Input
                    {...register('editTask')}
                    autoFocus
                    endContent={
                      <EditIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    defaultValue={editTask.task}
                    variant="bordered"
                  />
                  <Button
                    className="w-full mt-4 mb-3"
                    type="submit"
                    onPress={onClose}
                    color="primary"
                  >
                    Save
                  </Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ListTasks;
