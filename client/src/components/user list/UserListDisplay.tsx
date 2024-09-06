import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const UsersListDisplay = () => {
    const users = useSelector((state:any) => state.user.userData)
  return (
    <div className="">
        {users?.map((user:any, index:number) => (
            <Link to={`/user/${user.id}`}  className="grid text-white grid-row-[1fr,1fr] mb-4" key={index}>
                <span>{user.name}</span>
                <span>{user.email}</span>
            </Link>
        ))}
    </div>
  )
}
export default UsersListDisplay