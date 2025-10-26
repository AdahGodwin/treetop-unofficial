import classes from "./blog-details.module.scss";
import { useLoaderData } from "react-router";
import { type Blog } from "../shared/data/blog";
import ReactMarkdown from "react-markdown";
//icons
import Calendar from "@/assets/icons/calendar.svg?react";
import Eye from "@/assets/icons/eye.svg?react";

const BlogDetails: React.FC = () => {
  const data = useLoaderData();

  const selectedBlog: Blog = data.blog;
  const formattedDate = selectedBlog.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <div className={classes.container}>
      {selectedBlog && (
        <>
          <div className={classes.header}>
            <h2 className="padding">Blog</h2>
          </div>
          
          <div className={`${classes.crumbs} padding`}>
            <span>All blog posts</span> <i className="fas fa-chevron-right"></i>{" "}
            <span className={classes.activeTitle}>{selectedBlog.title}</span>
          </div>
          
          <div className="padding">
            <div className={classes.blogDetails}>
              <h2>{selectedBlog.title}</h2>

              <div className={classes.meta}>
                <div className={classes.metaItem}>
                  <Calendar width={35} />
                  <span>{formattedDate}</span>
                </div>
                <div className={classes.metaItem}>
                  <Eye className={classes.eyeIcon} width={35} />
                  <span>{selectedBlog.views} views</span>
                </div>
              </div>

              <div className={classes.image}>
                <img src={selectedBlog.imageUrl} alt={selectedBlog.title} />
              </div>
              <div className={classes.markdownContainer}>
                <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
