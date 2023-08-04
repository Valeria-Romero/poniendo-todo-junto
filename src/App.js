import PersonCard from './componentes/PersonCard/PersonCard';


const App = () => {
  return (
    <div>
      <h1>Poniendo todo junto</h1>
      <PersonCard firstName='Ana' lastName="Martinez" age="30" hairColor="Black"></PersonCard>
      <PersonCard firstName='Juan' lastName="Rojas" age="35" hairColor="Red"></PersonCard>
      <PersonCard firstName='Maria' lastName="Salas" age="31" hairColor="Red"></PersonCard>
    </div>
  );
}

export default App;
