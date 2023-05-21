import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const [inEditMode, setInEditMode] = useState(false)
  const [updateId, setUpdateId] = useState(null)
  const [person, setPerson] = useState({
    name: '',
    job: '',
    email: '',
    company: '',
    imageUrl: '',
    about: '',
  })

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inEditMode) {
      try {
        const { data } = await axios.post('http://localhost:3000/users', {
          id: new Date().getTime().toString(),
          ...person,
        })
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const { data } = await axios.put(
          `http://localhost:3000/users/${updateId}`,
          person
        )
      } catch (error) {
        console.log(error)
      }
    }
    setDialogIsOpen(false)
    getUsers()
    setPerson({
      name: '',
      job: '',
      email: '',
      company: '',
      imageUrl: '',
      about: '',
    })
    setInEditMode(false)
  }

  const getUsers = async () => {
    try {
      setLoading(true)
      const { data } = await axios('http://localhost:3000/users')
      setPeople(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getSingleUser = async (id) => {
    try {
      // setLoading(true)
      const { data } = await axios(`http://localhost:3000/users/${id}`)
      setPerson(data)
      setDialogIsOpen(true)
      setInEditMode(true)
      setUpdateId(id)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`)
      // console.log(data)
      getUsers()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <AppContext.Provider
      value={{
        people,
        loading,
        deleteUser,
        dialogIsOpen,
        setDialogIsOpen,
        person,
        setPerson,
        handleChange,
        handleSubmit,
        inEditMode,
        setInEditMode,
        getSingleUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
