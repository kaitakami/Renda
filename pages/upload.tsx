import { useState } from "react"
import Layout from "../components/Layout"
import axios from 'axios'

const cleanForm = () => ({
  title: "",
  description: "",
  mainImage: "",
})

const Upload = () => {
  const [formState, setFormState] = useState(cleanForm())

  const handleChange = (e:
    React.ChangeEvent<HTMLTextAreaElement> |
    React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formState)
    axios.post('/api/renders', formState)
    setFormState(cleanForm)
  }

  return (
    <Layout>
      <div className="container py-20">
        <h2 className="text-4xl font-bold text-center sm:text-left">Upload a new render</h2>
        <form className="flex flex-col max-w-2xl gap-4 p-6 m-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="ml-2 text-gray-500 dark:text-gray-300 ">Title</label>
            <input className="px-3 py-2 border border-gray-300 rounded-md dark:border-none" type="text" name="title" value={formState.title} onChange={handleChange} placeholder="Your super car name" required />
          </div>
          <div className="flex flex-col">
            <label className="ml-2 text-gray-500 dark:text-gray-300">Description</label>
            <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-none" name="description" value={formState.description} onChange={handleChange} placeholder="Tools, model, inspiration, etc 🏎️" required />
          </div>
          <div className="flex flex-col">
            <label className="ml-2 text-gray-500 dark:text-gray-300">Image Url</label>
            <input className="px-3 py-2 border border-gray-300 rounded-md dark:border-none" type="url" name="mainImage" value={formState.mainImage} onChange={handleChange} placeholder="https://kaitakami.dev/example.jpg" required />
            <p className="text-sm text-gray-500">*Be sure that the link is working</p>
          </div>
          <button className="px-6 py-2.5 bg-transparent text-gray-700 dark:text-white font-bold text-xs leading-tight capitalize rounded shadow-md hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-0 active:bg-brand-800 border border-opacity-60 border-brand-500 active:shadow-lg transition duration-150 ease-in-out my-auto" type="submit">Upload</button>
        </form>
      </div>
    </Layout>
  )
}

export default Upload
