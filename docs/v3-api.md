## Modules

<dl>
<dt><a href="#module_search">search</a></dt>
<dd></dd>
<dt><a href="#module_authentication">authentication</a></dt>
<dd></dd>
<dt><a href="#module_changes">changes</a></dt>
<dd></dd>
<dt><a href="#module_collection">collection</a></dt>
<dd></dd>
<dt><a href="#module_configuration">configuration</a></dt>
<dd></dd>
<dt><a href="#module_find">find</a></dt>
<dd></dd>
<dt><a href="#module_movies">movies</a></dt>
<dd></dd>
<dt><a href="#module_network">network</a></dt>
<dd></dd>
<dt><a href="#module_review">review</a></dt>
<dd></dd>
<dt><a href="#module_search">search</a></dt>
<dd></dd>
<dt><a href="#module_trending">trending</a></dt>
<dd></dd>
</dl>

<a name="module_search"></a>

## search

* [search](#module_search)
    * [.addToWatchlist](#module_search.addToWatchlist) ⇒
    * [.details](#module_search.details) ⇒
    * [.favoriteMovies](#module_search.favoriteMovies) ⇒
    * [.favoriteTvShows](#module_search.favoriteTvShows) ⇒
    * [.lists](#module_search.lists) ⇒
    * [.markAsFavorite](#module_search.markAsFavorite) ⇒
    * [.movieWatchlist](#module_search.movieWatchlist) ⇒
    * [.ratedMovies](#module_search.ratedMovies) ⇒
    * [.ratedTvShows](#module_search.ratedTvShows) ⇒
    * [.ratedTvEpisodes](#module_search.ratedTvEpisodes) ⇒
    * [.tvShowWatchlist](#module_search.tvShowWatchlist) ⇒
    * [.collections](#module_search.collections) ⇒
    * [.companies](#module_search.companies) ⇒
    * [.keywords](#module_search.keywords) ⇒
    * [.movies](#module_search.movies) ⇒
    * [.multi](#module_search.multi) ⇒
    * [.people](#module_search.people) ⇒
    * [.tv](#module_search.tv) ⇒

<a name="module_search.addToWatchlist"></a>

### search.addToWatchlist ⇒
Add a movie or TV show to your watchlist.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/add-to-watchlist  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| sessionId | <code>string</code> | Required |
| body | <code>Object</code> | Required |
| body.mediaType | <code>string</code> | Required - Allowed values: movie, tv |
| body.mediaId | <code>number</code> | Required |
| body.watchlist | <code>boolean</code> | Required |

<a name="module_search.details"></a>

### search.details ⇒
Get your account details.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-account-details  

| Param | Type |
| --- | --- |
| sessionId | <code>string</code> | 

<a name="module_search.favoriteMovies"></a>

### search.favoriteMovies ⇒
Get the list of your favorite movies.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-favorite-movies  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.favoriteTvShows"></a>

### search.favoriteTvShows ⇒
Get the list of your favorite TV shows.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-favorite-tv-shows  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.lists"></a>

### search.lists ⇒
Get all of the lists created by an account. Will invlude private lists if you are the owner.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-created-lists  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="module_search.markAsFavorite"></a>

### search.markAsFavorite ⇒
This method allows you to mark a movie or TV show as a favorite item.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/mark-as-favorite  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| sessionId | <code>string</code> | Required |
| body | <code>Object</code> | Required |
| body.mediaType | <code>string</code> | Required |
| body.mediaId | <code>number</code> | Required |
| body.favorite | <code>boolean</code> | Required |

<a name="module_search.movieWatchlist"></a>

### search.movieWatchlist ⇒
Get a list of all the movies you have added to your watchlist.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-movie-watchlist  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.ratedMovies"></a>

### search.ratedMovies ⇒
Get a list of all the movies you have rated.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-rated-movies  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.ratedTvShows"></a>

### search.ratedTvShows ⇒
Get a list of all the TV shows you have rated.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-rated-tv-shows  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.ratedTvEpisodes"></a>

### search.ratedTvEpisodes ⇒
Get a list of all the TV episodes you have rated.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-rated-tv-episodes  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.tvShowWatchlist"></a>

### search.tvShowWatchlist ⇒
Get a list of all the TV shows you have added to your watchlist.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-tv-show-watchlist  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.collections"></a>

### search.collections ⇒
Search for collections.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/search-collections  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_search.companies"></a>

### search.companies ⇒
Search for companies.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/search-companies  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_search.keywords"></a>

### search.keywords ⇒
Search for keywords.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/search-keywords  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_search.movies"></a>

### search.movies ⇒
Search for movies.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/search-movies  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 
| options.includeAdult | <code>boolean</code> | 
| options.region | <code>string</code> | 
| option.year | <code>number</code> | 
| option.primaryReleaseYear | <code>number</code> | 

<a name="module_search.multi"></a>

### search.multi ⇒
Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/multi-search  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 
| options.includeAdult | <code>boolean</code> | 
| options.region | <code>string</code> | 

<a name="module_search.people"></a>

### search.people ⇒
Search for people.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/search-people  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 
| options.includeAdult | <code>boolean</code> | 
| options.region | <code>string</code> | 

<a name="module_search.tv"></a>

### search.tv ⇒
Search for a TV show.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/search-tv-shows  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 
| options.firstAirDateYear | <code>number</code> | 

<a name="module_authentication"></a>

## authentication

* [authentication](#module_authentication)
    * [.logout](#module_authentication.logout) ⇒
    * [.newGuestSession](#module_authentication.newGuestSession) ⇒
    * [.newSession](#module_authentication.newSession) ⇒
    * [.newToken](#module_authentication.newToken) ⇒
    * [.sessionConvert](#module_authentication.sessionConvert) ⇒
    * [.validateWithLogin](#module_authentication.validateWithLogin) ⇒

<a name="module_authentication.logout"></a>

### authentication.logout ⇒
If you would like to delete (or "logout") from a session, call this method with a valid session ID.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/authentication/delete-session  

| Param | Type |
| --- | --- |
| sessionId | <code>string</code> | 

<a name="module_authentication.newGuestSession"></a>

### authentication.newGuestSession ⇒
This method will let you create a new guest session. Guest sessions are a type of session that will let a user rate movies and TV shows but not require them to have a TMDb user account.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/authentication/create-guest-session  
<a name="module_authentication.newSession"></a>

### authentication.newSession ⇒
You can use this method to create a fully valid session ID once a user has validated the request token.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/authentication/create-session  

| Param | Type |
| --- | --- |
| requestToken | <code>string</code> | 

<a name="module_authentication.newToken"></a>

### authentication.newToken ⇒
Create a temporary request token that can be used to validate a TMDb user login.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/authentication/create-request-token  
<a name="module_authentication.sessionConvert"></a>

### authentication.sessionConvert ⇒
Use this method to create a v3 session ID if you already have a valid v4 access token.
The v4 token needs to be authenticated by the user. Your standard "read token" will not validate to create a session ID.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/authentication/create-session-from-v4-access-token  

| Param | Type |
| --- | --- |
| v4AccessToken | <code>string</code> | 

<a name="module_authentication.validateWithLogin"></a>

### authentication.validateWithLogin ⇒
This method allows an application to validate a request token by entering a username and password.
Not all applications have access to a web view so this can be used as a substitute.
If you decide to use this method please use HTTPS.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/authentication/validate-request-token  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.username | <code>string</code> | 
| options.password | <code>string</code> | 
| options.requestToken | <code>string</code> | 

<a name="module_changes"></a>

## changes

* [changes](#module_changes)
    * [.movies](#module_changes.movies) ⇒
    * [.people](#module_changes.people) ⇒
    * [.tvShows](#module_changes.tvShows) ⇒

<a name="module_changes.movies"></a>

### changes.movies ⇒
Get a list of all of the movie ids that have been changed in the past 24 hours.
You can query it for up to 14 days worth of changed IDs at a time with the startDate and endDate query parameters. 100 items are returned per page.

**Kind**: static constant of [<code>changes</code>](#module_changes)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/changes/get-movie-change-list  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.startDate | <code>string</code> | 
| options.endDate | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_changes.people"></a>

### changes.people ⇒
Get a list of all of the person ids that have been changed in the past 24 hours.
You can query it for up to 14 days worth of changed IDs at a time with the startDate and endDate query parameters. 100 items are returned per page.

**Kind**: static constant of [<code>changes</code>](#module_changes)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/changes/get-person-change-list  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.startDate | <code>string</code> | 
| options.endDate | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_changes.tvShows"></a>

### changes.tvShows ⇒
Get a list of all of the TV show ids that have been changed in the past 24 hours.
You can query it for up to 14 days worth of changed IDs at a time with the startDate and endDate query parameters. 100 items are returned per page.

**Kind**: static constant of [<code>changes</code>](#module_changes)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/changes/get-tv-change-list  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.startDate | <code>string</code> | 
| options.endDate | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_collection"></a>

## collection

* [collection](#module_collection)
    * [.details](#module_collection.details) ⇒
    * [.images](#module_collection.images) ⇒
    * [.translations](#module_collection.translations) ⇒

<a name="module_collection.details"></a>

### collection.details ⇒
Get collection details by id.

**Kind**: static constant of [<code>collection</code>](#module_collection)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/collections/get-collection-details  

| Param | Type |
| --- | --- |
| collectionId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_collection.images"></a>

### collection.images ⇒
Get the images for a collection by id.

**Kind**: static constant of [<code>collection</code>](#module_collection)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/collections/get-collection-images  

| Param | Type |
| --- | --- |
| collectionId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_collection.translations"></a>

### collection.translations ⇒
Get the list translations for a collection by id.

**Kind**: static constant of [<code>collection</code>](#module_collection)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/collections/get-collection-translations  

| Param | Type |
| --- | --- |
| collectionId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_configuration"></a>

## configuration

* [configuration](#module_configuration)
    * [.api](#module_configuration.api) ⇒
    * [.countries](#module_configuration.countries) ⇒
    * [.jobs](#module_configuration.jobs) ⇒
    * [.languages](#module_configuration.languages) ⇒
    * [.primaryTranslations](#module_configuration.primaryTranslations) ⇒
    * [.timezones](#module_configuration.timezones) ⇒

<a name="module_configuration.api"></a>

### configuration.api ⇒
Get the system wide configuration information.

**Kind**: static constant of [<code>configuration</code>](#module_configuration)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/configuration/get-api-configuration  
<a name="module_configuration.countries"></a>

### configuration.countries ⇒
Get the list of countries (ISO 3166-1 tags) used throughout TMDb.

**Kind**: static constant of [<code>configuration</code>](#module_configuration)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/configuration/get-countries  
<a name="module_configuration.jobs"></a>

### configuration.jobs ⇒
Get a list of the jobs and departments we use on TMDb.

**Kind**: static constant of [<code>configuration</code>](#module_configuration)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/configuration/get-jobs  
<a name="module_configuration.languages"></a>

### configuration.languages ⇒
Get the list of languages (ISO 639-1 tags) used throughout TMDb.

**Kind**: static constant of [<code>configuration</code>](#module_configuration)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/configuration/get-languages  
<a name="module_configuration.primaryTranslations"></a>

### configuration.primaryTranslations ⇒
Get a list of the officially supported translations on TMDb.

**Kind**: static constant of [<code>configuration</code>](#module_configuration)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/configuration/get-primary-translations  
<a name="module_configuration.timezones"></a>

### configuration.timezones ⇒
Get the list of timezones used throughout TMDb.

**Kind**: static constant of [<code>configuration</code>](#module_configuration)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/configuration/get-timezones  
<a name="module_find"></a>

## find
<a name="module_find.byId"></a>

### find.byId ⇒
The find method makes it easy to search for objects in our database by an external id. For example, an IMDB ID.
This method will search all objects (movies, TV shows and people) and return the results in a single response.

**Kind**: static constant of [<code>find</code>](#module_find)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/find/find-by-id  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.externalId | <code>string</code> |  |
| options.externalSource | <code>string</code> | Possible values: imdb_id, freebase_mid, freebase_id, tvdb_id, tvrage_id |
| options.language | <code>string</code> |  |

<a name="module_movies"></a>

## movies

* [movies](#module_movies)
    * [.accountStates](#module_movies.accountStates) ⇒
    * [.alternativeTitles](#module_movies.alternativeTitles) ⇒
    * [.changes](#module_movies.changes) ⇒
    * [.credits](#module_movies.credits) ⇒
    * [.deleteRating](#module_movies.deleteRating) ⇒
    * [.details](#module_movies.details) ⇒
    * [.externalIds](#module_movies.externalIds) ⇒
    * [.images](#module_movies.images) ⇒
    * [.keywords](#module_movies.keywords) ⇒
    * [.latest](#module_movies.latest) ⇒
    * [.lists](#module_movies.lists) ⇒
    * [.nowPlaying](#module_movies.nowPlaying)
    * [.popular](#module_movies.popular) ⇒
    * [.rating](#module_movies.rating) ⇒
    * [.recommendations](#module_movies.recommendations) ⇒
    * [.releaseDates](#module_movies.releaseDates) ⇒
    * [.reviews](#module_movies.reviews) ⇒
    * [.similar](#module_movies.similar) ⇒
    * [.topRated](#module_movies.topRated) ⇒
    * [.translations](#module_movies.translations) ⇒
    * [.upcoming](#module_movies.upcoming) ⇒
    * [.videos](#module_movies.videos) ⇒

<a name="module_movies.accountStates"></a>

### movies.accountStates ⇒
Grab the following account states for a session:
- Movie rating
- If it belongs to your watchlist
- If it belongs to your favourite list

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-account-states  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.sessionId | <code>string</code> | 
| options.guestSessionId | <code>string</code> | 

<a name="module_movies.alternativeTitles"></a>

### movies.alternativeTitles ⇒
Get all of the alternative titles for a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-alternative-titles  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.country | <code>string</code> | 

<a name="module_movies.changes"></a>

### movies.changes ⇒
Get the changes for a movie. By default only the last 24 hours are returned.
You can query up to 14 days in a single query by using the startDate and endDate query parameters.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-changes  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.startDate | <code>string</code> | 
| options.endDate | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movies.credits"></a>

### movies.credits ⇒
Get the cast and crew for a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-credits  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movies.deleteRating"></a>

### movies.deleteRating ⇒
Remove your rating for a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/delete-movie-rating  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>\*</code> | 

<a name="module_movies.details"></a>

### movies.details ⇒
Get the primary information about a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-details  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.appendToResponse | <code>string</code> | 

<a name="module_movies.externalIds"></a>

### movies.externalIds ⇒
Get the external ids for a movie.
We currently support the following external sources: IMDB ID, Facebook, Instagram, Twitter.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-external-ids  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movies.images"></a>

### movies.images ⇒
Get the images that belong to a movie.
Querying images with a language parameter will filter the results.
If you want to include a fallback language (especially useful for backdrops) you can use the includeImageLanguage parameter.
This should be a comma separated value like so: { includeImageLanguage: 'en,null' }.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-images  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.includeImageLanguage | <code>string</code> | 

<a name="module_movies.keywords"></a>

### movies.keywords ⇒
Get the keywords that have been added to a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-keywords  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movies.latest"></a>

### movies.latest ⇒
Get the most newly created movie. This is a live response and will continuously change.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-latest-movie  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_movies.lists"></a>

### movies.lists ⇒
**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-lists  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movies.nowPlaying"></a>

### movies.nowPlaying
Get a list of movies in theatres.
This is a release type query that looks for all movies that have a release type
of 2 or 3 within the specified date range.
You can optionally specify a region prameter which will narrow the search
to only look for theatrical release dates within the specified country.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-now-playing  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 
| options.region | <code>string</code> | 

<a name="module_movies.popular"></a>

### movies.popular ⇒
Get a list of the current popular movies on TMDb.
This list updates daily.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-popular-movies  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 
| options.region | <code>string</code> | 

<a name="module_movies.rating"></a>

### movies.rating ⇒
Rate a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/rate-movie  

| Param | Type | Description |
| --- | --- | --- |
| movieId | <code>number</code> |  |
| rating | <code>rating</code> | between 0.5 and 10.0 |
| options | <code>Object</code> |  |
| guestSessionId | <code>string</code> |  |
| sessionId | <code>string</code> |  |

<a name="module_movies.recommendations"></a>

### movies.recommendations ⇒
Get a list of recommended movies for a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-recommendations  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movies.releaseDates"></a>

### movies.releaseDates ⇒
Get the release date along with the certification for a movie.
Release dates support different types:
- Premiere
- Theatrical (limited)
- Theatrical
- Digital
- Physical
- TV

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-release-dates  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movies.reviews"></a>

### movies.reviews ⇒
Get the user reviews for a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-reviews  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movies.similar"></a>

### movies.similar ⇒
Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
These items are assembled by looking at keywords and genres.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-similar-movies  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movies.topRated"></a>

### movies.topRated ⇒
Get the top rated movies on TMDb.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-top-rated-movies  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 
| options.region | <code>string</code> | 

<a name="module_movies.translations"></a>

### movies.translations ⇒
Get a list of translations that have been created for a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-translations  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movies.upcoming"></a>

### movies.upcoming ⇒
Get a list of upcoming movies in theatres.
This is a release type query that looks for all movies that
have a release type of 2 or 3 within the specified date range.
You can optionally specify a region parameter which will narrow the search to only look
for theatrical release dates within the specified country.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-upcoming  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 
| options.region | <code>string</code> | 

<a name="module_movies.videos"></a>

### movies.videos ⇒
Get the videos that have been added to a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-videos  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_network"></a>

## network

* [network](#module_network)
    * [.details](#module_network.details) ⇒
    * [.alternativeNames](#module_network.alternativeNames) ⇒
    * [.images](#module_network.images) ⇒

<a name="module_network.details"></a>

### network.details ⇒
Get the details of a network.

**Kind**: static constant of [<code>network</code>](#module_network)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/networks/get-network-details  

| Param | Type |
| --- | --- |
| networkId | <code>number</code> | 

<a name="module_network.alternativeNames"></a>

### network.alternativeNames ⇒
Get the alternative names of a network.

**Kind**: static constant of [<code>network</code>](#module_network)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/networks/get-network-alternative-names  

| Param | Type |
| --- | --- |
| networkId | <code>number</code> | 

<a name="module_network.images"></a>

### network.images ⇒
Get the TV network logos by id.
There are two image formats that are supported for networks, PNG's and SVG's.
You can see which type the original file is by looking at the fileType field.
We prefer SVG's as they are resolution independent and as such, the width and height are only
there to reflect the original asset that was uploaded.
An SVG can be scaled properly beyond those dimensions if you call them as a PNG.

**Kind**: static constant of [<code>network</code>](#module_network)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/networks/get-network-images  

| Param | Type |
| --- | --- |
| networkId | <code>\*</code> | 

<a name="module_review"></a>

## review
<a name="module_review.details"></a>

### review.details ⇒
Get details of a review.

**Kind**: static constant of [<code>review</code>](#module_review)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/reviews/get-review-details  

| Param | Type |
| --- | --- |
| reviewId | <code>string</code> | 

<a name="module_search"></a>

## search

* [search](#module_search)
    * [.addToWatchlist](#module_search.addToWatchlist) ⇒
    * [.details](#module_search.details) ⇒
    * [.favoriteMovies](#module_search.favoriteMovies) ⇒
    * [.favoriteTvShows](#module_search.favoriteTvShows) ⇒
    * [.lists](#module_search.lists) ⇒
    * [.markAsFavorite](#module_search.markAsFavorite) ⇒
    * [.movieWatchlist](#module_search.movieWatchlist) ⇒
    * [.ratedMovies](#module_search.ratedMovies) ⇒
    * [.ratedTvShows](#module_search.ratedTvShows) ⇒
    * [.ratedTvEpisodes](#module_search.ratedTvEpisodes) ⇒
    * [.tvShowWatchlist](#module_search.tvShowWatchlist) ⇒
    * [.collections](#module_search.collections) ⇒
    * [.companies](#module_search.companies) ⇒
    * [.keywords](#module_search.keywords) ⇒
    * [.movies](#module_search.movies) ⇒
    * [.multi](#module_search.multi) ⇒
    * [.people](#module_search.people) ⇒
    * [.tv](#module_search.tv) ⇒

<a name="module_search.addToWatchlist"></a>

### search.addToWatchlist ⇒
Add a movie or TV show to your watchlist.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/add-to-watchlist  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| sessionId | <code>string</code> | Required |
| body | <code>Object</code> | Required |
| body.mediaType | <code>string</code> | Required - Allowed values: movie, tv |
| body.mediaId | <code>number</code> | Required |
| body.watchlist | <code>boolean</code> | Required |

<a name="module_search.details"></a>

### search.details ⇒
Get your account details.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-account-details  

| Param | Type |
| --- | --- |
| sessionId | <code>string</code> | 

<a name="module_search.favoriteMovies"></a>

### search.favoriteMovies ⇒
Get the list of your favorite movies.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-favorite-movies  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.favoriteTvShows"></a>

### search.favoriteTvShows ⇒
Get the list of your favorite TV shows.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-favorite-tv-shows  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.lists"></a>

### search.lists ⇒
Get all of the lists created by an account. Will invlude private lists if you are the owner.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-created-lists  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="module_search.markAsFavorite"></a>

### search.markAsFavorite ⇒
This method allows you to mark a movie or TV show as a favorite item.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/mark-as-favorite  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| sessionId | <code>string</code> | Required |
| body | <code>Object</code> | Required |
| body.mediaType | <code>string</code> | Required |
| body.mediaId | <code>number</code> | Required |
| body.favorite | <code>boolean</code> | Required |

<a name="module_search.movieWatchlist"></a>

### search.movieWatchlist ⇒
Get a list of all the movies you have added to your watchlist.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-movie-watchlist  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.ratedMovies"></a>

### search.ratedMovies ⇒
Get a list of all the movies you have rated.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-rated-movies  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.ratedTvShows"></a>

### search.ratedTvShows ⇒
Get a list of all the TV shows you have rated.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-rated-tv-shows  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.ratedTvEpisodes"></a>

### search.ratedTvEpisodes ⇒
Get a list of all the TV episodes you have rated.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-rated-tv-episodes  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.tvShowWatchlist"></a>

### search.tvShowWatchlist ⇒
Get a list of all the TV shows you have added to your watchlist.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/account/get-tv-show-watchlist  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>integer</code> | Required |
| options | <code>Object</code> |  |
| options.sessionId | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sortBy | <code>string</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_search.collections"></a>

### search.collections ⇒
Search for collections.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/search-collections  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_search.companies"></a>

### search.companies ⇒
Search for companies.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/search-companies  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_search.keywords"></a>

### search.keywords ⇒
Search for keywords.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/search-keywords  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_search.movies"></a>

### search.movies ⇒
Search for movies.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/search-movies  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 
| options.includeAdult | <code>boolean</code> | 
| options.region | <code>string</code> | 
| option.year | <code>number</code> | 
| option.primaryReleaseYear | <code>number</code> | 

<a name="module_search.multi"></a>

### search.multi ⇒
Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/multi-search  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 
| options.includeAdult | <code>boolean</code> | 
| options.region | <code>string</code> | 

<a name="module_search.people"></a>

### search.people ⇒
Search for people.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/search-people  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 
| options.includeAdult | <code>boolean</code> | 
| options.region | <code>string</code> | 

<a name="module_search.tv"></a>

### search.tv ⇒
Search for a TV show.

**Kind**: static constant of [<code>search</code>](#module_search)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/search/search-tv-shows  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 
| options.firstAirDateYear | <code>number</code> | 

<a name="module_trending"></a>

## trending
<a name="module_trending.items"></a>

### trending.items ⇒
Get the daily or weekly trending items. The daily trending list tracks items over the period of a day while items have a 24 hour half life. The weekly list tracks items over a 7 day period, with a 7 day half life.

**Kind**: static constant of [<code>trending</code>](#module_trending)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/3/trending/get-trending  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.mediaType | <code>string</code> | Allowed values: all, movie, tv, person |
| options.timeWindow | <code>string</code> | Allowed values: day, week |

