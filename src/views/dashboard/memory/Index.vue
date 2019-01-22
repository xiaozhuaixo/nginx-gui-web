<template>
    <h3>内存</h3>
</template>

<script>
    export default {
        name: 'index',
        data(){
            return {
                socket: {},
            }
        },
        methods: {
            initSocket(){
                const self = this;
                let wsurl = process.env.VUE_APP_SOCKET_URL;
                self.socket = new WebSocket(wsurl);
                self.socket.onopen = self.onOpen;
                self.socket.onmessage = self.onMessage;
                self.socket.onclose = self.onClose;
                self.socket.onerror = self.onError;
            },
            //socket 连接
            onOpen(){

            },
            //来自服务器信息
            onMessage(message){
                let data = message.data;
                let type = data.split("-")[0];
                let resultData = data.split('-')[1];
                if(type === "memory"){
                    let memory = JSON.parse(resultData);
                    console.log(memory);
                }
            },
            //socket 关闭
            onClose(){
                console.log("关闭");
            },
            onError(error){
                console.log("错误信息")
            }
        },
        mounted(){
            const self = this;
            self.initSocket();
        },
        destroyed(){
            const self = this;
            self.socket.close();
        }
    }
</script>

<style scoped>

</style>