import LoginPage from './components/LoginPage';
import './App.css';
import './Customstyle.css';

function App() {
  return (
    <>
       <div className="App">
          <header className="App-header">
            <h1 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-1.5'>Welcome to My Vite React App</h1>
            <LoginPage />
          </header>
        </div>
    </>
  )
}

export default App
