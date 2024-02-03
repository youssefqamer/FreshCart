import { useMutation, useQueryClient } from "react-query"
import UsePostDataToken from "../../Hooks/UsePostDataToken"
import toast from "react-hot-toast"
import { useEffect } from "react"

const AddToCartLogic = () => {
const addToCart=(id)=>{
   addToCartMutation.mutate(id)
}

const queryClient = useQueryClient();

const addToCartMutation = useMutation(
  async (id) => {
    return UsePostDataToken(`/api/v1/cart`, {
      productId: id,
    });
  },
  {
    onSuccess: () => {
      queryClient.invalidateQueries('cart');
    },
  }
);

  const {data,isLoading}=addToCartMutation
  // console.log(data);
  useEffect(() => {
if (!isLoading) {
    if (data?.status==='success') {
        toast.success('product added successfully')
    }
}
  }, [isLoading])
 
return[addToCart,data]
}

export default AddToCartLogic