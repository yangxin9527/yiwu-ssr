import React, { Component } from 'react'
import Avatar from "@/components/avatar";
import {formatTimeSimple} from 'utils/index';

type PageStateProps = {
  name:string,   //用户姓名
  avatar:string, //头像
  level?:string //等级
  time?:number //时间
  id?:string, //用户id
  showFocus?:boolean,
  canCancelFocus?:boolean, //是否能取消关注
  isFocus?:boolean,
  showLikeBtn?:boolean, //是否显示点赞按钮
  isLike?:boolean, //是否点赞
  CommentCode?:string, // 评论id
  Gender?:string, // 性别
  LabelImage?:string[], //
  extBtn?:any, //额外的内容
  vip?:any,// BigV
}

interface UserBar {
  props: PageStateProps;
}


class UserBar extends Component {
  state={
    isLike:this.props.isLike
  }


  render () {
    const {name,avatar,level,time,id,Gender,LabelImage=false,
    } = this.props;
    return (
      <div className='userBar-wrap'>
        <div className='user-info'>
          <Avatar Gender={Gender}  src={avatar}  level={level} enableClick id={id} />
          <div>
            <div className='name'>{name} {LabelImage&&LabelImage.map((item,i)=>{
              return <img src={item} key={i} />
            })} </div>

            <span className='time'> {time&&formatTimeSimple(time)}</span>
          </div>

        </div>
      </div>
    )
  }
}

export default UserBar
