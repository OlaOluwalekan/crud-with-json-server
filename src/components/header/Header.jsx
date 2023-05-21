import { FaUser } from 'react-icons/fa'
import styles from '../../css/header.module.css'
import { useGlobalContext } from '../../context'

const Header = () => {
  const { people } = useGlobalContext()

  return (
    <header className={styles.main}>
      <h1>Random Users</h1>
      <article>
        <span>{people.length}</span>
        <FaUser />
      </article>
    </header>
  )
}
export default Header
