// Write your code here
import './index.css'

const DestinationItem = props => {
  const {denominationsDetails, onChange} = props
  const {value} = denominationsDetails
  const click = () => {
    onChange(value)
  }

  return <li onClick={click}>{value}</li>
}
export default DestinationItem
