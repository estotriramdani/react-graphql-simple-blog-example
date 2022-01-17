import { gql } from 'graphql-request';
import useQuery from '../../hooks/usePosts';
import BlogItem from '../atoms/BlogItem';
import BlogItemSkeleton from '../atoms/BlogItemSkeleton';

const query = gql`
  query Post {
    posts {
      slug
      title
      excerpt
    }
  }
`;
const BlogList = () => {
  const {
    data: { posts },
    error,
    loading,
  } = useQuery({ query });
  return (
    <>
      <h1 className="font-bold text-2xl mb-6">Esto's Simple Blog</h1>
      <div className="mt-4">
        {loading && [1, 2, 3].map((item) => <BlogItemSkeleton key={item} />)}
        {posts &&
          !error &&
          posts.map(({ slug, title, excerpt }) => (
            <BlogItem key={slug} id={slug} excerpt={excerpt} title={title} />
          ))}
      </div>
    </>
  );
};

export default BlogList;
