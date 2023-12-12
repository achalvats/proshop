import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import HomeScreen from "./screens/HomeScreen"

const App = () => {
  return (
    <>
      <main className="py-3">
      <Header />
        <Container>
          <Outlet />
         </Container>
      </main>
      <Footer />
    </>  
  )
}

export default App