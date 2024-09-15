import React from 'react';
import Card from './Card';

function App() {
  return (
    <div className="card-container">
      <Card
        title="Desarrollo de API"
        description="Implementación de una API RESTful en Node.js"
        assignedTo="Juan Pérez"
        startDate="2024-09-01"
        endDate="2024-09-10"
      />
      <Card
        title="Diseño de Interfaz"
        description="Diseño del prototipo de alta fidelidad para el dashboard"
        assignedTo="Ana Martínez"
        startDate="2024-09-05"
        endDate="2024-09-12"
      />
      <Card
        title="Pruebas de integración"
        description="Realizar pruebas de integración entre los módulos del sistema"
        assignedTo="Carlos López"
        startDate="2024-09-07"
        endDate="2024-09-15"
      />
    </div>
  );
}

export default App;
