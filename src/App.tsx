import './App.css'

interface Props {
  title: number;
}

function App({title}: Props) {

  return (
    <>
      <h1>{title.valueOf()} </h1>  
    </>
  )
}

export default App
