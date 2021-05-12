<template>
    <div class="wrapper-content">
        <h1>{{post.title}}</h1>
        <h4>{{post.body}}</h4>
        <hr>
        <router-link class="back" :to="{name:'posts'}">back</router-link>
    </div>
</template>

<script>
    import Http from 'axios'

    export default {
        name: 'post',
        data() {
            return {
                postid: this.$route.params.post_id,
                post: {}
            }
        },
        created() {
            this.getPost();
        },
        methods: {
            getPost() {
                Http.get('https://jsonplaceholder.typicode.com/posts/' + this.postid)
                    .then(response => {
                        this.post = response.data;
                    })
                    .catch(error => {
                        console.log(error.response)
                    })
            }
        }
    }
</script>

<style>
    .wrapper-content {
        max-width: 801px;
        margin: 0 auto;
        background: #eee;
        text-align: left;
        padding: 30px;
    }

    .back {
        display: block;
        background: #4747ff;
        color: white;
        padding: 10px;
        text-align: center;
        font-size: 21px;
        border-radius: 6px;
    }

    .back:hover {
        color: white;
        text-decoration: none;
        opacity: 0.8;
    }
</style>
