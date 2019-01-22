<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12">
        <PolarArea :datas="cpuData" ref="cpu"/>
      </el-col>
      <el-col :span="12">
        <PolarArea :datas="memoryData" ref="memory"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  const PolarArea = () => import("@/components/Chart/PolarArea")
  export default {
    name: 'Index',
      components: { PolarArea },
      data(){
        return {
            socket: {},
            breakLineReconnection: false,
            cpuData: {
                datasets: [{
                    data: [100 , 100 , 100],
                    backgroundColor: [
                        "#f0fcff",
                        "#ffb61e",
                        "#9ed048"
                    ],
                    hoverBackgroundColor: [
                        "#e3f9fd",
                        "#ffc773",
                        "#96ce54"
                    ]
                }],
                labels: [
                    '用户CPU使用率',
                    '系统CPU使用率',
                    '空闲CPU使用率'
                ],
            },
            memoryData: {
                datasets: [{
                    data: [100 , 100 , 100],
                    backgroundColor: [
                        "#ff461f",
                        "#7013ff",
                        "#003472",
                    ],
                    hoverBackgroundColor: [
                        "#ff2d51",
                        "#44cef6",
                        "#4b5cc4"
                    ],
                }],
                labels: [
                    '总内存',
                    '用户使用内存',
                    '系统空闲内存'
                ],
            }
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
              const self = this;
              let data = message.data;
              let type = data.split("-")[0];
              let resultData = data.split('-')[1];
              if(type === "CPU"){
                  let resultCpuData = JSON.parse(resultData);
                  self.cpuData = {
                      datasets: [{
                          data: [resultCpuData.user.replace("%" , "") , resultCpuData.sys.replace("%" , "") , resultCpuData.idle.replace("%" , "")],
                          backgroundColor: [
                              "#f0fcff",
                              "#ffb61e",
                              "#9ed048"
                          ],
                          hoverBackgroundColor: [
                              "#e3f9fd",
                              "#ffc773",
                              "#96ce54"
                          ]
                      }],
                      labels: [
                          '用户CPU使用率',
                          '系统CPU使用率',
                          '空闲CPU使用率'
                      ],
                  }
                  self.$refs.cpu.update(self.cpuData);
              }else if(type === "memory"){
                  let memory = JSON.parse(resultData);
                  self.memoryData = {
                      datasets: [{
                          data: [memory.av , memory.used , memory.free],
                          backgroundColor: [
                              "#ff461f",
                              "#7013ff",
                              "#003472",
                          ],
                          hoverBackgroundColor: [
                              "#ff2d51",
                              "#44cef6",
                              "#4b5cc4"
                          ],
                      }],
                      labels: [
                          '总内存',
                          '用户使用内存',
                          '系统空闲内存'
                      ],
                  }
                  self.$refs.memory.update(self.memoryData);
              }
          },
          //socket 关闭
          onClose(){
              console.log("关闭");
          },
          onError(error){
              console.log("错误信息")
          },
          update(){
              const self = this;
          },
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

<style scoped rel="stylesheet/scss" lang="scss">


</style>
