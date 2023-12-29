import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { MoonIcon } from './Icons/MoonIcon';
import { SunIcon } from './Icons/SunIcon';
import useTodoStore from '../TodoStore';

const Appbar = () => {
  const { dark, switchTheme } = useTodoStore();
  return (
    <Navbar className="mb-10 px-32">
      <NavbarBrand>
        <p className="font-bold text-inherit">MY TASKS</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button onClick={() => switchTheme()} isIconOnly color="primary">
            {dark ? <SunIcon /> : <MoonIcon />}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
export default Appbar;
