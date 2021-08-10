import useCalc from "./useCalc"
import { total } from './function'

const AlertMessage = (props) => {
  const [msg, setCalc] = useCalc(0, total)

  const onChange = (e) => {
    setCalc(e.target.value)
  }

  return (
    <div className="alert alert-primary h5 text-primary">
      <h5>{msg}</h5>
      <input type="number" onChange={onChange}
        min="0" max="10000" className="form-control" />
    </div>
  )
}

export default AlertMessage