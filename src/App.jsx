import Header from './components/header/Header'
import './App.css'
import UserList from './components/users/UserList'
import Dialog from './components/users/Dialog'
import { useGlobalContext } from './context'
import AddFab from './components/AddFab'

const App = () => {
  const { dialogIsOpen } = useGlobalContext()

  return (
    <div>
      <Header />
      <UserList />
      {dialogIsOpen && <Dialog />}
      {!dialogIsOpen && <AddFab />}
    </div>
  )
}
export default App
