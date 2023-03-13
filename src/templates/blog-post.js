import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  categories,
  helmet,
  featuredimage,
}) => {
  const PostContent = contentComponent || Content;
  console.log(featuredimage);
  return (
    <section className="section">
      {helmet || ""}
      <div className="container">
        <div>
          <h1 className="title has-text-primary post-heading">{title}</h1>
          {featuredimage ? (
            <div className="featured-thumbnail pb-5">
              <PreviewCompatibleImage
                imageInfo={{
                  image: featuredimage,
                  alt: `featured image thumbnail for post ${title}`,
                  width: featuredimage.childImageSharp.gatsbyImageData.width,
                  height: featuredimage.childImageSharp.gatsbyImageData.height,
                }}
              />
            </div>
          ) : null}
          <PostContent content={content} />
          {categories && categories.length ? (
            <div style={{ marginTop: `24px` }}>
              <h4>Categories</h4>
              <ul className="taglist is-flex">
                {categories.map((tag) => (
                  <li key={tag + `tag`}>
                    <Link
                      className=" is-link  read-more"
                      to={`/categories/${kebabCase(tag)}/`}
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {tags && tags.length ? (
            <div style={{ marginTop: `24px` }}>
              <h4>Tags</h4>
              <ul className="taglist is-flex gap-8">
                {tags.map((tag) => (
                  <li key={tag + `tag`}>
                    <Link
                      className=" is-link  read-more"
                      to={`/tags/${kebabCase(tag)}/`}
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        categories={post.frontmatter.categories}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        categories
        featuredimage {
          childImageSharp {
            gatsbyImageData(width: 640, quality: 100, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
