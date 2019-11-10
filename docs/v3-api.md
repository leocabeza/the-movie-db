## Modules

<dl>
<dt><a href="#module_account">account</a></dt>
<dd></dd>
<dt><a href="#module_authentication">authentication</a></dt>
<dd></dd>
<dt><a href="#module_certification">certification</a></dt>
<dd></dd>
<dt><a href="#module_changes">changes</a></dt>
<dd></dd>
<dt><a href="#module_collection">collection</a></dt>
<dd></dd>
<dt><a href="#module_company">company</a></dt>
<dd></dd>
<dt><a href="#module_configuration">configuration</a></dt>
<dd></dd>
<dt><a href="#module_credit">credit</a></dt>
<dd></dd>
<dt><a href="#module_discover">discover</a></dt>
<dd></dd>
<dt><a href="#module_find">find</a></dt>
<dd></dd>
<dt><a href="#module_genre">genre</a></dt>
<dd></dd>
<dt><a href="#module_guestSession">guestSession</a></dt>
<dd></dd>
<dt><a href="#module_keyword">keyword</a></dt>
<dd></dd>
<dt><a href="#module_list">list</a></dt>
<dd></dd>
<dt><a href="#module_movies">movies</a></dt>
<dd></dd>
<dt><a href="#module_network">network</a></dt>
<dd></dd>
<dt><a href="#module_people">people</a></dt>
<dd></dd>
<dt><a href="#module_review">review</a></dt>
<dd></dd>
<dt><a href="#module_search">search</a></dt>
<dd></dd>
<dt><a href="#module_trending">trending</a></dt>
<dd></dd>
<dt><a href="#module_tvEpisodeGroup">tvEpisodeGroup</a></dt>
<dd></dd>
<dt><a href="#module_tvEpisode">tvEpisode</a></dt>
<dd></dd>
<dt><a href="#module_tvSeason">tvSeason</a></dt>
<dd></dd>
<dt><a href="#module_tv">tv</a></dt>
<dd></dd>
</dl>

<a name="module_account"></a>

## account

* [account](#module_account)
    * [.addToWatchlist](#module_account.addToWatchlist) ⇒ <code>Promise</code>
    * [.details](#module_account.details) ⇒ <code>Promise</code>
    * [.favoriteMovies](#module_account.favoriteMovies) ⇒ <code>Promise</code>
    * [.favoriteTvShows](#module_account.favoriteTvShows) ⇒ <code>Promise</code>
    * [.lists](#module_account.lists) ⇒ <code>Promise</code>
    * [.markAsFavorite](#module_account.markAsFavorite) ⇒ <code>Promise</code>
    * [.movieWatchlist](#module_account.movieWatchlist) ⇒ <code>Promise</code>
    * [.ratedMovies](#module_account.ratedMovies) ⇒ <code>Promise</code>
    * [.ratedTvShows](#module_account.ratedTvShows) ⇒ <code>Promise</code>
    * [.ratedTvEpisodes](#module_account.ratedTvEpisodes) ⇒ <code>Promise</code>
    * [.tvShowWatchlist](#module_account.tvShowWatchlist) ⇒ <code>Promise</code>

<a name="module_account.addToWatchlist"></a>

### account.addToWatchlist ⇒ <code>Promise</code>
Add a movie or TV show to your watchlist.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/3/account/add-to-watchlist  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| sessionId | <code>string</code> | Required |
| body | <code>Object</code> | Required |
| body.media_type | <code>&#x27;movie&#x27;</code> \| <code>&#x27;tv&#x27;</code> | Required - Allowed values: movie, tv |
| body.media_id | <code>number</code> | Required |
| body.watchlist | <code>boolean</code> | Required |

<a name="module_account.details"></a>

### account.details ⇒ <code>Promise</code>
Get your account details.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/3/account/get-account-details  

| Param | Type |
| --- | --- |
| sessionId | <code>string</code> | 

<a name="module_account.favoriteMovies"></a>

### account.favoriteMovies ⇒ <code>Promise</code>
Get the list of your favorite movies.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/3/account/get-favorite-movies  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_account.favoriteTvShows"></a>

### account.favoriteTvShows ⇒ <code>Promise</code>
Get the list of your favorite TV shows.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/3/account/get-favorite-tv-shows  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_account.lists"></a>

### account.lists ⇒ <code>Promise</code>
Get all of the lists created by an account. Will invlude private lists if you are the owner.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/3/account/get-created-lists  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="module_account.markAsFavorite"></a>

### account.markAsFavorite ⇒ <code>Promise</code>
This method allows you to mark a movie or TV show as a favorite item.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/3/account/mark-as-favorite  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| sessionId | <code>string</code> | Required |
| body | <code>Object</code> | Required |
| body.media_type | <code>&#x27;movie&#x27;</code> \| <code>&#x27;tv&#x27;</code> | Required |
| body.media_id | <code>number</code> | Required |
| body.favorite | <code>boolean</code> | Required |

<a name="module_account.movieWatchlist"></a>

### account.movieWatchlist ⇒ <code>Promise</code>
Get a list of all the movies you have added to your watchlist.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/3/account/get-movie-watchlist  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_account.ratedMovies"></a>

### account.ratedMovies ⇒ <code>Promise</code>
Get a list of all the movies you have rated.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/3/account/get-rated-movies  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_account.ratedTvShows"></a>

### account.ratedTvShows ⇒ <code>Promise</code>
Get a list of all the TV shows you have rated.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/3/account/get-rated-tv-shows  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_account.ratedTvEpisodes"></a>

### account.ratedTvEpisodes ⇒ <code>Promise</code>
Get a list of all the TV episodes you have rated.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/3/account/get-rated-tv-episodes  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_account.tvShowWatchlist"></a>

### account.tvShowWatchlist ⇒ <code>Promise</code>
Get a list of all the TV shows you have added to your watchlist.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/3/account/get-tv-show-watchlist  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_authentication"></a>

## authentication

* [authentication](#module_authentication)
    * [.logout](#module_authentication.logout) ⇒ <code>Promise</code>
    * [.newGuestSession](#module_authentication.newGuestSession) ⇒ <code>Promise</code>
    * [.newSession](#module_authentication.newSession) ⇒ <code>Promise</code>
    * [.newToken](#module_authentication.newToken) ⇒ <code>Promise</code>
    * [.sessionConvert](#module_authentication.sessionConvert) ⇒ <code>Promise</code>
    * [.validateWithLogin](#module_authentication.validateWithLogin) ⇒ <code>Promise</code>

<a name="module_authentication.logout"></a>

### authentication.logout ⇒ <code>Promise</code>
If you would like to delete (or "logout") from a session, call this method with a valid session ID.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**See**: https://developers.themoviedb.org/3/authentication/delete-session  

| Param | Type |
| --- | --- |
| sessionId | <code>string</code> | 

<a name="module_authentication.newGuestSession"></a>

### authentication.newGuestSession ⇒ <code>Promise</code>
This method will let you create a new guest session. Guest sessions are a type of session that will let a user rate movies and TV shows but not require them to have a TMDb user account.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**See**: https://developers.themoviedb.org/3/authentication/create-guest-session  
<a name="module_authentication.newSession"></a>

### authentication.newSession ⇒ <code>Promise</code>
You can use this method to create a fully valid session ID once a user has validated the request token.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**See**: https://developers.themoviedb.org/3/authentication/create-session  

| Param | Type |
| --- | --- |
| requestToken | <code>string</code> | 

<a name="module_authentication.newToken"></a>

### authentication.newToken ⇒ <code>Promise</code>
Create a temporary request token that can be used to validate a TMDb user login.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**See**: https://developers.themoviedb.org/3/authentication/create-request-token  
<a name="module_authentication.sessionConvert"></a>

### authentication.sessionConvert ⇒ <code>Promise</code>
Use this method to create a v3 session ID if you already have a valid v4 access token.
The v4 token needs to be authenticated by the user. Your standard "read token" will not validate to create a session ID.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**See**: https://developers.themoviedb.org/3/authentication/create-session-from-v4-access-token  

| Param | Type |
| --- | --- |
| v4AccessToken | <code>string</code> | 

<a name="module_authentication.validateWithLogin"></a>

### authentication.validateWithLogin ⇒ <code>Promise</code>
This method allows an application to validate a request token by entering a username and password.
Not all applications have access to a web view so this can be used as a substitute.
If you decide to use this method please use HTTPS.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**See**: https://developers.themoviedb.org/3/authentication/validate-request-token  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.username | <code>string</code> | 
| options.password | <code>string</code> | 
| options.request_token | <code>string</code> | 

<a name="module_certification"></a>

## certification

* [certification](#module_certification)
    * [.movies](#module_certification.movies) ⇒ <code>Promise</code>
    * [.tvShows](#module_certification.tvShows) ⇒ <code>Promise</code>

<a name="module_certification.movies"></a>

### certification.movies ⇒ <code>Promise</code>
Get an up to date list of the officially supported movie certifications on TMDb.

**Kind**: static constant of [<code>certification</code>](#module_certification)  
**See**: https://developers.themoviedb.org/3/certifications/get-movie-certifications  
<a name="module_certification.tvShows"></a>

### certification.tvShows ⇒ <code>Promise</code>
Get an up to date list of the officially supported TV show certifications on TMDb.

**Kind**: static constant of [<code>certification</code>](#module_certification)  
**See**: https://developers.themoviedb.org/3/certifications/get-tv-certifications  
<a name="module_changes"></a>

## changes

* [changes](#module_changes)
    * [.movies](#module_changes.movies) ⇒ <code>Promise</code>
    * [.people](#module_changes.people) ⇒ <code>Promise</code>
    * [.tvShows](#module_changes.tvShows) ⇒ <code>Promise</code>

<a name="module_changes.movies"></a>

### changes.movies ⇒ <code>Promise</code>
Get a list of all of the movie ids that have been changed in the past 24 hours.
You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.

**Kind**: static constant of [<code>changes</code>](#module_changes)  
**See**: https://developers.themoviedb.org/3/changes/get-movie-change-list  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.start_date | <code>string</code> | 
| options.end_date | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_changes.people"></a>

### changes.people ⇒ <code>Promise</code>
Get a list of all of the person ids that have been changed in the past 24 hours.
You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.

**Kind**: static constant of [<code>changes</code>](#module_changes)  
**See**: https://developers.themoviedb.org/3/changes/get-person-change-list  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.start_date | <code>string</code> | 
| options.end_date | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_changes.tvShows"></a>

### changes.tvShows ⇒ <code>Promise</code>
Get a list of all of the TV show ids that have been changed in the past 24 hours.
You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.

**Kind**: static constant of [<code>changes</code>](#module_changes)  
**See**: https://developers.themoviedb.org/3/changes/get-tv-change-list  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.start_date | <code>string</code> | 
| options.end_date | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_collection"></a>

## collection

* [collection](#module_collection)
    * [.details](#module_collection.details) ⇒ <code>Promise</code>
    * [.images](#module_collection.images) ⇒ <code>Promise</code>
    * [.translations](#module_collection.translations) ⇒ <code>Promise</code>

<a name="module_collection.details"></a>

### collection.details ⇒ <code>Promise</code>
Get collection details by id.

**Kind**: static constant of [<code>collection</code>](#module_collection)  
**See**: https://developers.themoviedb.org/3/collections/get-collection-details  

| Param | Type |
| --- | --- |
| collectionId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_collection.images"></a>

### collection.images ⇒ <code>Promise</code>
Get the images for a collection by id.

**Kind**: static constant of [<code>collection</code>](#module_collection)  
**See**: https://developers.themoviedb.org/3/collections/get-collection-images  

| Param | Type |
| --- | --- |
| collectionId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_collection.translations"></a>

### collection.translations ⇒ <code>Promise</code>
Get the list translations for a collection by id.

**Kind**: static constant of [<code>collection</code>](#module_collection)  
**See**: https://developers.themoviedb.org/3/collections/get-collection-translations  

| Param | Type |
| --- | --- |
| collectionId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_company"></a>

## company

* [company](#module_company)
    * [.alternativeNames](#module_company.alternativeNames) ⇒ <code>Promise</code>
    * [.details](#module_company.details) ⇒ <code>Promise</code>
    * [.images](#module_company.images) ⇒ <code>Promise</code>

<a name="module_company.alternativeNames"></a>

### company.alternativeNames ⇒ <code>Promise</code>
Get the alternative names of a company.

**Kind**: static constant of [<code>company</code>](#module_company)  
**See**: https://developers.themoviedb.org/3/companies/get-company-alternative-names  

| Param | Type |
| --- | --- |
| companyId | <code>number</code> | 

<a name="module_company.details"></a>

### company.details ⇒ <code>Promise</code>
Get a companies details by id.

**Kind**: static constant of [<code>company</code>](#module_company)  
**See**: https://developers.themoviedb.org/3/companies/get-company-details  

| Param | Type |
| --- | --- |
| companyId | <code>number</code> | 

<a name="module_company.images"></a>

### company.images ⇒ <code>Promise</code>
Get a companies logos by id.
There are two image formats that are supported for companies, PNG"s and SVG"s.
You can see which type the original file is by looking at the file_type field.
We prefer SVG"s as they are resolution independent and as such, the width and height are only
there to reflect the original asset that was uploaded.
An SVG can be scaled properly beyond those dimensions if you call them as a PNG.

**Kind**: static constant of [<code>company</code>](#module_company)  
**See**: https://developers.themoviedb.org/3/companies/get-company-images  

| Param | Type |
| --- | --- |
| companyId | <code>number</code> | 

<a name="module_configuration"></a>

## configuration

* [configuration](#module_configuration)
    * [.api](#module_configuration.api) ⇒ <code>Promise</code>
    * [.countries](#module_configuration.countries) ⇒ <code>Promise</code>
    * [.jobs](#module_configuration.jobs) ⇒ <code>Promise</code>
    * [.languages](#module_configuration.languages) ⇒ <code>Promise</code>
    * [.primaryTranslations](#module_configuration.primaryTranslations) ⇒ <code>Promise</code>
    * [.timezones](#module_configuration.timezones) ⇒ <code>Promise</code>

<a name="module_configuration.api"></a>

### configuration.api ⇒ <code>Promise</code>
Get the system wide configuration information.

**Kind**: static constant of [<code>configuration</code>](#module_configuration)  
**See**: https://developers.themoviedb.org/3/configuration/get-api-configuration  
<a name="module_configuration.countries"></a>

### configuration.countries ⇒ <code>Promise</code>
Get the list of countries (ISO 3166-1 tags) used throughout TMDb.

**Kind**: static constant of [<code>configuration</code>](#module_configuration)  
**See**: https://developers.themoviedb.org/3/configuration/get-countries  
<a name="module_configuration.jobs"></a>

### configuration.jobs ⇒ <code>Promise</code>
Get a list of the jobs and departments we use on TMDb.

**Kind**: static constant of [<code>configuration</code>](#module_configuration)  
**See**: https://developers.themoviedb.org/3/configuration/get-jobs  
<a name="module_configuration.languages"></a>

### configuration.languages ⇒ <code>Promise</code>
Get the list of languages (ISO 639-1 tags) used throughout TMDb.

**Kind**: static constant of [<code>configuration</code>](#module_configuration)  
**See**: https://developers.themoviedb.org/3/configuration/get-languages  
<a name="module_configuration.primaryTranslations"></a>

### configuration.primaryTranslations ⇒ <code>Promise</code>
Get a list of the officially supported translations on TMDb.

**Kind**: static constant of [<code>configuration</code>](#module_configuration)  
**See**: https://developers.themoviedb.org/3/configuration/get-primary-translations  
<a name="module_configuration.timezones"></a>

### configuration.timezones ⇒ <code>Promise</code>
Get the list of timezones used throughout TMDb.

**Kind**: static constant of [<code>configuration</code>](#module_configuration)  
**See**: https://developers.themoviedb.org/3/configuration/get-timezones  
<a name="module_credit"></a>

## credit
<a name="module_credit.details"></a>

### credit.details ⇒ <code>Promise</code>
Get a movie or TV credit details by id.

**Kind**: static constant of [<code>credit</code>](#module_credit)  
**See**: https://developers.themoviedb.org/3/credits/get-credit-details  
<a name="module_discover"></a>

## discover

* [discover](#module_discover)
    * [.movie](#module_discover.movie) ⇒ <code>Promise</code>
    * [.tvShows](#module_discover.tvShows) ⇒ <code>Promise</code>

<a name="module_discover.movie"></a>

### discover.movie ⇒ <code>Promise</code>
Discover movies by different types of data like average rating,
number of votes, genres and certifications.
For a full list of options, see https://developers.themoviedb.org/3/discover/movie-discover

**Kind**: static constant of [<code>discover</code>](#module_discover)  
**See**: https://developers.themoviedb.org/3/discover/movie-discover  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="module_discover.tvShows"></a>

### discover.tvShows ⇒ <code>Promise</code>
Discover TV shows by different types of data like average rating, number of votes, genres, the network they aired on and air dates.
For a full list of options, see https://developers.themoviedb.org/3/discover/tv-discover

**Kind**: static constant of [<code>discover</code>](#module_discover)  
**See**: https://developers.themoviedb.org/3/discover/tv-discover  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="module_find"></a>

## find
<a name="module_find.byId"></a>

### find.byId ⇒ <code>Promise</code>
The find method makes it easy to search for objects in our database by an external id. For example, an IMDB ID.
This method will search all objects (movies, TV shows and people) and return the results in a single response.

**Kind**: static constant of [<code>find</code>](#module_find)  
**See**: https://developers.themoviedb.org/3/find/find-by-id  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.external_id | <code>string</code> |  |
| options.external_source | <code>string</code> | Possible values: imdb_id, freebase_mid, freebase_id, tvdb_id, tvrage_id |
| options.language | <code>string</code> |  |

<a name="module_genre"></a>

## genre

* [genre](#module_genre)
    * [.movieList](#module_genre.movieList) ⇒ <code>Promise</code>
    * [.tvList](#module_genre.tvList) ⇒ <code>Promise</code>

<a name="module_genre.movieList"></a>

### genre.movieList ⇒ <code>Promise</code>
Get the list of official genres for movies.

**Kind**: static constant of [<code>genre</code>](#module_genre)  
**See**: https://developers.themoviedb.org/3/genres/get-movie-list  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_genre.tvList"></a>

### genre.tvList ⇒ <code>Promise</code>
Get the list of official genres for TV shows.

**Kind**: static constant of [<code>genre</code>](#module_genre)  
**See**: https://developers.themoviedb.org/3/genres/get-tv-list  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_guestSession"></a>

## guestSession

* [guestSession](#module_guestSession)
    * [.ratedMovies](#module_guestSession.ratedMovies) ⇒ <code>Promise</code>
    * [.ratedTvEpisodes](#module_guestSession.ratedTvEpisodes) ⇒ <code>Promise</code>
    * [.ratedTvShows](#module_guestSession.ratedTvShows) ⇒ <code>Promise</code>

<a name="module_guestSession.ratedMovies"></a>

### guestSession.ratedMovies ⇒ <code>Promise</code>
Get the rated movies for a guest session.

**Kind**: static constant of [<code>guestSession</code>](#module_guestSession)  
**See**: https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-movies  

| Param | Type | Description |
| --- | --- | --- |
| guestSessionId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_guestSession.ratedTvEpisodes"></a>

### guestSession.ratedTvEpisodes ⇒ <code>Promise</code>
Get the rated TV episodes for a guest session.

**Kind**: static constant of [<code>guestSession</code>](#module_guestSession)  
**See**: https://developers.themoviedb.org/3/guest-sessions/get-gest-session-rated-tv-episodes  

| Param | Type | Description |
| --- | --- | --- |
| guestSessionId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_guestSession.ratedTvShows"></a>

### guestSession.ratedTvShows ⇒ <code>Promise</code>
Get the rated TV shows for a guest session.

**Kind**: static constant of [<code>guestSession</code>](#module_guestSession)  
**See**: https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-shows  

| Param | Type | Description |
| --- | --- | --- |
| guestSessionId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc |

<a name="module_keyword"></a>

## keyword

* [keyword](#module_keyword)
    * [.details](#module_keyword.details) ⇒ <code>Promise</code>
    * [.movies](#module_keyword.movies) ⇒ <code>Promise</code>

<a name="module_keyword.details"></a>

### keyword.details ⇒ <code>Promise</code>
Get details of keyword

**Kind**: static constant of [<code>keyword</code>](#module_keyword)  
**See**: https://developers.themoviedb.org/3/keywords/get-keyword-details  

| Param | Type | Description |
| --- | --- | --- |
| keywordId | <code>number</code> | Required |

<a name="module_keyword.movies"></a>

### keyword.movies ⇒ <code>Promise</code>
Get the movies that belong to a keyword.

**Kind**: static constant of [<code>keyword</code>](#module_keyword)  
**See**: https://developers.themoviedb.org/3/keywords/get-movies-by-keyword  

| Param | Type | Description |
| --- | --- | --- |
| keywordId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.include_adult | <code>boolean</code> |  |

<a name="module_list"></a>

## list

* [list](#module_list)
    * [.addMovie](#module_list.addMovie) ⇒ <code>Promise</code>
    * [.clear](#module_list.clear) ⇒ <code>Promise</code>
    * [.create](#module_list.create) ⇒ <code>Promise</code>
    * [.details](#module_list.details) ⇒ <code>Promise</code>
    * [.itemStatus](#module_list.itemStatus) ⇒ <code>Promise</code>
    * [.remove](#module_list.remove) ⇒ <code>Promise</code>
    * [.removeMovie](#module_list.removeMovie) ⇒ <code>Promise</code>

<a name="module_list.addMovie"></a>

### list.addMovie ⇒ <code>Promise</code>
Add a movie to a list.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/3/lists/add-movie  

| Param | Type | Description |
| --- | --- | --- |
| listId | <code>string</code> \| <code>number</code> | Required |
| sessionId | <code>string</code> | Required |
| body | <code>Object</code> | Required |
| body.media_id | <code>number</code> | Required |

<a name="module_list.clear"></a>

### list.clear ⇒ <code>Promise</code>
Clear all of the items from a list.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/3/lists/clear-list  

| Param | Type | Description |
| --- | --- | --- |
| listId | <code>string</code> | Required |
| options | <code>Object</code> | Required |
| options.session_id | <code>string</code> | Required |
| options.confirm | <code>boolean</code> | Required |

<a name="module_list.create"></a>

### list.create ⇒ <code>Promise</code>
Create a list.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/3/lists/create-list  

| Param | Type | Description |
| --- | --- | --- |
| sessionId | <code>string</code> | Required |
| body | <code>Object</code> |  |
| body.name | <code>string</code> |  |
| body.description | <code>string</code> |  |
| body.language | <code>string</code> |  |

<a name="module_list.details"></a>

### list.details ⇒ <code>Promise</code>
Get the details of a list.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/3/lists/get-list-details  

| Param | Type | Description |
| --- | --- | --- |
| listId | <code>number</code> \| <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_list.itemStatus"></a>

### list.itemStatus ⇒ <code>Promise</code>
You can use this method to check if a movie has already been added to the list.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/3/lists/check-item-status  

| Param | Type | Description |
| --- | --- | --- |
| listId | <code>number</code> \| <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.movieId | <code>string</code> | Required |

<a name="module_list.remove"></a>

### list.remove ⇒ <code>Promise</code>
Delete a list.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/3/lists/delete-list  

| Param | Type | Description |
| --- | --- | --- |
| listId | <code>string</code> | Required |
| options | <code>Object</code> | Required |
| options.session_id | <code>string</code> | Required |

<a name="module_list.removeMovie"></a>

### list.removeMovie ⇒ <code>Promise</code>
Remove a movie from a list.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/3/lists/remove-movie  

| Param | Type | Description |
| --- | --- | --- |
| listId | <code>string</code> \| <code>number</code> | Required |
| sessionId | <code>string</code> | Required |
| body | <code>Object</code> | Required |
| body.media_id | <code>number</code> | Required |

<a name="module_movies"></a>

## movies

* [movies](#module_movies)
    * [.accountStates](#module_movies.accountStates) ⇒ <code>Promise</code>
    * [.alternativeTitles](#module_movies.alternativeTitles) ⇒ <code>Promise</code>
    * [.changes](#module_movies.changes) ⇒ <code>Promise</code>
    * [.credits](#module_movies.credits) ⇒ <code>Promise</code>
    * [.deleteRating](#module_movies.deleteRating) ⇒ <code>Promise</code>
    * [.details](#module_movies.details) ⇒ <code>Promise</code>
    * [.externalIds](#module_movies.externalIds) ⇒ <code>Promise</code>
    * [.images](#module_movies.images) ⇒ <code>Promise</code>
    * [.keywords](#module_movies.keywords) ⇒ <code>Promise</code>
    * [.latest](#module_movies.latest) ⇒ <code>Promise</code>
    * [.lists](#module_movies.lists) ⇒ <code>Promise</code>
    * [.nowPlaying](#module_movies.nowPlaying)
    * [.popular](#module_movies.popular) ⇒ <code>Promise</code>
    * [.rate](#module_movies.rate) ⇒ <code>Promise</code>
    * [.recommendations](#module_movies.recommendations) ⇒ <code>Promise</code>
    * [.releaseDates](#module_movies.releaseDates) ⇒ <code>Promise</code>
    * [.reviews](#module_movies.reviews) ⇒ <code>Promise</code>
    * [.similar](#module_movies.similar) ⇒ <code>Promise</code>
    * [.topRated](#module_movies.topRated) ⇒ <code>Promise</code>
    * [.translations](#module_movies.translations) ⇒ <code>Promise</code>
    * [.upcoming](#module_movies.upcoming) ⇒ <code>Promise</code>
    * [.videos](#module_movies.videos) ⇒ <code>Promise</code>

<a name="module_movies.accountStates"></a>

### movies.accountStates ⇒ <code>Promise</code>
Grab the following account states for a session:
- Movie rating
- If it belongs to your watchlist
- If it belongs to your favourite list

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-account-states  

| Param | Type | Description |
| --- | --- | --- |
| movieId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |

<a name="module_movies.alternativeTitles"></a>

### movies.alternativeTitles ⇒ <code>Promise</code>
Get all of the alternative titles for a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-alternative-titles  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.country | <code>string</code> | 

<a name="module_movies.changes"></a>

### movies.changes ⇒ <code>Promise</code>
Get the changes for a movie. By default only the last 24 hours are returned.
You can query up to 14 days in a single query by using the start_date and end_date query parameters.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-changes  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.start_date | <code>string</code> | 
| options.end_date | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movies.credits"></a>

### movies.credits ⇒ <code>Promise</code>
Get the cast and crew for a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-credits  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movies.deleteRating"></a>

### movies.deleteRating ⇒ <code>Promise</code>
Remove your rating for a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/delete-movie-rating  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.session_id | <code>string</code> | 
| options.guest_session_id | <code>string</code> | 

<a name="module_movies.details"></a>

### movies.details ⇒ <code>Promise</code>
Get the primary information about a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-details  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.append_to_response | <code>string</code> | 

<a name="module_movies.externalIds"></a>

### movies.externalIds ⇒ <code>Promise</code>
Get the external ids for a movie.
We currently support the following external sources: IMDB ID, Facebook, Instagram, Twitter.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-external-ids  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movies.images"></a>

### movies.images ⇒ <code>Promise</code>
Get the images that belong to a movie.
Querying images with a language parameter will filter the results.
If you want to include a fallback language (especially useful for backdrops) you can use the include_image_language parameter.
This should be a comma separated value like so: { include_image_language: "en,null" }.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-images  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.include_image_language | <code>string</code> | 

<a name="module_movies.keywords"></a>

### movies.keywords ⇒ <code>Promise</code>
Get the keywords that have been added to a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-keywords  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movies.latest"></a>

### movies.latest ⇒ <code>Promise</code>
Get the most newly created movie. This is a live response and will continuously change.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-latest-movie  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_movies.lists"></a>

### movies.lists ⇒ <code>Promise</code>
**Kind**: static constant of [<code>movies</code>](#module_movies)  
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

### movies.popular ⇒ <code>Promise</code>
Get a list of the current popular movies on TMDb.
This list updates daily.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-popular-movies  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 
| options.region | <code>string</code> | 

<a name="module_movies.rate"></a>

### movies.rate ⇒ <code>Promise</code>
Rate a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/rate-movie  

| Param | Type | Description |
| --- | --- | --- |
| movieId | <code>number</code> | Required |
| rating | <code>rating</code> | between 0.5 and 10.0 |
| options | <code>Object</code> |  |
| options.guestSessionId | <code>string</code> |  |
| options.sessionId | <code>string</code> |  |

<a name="module_movies.recommendations"></a>

### movies.recommendations ⇒ <code>Promise</code>
Get a list of recommended movies for a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-recommendations  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movies.releaseDates"></a>

### movies.releaseDates ⇒ <code>Promise</code>
Get the release date along with the certification for a movie.
Release dates support different types:
- Premiere
- Theatrical (limited)
- Theatrical
- Digital
- Physical
- TV

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-release-dates  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movies.reviews"></a>

### movies.reviews ⇒ <code>Promise</code>
Get the user reviews for a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-reviews  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movies.similar"></a>

### movies.similar ⇒ <code>Promise</code>
Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
These items are assembled by looking at keywords and genres.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-similar-movies  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movies.topRated"></a>

### movies.topRated ⇒ <code>Promise</code>
Get the top rated movies on TMDb.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-top-rated-movies  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 
| options.region | <code>string</code> | 

<a name="module_movies.translations"></a>

### movies.translations ⇒ <code>Promise</code>
Get a list of translations that have been created for a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-translations  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movies.upcoming"></a>

### movies.upcoming ⇒ <code>Promise</code>
Get a list of upcoming movies in theatres.
This is a release type query that looks for all movies that
have a release type of 2 or 3 within the specified date range.
You can optionally specify a region parameter which will narrow the search to only look
for theatrical release dates within the specified country.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-upcoming  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 
| options.region | <code>string</code> | 

<a name="module_movies.videos"></a>

### movies.videos ⇒ <code>Promise</code>
Get the videos that have been added to a movie.

**Kind**: static constant of [<code>movies</code>](#module_movies)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-videos  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_network"></a>

## network

* [network](#module_network)
    * [.details](#module_network.details) ⇒ <code>Promise</code>
    * [.alternativeNames](#module_network.alternativeNames) ⇒ <code>Promise</code>
    * [.images](#module_network.images) ⇒ <code>Promise</code>

<a name="module_network.details"></a>

### network.details ⇒ <code>Promise</code>
Get the details of a network.

**Kind**: static constant of [<code>network</code>](#module_network)  
**See**: https://developers.themoviedb.org/3/networks/get-network-details  

| Param | Type |
| --- | --- |
| networkId | <code>number</code> | 

<a name="module_network.alternativeNames"></a>

### network.alternativeNames ⇒ <code>Promise</code>
Get the alternative names of a network.

**Kind**: static constant of [<code>network</code>](#module_network)  
**See**: https://developers.themoviedb.org/3/networks/get-network-alternative-names  

| Param | Type |
| --- | --- |
| networkId | <code>number</code> | 

<a name="module_network.images"></a>

### network.images ⇒ <code>Promise</code>
Get the TV network logos by id.
There are two image formats that are supported for networks, PNG"s and SVG"s.
You can see which type the original file is by looking at the fileType field.
We prefer SVG"s as they are resolution independent and as such, the width and height are only
there to reflect the original asset that was uploaded.
An SVG can be scaled properly beyond those dimensions if you call them as a PNG.

**Kind**: static constant of [<code>network</code>](#module_network)  
**See**: https://developers.themoviedb.org/3/networks/get-network-images  

| Param | Type |
| --- | --- |
| networkId | <code>number</code> | 

<a name="module_people"></a>

## people

* [people](#module_people)
    * [.changes](#module_people.changes) ⇒ <code>Promise</code>
    * [.combinedCredits](#module_people.combinedCredits) ⇒ <code>Promise</code>
    * [.details](#module_people.details) ⇒ <code>Promise</code>
    * [.externalIds](#module_people.externalIds) ⇒ <code>Promise</code>
    * [.images](#module_people.images) ⇒ <code>Promise</code>
    * [.latest](#module_people.latest) ⇒ <code>Promise</code>
    * [.movieCredits](#module_people.movieCredits) ⇒ <code>Promise</code>
    * [.popular](#module_people.popular) ⇒ <code>Promise</code>
    * [.taggedImages](#module_people.taggedImages) ⇒ <code>Promise</code>
    * [.translations](#module_people.translations) ⇒ <code>Promise</code>
    * [.tvCredits](#module_people.tvCredits) ⇒ <code>Promise</code>

<a name="module_people.changes"></a>

### people.changes ⇒ <code>Promise</code>
Get the changes for a person. By default only the last 24 hours are returned.
You can query up to 14 days in a single query by using the start_date and end_date options.

**Kind**: static constant of [<code>people</code>](#module_people)  
**See**: https://developers.themoviedb.org/3/people/get-person-changes  

| Param | Type | Description |
| --- | --- | --- |
| personId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.start_date | <code>string</code> |  |
| options.end_date | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="module_people.combinedCredits"></a>

### people.combinedCredits ⇒ <code>Promise</code>
Get the movie and TV credits together in a single response.

**Kind**: static constant of [<code>people</code>](#module_people)  
**See**: https://developers.themoviedb.org/3/people/get-person-combined-credits  

| Param | Type | Description |
| --- | --- | --- |
| personId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_people.details"></a>

### people.details ⇒ <code>Promise</code>
Get the primary person details by id.

**Kind**: static constant of [<code>people</code>](#module_people)  
**See**: https://developers.themoviedb.org/3/people/get-person-details  

| Param | Type | Description |
| --- | --- | --- |
| personId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.append_to_response | <code>string</code> |  |

<a name="module_people.externalIds"></a>

### people.externalIds ⇒ <code>Promise</code>
Get the external ids for a person. We currently support the following external sources.
IMDB ID, TVDB ID, Freebase MID, Freebase ID, TVRage ID, Instagram, Facebook, Twitter

**Kind**: static constant of [<code>people</code>](#module_people)  
**See**: https://developers.themoviedb.org/3/people/get-person-external-ids  

| Param | Type | Description |
| --- | --- | --- |
| personId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_people.images"></a>

### people.images ⇒ <code>Promise</code>
Get the images for a person.

**Kind**: static constant of [<code>people</code>](#module_people)  
**See**: https://developers.themoviedb.org/3/people/get-person-images  

| Param | Type | Description |
| --- | --- | --- |
| personId | <code>number</code> | Required |

<a name="module_people.latest"></a>

### people.latest ⇒ <code>Promise</code>
Get the most newly created person. This is a live response and will continuously change.

**Kind**: static constant of [<code>people</code>](#module_people)  
**See**: https://developers.themoviedb.org/3/people/get-latest-person  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_people.movieCredits"></a>

### people.movieCredits ⇒ <code>Promise</code>
Get the movie credits for a person.

**Kind**: static constant of [<code>people</code>](#module_people)  
**See**: https://developers.themoviedb.org/3/people/get-person-movie-credits  

| Param | Type | Description |
| --- | --- | --- |
| personId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_people.popular"></a>

### people.popular ⇒ <code>Promise</code>
Get the list of popular people on TMDb.
This list updates daily.

**Kind**: static constant of [<code>people</code>](#module_people)  
**See**: https://developers.themoviedb.org/3/people/get-popular-people  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_people.taggedImages"></a>

### people.taggedImages ⇒ <code>Promise</code>
Get the images that this person has been tagged in.

**Kind**: static constant of [<code>people</code>](#module_people)  
**See**: https://developers.themoviedb.org/3/people/get-tagged-images  

| Param | Type | Description |
| --- | --- | --- |
| personId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="module_people.translations"></a>

### people.translations ⇒ <code>Promise</code>
Get a list of the translations that exist for a person.

**Kind**: static constant of [<code>people</code>](#module_people)  
**See**: https://developers.themoviedb.org/3/people/get-person-translations  

| Param | Type | Description |
| --- | --- | --- |
| personId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_people.tvCredits"></a>

### people.tvCredits ⇒ <code>Promise</code>
Get the TV show credits for a person.
You can query for some extra details about the credit with the credit.details method.

**Kind**: static constant of [<code>people</code>](#module_people)  
**See**: https://developers.themoviedb.org/3/people/get-person-tv-credits  

| Param | Type | Description |
| --- | --- | --- |
| personId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_review"></a>

## review
<a name="module_review.details"></a>

### review.details ⇒ <code>Promise</code>
Get details of a review.

**Kind**: static constant of [<code>review</code>](#module_review)  
**See**: https://developers.themoviedb.org/3/reviews/get-review-details  

| Param | Type |
| --- | --- |
| reviewId | <code>string</code> | 

<a name="module_search"></a>

## search

* [search](#module_search)
    * [.collections](#module_search.collections) ⇒ <code>Promise</code>
    * [.companies](#module_search.companies) ⇒ <code>Promise</code>
    * [.keywords](#module_search.keywords) ⇒ <code>Promise</code>
    * [.movies](#module_search.movies) ⇒ <code>Promise</code>
    * [.multi](#module_search.multi) ⇒ <code>Promise</code>
    * [.people](#module_search.people) ⇒ <code>Promise</code>
    * [.tv](#module_search.tv) ⇒ <code>Promise</code>

<a name="module_search.collections"></a>

### search.collections ⇒ <code>Promise</code>
Search for collections.

**Kind**: static constant of [<code>search</code>](#module_search)  
**See**: https://developers.themoviedb.org/3/search/search-collections  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_search.companies"></a>

### search.companies ⇒ <code>Promise</code>
Search for companies.

**Kind**: static constant of [<code>search</code>](#module_search)  
**See**: https://developers.themoviedb.org/3/search/search-companies  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_search.keywords"></a>

### search.keywords ⇒ <code>Promise</code>
Search for keywords.

**Kind**: static constant of [<code>search</code>](#module_search)  
**See**: https://developers.themoviedb.org/3/search/search-keywords  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_search.movies"></a>

### search.movies ⇒ <code>Promise</code>
Search for movies.

**Kind**: static constant of [<code>search</code>](#module_search)  
**See**: https://developers.themoviedb.org/3/search/search-movies  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 
| options.include_adult | <code>boolean</code> | 
| options.region | <code>string</code> | 
| option.year | <code>number</code> | 
| option.primary_release_year | <code>number</code> | 

<a name="module_search.multi"></a>

### search.multi ⇒ <code>Promise</code>
Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.

**Kind**: static constant of [<code>search</code>](#module_search)  
**See**: https://developers.themoviedb.org/3/search/multi-search  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 
| options.include_adult | <code>boolean</code> | 
| options.region | <code>string</code> | 

<a name="module_search.people"></a>

### search.people ⇒ <code>Promise</code>
Search for people.

**Kind**: static constant of [<code>search</code>](#module_search)  
**See**: https://developers.themoviedb.org/3/search/search-people  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 
| options.include_adult | <code>boolean</code> | 
| options.region | <code>string</code> | 

<a name="module_search.tv"></a>

### search.tv ⇒ <code>Promise</code>
Search for a TV show.

**Kind**: static constant of [<code>search</code>](#module_search)  
**See**: https://developers.themoviedb.org/3/search/search-tv-shows  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.query | <code>string</code> | 
| options.page | <code>number</code> | 
| options.first_air_date_year | <code>number</code> | 

<a name="module_trending"></a>

## trending
<a name="module_trending.items"></a>

### trending.items ⇒ <code>Promise</code>
Get the daily or weekly trending items. The daily trending list tracks items over the period of a day while items have a 24 hour half life. The weekly list tracks items over a 7 day period, with a 7 day half life.

**Kind**: static constant of [<code>trending</code>](#module_trending)  
**See**: https://developers.themoviedb.org/3/trending/get-trending  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.media_type | <code>&#x27;all&#x27;</code> \| <code>&#x27;movie&#x27;</code> \| <code>&#x27;tv&#x27;</code> \| <code>&#x27;person&#x27;</code> | Allowed values: all, movie, tv, person |
| options.time_window | <code>&#x27;day&#x27;</code> \| <code>&#x27;week&#x27;</code> | Allowed values: day, week |

<a name="module_tvEpisodeGroup"></a>

## tvEpisodeGroup
<a name="module_tvEpisodeGroup.details"></a>

### tvEpisodeGroup.details ⇒ <code>Promise</code>
Get the details of a TV episode group.
Groups support 7 different types which are enumerated as the following:
1 - Original air date, 2- Absolute, 3 - DVD, 4 - Digital, 5 - Story arc, 6 - Production, 7 - TV

**Kind**: static constant of [<code>tvEpisodeGroup</code>](#module_tvEpisodeGroup)  
**See**: https://developers.themoviedb.org/3/tv-episode-groups/get-tv-episode-group-details  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_tvEpisode"></a>

## tvEpisode

* [tvEpisode](#module_tvEpisode)
    * [.accountStates](#module_tvEpisode.accountStates) ⇒ <code>Promise</code>
    * [.changes](#module_tvEpisode.changes) ⇒ <code>Promise</code>
    * [.credits](#module_tvEpisode.credits) ⇒ <code>Promise</code>
    * [.deleteRating](#module_tvEpisode.deleteRating) ⇒ <code>Promise</code>
    * [.details](#module_tvEpisode.details) ⇒ <code>Promise</code>
    * [.externalIds](#module_tvEpisode.externalIds) ⇒ <code>Promise</code>
    * [.images](#module_tvEpisode.images) ⇒ <code>Promise</code>
    * [.rate](#module_tvEpisode.rate) ⇒ <code>Promise</code>
    * [.translations](#module_tvEpisode.translations) ⇒ <code>Promise</code>
    * [.videos](#module_tvEpisode.videos) ⇒ <code>Promise</code>

<a name="module_tvEpisode.accountStates"></a>

### tvEpisode.accountStates ⇒ <code>Promise</code>
Get your rating for a episode.

**Kind**: static constant of [<code>tvEpisode</code>](#module_tvEpisode)  
**See**: https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-account-states  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| episodeNumber | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |

<a name="module_tvEpisode.changes"></a>

### tvEpisode.changes ⇒ <code>Promise</code>
Get the changes for a TV episode. By default only the last 24 hours are returned.

**Kind**: static constant of [<code>tvEpisode</code>](#module_tvEpisode)  
**See**: https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-changes  

| Param | Type | Description |
| --- | --- | --- |
| episodeId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.start_date | <code>string</code> |  |
| options.end_date | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="module_tvEpisode.credits"></a>

### tvEpisode.credits ⇒ <code>Promise</code>
Get the credits (cast, crew and guest stars) for a TV episode.

**Kind**: static constant of [<code>tvEpisode</code>](#module_tvEpisode)  
**See**: https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-credits  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| episodeNumber | <code>number</code> | Required |

<a name="module_tvEpisode.deleteRating"></a>

### tvEpisode.deleteRating ⇒ <code>Promise</code>
Remove your rating for a TV episode.

**Kind**: static constant of [<code>tvEpisode</code>](#module_tvEpisode)  
**See**: https://developers.themoviedb.org/3/tv-episodes/delete-tv-episode-rating  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| episodeNumber | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |

<a name="module_tvEpisode.details"></a>

### tvEpisode.details ⇒ <code>Promise</code>
Get the TV episode details by id.

**Kind**: static constant of [<code>tvEpisode</code>](#module_tvEpisode)  
**See**: https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| episodeNumber | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.append_to_response | <code>string</code> |  |

<a name="module_tvEpisode.externalIds"></a>

### tvEpisode.externalIds ⇒ <code>Promise</code>
Get the external ids for a TV episode. We currently support the following external sources:
IMDB ID, TVDB ID, Freebase MID, Freebase ID, TVRage ID

**Kind**: static constant of [<code>tvEpisode</code>](#module_tvEpisode)  
**See**: https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-external-ids  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| episodeNumber | <code>number</code> | Required |

<a name="module_tvEpisode.images"></a>

### tvEpisode.images ⇒ <code>Promise</code>
Get the images that belong to a TV episode.
Querying images with a language parameter will filter the results.
If you want to include a fallback language (especially useful for backdrops)
you can use the include_image_language option.
This should be a comma separated value like so: include_image_language=en,null.

**Kind**: static constant of [<code>tvEpisode</code>](#module_tvEpisode)  
**See**: https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-images  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| episodeNumber | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.include_image_language | <code>string</code> |  |

<a name="module_tvEpisode.rate"></a>

### tvEpisode.rate ⇒ <code>Promise</code>
Rate a TV episode.

**Kind**: static constant of [<code>tvEpisode</code>](#module_tvEpisode)  
**See**: https://developers.themoviedb.org/3/tv-episodes/rate-tv-episode  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| episodeNumber | <code>number</code> | Required |
| rating | <code>rating</code> | between 0.5 and 10.0 |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |

<a name="module_tvEpisode.translations"></a>

### tvEpisode.translations ⇒ <code>Promise</code>
Get the translation data for an episode.

**Kind**: static constant of [<code>tvEpisode</code>](#module_tvEpisode)  
**See**: https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-translations  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| episodeNumber | <code>number</code> | Required |

<a name="module_tvEpisode.videos"></a>

### tvEpisode.videos ⇒ <code>Promise</code>
Get the videos that have been added to a TV episode.

**Kind**: static constant of [<code>tvEpisode</code>](#module_tvEpisode)  
**See**: https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-videos  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| episodeNumber | <code>number</code> | Required |
| options | <code>Object</code> |  |
| language | <code>string</code> |  |

<a name="module_tvSeason"></a>

## tvSeason

* [tvSeason](#module_tvSeason)
    * [.accountStates](#module_tvSeason.accountStates) ⇒ <code>Promise</code>
    * [.changes](#module_tvSeason.changes) ⇒ <code>Promise</code>
    * [.credits](#module_tvSeason.credits) ⇒ <code>Promise</code>
    * [.details](#module_tvSeason.details) ⇒ <code>Promise</code>
    * [.externalIds](#module_tvSeason.externalIds) ⇒ <code>Promise</code>
    * [.images](#module_tvSeason.images) ⇒ <code>Promise</code>
    * [.videos](#module_tvSeason.videos) ⇒ <code>Promise</code>

<a name="module_tvSeason.accountStates"></a>

### tvSeason.accountStates ⇒ <code>Promise</code>
Returns all of the user ratings for the season's episodes.

**Kind**: static constant of [<code>tvSeason</code>](#module_tvSeason)  
**See**: https://developers.themoviedb.org/3/tv-seasons/get-tv-season-account-states  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |

<a name="module_tvSeason.changes"></a>

### tvSeason.changes ⇒ <code>Promise</code>
Get the changes for a TV season. By default only the last 24 hours are returned.
You can query up to 14 days in a single query by using the start_date and end_date query options.

**Kind**: static constant of [<code>tvSeason</code>](#module_tvSeason)  
**See**: https://developers.themoviedb.org/3/tv-seasons/get-tv-season-changes  

| Param | Type | Description |
| --- | --- | --- |
| seasonId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.start_date | <code>string</code> |  |
| options.end_date | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="module_tvSeason.credits"></a>

### tvSeason.credits ⇒ <code>Promise</code>
Get the credits for TV season.

**Kind**: static constant of [<code>tvSeason</code>](#module_tvSeason)  
**See**: https://developers.themoviedb.org/3/tv-seasons/get-tv-season-credits  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_tvSeason.details"></a>

### tvSeason.details ⇒ <code>Promise</code>
Get the TV season details by id.

**Kind**: static constant of [<code>tvSeason</code>](#module_tvSeason)  
**See**: https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.append_to_response | <code>string</code> |  |

<a name="module_tvSeason.externalIds"></a>

### tvSeason.externalIds ⇒ <code>Promise</code>
Get the external ids for a TV season. We currently support the following external sources.
TVDB ID, Freebase MID, Freebase ID, TVRage ID

**Kind**: static constant of [<code>tvSeason</code>](#module_tvSeason)  
**See**: https://developers.themoviedb.org/3/tv-seasons/get-tv-season-external-ids  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_tvSeason.images"></a>

### tvSeason.images ⇒ <code>Promise</code>
Get the images that belong to a TV season.
Querying images with a language parameter will filter the results.
If you want to include a fallback language (especially useful for backdrops)
you can use the include_image_language option.
This should be a: include_image_language comma separated value like so: include_image_language: "en,null".

**Kind**: static constant of [<code>tvSeason</code>](#module_tvSeason)  
**See**: https://developers.themoviedb.org/3/tv-seasons/get-tv-season-images  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.include_image_language | <code>string</code> |  |

<a name="module_tvSeason.videos"></a>

### tvSeason.videos ⇒ <code>Promise</code>
Get the videos that have been added to a TV season.

**Kind**: static constant of [<code>tvSeason</code>](#module_tvSeason)  
**See**: https://developers.themoviedb.org/3/tv-seasons/get-tv-season-videos  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_tv"></a>

## tv

* [tv](#module_tv)
    * [.accountStates](#module_tv.accountStates) ⇒ <code>Promise</code>
    * [.airingToday](#module_tv.airingToday) ⇒ <code>Promise</code>
    * [.alternativeTitles](#module_tv.alternativeTitles) ⇒ <code>Promise</code>
    * [.changes](#module_tv.changes) ⇒ <code>Promise</code>
    * [.contentRatings](#module_tv.contentRatings) ⇒ <code>Promise</code>
    * [.credits](#module_tv.credits) ⇒ <code>Promise</code>
    * [.deleteRating](#module_tv.deleteRating) ⇒ <code>Promise</code>
    * [.details](#module_tv.details) ⇒ <code>Promise</code>
    * [.episodeGroups](#module_tv.episodeGroups) ⇒ <code>Promise</code>
    * [.externalIds](#module_tv.externalIds) ⇒ <code>Promise</code>
    * [.images](#module_tv.images) ⇒ <code>Promise</code>
    * [.keywords](#module_tv.keywords) ⇒ <code>Promise</code>
    * [.latest](#module_tv.latest) ⇒ <code>Promise</code>
    * [.onTheAir](#module_tv.onTheAir) ⇒ <code>Promise</code>
    * [.popular](#module_tv.popular) ⇒ <code>Promise</code>
    * [.rate](#module_tv.rate) ⇒ <code>Promise</code>
    * [.recommendations](#module_tv.recommendations) ⇒ <code>Promise</code>
    * [.reviews](#module_tv.reviews) ⇒ <code>Promise</code>
    * [.screenedTheatrically](#module_tv.screenedTheatrically) ⇒ <code>Promise</code>
    * [.similar](#module_tv.similar) ⇒ <code>Promise</code>
    * [.topRated](#module_tv.topRated) ⇒ <code>Promise</code>
    * [.translations](#module_tv.translations) ⇒ <code>Promise</code>
    * [.videos](#module_tv.videos) ⇒ <code>Promise</code>

<a name="module_tv.accountStates"></a>

### tv.accountStates ⇒ <code>Promise</code>
Grab the following account states for a session:
TV show rating, If it belongs to your watchlist and If it belongs to your favourite list

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-account-states  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |
| options.language | <code>string</code> |  |

<a name="module_tv.airingToday"></a>

### tv.airingToday ⇒ <code>Promise</code>
Get a list of TV shows that are airing today. This query is purely day based as we do not currently support airing times.
You can specify a timezone to offset the day calculation. Without a specified timezone, this query defaults to EST (Eastern Time UTC-05:00).

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-airing-today  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_tv.alternativeTitles"></a>

### tv.alternativeTitles ⇒ <code>Promise</code>
Returns all of the alternative titles for a TV show.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-alternative-titles  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_tv.changes"></a>

### tv.changes ⇒ <code>Promise</code>
Get the changes for a TV show. By default only the last 24 hours are returned.
You can query up to 14 days in a single query by using the start_date and end_date options.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-changes  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.start_date | <code>string</code> |  |
| options.end_date | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="module_tv.contentRatings"></a>

### tv.contentRatings ⇒ <code>Promise</code>
Get the list of content ratings (certifications) that have been added to a TV show.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-content-ratings  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_tv.credits"></a>

### tv.credits ⇒ <code>Promise</code>
Get the credits (cast and crew) that have been added to a TV show.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-credits  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_tv.deleteRating"></a>

### tv.deleteRating ⇒ <code>Promise</code>
Remove your rating for a TV show.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/delete-tv-show-rating  

| Param | Type |
| --- | --- |
| tvId | <code>number</code> | 
| options | <code>Object</code> | 
| options.session_id | <code>string</code> | 
| options.guest_session_id | <code>string</code> | 

<a name="module_tv.details"></a>

### tv.details ⇒ <code>Promise</code>
Get the primary TV show details by id.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-details  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.append_to_response | <code>string</code> |  |

<a name="module_tv.episodeGroups"></a>

### tv.episodeGroups ⇒ <code>Promise</code>
Get all of the episode groups that have been created for a TV show.
With a group ID you can call the tvEpisodeGroups.details method.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-credits  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_tv.externalIds"></a>

### tv.externalIds ⇒ <code>Promise</code>
Get the external ids for a TV show. We currently support the following external sources.
IMDB ID, TVDB ID, Freebase MID, Freebase ID, TVRage ID

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-external-ids  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_tv.images"></a>

### tv.images ⇒ <code>Promise</code>
Get the images that belong to a TV show.
Querying images with a language parameter will filter the results.
If you want to include a fallback language (especially useful for backdrops)
you can use the include_image_language option.
This should be a comma separated value like so: include_image_language=en,null.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-images  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.include_image_language | <code>string</code> |  |

<a name="module_tv.keywords"></a>

### tv.keywords ⇒ <code>Promise</code>
Get the keywords that have been added to a TV show.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-keywords  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |

<a name="module_tv.latest"></a>

### tv.latest ⇒ <code>Promise</code>
Get the most newly created TV show. This is a live response and will continuously change.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-latest-tv  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_tv.onTheAir"></a>

### tv.onTheAir ⇒ <code>Promise</code>
Get a list of shows that are currently on the air.
This query looks for any TV show that has an episode with an air date in the next 7 days.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-on-the-air  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_tv.popular"></a>

### tv.popular ⇒ <code>Promise</code>
Get a list of the current popular TV shows on TMDb.
This list updates daily.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-popular-tv-shows  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_tv.rate"></a>

### tv.rate ⇒ <code>Promise</code>
Rate a TV episode.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/rate-tv-show  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| rating | <code>rating</code> | between 0.5 and 10.0 |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |

<a name="module_tv.recommendations"></a>

### tv.recommendations ⇒ <code>Promise</code>
Get the list of TV show recommendations for this item.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-recommendations  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="module_tv.reviews"></a>

### tv.reviews ⇒ <code>Promise</code>
Get the reviews for a TV show.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-reviews  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="module_tv.screenedTheatrically"></a>

### tv.screenedTheatrically ⇒ <code>Promise</code>
Get a list of seasons or episodes that have been screened in a film festival or theatre.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-screened-theatrically  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |

<a name="module_tv.similar"></a>

### tv.similar ⇒ <code>Promise</code>
Get a list of similar TV shows. These items are assembled by looking at keywords and genres.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-similar-tv-shows  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="module_tv.topRated"></a>

### tv.topRated ⇒ <code>Promise</code>
Get a list of the top rated TV shows on TMDb.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-top-rated-tv  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_tv.translations"></a>

### tv.translations ⇒ <code>Promise</code>
Get a list of the translations that exist for a TV show.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-translations  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

<a name="module_tv.videos"></a>

### tv.videos ⇒ <code>Promise</code>
Get the videos that have been added to a TV show.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-videos  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

