<template>
    <h3>Cpu</h3>
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
                const self = this;
                console.log("连接建立");
                self.socket.send("hello world");
                console.log(self.socket)
                self.socket.send("hello world");
            },
            //来自服务器信息
            onMessage(message){
                console.log("信息内容" + message);
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