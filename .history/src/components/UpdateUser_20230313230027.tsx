import { useUpdateUserMutation } from './userApi';

const UpdateUser = () => {
const [updateUser, { isLoading, isError }] = useUpdateUserMutation();
  return (
    <div>
      
    </div>
  )
}

export default UpdateUser
