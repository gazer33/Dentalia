import React from "react";

interface Clinic {
    id: number;
    name: string;
    count: number;
  }
  
  
  
  const Clinics: Clinic[] = [
    { id: 1, name: 'Aguascalientes', count: 1 },
    { id: 2, name: 'Baja California', count: 2 },
    { id: 3, name: 'Chihuahua', count: 2 },
    { id: 4, name: 'Ciudad de México', count: 25 },
    { id: 5, name: 'Ciudad de México - Centro', count: 5 },
    { id: 6, name: 'Ciudad de México - Norte', count: 4 },
    { id: 7, name: 'Ciudad de México - Oriente', count: 4 },
    { id: 8, name: 'Ciudad de México - Poniente', count: 5 },
    { id: 9, name: 'Coahuila', count: 2 },
    { id: 10, name: 'Estado de México', count: 9 },
    { id: 11, name: 'Guanajuato', count: 1 },
    { id: 12, name: 'Jalisco', count: 5 },
    { id: 13, name: 'Nuevo León', count: 6 },
    { id: 14, name: 'Puebla', count: 1 },
    { id: 15, name: 'Queretaro', count: 2 },
    { id: 16, name: 'San Luis Potosi', count: 1 },
    { id: 17, name: 'Sonora', count: 2 },
    { id: 18, name: 'Yucatán', count: 1 },
  
    // ... Añade más clínicas aquí
  ];
  export default Clinics