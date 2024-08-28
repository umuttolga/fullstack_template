import { useRef } from "react"
import { inputStyle } from "../../styles/styles"
import { addUser } from "../../api/ApiCalls"

const AddUser = () => {
    const nameRef = useRef()
    const emailRef = useRef()

    const handlePostUser = async (e:any) => {
        e.preventDefault()
        //@ts-ignore
        const response = await addUser(nameRef.current.value,emailRef.current.value)
        console.log(response)
        window.location.reload()
    }
  return (
    <div className="grid grid-rows-2 w-full auto-rows-min gap-4">
        {/* @ts-ignore */}
        <input ref={nameRef} className={inputStyle} type="text" id='name' placeholder="Username"/>
        {/* @ts-ignore */}
        <input ref={emailRef} className={inputStyle} type="email" id='email' placeholder="Email"/>
        <button onClick={handlePostUser}>Add User</button>
    </div>
  )
}

export default AddUser