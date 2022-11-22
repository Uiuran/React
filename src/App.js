import logo from './logo.svg';
import './App.css';
import { HelloWorld } from './components/hello-world';
import { LikeButton, RedirectButton } from './button';
import { HookCounter } from './components/HookCounter'
import { HookEffectOne } from './components/HookEffectOne';
import { HookMouse, ToggleButton } from './components/HookMouse';
import { HookIntervalCounter } from './components/HookIntervalCounter';
import { DataFetching } from './components/DataFetching';

function App() {
  return (
    <div className="App">
      <HelloWorld name='Daniel' surname='Penalva'/>
      <DataFetching />
      {/*<LikeButton />     
      <HookCounter></ HookCounter>
      <HookEffectOne></HookEffectOne>
      <HookMouse></HookMouse>
      <ToggleButton ></ToggleButton>
  <HookIntervalCounter />*/}
    </div>
  );
}

export default App;
