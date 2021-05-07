import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto flex">
      <div className="border-l-2 border-r-2 border-red-500 xl:flex-0.2 lg:flex-0.15 md:flex-0.1">
        <Sidebar />
      </div>
      <div className=" border-r-2 border-red-500 xl:flex-0.5 lg:flex-0.6 md:flex-0.8"></div>
      <div className=" border-r-2 border-red-500 xl:flex-0.3 lg:flex-0.25 md:flex-0.1"></div>
    </div>
  );
}

export default App;
