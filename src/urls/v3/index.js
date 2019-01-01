export const ACCOUNT_ADD_TO_WATCHLIST = '/account/:id/watchlist';
export const ACCOUNT_DETAILS = '/account';
export const ACCOUNT_FAVORITE_MOVIES = '/account/:id/favorite/movies';
export const ACCOUNT_FAVORITE_TV_SHOWS = '/account/:id/favorite/tv';
export const ACCOUNT_LISTS = '/account/:id/lists';
export const ACCOUNT_MARK_AS_FAVORITE = '/account/:id/favorite';
export const ACCOUNT_MOVIE_WATCHLIST = '/account/:id/watchlist/movies';
export const ACCOUNT_RATED_MOVIES = '/account/:id/rated/movies';
export const ACCOUNT_RATED_TV_SHOWS = '/account/:id/rated/tv';
export const ACCOUNT_RATED_TV_SHOWS_EPISODES = '/account/:id/rated/tv/episodes';
export const ACCOUNT_TV_SHOW_WATCHLIST = '/account/:id/watchlist/tv';
export const AUTHENTICATION_LOGOUT = '/authentication/session';
export const AUTHENTICATION_NEW_GUEST_SESSION =
  '/authentication/guest_session/new';
export const AUTHENTICATION_NEW_SESSION = '/authentication/session/new';
export const AUTHENTICATION_NEW_TOKEN = '/authentication/token/new';
export const AUTHENTICATION_SESSION_CONVERT =
  '/authentication/session/convert/4';
export const AUTHENTICATION_TOKEN_VALIDATE_LOGIN =
  '/authentication/token/validate_with_login';
export const CERTIFICATION_MOVIES = '/certification/movie/list';
export const CERTIFICATION_TV_SHOWS = '/certification/tv/list';
export const CHANGE_MOVIES = '/movie/changes';
export const CHANGE_PERSON = '/person/changes';
export const CHANGE_TV_SHOWS = '/tv/changes';
export const COLLECTION_DETAILS = '/collection/:id';
export const COLLECTION_IMAGES = '/collection/:id/images';
export const COLLECTION_TRANSLATIONS = '/collection/:id/translations';
export const COMPANY_ALTERNATIVE_NAMES = '/company/:id/alternative_names';
export const COMPANY_DETAILS = '/company/:id';
export const COMPANY_IMAGES = '/company/:id/images';
export const CONFIGURATION_API = '/configuration';
export const CONFIGURATION_COUNTRIES = '/configuration/countries';
export const CONFIGURATION_JOBS = '/configuration/jobs';
export const CONFIGURATION_LANGUAGES = '/configuration/languages';
export const CONFIGURATION_PRIMARY_TRANSLATIONS =
  '/configuration/primary_translations';
export const CONFIGURATION_TIMEZONES = '/configuration/timezones';
export const CREDIT_DETAILS = '/credit/:id';
export const DISCOVER_MOVIE = '/discover/movie';
export const DISCOVER_TV_SHOW = '/discover/tv';
export const FIND_EXTERNAL_ID = '/find/:externalId';
export const GENRE_MOVIE_LIST = '/genre/movie/list';
export const GENRE_TV_LIST = '/genre/tv/list';
export const GUEST_SESSION_RATED_MOVIES = '/guest_session/:id/rated/movies';
export const GUEST_SESSION_RATED_TV_EPISODES =
  '/guest_session/:id/rated/tv/episodes';
export const GUEST_SESSION_RATED_TV_SHOWS = '/guest_session/:id/rated/tv';
export const KEYWORD_DETAILS = '/keyword/:id';
export const KEYWORD_MOVIES = '/keyword/:id/movies';
export const LIST_ADD_MOVIE = '/list/:id/add_item';
export const LIST_CLEAR = '/list/:id/clear';
export const LIST_CREATE = '/list';
export const LIST_DELETE = '/list/:id';
export const LIST_DETAILS = '/list/:id';
export const LIST_ITEM_STATUS = '/list/:id/item_status';
export const LIST_REMOVE_MOVIE = '/list/:id/remove_item';
export const MOVIE_ACCOUNT_STATES = '/movie/:id/account_states';
export const MOVIE_ALTERNATIVE_TITLES = '/movie/:id/alternative_titles';
export const MOVIE_CHANGES = '/movie/:id/changes';
export const MOVIE_CREDITS = '/movie/:id/credits';
export const MOVIE_DELETE_RATING = '/movie/:id/rating';
export const MOVIE_DETAILS = '/movie/:id';
export const MOVIE_EXTERNAL_IDS = '/movie/:id/external_ids';
export const MOVIE_IMAGES = '/movie/:id/images';
export const MOVIE_KEYWORDS = '/movie/:id/keywords';
export const MOVIE_LATEST = '/movie/latest';
export const MOVIE_LISTS = '/movie/:id/lists';
export const MOVIE_NOW_PLAYING = '/movie/now_playing';
export const MOVIE_POPULAR = '/movie/popular';
export const MOVIE_RATING = '/movie/:id/rating';
export const MOVIE_RECOMMENDATIONS = '/movie/:id/recommendations';
export const MOVIE_RELEASE_DATES = '/movie/:id/release_dates';
export const MOVIE_REVIEWS = '/movie/:id/reviews';
export const MOVIE_SIMILAR = '/movie/:id/similar';
export const MOVIE_TOP_RATED = '/movie/top_rated';
export const MOVIE_TRANSLATIONS = '/movie/:id/translations';
export const MOVIE_UPCOMING = '/movie/upcoming';
export const MOVIE_VIDEOS = '/movie/:id/videos';
export const NETWORK_DETAILS = '/network/:id';
export const NETWORK_ALTERNATIVE_NAMES = '/network/:id/alternative_names';
export const NETWORK_IMAGES = '/network/:id/images';
export const PEOPLE_CHANGES = '/person/:id/changes';
export const PEOPLE_COMBINED_CREDITS = '/person/:id/combined_credits';
export const PEOPLE_DETAILS = '/person/:id';
export const PEOPLE_EXTERNAL_IDS = '/person/:id/external_ids';
export const PEOPLE_LATEST = '/person/latest';
export const PEOPLE_IMAGES = '/person/:id/images';
export const PEOPLE_MOVIE_CREDITS = '/person/:id/movie_credits';
export const PEOPLE_POPULAR = '/person/popular';
export const PEOPLE_TAGGED_IMAGES = '/person/:id/tagged_images';
export const PEOPLE_TRANSLATIONS = '/person/:id/translations';
export const PEOPLE_TV_CREDITS = '/person/:id/tv_credits';
export const REVIEW_DETAILS = '/review/:id';
export const SEARCH_COLLECTION = '/search/collection';
export const SEARCH_COMPANY = '/search/company';
export const SEARCH_KEYWORD = '/search/keyword';
export const SEARCH_MOVIE = '/search/movie';
export const SEARCH_MULTI = '/search/multi';
export const SEARCH_PEOPLE = '/search/person';
export const SEARCH_TV = '/search/tv';
export const TRENDING_ITEMS = '/trending/:mediaType/:timeWindow';
export const TV_ACCOUNT_STATES = '/tv/:id/account_states';
export const TV_AIRING_TODAY = '/tv/airing_today';
export const TV_ALTERNATIVE_TITLES = '/tv/:id/alternative_titles';
export const TV_CHANGES = '/tv/:id/changes';
export const TV_CONTENT_RATINGS = '/tv/:id/content_ratings';
export const TV_CREDITS = '/tv/:id/credits';
export const TV_DETAILS = '/tv/:id';
export const TV_EPISODE_GROUPS = '/tv/:id/episode_groups';
export const TV_EXTERNAL_IDS = '/tv/:id/external_ids';
export const TV_IMAGES = '/tv/:id/images';
export const TV_KEYWORDS = '/tv/:id/keywords';
export const TV_LATEST = '/tv/latest';
export const TV_ON_THE_AIR = '/tv/on_the_air';
export const TV_POPULAR = '/tv/popular';
export const TV_RATING = '/tv/:id/rating';
export const TV_RECOMMENDATIONS = '/tv/:id/recommendations';
export const TV_REVIEWS = '/tv/:id/reviews';
export const TV_SCREENED_THEATRICALLY = '/tv/:id/screened_theatrically';
export const TV_SIMILAR = '/tv/:id/similar';
export const TV_TOP_RATED = '/tv/top_rated';
export const TV_TRANSLATIONS = '/tv/:id/translations';
export const TV_VIDEOS = '/tv/:id/videos';
export const TV_EPISODE_ACCOUNT_STATES =
  '/tv/:tvId/season/:seasonNumber/episode/:episodeNumber/account_states';
export const TV_EPISODE_CHANGES = '/tv/episode/:episodeId/changes';
export const TV_EPISODE_CREDITS =
  '/tv/:tvId/season/:seasonNumber/episode/:episodeNumber/credits';
export const TV_EPISODE_DETAILS =
  '/tv/:tvId/season/:seasonNumber/episode/:episodeNumber';
export const TV_EPISODE_EXTERNAL_IDS =
  '/tv/:tvId/season/:seasonNumber/episode/:episodeNumber/external_ids';
export const TV_EPISODE_IMAGES =
  '/tv/:tvId/season/:seasonNumber/episode/:episodeNumber/images';
export const TV_EPISODE_RATING =
  '/tv/:tvId/season/:seasonNumber/episode/:episodeNumber/rating';
export const TV_EPISODE_TRANSLATIONS =
  '/tv/:tvId/season/:seasonNumber/episode/:episodeNumber/translations';
export const TV_EPISODE_VIDEOS =
  '/tv/:tvId/season/:seasonNumber/episode/:episodeNumber/videos';
export const TV_EPISODE_GROUP_DETAILS = '/tv/episode_group/:id';
export const TV_SEASON_ACCOUNT_STATES =
  '/tv/:tvId/season/:seasonNumber/account_states';
export const TV_SEASON_CHANGES = '/tv/season/:seasonId/changes';
export const TV_SEASON_CREDITS = '/tv/:tvId/season/:seasonNumber/credits';
export const TV_SEASON_DETAILS = '/tv/:tvId/season/:seasonNumber';
export const TV_SEASON_EXTERNAL_IDS =
  '/tv/:tvId/season/:seasonNumber/external_ids';
export const TV_SEASON_IMAGES = '/tv/:tvId/season/:seasonNumber/images';
export const TV_SEASON_VIDEOS = '/tv/:tvId/season/:seasonNumber/videos';
