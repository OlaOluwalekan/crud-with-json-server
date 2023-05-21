import { useGlobalContext } from '../../context'
import Loading from '../Loading'
import User from './User'
import css from '../../css/users.module.css'

const UserList = () => {
  const { people, loading } = useGlobalContext()
  // console.log(loading)
  if (loading) {
    return <Loading />
  }
  return (
    <div className={css.main}>
      {people.map((person) => {
        return <User key={person.id} {...person} />
      })}
    </div>
  )
}
export default UserList
