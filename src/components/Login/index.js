// Write your code here

import './index.css'

const Login = props => {
  const {onStatusChange} = props
  return (
    <button className="button" type="button" onClick={onStatusChange}>
      Login
    </button>
  )
}
export default Login
