import { snakeToCamelCase } from '../utils';

export default data => ({
  images: {
    baseUrl: data.images.base_url,
    secureBaseUrl: data.images.secure_base_url,
    backdropSizes: data.images.backdrop_sizes,
    logoSizes: data.images.logo_sizes,
    profileSizes: data.images.profile_sizes,
    stillSizes: data.images.still_sizes,
  },
  changeKeys: data.change_keys.map(changeKey => snakeToCamelCase(changeKey)),
});
