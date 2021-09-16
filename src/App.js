import "./App.css"
import { Switch, Route, Link, useHistory } from "react-router-dom"
import { useState } from "react"
import * as yup from "yup"
import Form from "./Pages/Form"
import Home from "./Pages/Home"

function App() {


  const [data, setData] = useState([])


  const history = useHistory()

  const formSchema = yup.object().shape({
    name: yup.string().
      required("Nome obrigatório"),
    fullName: yup.string()
      .required("Nome completo obrigatório"),

    address: yup.string()
      .required("Endereço obrigatório"),

    birth: yup.string()
      .required("Data de nascimento obrigatório")
      .matches("^(..)/(..)/(....)$", "Data inválida"),

    cellPhone: yup.string()
      .required("Telefone obrigatório")
      .matches("^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$", "Número inválido"),

    email: yup.string()
      .required("Email obrigatório")
      .email("Email inválido"),

    password: yup.string()
      .required("Senha obrigatória")
  })

  const onSubmitFunction = (dataInput) => {
    history.push("/home")
    setData(dataInput)
  }

  const handleBack = () => {
    history.push("/")
  }

  return (
    <div className="App">

      <Switch>

        <Route exact path="/">
          <Form
            formSchema={formSchema}
            onSubmitFunction={onSubmitFunction} />
        </Route>

        <Route path="/home">
          <Home
            handleBack={handleBack}
            data={data} />
        </Route>

      </Switch>

    </div>
  )
}

export default App
