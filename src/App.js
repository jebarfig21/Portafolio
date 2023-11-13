import './App.css';
import Main from './components/Main';
import { AppProvider } from './components/AppContext';

function App() {
  return (
    <AppProvider>       
      <div className="App">
       <Main/>
      </div>
    </AppProvider>
       
  );
}

export default App;
