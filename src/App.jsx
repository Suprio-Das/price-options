import Navbar from "./Component/Navbar/Navbar"
import PriceOptions from "./Component/PriceOptions/PriceOptions"
import StudentPerformance from "./Component/StudentPerformance/StudentPerformance"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="w-[90%] mx-auto my-5">
        <PriceOptions></PriceOptions>
        <StudentPerformance></StudentPerformance>
      </div>
    </>
  )
}

export default App
