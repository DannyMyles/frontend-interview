import { useUpdateUserMutation } from "../services/userApi";

const UpdateUser = () => {
const [updateUser, { isLoading, isError }] = useUpdateUserMutation();

const handleUpdate = (userId, newData) => {
    updateUser<[any]>({ userId, userData: newData });
  };

  if (isLoading) return <div>Updating user...</div>;
  if (isError) return <div>Error updating user</div>;
  return (
    <div>
      
    </div>
  )
}

export default UpdateUser
