## Modules

<dl>
<dt><a href="#module_account">account</a></dt>
<dd></dd>
<dt><a href="#module_authentication">authentication</a></dt>
<dd></dd>
<dt><a href="#module_list">list</a></dt>
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

<a name="module_list"></a>

## list

* [list](#module_list)
    * [.addItems](#module_list.addItems) ⇒
    * [.clearItems](#module_list.clearItems) ⇒
    * [.create](#module_list.create) ⇒
    * [.details](#module_list.details) ⇒
    * [.deleteItems](#module_list.deleteItems) ⇒
    * [.itemStatus](#module_list.itemStatus) ⇒
    * [.remove](#module_list.remove) ⇒
    * [.update](#module_list.update) ⇒
    * [.updateItems](#module_list.updateItems) ⇒

<a name="module_list.addItems"></a>

### list.addItems ⇒
This method will let you add items to a list.
We support essentially an unlimited number of items to be posted at a time.
Both movie and TV series are supported.
The results of this query will return a results array.
Each result includes a success field. If a result is false this will usually indicate
that the item already exists on the list. It may also indicate that the item could not be found.
You must be the owner of the list and therefore have a valid user access token in order to add items to a list.

**Kind**: static constant of [<code>list</code>](#module_list)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/list/add-items  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |
| items | <code>Array.&lt;Object&gt;</code> | Required |
| items[].media_type | <code>string</code> | Allowed values: movie, tv |
| items[].media_id | <code>number</code> |  |

<a name="module_list.clearItems"></a>

### list.clearItems ⇒
This method lets you clear all of the items from a list in a single request. This action cannot be reversed so use it with caution.
You must be the owner of the list and therefore have a valid user access token in order to clear a list.

**Kind**: static constant of [<code>list</code>](#module_list)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/list/clear-list  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |

<a name="module_list.create"></a>

### list.create ⇒
This method will create a new list.
You will need to have valid user access token in order to create a new list.

**Kind**: static constant of [<code>list</code>](#module_list)  
**Returns**: Promise  
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

### list.details ⇒
This method will retrieve a list by id.
Private lists can only be accessed by their owners and therefore require a valid user access token.

**Kind**: static constant of [<code>list</code>](#module_list)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/list/get-list  

| Param | Type | Description |
| --- | --- | --- |
| listId | <code>number</code> | Required |
| options | <code>object</code> |  |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.sort_by | <code>string</code> | Allowed values: created_at.asc, created_at.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc, |

<a name="module_list.deleteItems"></a>

### list.deleteItems ⇒
This method will let you remove items from a list. You can remove multiple items at a time.
You must be the owner of the list and therefore have a valid user access token in order to delete items from it.

**Kind**: static constant of [<code>list</code>](#module_list)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/list/remove-items  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |
| items | <code>Array.&lt;Object&gt;</code> | Required |
| items[].media_type | <code>string</code> | Allowed values: movie, tv |
| items[].media_id | <code>number</code> |  |

<a name="module_list.itemStatus"></a>

### list.itemStatus ⇒
This method lets you quickly check if the item is already added to the list.
You must be the owner of the list and therefore have a valid user access token in order to check an item status.

**Kind**: static constant of [<code>list</code>](#module_list)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/list/check-item-status  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |
| item | <code>object</code> |  |
| item.media_type | <code>string</code> | Allowed values: movie, tv |
| item.media_id | <code>number</code> |  |

<a name="module_list.remove"></a>

### list.remove ⇒
This method will delete a list by id. This action is not reversible so take care when issuing it.
You must be the owner of the list and therefore have a valid user access token in order to delete it.

**Kind**: static constant of [<code>list</code>](#module_list)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/list/delete-list  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |

<a name="module_list.update"></a>

### list.update ⇒
This method will let you update the details of a list.
You must be the owner of the list and therefore have a valid user access token in order to edit it.

**Kind**: static constant of [<code>list</code>](#module_list)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/list/update-list  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |
| options | <code>object</code> | Required |
| options.name | <code>string</code> | Required |
| options.description | <code>string</code> |  |
| options.public | <code>boolean</code> |  |
| options.sort_by | <code>string</code> | Allowed values: original_order.asc, original_order.desc, vote_average.asc, vote_average.desc, primary_release_date.asc, primary_release_date.desc, title.asc, title.desc |

<a name="module_list.updateItems"></a>

### list.updateItems ⇒
This method will let you update an individual item on a list. Currently, only adding a comment is suported.
You must be the owner of the list and therefore have a valid user access token in order to edit items.

**Kind**: static constant of [<code>list</code>](#module_list)  
**Returns**: Promise  
**See**: https://developers.themoviedb.org/4/list/update-items  

| Param | Type | Description |
| --- | --- | --- |
| accessToken | <code>string</code> | Required |
| listId | <code>number</code> | Required |
| items | <code>Array.&lt;Object&gt;</code> | Required |
| items[].media_type | <code>string</code> | Allowed values: movie, tv |
| items[].media_id | <code>number</code> |  |
| items[].comment | <code>string</code> |  |

