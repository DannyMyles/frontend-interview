import { useUpdateUserMutation } from "../services/userApi";

const UpdateUser = () => {
const [updateUser, { isLoading, isError }] = useUpdateUserMutation();

const handleUpdate = (userId: any, newData: any) => {
    updateUser({ userId, userData: newData });
  };

  if (isLoading) return <div>Updating user...</div>;
  if (isError) return <div>Error updating user</div>;g
  return (
    <div>
      
    </div>
  )
}

export default UpdateUser
