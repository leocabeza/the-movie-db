## Modules

<dl>
<dt><a href="#module_account">account</a></dt>
<dd></dd>
<dt><a href="#module_authentication">authentication</a></dt>
<dd></dd>
</dl>

<a name="module_account"></a>

## account

* [account](#module_account)
    * [.favoriteMovies](#module_account.favoriteMovies) ⇒
    * [.favoriteTvShows](#module_account.favoriteTvShows) ⇒
    * [.lists](#module_account.lists) ⇒
    * [.movieRecommendations](#module_account.movieRecommendations) ⇒
    * [.movieWatchlist](#module_account.movieWatchlist) ⇒
    * [.ratedMovies](#module_account.ratedMovies) ⇒
    * [.ratedTvShows](#module_account.ratedTvShows) ⇒
    * [.tvShowRecommendations](#module_account.tvShowRecommendations) ⇒
    * [.tvShowWatchlist](#module_account.tvShowWatchlist) ⇒

<a name="module_account.favoriteMovies"></a>

### account.favoriteMovies ⇒
Get the list of movies you have marked as a favorite.

**Kind**: static constant of [<code>account</code>](#module_account)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/account/get-account-favorite-movies  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>string</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc, |

<a name="module_account.favoriteTvShows"></a>

### account.favoriteTvShows ⇒
Get the list of TV shows you have marked as a favorite.

**Kind**: static constant of [<code>account</code>](#module_account)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/account/get-account-favorite-tv-shows  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>string</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc, |

<a name="module_account.lists"></a>

### account.lists ⇒
Get all of the lists you've created.

**Kind**: static constant of [<code>account</code>](#module_account)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/account/get-account-lists  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |

<a name="module_account.movieRecommendations"></a>

### account.movieRecommendations ⇒
Get a list of your personal movie recommendations.

**Kind**: static constant of [<code>account</code>](#module_account)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/account/get-account-movie-recommendations  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>string</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc, |

<a name="module_account.movieWatchlist"></a>

### account.movieWatchlist ⇒
Get the list of movies you have added to your watchlist.

**Kind**: static constant of [<code>account</code>](#module_account)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/account/get-account-movie-watchlist  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>string</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc, |

<a name="module_account.ratedMovies"></a>

### account.ratedMovies ⇒
Get the list of movies you have rated.

**Kind**: static constant of [<code>account</code>](#module_account)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/account/get-account-rated-movies  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>string</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc, |

<a name="module_account.ratedTvShows"></a>

### account.ratedTvShows ⇒
Get the list of TV shows you have rated.

**Kind**: static constant of [<code>account</code>](#module_account)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/account/get-account-rated-tv-shows  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>string</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc, |

<a name="module_account.tvShowRecommendations"></a>

### account.tvShowRecommendations ⇒
Get a list of your personal TV show recommendations.

**Kind**: static constant of [<code>account</code>](#module_account)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/account/get-account-tv-show-recommendations  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>string</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc, |

<a name="module_account.tvShowWatchlist"></a>

### account.tvShowWatchlist ⇒
Get the list of TV shows you have added to your watchlist.

**Kind**: static constant of [<code>account</code>](#module_account)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/account/get-account-tv-show-watchlist  

| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>string</code> | Required |
| options | <code>Object</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>string</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc, |

<a name="module_authentication"></a>

## authentication

* [authentication](#module_authentication)
    * [.createAccessToken](#module_authentication.createAccessToken) ⇒
    * [.createRequestToken](#module_authentication.createRequestToken) ⇒
    * [.deleteAccessToken](#module_authentication.deleteAccessToken) ⇒

<a name="module_authentication.createAccessToken"></a>

### authentication.createAccessToken ⇒
This method will finish the user authentication flow and issue an official user access token.
The requesToken in this request is sent along as part of the POST body.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/auth/create-access-token  

| Param | Type |
| --- | --- |
| requestToken | <code>string</code> | 

<a name="module_authentication.createRequestToken"></a>

### authentication.createRequestToken ⇒
This method generates a new request token that you can ask a user to approve.
This is the first step in getting permission from a user to read and write data on their behalf.
Note that there is an optional body you can post alongside this request to set a redirect URL
or callback that will be executed once a request token has been approved on TMDb.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/auth/create-request-token  

| Param | Type |
| --- | --- |
| redirectTo | <code>string</code> | 

<a name="module_authentication.deleteAccessToken"></a>

### authentication.deleteAccessToken ⇒
This method gives your users the ability to log out of a session.

**Kind**: static constant of [<code>authentication</code>](#module_authentication)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/auth/delete-access-token  

| Param | Type |
| --- | --- |
| accessToken | <code>string</code> | 

