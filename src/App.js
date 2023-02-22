import './App.css';
import { FooterPanel } from './components/FooterPanel';

function App() {
  return (
    <div className='mainApp'>
      <div className='centered'>
        <div className='mainText'>Ooh..</div>
        <div className='mediumText'>От холєра. Схоже наш сайт оновлюється...</div>
        <img className='logo' src='https://live.staticflickr.com/65535/52646464775_6046ab08df_z.jpg'/>
      </div>
      <div className='footer'>
        <div className='smallText'>Але ми є тут</div>
        <FooterPanel/>
      </div>
    </div>

  );
}

export default App;
