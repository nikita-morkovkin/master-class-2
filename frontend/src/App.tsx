import Header from "./components/Header/Header.tsx"
import Main from "./components/Main/Main.tsx"
import NavigationPanel from "./components/NavigationPanel/NavigationPanel.tsx";

const App = () => {
  return (
    <>
      <Header />
      <NavigationPanel />
      <Main />
    </>
  )
}

export default App