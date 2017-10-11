/**
 * Created by hackywit on 2017/10/9.
 */
import Vue from 'vue'
import index from '@/view/index'

let app = new Vue({
    el: '#app',
    //作为单页面应用在这仅有的vue实例中我们需要引入第一个组件
    template: '<index/>',
    components: { index }
});
