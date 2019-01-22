<template>
    <div>
        <h3 class="title">{{content}}</h3>
        <canvas v-canvas></canvas>
    </div>
</template>

<script>
    export default {
        name: 'PolarArea',
        props:{
            datas: {
                type: Object,
            },
            content: {
                type: String,
            }
        },
        data(){
            return {
                context: {},
                polarArea: {},
            }
        },
        methods: {
            initPolarArea(){
                const self = this;
                self.polarArea = new self.$chart(self.context,{
                    data: self.datas,
                    type: 'polarArea',
                });
            },
            update(data){
                const self = this;
                self.polarArea.config.data = data;
                self.polarArea.update();
            },
        },
        directives: {
            canvas: {
                bind(element , binding , VNode){
                    let context = element.getContext('2d');
                    VNode.context.context = context;
                    VNode.context.initPolarArea();
                }
            }
        }
    }
</script>

<style scoped>
    #polarArea{
        width:100%;
        height:100%;
        overflow:hidden;
    }
    .title {
        text-align:center;
        color: rgba(248, 67, 67, 0.56);
    }
</style>