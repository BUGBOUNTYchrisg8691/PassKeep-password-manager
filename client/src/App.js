import './App.css';

import NewPassForm from './components/NewPassForm';

function App() {
  const [getNewPassword, setNewPassword] = useState("");
  return (
    <div className="App">
      <NewPassForm
        getNewPassword={getNewPassword}
        setNewPassword={setNewPassword}
      />
    </div>
  );
}

export default App;
