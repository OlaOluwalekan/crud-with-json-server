import { FaEdit, FaTrash, FaUser } from 'react-icons/fa'
import { useGlobalContext } from '../../context'

const User = ({ id, imageUrl, name, email, job, company, about, favColor }) => {
  const { deleteUser, getSingleUser } = useGlobalContext()

  return (
    <div>
      <section>
        {imageUrl ? (
          <img src={imageUrl} alt={`${name}'s photo`} />
        ) : (
          <span
            style={{
              backgroundColor: favColor,
              fontWeight: 900,
              fontSize: '30px',
            }}
          >
            {/* <FaUser /> */}
            {name.charAt(0).toUpperCase()}
          </span>
        )}
        <article>
          <p>{name}</p>
          <p>
            <span>{job}</span> at <span>{company}</span>
          </p>
        </article>
      </section>
      <section>
        <p>{email}</p>
        <p>{about}</p>
      </section>
      <article>
        <FaEdit onClick={() => getSingleUser(id)} />
        <FaTrash onClick={() => deleteUser(id)} />
      </article>
    </div>
  )
}
export default User
