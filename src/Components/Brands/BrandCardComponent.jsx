
import { PropTypes } from 'prop-types';
const BrandCardComponent = ({data}) => {
  return (
    <>
    <div className="text-center">
    <img src={data?.image} alt={data?.name} />
    </div>
    
    
    </>
  )
}
BrandCardComponent.propTypes = {
  data: PropTypes.object.isRequired,
};
export default BrandCardComponent