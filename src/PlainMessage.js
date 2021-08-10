import useCalc from './useCalc'

const PlainMessage = (props) => {
  const [msg, setCalc] = useCalc()

  const onChange = (e) => {
    setCalc(e.target.value)
  }

  return (
    <div className="p-3 h5">
      <h5>{msg}</h5>
      <input type="number" onChange={onChange}
        className="form-control" />
    </div>
  )
}

export default PlainMessage