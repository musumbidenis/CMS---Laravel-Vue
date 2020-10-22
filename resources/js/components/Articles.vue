<template>
    <div>
    <h2> Articles </h2>
    <ul class="pagination">
        <li v-bind:class="[{disabled: !pagination.prev_page_url}]" class="page-item"><a class="page-link" href="#" @click="fetchArticles(pagination.prev_page_url)">Previous</a></li>
        <li v-bind:class="[{disabled: !pagination.next_page_url}]" class="page-item"><a class="page-link" href="#" @click="fetchArticles(pagination.next_page_url)">Next</a></li>
    </ul>

    <div class="card card-body" v-for = "article in articles" v-bind:key="article.postId">
        <h3>{{article.title}}</h3>
        <p>{{article.description}}</p>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: [],
            article: {
                postId: '',
                title: '',
                description: '',
            },
            pagination:{},
            edit: false,
        }
    },

    created() {
       this.fetchArticles();
    },

    methods: {
        fetchArticles(page_url){
            page_url = page_url || 'api/articles'
            let vm = this;
            fetch(page_url)
               .then(res => res.json())
               .then( res =>{
                   this.articles = res.data;
                   vm.makePagination(res);
               })
               .catch(err => console.log(err));
        },
        makePagination(res){
            let pagination = {
                current_page: res.current_page,
                last_page: res.last_page,
                next_page_url: res.next_page_url,
                prev_page_url: res.prev_page_url,
            }

            this.pagination = pagination;
        }
    },
}
</script>