import { useState } from "react";
import styles from "./weatherForm.module.css";

export default function WeatherForm({ onChangeCity }) {
  // Crear una variable de estado 'city' con su función para actualizar 'setCity'
  const [city, setCity] = useState(''); // HOOK

  // Definir una función 'onChange' para manejar cambios en el input
  function onChange(e) {
    const value = e.target.value; // Obtener el valor ingresado por el usuario
    if (value !== '') {
      setCity(value); // Actualizar el estado 'city' si el valor no está vacío
    }
  }

  // Definir una función 'handleSubmit' para manejar el envío del formulario
  function handleSubmit(e) {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    onChangeCity(city); // Llamar a 'onChangeCity' con el valor de 'city' como argumento
  }

  // Devolver un formulario con un input de texto y configurar 'onSubmit' para 'handleSubmit'
  return (
    <form onSubmit={handleSubmit}  className={styles.container}>
      <input type="text" onChange={onChange}  className={styles.input}/>
    </form>
  );
}
