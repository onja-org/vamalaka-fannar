import { useState } from 'react'

export const LanguagePage = () => {
  const [name, setName] = useState<any>('')
  const [names, setNames] = useState<any>([])

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    // alert('Name submited with hooks: ' + name);
    event.preventDefault()
    const newName = { name: name, id: new Date(Date.now()), checked: false }
    setNames((prev) => [...prev, newName])
  }

  const toggleCheckbox = (id) => {
    const newName = names.map((name) => {
      if (name.id === id) {
        name.checked = !name.checked
      }
      return name
    })
    setNames(newName)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' value={name} onChange={handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <ol>
        {names.map((name) => {
          return (
            <li key={name.id} onClick={() => toggleCheckbox(name.id)}>
              <span>{name.name}</span>
              <input type='checkbox' value={name.id} checked={name.checked} />
            </li>
          )
        })}
      </ol>
    </div>
  )
}
