import { useState } from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";


function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header setSearch={setSearch} />
      <CardContainer search={search} />
    </div>
  );
}

export default App;
