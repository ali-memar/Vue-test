<template>
    <div>
        <navbar></navbar>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>
<script>
    import AddPost from './AddBlog';
    import Posts from './Posts';
    import navbar from './Navbar';

    export default {
        name: 'home',
        components: {
            'posts': Posts,
            'add-post': AddPost,
            'navbar': navbar,
        }
    }
</script>

<style>

</style>
