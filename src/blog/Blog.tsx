import { useNavigate } from "react-router";
import BlogCard from "../shared/components/blog-card/BlogCard";
import { blogs } from "../shared/data/blog";
import classes from "./blog.module.scss";

const Blog = () => {
    
const navigate = useNavigate();
  return (
    
   <div className={classes.container}>
      <div className={classes.header}>
        <h2 className="padding">Blogs</h2>
      </div>
      <div className={`${classes.blogsList} padding`}>
        {blogs.map((blog) => (
          <BlogCard
          key={blog.id}  
          onReadMore={() => navigate(`/blogs/${blog.id}`)}
            blog={blog}
          />
        ))}
      </div>
    </div>
  )
}

export default Blog