import React, { Component } from 'react'
import UserBar from "@/components/userBar";
// import ImgList from "@/components/imgList";


function transText(text=''){
  let arr = text.split(new RegExp('\\[(.+?)\\]',"g"))
  let htmlArr:any = [] ;
  arr.map((item,i)=>{
    if(item&&item.indexOf('emoji')!==-1){
      htmlArr.push(<img className='icon-emoji-item' key={'img'+i} src={'https://www.xsdyiwu.com/emoji/'+item+'.png'} />)
    }else{
      htmlArr.push(<span className='trans-text' key={'text'+i}>{item}</span>)
    }
  })
  return htmlArr
}

type PageStateProps = {
  showFocus?:boolean,
  hideFooter?:boolean,
  item:any,
  enableClick?:boolean,
  handleActionSheet?:Function,
  handleShowInput?:Function,//快速评论和转发
  isVidePlay?:boolean, //用于video是否播放,在可视区域才播放
  ellipsis?:boolean, // 文字内容多是否显示省略号
  handleCallback?:Function,

}

interface ArticleItem {
  props: PageStateProps;
}


class ArticleItem extends Component {

  render () {
    let {showFocus,hideFooter=false,item,enableClick,isVidePlay=true,ellipsis} = this.props;
    if(!item){
      return <div>null</div>
    }
    const {PraiseStatus,Praise} = item;
    return (
      <div className='articleItem' onClick={()=>{
        if(enableClick){

        }
      }}
      >
        <UserBar
          showFocus={showFocus}
          isFocus={item.AttentionStatus===1}
          name={item.Name}
          LabelImage={item.LabelImage}
          avatar={item.Avatar}
          level={item.Grade}
          Gender={item.Gender}
          time={item.CreatTime}
          id={item.MemberCode}
          vip={item.BigV}
        />

        {item.ForwardedText&&<div className={hideFooter?'forward-content-name':'ellipsis2 forward-content-name'}>
          {transText(item.ForwardedText)}
          {item.ForwardedList&&item.ForwardedList.map((ForwardedItem,i)=>{
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            return(<React.Fragment key={i}> // <a className='name-link' >@{ForwardedItem.Name}</a>: {transText(ForwardedItem.ForwardedText)}</React.Fragment>)
          })}
        </div>}

        {item.DryGoodsContent?<div className='content'>
          {item.DryGoodsContent}
        </div>:<div
          className={item.ForwardedName?'content content-forward':'content'}
          onClick={(e)=>{
            if(enableClick&&item.ForwardedName){
              e.stopPropagation();

            }
          }
          }
        >

          <div className={ellipsis?'ellipsis2 content-text':'content-text'}>
            {item.ForwardedName&&<React.Fragment>
              <span className='forward-name'>@{item.ForwardedName} </span>:
            </React.Fragment>}
            {item.Title}
            {transText(item.Content)}
          </div>
          {/*<ImgList*/}
          {/*  imgList={item.Image}*/}
          {/*  video={item.Video}*/}
          {/*  isVidePlay={isVidePlay}*/}
          {/*  num={hideFooter?9:3}*/}
          {/*/>*/}
        </div>}
        {item.Label&&item.Label.length>0&&<div className='tags-list'>
          {item.Label.map((labelItem,i)=>(<div key={i} className='tags'>#{labelItem}</div>))}
        </div>}

        {!hideFooter&&<div className='operation'>
          <div className='operation-item'>
            <div className='icon icon-eye'></div>
            <span>{item.Browse}</span>
          </div>
          <div className='operation-item' >
            <div className={PraiseStatus===0?'icon icon-love':'icon icon-love-on'} />
            <span>{Praise}</span>
          </div>
          <div className='operation-item' onClick={(e)=>{e.stopPropagation();this.props.handleShowInput&&this.props.handleShowInput(true)}}>
            <div className='icon icon-comment'></div>
            <span>{item.Comment}</span>
          </div>
          <div className='operation-item mr0' onClick={(e)=>{e.stopPropagation();this.props.handleShowInput&&this.props.handleShowInput(true,true)}}>
            <div className='icon icon-response'></div>
            <span>{item.ForwardedCount}</span>
          </div>
          <div className='icon-more' onClick={(e)=>{
            e.stopPropagation();
            this.props.handleActionSheet&&this.props.handleActionSheet({
              id:item.FindCode,
              userId:item.MemberCode
            });
          }}
          />
        </div>}
      </div>
    )
  }
}

export default ArticleItem
