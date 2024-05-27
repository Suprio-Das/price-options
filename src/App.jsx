import Navbar from "./Component/Navbar/Navbar"
import PriceOptions from "./Component/PriceOptions/PriceOptions"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="w-[90%] mx-auto my-5">
        <PriceOptions></PriceOptions>
      </div>
    </>
  )
}

export default App
