import { useSelector } from "react-redux"

const UsersListDisplay = () => {
    const users = useSelector((state:any) => state.user.userData)

  return (
    <div className="">
        {users?.map((user:any, index:number) => (
            <div className="grid grid-row-[1fr,1fr] mb-4" key={index}>
                <span>{user.name}</span>
                <span>{user.email}</span>
            </div>
        ))}
    </div>
  )
}
export default UsersListDisplay