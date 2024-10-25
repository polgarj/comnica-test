import './MainPage.scss';
import Button from '../components/Button/Button';
import logo from '../assets/images/comnica-logo.png'

const MainPage = () => {
  return (
    <div className='container'>
    <header >
      <a href="/"><img className="logo" src={logo} alt="Comnica" /></a>
      <h1 className='main-title'>Comnica Signature</h1>
      <p className="subtitle">Digitális aláíró szolgáltatás a Comnicától</p>
    </header>
    <main>
      <h2 className="welcome-text">Üdvözlöm a <span className="no-wrap">Comnica Signature-ben!</span></h2>
      <p className="description-text">A következőkben végigvezetjük dukomentumai elfogadásán és aláírásán. A folyamat több percett is igénybe vehet, ezért kérjük, csak akkor kezdje el, ha készne áll rá.</p>
      <Button
        onClick={() => console.log('Button clicked')}
        type={'primary'}
      >
        Kezdhetjük
      </Button>
    </main>
    </div>
  );
};

export default MainPage;