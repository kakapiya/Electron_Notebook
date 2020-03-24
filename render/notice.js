var mynotice = this.document.getElementById('notice')

var option = {
  title:'标题',
  body: '通知正文内容'
}
  
mynotice.onclick = () => { 
  new Notification(option.title,option)
    console.log('通知被点击')
  }