
import './App.css';
import NotesList from './components/NotesList';


function App() {
  return (
    <div>
      <h1>Welcome to Notes Manager</h1>
      <div className="bg-blue-500 text-white text-3xl font-bold p-6">
      ✅ Tailwind CSS is working!
    </div>
      <NotesList/>
    </div>
  );
}

export default App;
