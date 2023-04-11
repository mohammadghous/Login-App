// Write your code here

import './index.css'

const Logout = props => {
  const {onStatusChange} = props
  return (
    <button className="button" type="button" onClick={onStatusChange}>
      Logout
    </button>
  )
}
export default Logout
