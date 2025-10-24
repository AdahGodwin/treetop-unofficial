import type { Blog } from "../../data/blog";
import classes from "./blog-card.module.scss";
import Calendar from "../../../assets/icons/calendar.svg?react";
import Eye from "../../../assets/icons/eye.svg?react";
import Button from "../button/Button";

interface BlogCardProps {
  blog: Blog;
  onReadMore?: (id: number) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  blog,
  onReadMore,
}) => {

    const formattedDate = blog.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <div className={classes.card}>
      <img src={blog.imageUrl} alt={blog.title} className={classes.image} />

        <div className={classes.meta}>
          <div className={classes.metaItem}>
            <Calendar width={20} />
            <span>{formattedDate}</span>
          </div>
          <div className={classes.metaItem}>
            <Eye width={20} fill="green"/>
            <span>{blog.views} views</span>
          </div>
        </div>

        <div className={classes.title}>{blog.title}</div>
        <p className={classes.excerpt}>{blog.excerpt}</p>

        <Button
         bordered={true}
         onClick={() => onReadMore?.(blog.id)}
        >
          Read More &nbsp; &gt;
        </Button>

        <p className={classes.visited}>{blog.visited}</p>
      </div>
    
  );
};

export default BlogCard;
