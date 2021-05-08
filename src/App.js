import './App.css';
import MainFeed from './components/MainFeed';
import Sidebar from './components/Sidebar';
import Stories from './components/Stories';

function App() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto flex">
      <div className=" border-r-2 border-gray-400 xl:flex-0.2 lg2:flex-0.15 lg:flex-0.1 md:flex-0.1">
        <Sidebar />
      </div>
      <div className=" border-r-2 border-gray-400 xl:flex-0.5 lg2:flex-0.6 lg:flex-0.7 md:flex-0.8">
        <MainFeed />
      </div>
      <div className=" border-r-2 border-gray-400 xl:flex-0.3 lg2:flex-0.25 lg:flex-0.2 md:flex-0.1">
        <Stories />
      </div>
    </div>
  );
}

export default App;
