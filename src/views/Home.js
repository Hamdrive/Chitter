import MainFeed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";

function App() {
  return (
    <div className="max-w-6xl h-screen mx-auto flex box-border overflow-hidden">
        <div className=" border-r-2 border-gray-400 xl:flex-0.2 lg2:flex-0.15 lg:flex-0.1 md:flex-0.1 sticky top-0 z-50">
          <Sidebar />
        </div>
        <div className=" border-r-2 border-gray-400 xl:flex-0.5 lg2:flex-0.6 lg:flex-0.7 md:flex-0.8 overflow-y-scroll scrollbar-hide">
          <MainFeed />
        </div>
        <div className="  xl:flex-0.3 lg2:flex-0.25 lg:flex-0.2 md:flex-0.1">
          <Stories />
        </div>
    </div>
  );
}

export default App;
