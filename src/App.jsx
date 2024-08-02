import { useMachine } from "@xstate/react"
import { addMedicineMachine } from "./machines/addMedicineMachine"
import { MedicineName } from "./forms/MedicineName"
import { MedicineForm } from "./forms/MedicineForm"
import { MedicineDosage } from "./forms/MedicineDosage"
import { MedicineDosageJustOnce } from "./forms/MedicineDosageJustOnce"
import { MedicineDosageEveryday } from "./forms/MedicineDosageEveryday"

const App = () => {
  const [state, send] = useMachine(addMedicineMachine)

  return (
    <>
      <h1> Add Medicine</h1>

      {state.matches("Start") && <MedicineName send={send} />}
      {state.matches("Medicine added") && <MedicineForm send={send} />}
      {state.matches("Form added") && <MedicineDosage send={send} />}
      {state.matches("Dosage added") && <MedicineDosageJustOnce send={send} />}
      {state.matches("Dosage everyday added") && (
        <MedicineDosageEveryday send={send} />
      )}
      {state.matches("Just once added") && (
        <h2>Medicine added successfully!</h2>
      )}

      <pre>
        <kbd>{JSON.stringify(state.context)}</kbd>

        {/* <kbd>{JSON.stringify(state.value)}</kbd> */}
      </pre>
    </>
  )
}

export default App
