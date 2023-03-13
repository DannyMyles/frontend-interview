import { useUpdateUserMutation } from "../services/userApi";

const UpdateUser = () => {
const [updateUser, { isLoading, isError }] = useUpdateUserMutation();
  return (
    <div>
      
    </div>
  )
}

export default UpdateUser
