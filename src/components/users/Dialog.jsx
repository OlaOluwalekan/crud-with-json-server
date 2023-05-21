import { FaTimes } from 'react-icons/fa'
import styles from '../../css/users.module.css'
import { useGlobalContext } from '../../context'

const Dialog = () => {
  const {
    setDialogIsOpen,
    person,
    handleChange,
    handleSubmit,
    inEditMode,
    setPerson,
    setInEditMode,
  } = useGlobalContext()

  return (
    <div className={styles.dialog}>
      <form onSubmit={handleSubmit}>
        <span
          onClick={() => {
            setDialogIsOpen(false)
            setInEditMode(false)
            setPerson({
              name: '',
              job: '',
              email: '',
              company: '',
              imageUrl: '',
              about: '',
            })
          }}
        >
          <FaTimes />
        </span>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={person.name}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Job'
          name='job'
          value={person.job}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={person.email}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Company'
          name='company'
          value={person.company}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Image URL'
          name='imageUrl'
          value={person.imageUrl}
          onChange={handleChange}
        />
        <textarea
          cols='30'
          rows='10'
          placeholder='About you...'
          name='about'
          value={person.about}
          onChange={handleChange}
        ></textarea>
        <button type='submit'>{inEditMode ? 'Update' : 'Add'}</button>
      </form>
    </div>
  )
}
export default Dialog
