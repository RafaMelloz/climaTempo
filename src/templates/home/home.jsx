import { BoxTempo } from '../../components/box-tempo/boxTempo';
import { ErrorBoundary } from '../../components/catchError';
import { Search } from '../../components/search';
import './home.css';
import './home.css';


function Home() {
  return (
    <div className="centralizar">
      <ErrorBoundary>
        <Search />
        <BoxTempo />
      </ErrorBoundary>     
    </div>
  );
}

export default Home;
