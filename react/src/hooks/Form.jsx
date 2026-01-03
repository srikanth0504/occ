import { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        age: "",
        email : "",
        address: ""
    })
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(form);
    }

  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit} />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" value={form.age} onChange={handleChange} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        <label htmlFor="address">Address:</label>
        <input type="text" name="address" value={form.address} onChange={handleChange} />
        <button type='submit' onClick={handleSubmit}>Submit</button> <br />
       
    </div>
  )
}
export default Form