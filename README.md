# test-rest
Endpoint written on node to test REST requests with CORS (AJAX, Fetch API)

If you need an endpoint to test your client requests, you can use `test.huncode.com` (working both at `http` and `https`):

GET, response with status 200: `https://test.huncode.com/get`

GET, response with status 401: `https://test.huncode.com/get/401`

GET, response with status 500: `https://test.huncode.com/get/500`

POST, response with status 200: `https://test.huncode.com/post`

POST, response with status 400: `https://test.huncode.com/post/400`

POST, response with status 500: `https://test.huncode.com/post/500`


All responses support CORS with credentials.

# Why the repo?
Created as simple service for [my blog](https://huncode.com/) article:

"Fetch API Guide. Javascript Asynchronous request in 2018" https://huncode.com/fetch-api-guide-2018/
