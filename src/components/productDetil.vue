<template>
    <div v-if="product">
        <div class="product-detil">
            <div class="product-detil-image">
                <img :src="product.image">
            </div>
            <div class="product-detil-info">
                <h1 class="product-detil-name"> {{ product.name }} </h1>
                <div class="product-detil-cost">￥ {{product.cost}}</div>
                <div class="product-detil-add-cart" @click="handleAddToCart">加入购物车</div>
            </div>
        </div>
        <div class="product-detil-desc">
            <h2>产品介绍</h2>
            <img v-for="n in 10" :key="n" :src="'http://ordfm6aah.bkt.clouddn.com/shop/' + n + '.jpeg'" >
        </div>
    </div>
</template>
<script>
    import product_data from '../product.js';
import { setTimeout } from 'timers';
    export default {
        data(){
            return {
                //获取路由参数
                id: parseInt(this.$route.params.id),
                product: null
            }
        },
        methods: {
            //真实环境用ajax，这里异步模拟
            getProduct(){
                setTimeout(() => {
                    this.product = product_data
                        .find(item => item.id = this.id);
                },500)
            },
            handleAddToCart(){
                this.$store.commit('addCart', this.id);
            }
        },
        mounted(){
            //初始化数据
            this.getProduct();
            console.log(this.$route.params.id);
        }
    }
</script>

<style>
    .product-detil{
        margin: 32px;
        padding: 32px;
        background: #fff;
        border: solid 1px #dddee1;
        border-radius: 10px;
        overflow: hidden;
    }
    .product-detil-image{
        width: 50%;
        height: 550px;
        float: left;
        text-align: center;
    }
    .product-detil-image img{
        position: relative;
        top: 50%;
        width: 100%;
        margin-top: -75px;
    }
    .product-detil-info{
        width: 50%;
        padding: 150px 0 250px;
        height: 150px;
        float: left;
        text-align: center;
    }
    .product-detil-cost{
        color: #f2352e;
        margin: 8px 0;
    }
    .product-detil-add-cart{
        display: inline-block;
        padding: 8px 64px;
        background: #2d8cf0;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
    }
    .product-detil-desc{
        background: #fff;
        margin: 32px;
        padding: 32px;
        border : solid 1px #dddee1;
        border-radius: 10px;
        text-align: center;
    }
    .product-detil-desc img {
        display: block;
        width: 50%;
        margin: 32px auto;
        padding: 32px;
        border-bottom: solid 1px #dddee1;
    }
</style>