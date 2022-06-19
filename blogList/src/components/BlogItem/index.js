import './index.css'

const BlogItem = props => {
  const {list} = props
  const {title, description, publishedDate} = list

  return (
    <div>
      <li className="blog-item">
        <div className="blog-list-item">
          <h1>{title}</h1>
          <p>{publishedDate}</p>
        </div>
        <p>{description}</p>
      </li>
      <hr />
    </div>
  )
}

export default BlogItem
