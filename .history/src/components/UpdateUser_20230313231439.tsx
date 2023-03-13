import { useUpdateUserMutation } from "../services/userApi";

const UpdateUser = () => {
const [updateUser, { isLoading, isError }] = useUpdateUserMutation();

const handleUpdate = (userId: any, newData: any) => {
    updateUser({ userId, userData: newData });
  };
  return (
    <div>
      
    </div>
  )
}

export default UpdateUser
