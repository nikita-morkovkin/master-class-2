import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx"
import Main from "./components/Main/Main.tsx"
import NavigationPanel from "./components/NavigationPanel/NavigationPanel.tsx";

const App = () => {
  return (
    <>
      <Header />
      <NavigationPanel />
      <Main />
      <Footer />
    </>
  )
}

export default App