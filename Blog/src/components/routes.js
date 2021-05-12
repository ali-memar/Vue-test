import AddPost from '../components/AddBlog.vue';
import Posts from '../components/Posts.vue';
import Post from '../components/Post.vue';

export default [
    {path: '/', name: 'posts', component: Posts},
    {path: '/add-post', name: 'insert', component: AddPost},
    {path: '/post/:post_id', name: 'post', component: Post},

]