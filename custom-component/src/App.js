import Toggle from './components/Toggle';
import Modal from './components/Modal';
import Tab from './components/Tab';
import Tag from './components/Tag';
import Autocomplete from './components/AutoComplete';
import ClickToEdit from './components/ClickToEdit';

function App() {
  return (
    <div className='mt-5 flex flex-col'>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <Autocomplete />
      <ClickToEdit />
    </div>
  );
}

export default App;
