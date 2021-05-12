export default {
    computed: {
        filtredPosts() {
            return this.posts.filter((post) => {
                return post.title.match(this.search);
            });
        }
    },

}