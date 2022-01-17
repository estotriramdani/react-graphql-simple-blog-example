import { request } from 'graphql-request';

export async function getPosts({ query }) {
  try {
    const URL =
      'https://api-ap-south-1.graphcms.com/v2/ckxvsnb4k08g601we6hfl3uwt/master';
    const data = await request(URL, query);
    return data;
  } catch (error) {
    return error;
  }
}
