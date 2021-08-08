## Modules

<dl>
<dt><a href="#module_account">account</a></dt>
<dd></dd>
<dt><a href="#module_authentication">authentication</a></dt>
<dd></dd>
<dt><a href="#module_list">list</a></dt>
<dd></dd>
<dt><a href="#module_movie">movie</a></dt>
<dd></dd>
<dt><a href="#module_tvSeason">tvSeason</a></dt>
<dd></dd>
<dt><a href="#module_tv">tv</a></dt>
<dd></dd>
<dt><a href="#module_watchProvider">watchProvider</a></dt>
<dd></dd>
</dl>

<a name="module_account"></a>

## account

* [account](#module_account)
    * [.favoriteMovies](#module_account.favoriteMovies) ⇒ <code>Promise</code>
    * [.favoriteTvShows](#module_account.favoriteTvShows) ⇒ <code>Promise</code>
    * [.lists](#module_account.lists) ⇒ <code>Promise</code>
    * [.movieRecommendations](#module_account.movieRecommendations) ⇒ <code>Promise</code>
    * [.movieWatchlist](#module_account.movieWatchlist) ⇒ <code>Promise</code>
    * [.ratedMovies](#module_account.ratedMovies) ⇒ <code>Promise</code>
    * [.ratedTvShows](#module_account.ratedTvShows) ⇒ <code>Promise</code>
    * [.tvShowRecommendations](#module_account.tvShowRecommendations) ⇒ <code>Promise</code>
    * [.tvShowWatchlist](#module_account.tvShowWatchlist) ⇒ <code>Promise</code>

<a name="module_account.favoriteMovies"></a>

### account.favoriteMovies ⇒ <code>Promise</code>
Get the list of movies you have marked as a favorite.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/4/account/get-account-favorite-movies  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc, |

<a name="module_account.favoriteTvShows"></a>

### account.favoriteTvShows ⇒ <code>Promise</code>
Get the list of TV shows you have marked as a favorite.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/4/account/get-account-favorite-tv-shows  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc |

<a name="module_account.lists"></a>

### account.lists ⇒ <code>Promise</code>
Get all of the lists you have created.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/4/account/get-account-lists  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |

<a name="module_account.movieRecommendations"></a>

### account.movieRecommendations ⇒ <code>Promise</code>
Get a list of your personal movie recommendations.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/4/account/get-account-movie-recommendations  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc |

<a name="module_account.movieWatchlist"></a>

### account.movieWatchlist ⇒ <code>Promise</code>
Get the list of movies you have added to your watchlist.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/4/account/get-account-movie-watchlist  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc |

<a name="module_account.ratedMovies"></a>

### account.ratedMovies ⇒ <code>Promise</code>
Get the list of movies you have rated.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/4/account/get-account-rated-movies  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc |

<a name="module_account.ratedTvShows"></a>

### account.ratedTvShows ⇒ <code>Promise</code>
Get the list of TV shows you have rated.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/4/account/get-account-rated-tv-shows  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc |

<a name="module_account.tvShowRecommendations"></a>

### account.tvShowRecommendations ⇒ <code>Promise</code>
Get a list of your personal TV show recommendations.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/4/account/get-account-tv-show-recommendations  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc |

<a name="module_account.tvShowWatchlist"></a>

### account.tvShowWatchlist ⇒ <code>Promise</code>
Get the list of TV shows you have added to your watchlist.

**Kind**: static constant of [<code>account</code>](#module_account)  
**See**: https://developers.themoviedb.org/4/account/get-account-tv-show-watchlist  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc |

<a name="module_authentication"></a>

## authentication

* [authentication](#module_authentication)
    * [.createAccessToken](#module_authentication.createAccessToken) ⇒ <code>Promise</code>
    * [.createRequestToken](#module_authentication.createRequestToken) ⇒ <code>Promise</code>
    * [.deleteAccessToken](#module_authentication.deleteAccessToken) ⇒ <code>Promise</code>

<a name="module_authentication.createAccessToken"></a>

### authentication.createAccessToken ⇒ <code>Promise</code>
This method will finish the user authentication flow and issue an official user access token.
The requesToken in this request is sent along as part of the POST body.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**See**: https://developers.themoviedb.org/4/auth/create-access-token  

| Param | Type |
| --- | --- |
| requestToken | <code>string</code> | 

<a name="module_authentication.createRequestToken"></a>

### authentication.createRequestToken ⇒ <code>Promise</code>
This method generates a new request token that you can ask a user to approve.
This is the first step in getting permission from a user to read and write data on their behalf.
Note that there is an optional body you can post alongside this request to set a redirect URL
or callback that will be executed once a request token has been approved on TMDb.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**See**: https://developers.themoviedb.org/4/auth/create-request-token  

| Param | Type |
| --- | --- |
| redirectTo | <code>string</code> | 

<a name="module_authentication.deleteAccessToken"></a>

### authentication.deleteAccessToken ⇒ <code>Promise</code>
This method gives your users the ability to log out of a session.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**See**: https://developers.themoviedb.org/4/auth/delete-access-token  

| Param | Type |
| --- | --- |
| accessToken | <code>string</code> | 

<a name="module_list"></a>

## list

* [list](#module_list)
    * [.addItems](#module_list.addItems) ⇒ <code>Promise</code>
    * [.clearItems](#module_list.clearItems) ⇒ <code>Promise</code>
    * [.create](#module_list.create) ⇒ <code>Promise</code>
    * [.details](#module_list.details) ⇒ <code>Promise</code>
    * [.deleteItems](#module_list.deleteItems) ⇒ <code>Promise</code>
    * [.itemStatus](#module_list.itemStatus) ⇒ <code>Promise</code>
    * [.remove](#module_list.remove) ⇒ <code>Promise</code>
    * [.update](#module_list.update) ⇒ <code>Promise</code>
    * [.updateItems](#module_list.updateItems) ⇒ <code>Promise</code>

<a name="module_list.addItems"></a>

### list.addItems ⇒ <code>Promise</code>
This method will let you add items to a list.
We support essentially an unlimited number of items to be posted at a time.
Both movie and TV series are supported.
The results of this query will return a results array.
Each result includes a success field. If a result is false this will usually indicate
that the item already exists on the list. It may also indicate that the item could not be found.
You must be the owner of the list and therefore have a valid user access token in order to add items to a list.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/4/list/add-items  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |
| items | <code>Array.&lt;Object&gt;</code> | Required |
| items[].media_type | <code>&#x27;movie&#x27;</code> \| <code>&#x27;tv&#x27;</code> | Allowed values: movie, tv |
| items[].media_id | <code>number</code> |  |

<a name="module_list.clearItems"></a>

### list.clearItems ⇒ <code>Promise</code>
This method lets you clear all of the items from a list in a single request. This action cannot be reversed so use it with caution.
You must be the owner of the list and therefore have a valid user access token in order to clear a list.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/4/list/clear-list  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |

<a name="module_list.create"></a>

### list.create ⇒ <code>Promise</code>
This method will create a new list.
You will need to have valid user access token in order to create a new list.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/4/list/create-list  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| options | <code>object</code> | Required |
| options.name | <code>string</code> | Required |
| options.iso_639_1 | <code>string</code> | Required |
| options.description | <code>string</code> |  |
| options.public | <code>boolean</code> |  |
| options.iso_3166_1 | <code>string</code> |  |

<a name="module_list.details"></a>

### list.details ⇒ <code>Promise</code>
This method will retrieve a list by id.
Private lists can only be accessed by their owners and therefore require a valid user access token.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/4/list/get-list  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |
| options | <code>object</code> |  |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc |

<a name="module_list.deleteItems"></a>

### list.deleteItems ⇒ <code>Promise</code>
This method will let you remove items from a list. You can remove multiple items at a time.
You must be the owner of the list and therefore have a valid user access token in order to delete items from it.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/4/list/remove-items  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |
| items | <code>Array.&lt;Object&gt;</code> | Required |
| items[].media_type | <code>&#x27;movie&#x27;</code> \| <code>&#x27;tv&#x27;</code> | Allowed values: movie, tv |
| items[].media_id | <code>number</code> |  |

<a name="module_list.itemStatus"></a>

### list.itemStatus ⇒ <code>Promise</code>
This method lets you quickly check if the item is already added to the list.
You must be the owner of the list and therefore have a valid user access token in order to check an item status.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/4/list/check-item-status  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |
| item | <code>object</code> |  |
| item.media_type | <code>&#x27;movie&#x27;</code> \| <code>&#x27;tv&#x27;</code> | Allowed values: movie, tv |
| item.media_id | <code>number</code> |  |

<a name="module_list.remove"></a>

### list.remove ⇒ <code>Promise</code>
This method will delete a list by id. This action is not reversible so take care when issuing it.
You must be the owner of the list and therefore have a valid user access token in order to delete it.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/4/list/delete-list  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |

<a name="module_list.update"></a>

### list.update ⇒ <code>Promise</code>
This method will let you update the details of a list.
You must be the owner of the list and therefore have a valid user access token in order to edit it.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/4/list/update-list  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |
| options | <code>object</code> | Required |
| options.name | <code>string</code> | Required |
| options.description | <code>string</code> |  |
| options.public | <code>boolean</code> |  |
| options.sort_by | <code>&#x27;original\_order.asc&#x27;</code> \| <code>&#x27;original\_order.desc&#x27;</code> \| <code>&#x27;primary\_release\_date.asc&#x27;</code> \| <code>&#x27;primary\_release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | Allowed values: original_order.asc, original_order.desc, vote_average.asc, vote_average.desc, primary_release_date.asc, primary_release_date.desc, title.asc, title.desc |

<a name="module_list.updateItems"></a>

### list.updateItems ⇒ <code>Promise</code>
This method will let you update an individual item on a list. Currently, only adding a comment is suported.
You must be the owner of the list and therefore have a valid user access token in order to edit items.

**Kind**: static constant of [<code>list</code>](#module_list)  
**See**: https://developers.themoviedb.org/4/list/update-items  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |
| items | <code>Array.&lt;Object&gt;</code> | Required |
| items[].media_type | <code>&#x27;movie&#x27;</code> \| <code>&#x27;tv&#x27;</code> | Allowed values: movie, tv |
| items[].media_id | <code>number</code> |  |
| items[].comment | <code>string</code> |  |

<a name="module_movie"></a>

## movie

* [movie](#module_movie)
    * [.accountStates](#module_movie.accountStates) ⇒ <code>Promise</code>
    * [.alternativeTitles](#module_movie.alternativeTitles) ⇒ <code>Promise</code>
    * [.changes](#module_movie.changes) ⇒ <code>Promise</code>
    * [.credits](#module_movie.credits) ⇒ <code>Promise</code>
    * [.deleteRating](#module_movie.deleteRating) ⇒ <code>Promise</code>
    * [.details](#module_movie.details) ⇒ <code>Promise</code>
    * [.externalIds](#module_movie.externalIds) ⇒ <code>Promise</code>
    * [.images](#module_movie.images) ⇒ <code>Promise</code>
    * [.keywords](#module_movie.keywords) ⇒ <code>Promise</code>
    * [.latest](#module_movie.latest) ⇒ <code>Promise</code>
    * [.lists](#module_movie.lists) ⇒ <code>Promise</code>
    * [.nowPlaying](#module_movie.nowPlaying)
    * [.popular](#module_movie.popular) ⇒ <code>Promise</code>
    * [.rate](#module_movie.rate) ⇒ <code>Promise</code>
    * [.recommendations](#module_movie.recommendations) ⇒ <code>Promise</code>
    * [.releaseDates](#module_movie.releaseDates) ⇒ <code>Promise</code>
    * [.reviews](#module_movie.reviews) ⇒ <code>Promise</code>
    * [.similar](#module_movie.similar) ⇒ <code>Promise</code>
    * [.topRated](#module_movie.topRated) ⇒ <code>Promise</code>
    * [.translations](#module_movie.translations) ⇒ <code>Promise</code>
    * [.upcoming](#module_movie.upcoming) ⇒ <code>Promise</code>
    * [.videos](#module_movie.videos) ⇒ <code>Promise</code>
    * [.watchProviders](#module_movie.watchProviders) ⇒ <code>Promise</code>

<a name="module_movie.accountStates"></a>

### movie.accountStates ⇒ <code>Promise</code>
Grab the following account states for a session:
- Movie rating
- If it belongs to your watchlist
- If it belongs to your favourite list

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-account-states  

| Param | Type | Description |
| --- | --- | --- |
| movieId | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |

<a name="module_movie.alternativeTitles"></a>

### movie.alternativeTitles ⇒ <code>Promise</code>
Get all of the alternative titles for a movie.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-alternative-titles  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.country | <code>string</code> | 

<a name="module_movie.changes"></a>

### movie.changes ⇒ <code>Promise</code>
Get the changes for a movie. By default only the last 24 hours are returned.
You can query up to 14 days in a single query by using the start_date and end_date query parameters.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-changes  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.start_date | <code>string</code> | 
| options.end_date | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movie.credits"></a>

### movie.credits ⇒ <code>Promise</code>
Get the cast and crew for a movie.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-credits  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movie.deleteRating"></a>

### movie.deleteRating ⇒ <code>Promise</code>
Remove your rating for a movie.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/delete-movie-rating  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.session_id | <code>string</code> | 
| options.guest_session_id | <code>string</code> | 

<a name="module_movie.details"></a>

### movie.details ⇒ <code>Promise</code>
Get the primary information about a movie.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-details  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.append_to_response | <code>string</code> | 
| options.include_image_language | <code>string</code> | 

<a name="module_movie.externalIds"></a>

### movie.externalIds ⇒ <code>Promise</code>
Get the external ids for a movie.
We currently support the following external sources: IMDB ID, Facebook, Instagram, Twitter.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-external-ids  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movie.images"></a>

### movie.images ⇒ <code>Promise</code>
Get the images that belong to a movie.
Querying images with a language parameter will filter the results.
If you want to include a fallback language (especially useful for backdrops) you can use the include_image_language parameter.
This should be a comma separated value like so: { include_image_language: "en,null" }.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-images  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.include_image_language | <code>string</code> | 

<a name="module_movie.keywords"></a>

### movie.keywords ⇒ <code>Promise</code>
Get the keywords that have been added to a movie.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-keywords  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movie.latest"></a>

### movie.latest ⇒ <code>Promise</code>
Get the most newly created movie. This is a live response and will continuously change.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-latest-movie  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_movie.lists"></a>

### movie.lists ⇒ <code>Promise</code>
**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-lists  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movie.nowPlaying"></a>

### movie.nowPlaying
Get a list of movies in theatres.
This is a release type query that looks for all movies that have a release type
of 2 or 3 within the specified date range.
You can optionally specify a region prameter which will narrow the search
to only look for theatrical release dates within the specified country.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-now-playing  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 
| options.region | <code>string</code> | 

<a name="module_movie.popular"></a>

### movie.popular ⇒ <code>Promise</code>
Get a list of the current popular movies on TMDb.
This list updates daily.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-popular-movies  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 
| options.region | <code>string</code> | 

<a name="module_movie.rate"></a>

### movie.rate ⇒ <code>Promise</code>
Rate a movie.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/rate-movie  

| Param | Type | Description |
| --- | --- | --- |
| movieId | <code>number</code> | Required |
| rating | <code>rating</code> | between 0.5 and 10.0 |
| options | <code>Object</code> |  |
| options.guestSessionId | <code>string</code> |  |
| options.sessionId | <code>string</code> |  |

<a name="module_movie.recommendations"></a>

### movie.recommendations ⇒ <code>Promise</code>
Get a list of recommended movies for a movie.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-recommendations  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movie.releaseDates"></a>

### movie.releaseDates ⇒ <code>Promise</code>
Get the release date along with the certification for a movie.
Release dates support different types:
- Premiere
- Theatrical (limited)
- Theatrical
- Digital
- Physical
- TV

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-release-dates  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movie.reviews"></a>

### movie.reviews ⇒ <code>Promise</code>
Get the user reviews for a movie.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-reviews  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movie.similar"></a>

### movie.similar ⇒ <code>Promise</code>
Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
These items are assembled by looking at keywords and genres.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-similar-movies  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 

<a name="module_movie.topRated"></a>

### movie.topRated ⇒ <code>Promise</code>
Get the top rated movies on TMDb.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-top-rated-movies  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 
| options.region | <code>string</code> | 

<a name="module_movie.translations"></a>

### movie.translations ⇒ <code>Promise</code>
Get a list of translations that have been created for a movie.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-translations  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movie.upcoming"></a>

### movie.upcoming ⇒ <code>Promise</code>
Get a list of upcoming movies in theatres.
This is a release type query that looks for all movies that
have a release type of 2 or 3 within the specified date range.
You can optionally specify a region parameter which will narrow the search to only look
for theatrical release dates within the specified country.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-upcoming  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.page | <code>number</code> | 
| options.region | <code>string</code> | 

<a name="module_movie.videos"></a>

### movie.videos ⇒ <code>Promise</code>
Get the videos that have been added to a movie.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**See**: https://developers.themoviedb.org/3/movies/get-movie-videos  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_movie.watchProviders"></a>

### movie.watchProviders ⇒ <code>Promise</code>
Powered by our partnership with JustWatch, you can query this method to get a list of the availabilities per country by provider.
This is not going to return full deep links, but rather, it's just enough information to display what's available where.
You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
Please note: In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.

**Kind**: static constant of [<code>movie</code>](#module_movie)  
**Returns**: <code>Promise</code> - Promise  
**See**: https://developers.themoviedb.org/3/movies/get-movie-watch-providers  

| Param | Type |
| --- | --- |
| movieId | <code>number</code> | 

<a name="module_tvSeason"></a>

## tvSeason

* [tvSeason](#module_tvSeason)
    * [.accountStates](#module_tvSeason.accountStates) ⇒ <code>Promise</code>
    * [.aggregateCredits](#module_tvSeason.aggregateCredits) ⇒ <code>Promise</code>
    * [.changes](#module_tvSeason.changes) ⇒ <code>Promise</code>
    * [.credits](#module_tvSeason.credits) ⇒ <code>Promise</code>
    * [.details](#module_tvSeason.details) ⇒ <code>Promise</code>
    * [.externalIds](#module_tvSeason.externalIds) ⇒ <code>Promise</code>
    * [.images](#module_tvSeason.images) ⇒ <code>Promise</code>
    * [.translations](#module_tvSeason.translations) ⇒ <code>Promise</code>
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

<a name="module_tvSeason.aggregateCredits"></a>

### tvSeason.aggregateCredits ⇒ <code>Promise</code>
Get the aggregate credits for TV season.
This call differs from the main credits call in
that it does not only return the season credits,
but rather is a view of all the cast & crew for all of the episodes belonging to a season.

**Kind**: static constant of [<code>tvSeason</code>](#module_tvSeason)  
**See**: https://developers.themoviedb.org/3/tv-seasons/get-tv-season-aggregate-credits  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

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
| options.include_image_language | <code>string</code> |  |

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

<a name="module_tvSeason.translations"></a>

### tvSeason.translations ⇒ <code>Promise</code>
Get the credits for TV season.

**Kind**: static constant of [<code>tvSeason</code>](#module_tvSeason)  
**See**: https://developers.themoviedb.org/3/tv-seasons/get-tv-season-translations  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| seasonNumber | <code>number</code> | Required |
| options | <code>Object</code> |  |
| options.language | <code>string</code> |  |

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
    * [.aggregateCredits](#module_tv.aggregateCredits) ⇒ <code>Promise</code>
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
    * [.watchProviders](#module_tv.watchProviders) ⇒ <code>Promise</code>

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

<a name="module_tv.aggregateCredits"></a>

### tv.aggregateCredits ⇒ <code>Promise</code>
Get the aggregate credits (cast and crew) that have been added to a TV show.
This call differs from the main credits call in that it does not return the newest season but rather,
is a view of all the entire cast & crew for all episodes belonging to a TV show.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**See**: https://developers.themoviedb.org/3/tv/get-tv-aggregate-credits  

| Param | Type | Description |
| --- | --- | --- |
| tvId | <code>number</code> | Required |
| options | <code>Object</code> |  |
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
| options.include_image_language | <code>string</code> |  |

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

<a name="module_tv.watchProviders"></a>

### tv.watchProviders ⇒ <code>Promise</code>
Powered by our partnership with JustWatch, you can query this method to get a list of the availabilities per country by provider.
This is not going to return full deep links, but rather, it's just enough information to display what's available where.
You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
Please note: In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.

**Kind**: static constant of [<code>tv</code>](#module_tv)  
**Returns**: <code>Promise</code> - Promise  
**See**: https://developers.themoviedb.org/3/tv/get-tv-watch-providers  

| Param | Type |
| --- | --- |
| tvId | <code>number</code> | 

<a name="module_watchProvider"></a>

## watchProvider

* [watchProvider](#module_watchProvider)
    * [.availableRegions](#module_watchProvider.availableRegions) ⇒ <code>Promise</code>
    * [.movie](#module_watchProvider.movie) ⇒ <code>Promise</code>
    * [.tv](#module_watchProvider.tv) ⇒ <code>Promise</code>

<a name="module_watchProvider.availableRegions"></a>

### watchProvider.availableRegions ⇒ <code>Promise</code>
Returns a list of all of the countries we have watch provider (OTT/streaming) data for.

**Kind**: static constant of [<code>watchProvider</code>](#module_watchProvider)  
**See**: https://developers.themoviedb.org/3/watch-providers/get-available-regions  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 

<a name="module_watchProvider.movie"></a>

### watchProvider.movie ⇒ <code>Promise</code>
Returns a list of the watch provider (OTT/streaming) data we have available for movies.
You can specify a watch_region param if you want to further filter the list by country.

**Kind**: static constant of [<code>watchProvider</code>](#module_watchProvider)  
**See**: https://developers.themoviedb.org/3/watch-providers/get-movie-providers  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.watch_region | <code>string</code> | 

<a name="module_watchProvider.tv"></a>

### watchProvider.tv ⇒ <code>Promise</code>
Returns a list of the watch provider (OTT/streaming) data we have available for TV series.
You can specify a watch_region param if you want to further filter the list by country.

**Kind**: static constant of [<code>watchProvider</code>](#module_watchProvider)  
**See**: https://developers.themoviedb.org/3/watch-providers/get-tv-providers  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.language | <code>string</code> | 
| options.watch_region | <code>string</code> | 

