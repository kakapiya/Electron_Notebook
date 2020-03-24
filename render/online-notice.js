var mynotice = this.document.getElementById('notice')

var option = {
  title:'网络状况',
  body: '通知正文内容'
}


mynotice.onclick=()=>{
  window.addEventListener('offline',  ()=>{
    navigator.onLine = false
  })

  window.addEventListener('online',  ()=>{
    navigator.onLine = true
  })

  navigator.onLine ? option.body='网络正常' : option.body='网络异常'
  new Notification(option.title,option)
}


  

// //定义一个生成通知函数
// const alertOnlineStatus = () => {
//   navigator.onLine ? option.body='网络正常' : option.body='网络异常'
//   console.log(navigator.onLine);

// }

// //H5 监听事件:网络
// window.addEventListener('online',  alertOnlineStatus)
// window.addEventListener('offline',  alertOnlineStatus)

// alertOnlineStatus()