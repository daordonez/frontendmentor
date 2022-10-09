import './App.css';
import Avatar from './components/Avatar';
import Biography from './components/Biography';
import './components/Card';
import Card from './components/Card';

function App() {
  return (

    <div class="sidebar">
    <aside class="sidebar__sidebar">
      <Avatar/>
      <Biography />
    </aside>
    <main class="sidebar__main">
    <div className='card-layout'>
      <div className='card-layout__item'><Card/></div>
      <div className='card-layout__item'><Card/></div>
      <div className='card-layout__item'><Card/></div>
      <div className='card-layout__item'><Card/></div>
      <div className='card-layout__item'><Card/></div>
      <div className='card-layout__item'><Card/></div>

    </div>
    </main>
</div>


  );
}

export default App;
