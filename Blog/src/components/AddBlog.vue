<template>
    <div class="col-md-8 col-md-push-2">
        <form class="form-horizontal" @submit.prevent="createArticle" v-if="!submited">
            <fieldset class="wraper">

                <!-- Form Name -->
                <legend>وبلاگ - افزودن نوشته</legend>

                <!-- Text input-->
                <div class="form-group">
                    <label class="col-md-4 control-label">عنوان:</label>
                    <div class="col-md-4">
                        <input type="text" v-model="article.title" placeholder="عنوان را وارد کنید"
                               class="form-control input-md">
                    </div>
                </div>

                <!-- Text input-->
                <div class="form-group">
                    <label class="col-md-4 control-label">محتوای نوشته:</label>
                    <div class="col-md-4">
                        <textarea rows="8" type="text" v-model="article.content" placeholder="محتوا را وارد کنید"
                                  class="form-control input-md"></textarea>
                    </div>
                </div>

                <!-- Multiple Checkboxes (inline) -->
                <div class="form-group">
                    <label class="col-md-4 control-label">موضوع : </label>
                    <div class="col-md-4">
                        <label class="checkbox-inline">
                            <input type="checkbox" value="وب برنامه نویسی" v-model="article.categories"> وب برنامه نویسی
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" value="طراحی وب" v-model="article.categories">
                            طراحی وب
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" value="معماری وب" v-model="article.categories">
                            معماری وب
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" value="مدیریت سرور" v-model="article.categories">
                            مدیریت سرور
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" value="مارکتینگ" v-model="article.categories">
                            مارکتینگ
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" value="سئو" v-model="article.categories">
                            سئو
                        </label>
                    </div>
                </div>

                <!-- Select Basic -->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="selectbasic">نویسنده</label>
                    <div class="col-md-4">
                        <select id="selectbasic" v-model="article.author" name="selectbasic" class="form-control">
                            <option v-for="author in authors" :key="author">{{author}}</option>
                        </select>
                    </div>
                </div>

                <!-- Button -->
                <div class="form-group">
                    <div class="col-md-4">
                        <button id="singlebutton" type="submit" name="singlebutton" class="btn btn-primary">ارسال
                            درخواست
                        </button>
                    </div>
                </div>
            </fieldset>
        </form>
        <!-- Select Basic -->
        <div class="row" v-if="submited">
            <h4 class="notify">نوشته شما با موفقیت ذخیره شد.</h4>
        </div>
        <!-- preview section -->
        <div class="preview">
            <div class="row">
                <h3>پیش نمایش نوشته</h3>
                <hr>
                <div class="row  ">
                    <div class="col-md-2 bold">
                        <p>عنوان: </p>
                    </div>
                    <div class="col-md-10">
                        <p>{{article.title}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 bold">
                        <p>محتوای نوشته: </p>
                    </div>
                    <div class="col-md-10">
                        <p>{{article.content}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 bold">
                        <p>دسته بندی: </p>
                    </div>
                    <div class="col-md-10">
                        <ul>
                            <li v-for="category in article.categories" :key="category">{{category}}</li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 bold">
                        <p>نویسنده: </p>
                    </div>
                    <div class="col-md-10">
                        <p>{{article.author}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Http from 'axios';

    export default {
        name: 'addBlog',
        data() {
            return {
                article: {
                    title: '',
                    content: '',
                    author: 'محمد نجاری',
                    categories: []
                },
                authors: ['علی معمار', 'محمد عالمی', 'رضا باقری'],
                submited: false
            }
        },
        methods: {
            createArticle() {
                Http.post('https://jsonplaceholder.typicode.com/posts', this.article)
                    .then(response => {
                        this.submited = response.status;
                    })
                    .catch(error => {
                        console.log(error.response)
                    })
            }
        }
    }
</script>
<style>
    body {
        font-family: iransans;
    }

    .wraper {
        padding: 5px;
        background: #fafafa;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    legend {
        background: #fafafa;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #eee;
    }

    .preview {
        background: #fefefe;
        margin: 5px 0 !important;
        border: 1px solid #eee;
        border-radius: 5px;
        padding: 15px 20px;
    }

    .preview p {
        padding: 15px
    }

    .preview h3 {
        padding: 6px 20px;
    }

    .notify {
        text-align: center;
        padding: 20px;
        background: #22dd0054;
        margin: 7px 15px;
        border: 2px solid #fefefe;
        border-radius: 5px;
    }

    .bold p {
        font-weight: 800;
    }
</style>
