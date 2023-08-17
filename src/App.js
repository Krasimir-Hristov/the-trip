
export default function App() {

  return (
    <div className="app">
      <Logo />
      <Form />
      <PaqkingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝 Far Away 👙</h1>;
}

function Form() {
  return <div className="add-form">
    <h3>What do you need for your 😛 trip?</h3>
  </div>;
}

function PaqkingList() {
  return <div className="list">List</div>;
}

function Stats() {
  return <footer>
    <em>
      👜 You have x items on your list, and you already packed x (X%);
    </em>
  </footer>;
}