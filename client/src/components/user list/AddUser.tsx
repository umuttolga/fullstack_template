import { inputStyle } from "../../styles/styles"

const AddUser = () => {
  return (
    <div>
        <label>Username</label>
        <input className={inputStyle} type="text" id='name' placeholder="Username"/>
        <label>Email</label>
        <input className={inputStyle} type="email" id='email' placeholder="Email"/>
        <button>Add User</button>
    </div>
  )
}

export default AddUser