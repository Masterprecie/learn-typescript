
import './App.css'
import { CustomButton } from './components/html/Button'
//import Lists from './components/generic/Lists'
import RandomNumber from './components/restriction/RandomNumber'
import Toast from './components/templateLiterals/Toast'
// import Private from './components/auth/Private'
// import Profile from './components/auth/Profile'
// import { Counter } from './components/class/Counter'
// import Box from './components/context/Box'
// import { ThemeContextProvider } from './components/context/ThemeContext'
// import User from './components/context/User'
// import { UserContextProvider } from './components/context/UserContext'
// import Button from './components/event-props/Button'
// import Input from './components/event-props/Input'
//import Counter from './components/hooks-types/useReducer/Counter'
//import Login from './components/hooks-types/useState/Login'
// import User from './components/hooks-types/useState/User'
// import Greet from './components/prop-types/Greet'
// import Heading from './components/prop-types/Heading'
// import Person from './components/prop-types/Person'
// import PersonList from './components/prop-types/PersonList'
// import Presh from './components/prop-types/Presh'
// import Status from './components/prop-types/Status'
// import MutableRef from './components/ref/MutableRef'
// import Container from './components/style-props/Container'

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
      {/* <Greet name='Anabel' age={10} isLoggedIn={true} />
     
      <Greet name='Anabel' isLoggedIn={true} />
      <Person fullName={personName} />
      <PersonList list={brothers} />
      <Status status='success' />
      <Presh>
        <Heading>Precious is a handsome young guy</Heading>
        <Heading>Hello Eveyone</Heading>
        <Heading>This is a handsome young guy</Heading>
      </Presh>
      <Button handleClick={(event, id) => console.log('clicked', event, id)} />
      <Input handleChange={(event) => console.log(event)} value='' />
      <Container styles={{ border: '1px solid black', padding: '1rem', font: '0' }} />
      <Login />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <MutableRef />
      <Counter message='The count value is:' />
      <Private isLoggedIn={false} component={Profile} /> */}
      {/* <Lists
        items={['Man', 'woman', 'Female']}
        onClick={(item) => console.log(item)}
      />
      <Lists
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <Lists
        items={[
          {
            id: 1,
            first: 'Precious',
            last: 'Ikpa'
          },
          {
            id: 2,
            first: 'John',
            last: 'Doe'
          },
          {
            id: 3,
            first: 'Anabel',
            last: 'Austin'
          },

        ]}
        onClick={(item) => console.log(item)}
      /> */}

      <RandomNumber value={10} isPositive />
      <Toast position='center' />
      <CustomButton variant='primary' onClick={() => console.log('click')}>Secondary Button</CustomButton>

    </>
  )
}

export default App
