import { React, useState }from 'react';
import './App.css'
import BlogForm from './components/BlogForm/BlogForm';
import BlogList from './components/BlogList/BlogList';


const App = () => {

  // const [users, setUsers] = useState([
  //   {id: 1, name: "Dennis"},
  //   {id: 2, name: "Benji"},
  //   {id: 3, name: "Arya"},
  // ]);

  const [blogs, setBlogs] = useState([]);

  const addNewBlogHandler = (newBlog) => {
    setBlogs((prevBlogs) => {
      return prevBlogs.concat(newBlog);
    })
  }

  const getAllBlogsHandler = (blogs) => {
    setBlogs(blogs);
  }

  return (
    <div className='App'>
      <h2>My Blog</h2>
      <BlogForm onBlogAdded={addNewBlogHandler} onGetAllBlogs={getAllBlogsHandler}/>
      <BlogList blogs={blogs} />
    </div>
  );
}

export default App;
