const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}  



const App = () => {
  const now = new Date()
  const name = 'Eingeline'
  const age = 22
  const friends = [
    {
      name: 'Alice',
      age: 21
    },
    {
      name: 'Bob',
      age: 23
    }
  ]
  const friends2 = [ 'aei', 'scy' ]

  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello name="Peter" age={age + 5}/>
      <p>It is {now.toString()}</p>

      <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friends2}</p>
    </div>
    </>
      
  )

}

export default App