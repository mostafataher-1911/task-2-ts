//  task1
//  class bankaccount{
//     private balance:number=0;
var PostService = /** @class */ (function () {
    function PostService() {
    }
    PostService.prototype.fetchPosts = function (url) {
        fetch(url)
            .then(function (response) { return response.json(); })
            .then(function (posts) {
            posts.forEach(function (post) {
                console.log("Post ID: ".concat(post.id));
                console.log("Title: ".concat(post.title));
                console.log("Body: ".concat(post.body));
                console.log("-------------");
            });
        })
            .catch(function (error) {
            console.error("Error fetching posts:", error);
        });
    };
    return PostService;
}());
var postService = new PostService();
postService.fetchPosts("https://jsonplaceholder.typicode.com/posts");
