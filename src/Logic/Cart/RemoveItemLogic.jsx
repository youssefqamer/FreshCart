import {useQueryClient } from "react-query"
import UseDeleteDataToken from "../../Hooks/UseDeleteDataToken"

const RemoveItemLogic = () => {

const queryClient = useQueryClient();

const deleteItem = async (id) => {
  try {
    await UseDeleteDataToken(`/api/v1/cart/${id}`);
    queryClient.invalidateQueries("cart");
  } catch (error) {
      return error 
 }
};

return [deleteItem];
}

export default RemoveItemLogic