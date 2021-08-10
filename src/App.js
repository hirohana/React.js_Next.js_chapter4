import AlertMessage from './AlertMessage'
import CardMessage from './CardMessage'
import PlainMessage from './PlainMessage'

const App = () => {

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <PlainMessage />
        <AlertMessage />
        <CardMessage />
      </div>
    </div>
  )
}

export default App
