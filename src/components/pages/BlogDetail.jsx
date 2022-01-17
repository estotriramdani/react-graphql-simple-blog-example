import { gql } from 'graphql-request';
import { Link, useParams } from 'react-router-dom';
import useQuery from '../../hooks/usePosts';
import BlogDetailSkeleton from './BlogDetailSkeleton';

const queryGenerator = ({ slug }) => {
  return gql`
    query Post {
      post(where: { slug: "${slug}" }) {
        title
        content {
          html
        }
        slug
        tags
      }
    }
  `;
};

const BlogDetail = () => {
  const { slug } = useParams();
  const {
    data: { post },
    error,
    loading,
  } = useQuery({ query: queryGenerator({ slug }) });

  console.log(post);

  if (loading) {
    return <BlogDetailSkeleton />;
  }

  if (post && !error) {
    return (
      <div>
        <div className="flex mb-3 item-center justify-between">
          <Link
            to="/"
            className="h-8 w-8 flex justify-center items-center bg-sky-400  duration-150 hover:bg-sky-300 text-gray-50 hover:ring-2 active:ring-2 focus:ring-2 ring-offset-2 ring-sky-300"
          >
            &laquo;
          </Link>
          <p>Detail</p>
        </div>
        <h2 className="mb-4 font-bold text-2xl">{post.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: post.content.html }}
          className="mb-3"
        ></div>
        <div>
          <p className="mb-1">Tags</p>
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <Link
                to={`/tags/${tag}`}
                className="bg-sky-400 py-1 px-2 text-sm duration-150 hover:bg-sky-300 text-gray-50 hover:ring-2 active:ring-2 focus:ring-2 ring-offset-2 ring-sky-300 d-inline-block"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default BlogDetail;
