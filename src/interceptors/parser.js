import parser from '../parser';

export const error = async error =>
  await Promise.reject(
    typeof error === 'object' ? error.response.data.status_message : error
  );
export const success = async ({ data }) => await parser(data);
