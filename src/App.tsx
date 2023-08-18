
import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

function App() {
  const personName = {
    first: 'Precious',
    last: 'Ikpa'
  }


  const brothers = [
    {
      first: 'Precious',
      last: 'Ikpa'
    },

    {
      first: 'Chibuzor',
      last: 'Ikpa'
    },

    {
      first: 'Emma',
      last: 'Ikpa'
    },

    {
      first: 'Dozie',
      last: 'Ikpa'
    },

  ]

  return (
    <>
      <Greet name='Anabel' age={10} isLoggedIn={true} />
      <Person fullName={personName} />
      <PersonList list={brothers} />
      <Status status='success' />
    </>
  )
}

export default App
