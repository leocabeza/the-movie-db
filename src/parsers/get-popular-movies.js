import movie from './shared/movie';
import paging from './shared/paging';

export default data => ({
  paging: paging(data.page, data.total_results, data.total_pages),
  results: data.results.map(result => movie(result)),
});
