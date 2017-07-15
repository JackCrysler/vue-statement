Vue.component('global-header',{
    props:{
        title:{
            type:String,
            required:true
        }
    },
    template:`<header>
            <span class="iconfont icon-arrow-left" v-on:click="back"></span>
            <span>{{title}}</span>
            <span class="iconfont icon-msg"></span>
        </header>`,
    methods:{
        back:function () {
            window.history.go(-1);
        }
    }
});


