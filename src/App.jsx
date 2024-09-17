import { Card } from "./components/card";

function App() {
  const cardsData = [
    {
      title: "Titulo 1",
      description: "descripcion...",
      assignedTo: "ususrio1",
      startDate: "15/05/2010",
      endDate: "16/09/2024",
    },

    {
      title: "Titulo 2",
      description: "descripcion...",
      assignedTo: "usuario2",
      startDate: "15/04/2004",
      endDate: "16/09/2024",
    },

    {
      title: "Titulo 3",
      description: "descripcion...",
      assignedTo: "usuario3",
      startDate: "19/05/2006",
      endDate: "16/09/2024",
    },
  ];

  
  return (
    <div>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          assignedTo={card.assignedTo}
          startDate={card.startDate}
          endDate={card.endDate}
        />
      ))}
    </div>
  );
}

export default App;
