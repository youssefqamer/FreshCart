import {  useQueryClient } from 'react-query'
import UseDeleteDataToken from './../../Hooks/UseDeleteDataToken';

const RemoveAddressLogic = () => {

const queryClient = useQueryClient();

const removeAddress = async (id) => {
  try {
    
    await UseDeleteDataToken(`/api/v1/addresses/${id}`)
    queryClient.invalidateQueries("address");
  } catch (error) {
    console.log(error);
  }
};
return[removeAddress]
}

export default RemoveAddressLogic