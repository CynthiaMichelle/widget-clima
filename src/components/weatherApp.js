import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import styles from "./weatherApp.module.css";

export default function WeatherApp() {
  // Utiliza el estado 'weather' para almacenar información sobre el clima
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  // Una función asincrónica para cargar información del clima
  async function loadInfo(city = "madrid") {
    try {
      // Realiza una solicitud (fetch) para obtener datos del clima
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );

      // Parsea la respuesta de la solicitud a formato JSON
      const json = await request.json();
      setWeather(json);
      console.log(json); // Imprime los datos del clima en la consola
    } catch (error) {
      // Captura cualquier error que ocurra durante la solicitud
      // (por ejemplo, problemas de red)
    }
  }

  // Función para cambiar la ciudad y cargar nueva información del clima
  function handleChangeCity(city) {
    setWeather(null); // Reinicia el estado 'weather' a nulo
    loadInfo(city); // Carga información del clima para la nueva ciudad
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather}/>
    </div>
  );
}
