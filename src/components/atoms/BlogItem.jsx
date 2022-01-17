/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ title, excerpt, id }) => {
  return (
    <div className="p-3 border-2 pb-5 duration-150 hover:border-sky-300 mb-3">
      <h2 className="font-medium text-lg">{title}</h2>
      <p
        className="text-sm mb-4 mt-1"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      ></p>
      <Link
        to={`/detail/${id}`}
        className="p-2 text-sm hover:bg-sky-400 duration-150 text-sky-50 bg-sky-500 hover:ring-2 active:ring-2 focus:ring-2 ring-offset-2 ring-sky-300"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogItem;
