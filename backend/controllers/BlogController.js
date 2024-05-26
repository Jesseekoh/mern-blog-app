import Blog from '../models/BlogModel.js'

export const createBlogPost = async (req, res) => {
  // console.log(req.currentUser)
  const {title, content} = req.body

  const author = req.currentUser.id



  const blog = await Blog.create({title, content, author})

  if (!blog) {
    res.status(403).json({error: "Failed to create document"})
  }
  res.status(200).json(blog)
}


/**
 * Retrieves a single blog post from the Id in the URL
 * @param {*} req Express request object
 * @param {*} res Express response object
 * @returns 
 */
export const getBlog = async (req, res) => {

  const {blogId}= req.params
  const blog = await Blog.findOne({_id: blogId})

  if (!blog) {
    return res.status(404).json({error: "Document not found"})
  }

  res.status(200).json({success: true, data: blog})
}


/**
 * Fetches blog posts for the users feed
 * @param {*} req 
 * @param {*} res 
 */
export const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find()

  if (!blogs) {
    return res.status(404).json({error: "No Documents found"})
  }
  
  // res.json({message: 'Yo, it works'})
  return res.status(200).json({success: true, data: blogs})
}
