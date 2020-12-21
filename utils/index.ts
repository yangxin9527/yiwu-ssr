
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn'


dayjs.locale('zh-cn') // 全局使用简体中文
dayjs.extend(relativeTime);

export default {


}

export function formatTime(time){
  return dayjs(time*1000).format('YYYY-MM-DD HH:mm')
}
export function formatTimeSimple(time,type?:string){
  if((new Date().getTime()/1000-time)/24/3600>2){
    if(type){
      return dayjs(time*1000).format(type)
    }else{
      return formatTime(time)
    }
  }else{

    return dayjs(time*1000).fromNow()
  }
}
