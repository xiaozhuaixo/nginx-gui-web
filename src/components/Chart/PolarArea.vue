<template>
    <el-row>
        <el-col :span="span">
            <canvas id="polarArea" v-canvas></canvas>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'PolarArea',
        props:{
            span: {
                type: Number,
                default: 24
            },
            data: {
                type: Object,
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
                    data: self.data,
                    type: 'polarArea',
                });
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
</style>