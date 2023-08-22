import React from "react"

export default function App() {
  return (
    <>
      <div className="container">
        <Cabecalho/>
        <section>
          <p><a href="">Home Page</a></p>
          <button onClick={()=>alert('Boa noite, senhores.')}>Click Me!</button>
        </section>
        <footer>
          <p>&copy; 2021, Vite.js and React</p>
        </footer>
      </div>
    </>
  )
}
