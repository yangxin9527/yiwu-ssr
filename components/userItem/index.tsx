import React, { Component } from 'react'
import { div,  span } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Avatar from "@/components/avatar";
import FocusBtn from "@/components/focusBtn";
import Img from "@/components/Image";
import VipComponent from "@/components/Vip";

import './index.less'

type PageStateProps = {
  item:{
    Avatar:string,
    AttentionStatus:number,
    Grade:number,
    MemberCode:string,
    Name:string,
    PersonalSignature:string,
    LabelImage:any[],
    vip?:any,
  },
  showFocus?:boolean,
  showLikeBtn?:boolean, //是否显示点赞按钮
  isLike?:boolean, //是否点赞
  extBtn?:any, //额外的内容
}

interface UserItem {
  props: PageStateProps;
}

@inject('store')
@observer
class UserItem extends Component {
  render () {
    const {showFocus,extBtn,item} = this.props;
    return (
      <div className='userItem'>
        <Avatar src={item.Avatar} width={80} level={item.Grade} id={item.MemberCode} enableClick  />
        <div>
          <div className='name'>{item.Name} {item.LabelImage&&item.LabelImage.map((img,i)=>{
            return <Img mode='aspectFit' src={img} key={i} />
          })} <VipComponent vip={item.vip} /> </div>
          <span className='ellipsis sign'>{item.PersonalSignature}</span>
        </div>
        {showFocus&&<React.Fragment>
          <FocusBtn isFocus={item.AttentionStatus===1} id={item.MemberCode}  />
        </React.Fragment>}

        {extBtn}
      </div>
    )
  }
}

export default UserItem
