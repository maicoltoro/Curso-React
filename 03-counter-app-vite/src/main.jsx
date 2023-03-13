import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tarea } from './ConterApp'
import { Componente } from './FirstApp'
import {App} from './HelloWorldApp'

import './style.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <Tarea valor={15} /> */}
        <Componente title="pruebas de react"></Componente>
    </React.StrictMode>
)