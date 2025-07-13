import './App.css';
import Output from './Components/App';  // ✅ Importing Output component

const data = { name: 'nagu', age: 21 };

function App() {
  const { name, age } = data;

  return (
    <>
      <div>
        <h1>Hello {name}</h1>
        <h2>Age: {age}</h2>

        {/* ✅ Render Output component here */}
        <Output />
      </div>
    </>
  );
}

export default App;