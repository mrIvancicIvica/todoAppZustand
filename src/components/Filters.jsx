import { Button, ButtonGroup } from '@nextui-org/react';
import { useState } from 'react';
import useTodoStore from '../TodoStore';

const Filters = () => {
  const [activeButton, setActiveButton] = useState('all');

  const { setFilter } = useTodoStore();

  const isActive = (color) => {
    setActiveButton(color);
  };

  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => {
            isActive('all');
            setFilter('all');
          }}
          color={activeButton === 'all' ? 'primary' : 'default'}
        >
          All
        </Button>
        <Button
          onClick={() => {
            isActive('completed');
            setFilter('completed');
          }}
          color={activeButton === 'completed' ? 'primary' : 'default'}
        >
          Completed
        </Button>
        <Button
          onClick={() => {
            isActive('active');
            setFilter('active');
          }}
          color={activeButton === 'active' ? 'primary' : 'default'}
        >
          Active
        </Button>
      </ButtonGroup>
    </>
  );
};
export default Filters;
