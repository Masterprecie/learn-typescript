
import './App.css'
import Button from './components/event-props/Button'
import Input from './components/event-props/Input'
import Greet from './components/prop-types/Greet'
import Heading from './components/prop-types/Heading'
// import Person from './components/prop-types/Person'
// import PersonList from './components/prop-types/PersonList'
import Presh from './components/prop-types/Presh'
import Status from './components/prop-types/Status'
import Container from './components/style-props/Container'

//Three tips on prop tyoes
//1. You can destructure props
//2. You can export props
//3. You can reuse a particle prop type in multiple places

function App() {
  // const personName = {
  //   first: 'Precious',
  //   last: 'Ikpa'
  // }


  // const brothers = [
  //   {
  //     first: 'Precious',
  //     last: 'Ikpa'
  //   },

  //   {
  //     first: 'Chibuzor',
  //     last: 'Ikpa'
  //   },

  //   {
  //     first: 'Emma',
  //     last: 'Ikpa'
  //   },

  //   {
  //     first: 'Dozie',
  //     last: 'Ikpa'
  //   },

  // ]

  return (
    <>
      <Greet name='Anabel' age={10} isLoggedIn={true} />
      {/* optional prop */}
      {/* <Greet name='Anabel' isLoggedIn={true} />
      <Person fullName={personName} />
      <PersonList list={brothers} /> */}
      <Status status='success' />
      <Presh>
        <Heading>Precious is a handsome young guy</Heading>
        <Heading>Hello Eveyone</Heading>
        <Heading>This is a handsome young guy</Heading>
      </Presh>
      <Button handleClick={(event, id) => console.log('clicked', event, id)} />
      <Input handleChange={(event) => console.log(event)} value='' />
      <Container styles={{ border: '1px solid black', padding: '1rem', font: '0' }} />

    </>
  )
}

export default App
