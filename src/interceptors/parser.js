import parser from '../parser';

export const error = async ({ response }) =>
  await Promise.reject(response.data.status_message);
export const success = async ({ data }) => await parser(data);
export default success;
