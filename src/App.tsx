
import styles from "./App.module.css"
import Form from "./components/Form/Form"
import useWeather from "./hooks/useWeather"

function App() {

  const {fetchWeather} = useWeather()
  console.log(import.meta.env)
  return (
    <>
      <h1 className={styles.title}>
        Buscador de clima
      </h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        ></Form>
        <p>2</p>
      </div>
    </>
  )
}

export default App
