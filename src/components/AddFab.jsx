import { FaUserPlus } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const AddFab = () => {
  const { setDialogIsOpen } = useGlobalContext()

  return (
    <div className='add-fab' onClick={() => setDialogIsOpen(true)}>
      <FaUserPlus />
    </div>
  )
}
export default AddFab
