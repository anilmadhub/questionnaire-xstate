import { useRef } from "react"

// eslint-disable-next-line react/prop-types
export const MedicineDosageEveryday = ({ send }) => {
  const formRef = useRef(null)

  const submitHandler = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    const formValues = Object.fromEntries(formData.entries())
    send({ type: "dosage.everyday.added", ...formValues })
  }
  return (
    <form className="my-form" ref={formRef}>
      <h2>Medicine Quantity</h2>
      <div className="form-group">
        <label>quantity</label>
        <input type="text" id="quantity" name="quantity" />
      </div>
      <div className="form-group">
        <label>Day</label>
        <input type="text" id="day" name="day" />
      </div>
      <button onClick={submitHandler}>Next</button>
    </form>
  )
}
