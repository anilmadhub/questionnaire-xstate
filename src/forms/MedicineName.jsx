import { useRef } from "react"

// eslint-disable-next-line react/prop-types
export const MedicineName = ({ send }) => {
  const formRef = useRef(null)

  const submitHandler = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    const formValues = Object.fromEntries(formData.entries())
    send({ type: "medicine.added", ...formValues })
  }
  return (
    <form className="my-form" ref={formRef}>
      <h2>Medicine name</h2>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <button onClick={submitHandler}>Next</button>
    </form>
  )
}
