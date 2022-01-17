import { gql } from 'graphql-request';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useQuery from '../../hooks/usePosts';
import BlogItem from '../atoms/BlogItem';
import BlogItemSkeleton from '../atoms/BlogItemSkeleton';

const queryGenerator = ({ tag }) => {
  return gql`
    query Post {
      posts(where: { tags: "${tag}" }) {
        id
        slug
        title
        excerpt
      }
    }
  `;
};

const BlogListDetail = () => {
  const { tag } = useParams();
  const {
    data: { posts },
    error,
    loading,
  } = useQuery({ query: queryGenerator({ tag }) });

  useEffect(() => {
    if (tag) {
      document.title = `Tag: ${tag} - Esto's Simple Blog`;
    }
  }, [tag]);
  if (loading) {
    return (
      <>
        <BlogItemSkeleton />
        <BlogItemSkeleton />
        <BlogItemSkeleton />
      </>
    );
  }
  return (
    <>
      <h1 className="font-bold text-2xl mb-6">Tag: {tag}</h1>
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

export default BlogListDetail;
