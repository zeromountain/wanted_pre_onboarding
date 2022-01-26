import logo from './logo.svg';
import './App.css';

import Toggle from './components/Toggle';
import Modal from './components/Modal';
import Tab from './components/Tab';
import Tag from './components/Tag';
import Autocomplete from './components/AutoComplete';
import ClickToEdit from './components/ClickToEdit';

function App() {
  return (
    <>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <Autocomplete />
      <ClickToEdit />
    </>
  );
}

export default App;
