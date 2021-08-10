import useCalc from "./useCalc"
import { tax } from './function'

const CardMessage = (props) => {
  const [msg, setCalc] = useCalc(0, tax)

  const onChange = (e) => {
    setCalc(e.target.value)
  }

  return (
    <div className="card p-3 h5 border-primary">
      <h5>{msg}</h5>
      <input type="range" onChange={onChange}
        min="0" max="10000" step="100" className="form-control" />
    </div>
  )
}

export default CardMessage