import { useRef } from "react"

// eslint-disable-next-line react/prop-types
export const MedicineForm = ({ send }) => {
  const formRef = useRef(null)
  const submitHandler = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    const formValues = Object.fromEntries(formData.entries())
    send({ type: "form.added", ...formValues })
  }
  return (
    <form className="my-form" ref={formRef}>
      <h2>Medicine form</h2>
      <div className="form-group">
        <label>Form:</label>
        <input type="text" id="form" name="form" />
      </div>
      <button onClick={submitHandler}>Next</button>
    </form>
  )
}
