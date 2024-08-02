import { useRef } from "react"

// eslint-disable-next-line react/prop-types
export const MedicineDosage = ({ send }) => {
  const formRef = useRef(null)

  const submitHandler = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    const formValues = Object.fromEntries(formData.entries())
    send({ type: "dosage.added", ...formValues })
  }
  return (
    <form className="my-form" ref={formRef}>
      <h2>Medicine dosage</h2>
      <div className="form-group">
        <label>Dosage</label>
        <input type="text" id="dosage" name="dosage" />
      </div>
      <button onClick={submitHandler}>Next</button>
    </form>
  )
}
