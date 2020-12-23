import React, {Component} from 'react'


type PageStateProps = {
  className?: string,
  src?: string,
  level?: string | number,
  enableClick?:boolean,
  id?:string,
  Gender?:string,
  onClick?:Function
}

interface Avatar {
  props: PageStateProps;
}



class Avatar extends Component {
  state = {
    src: this.props.src ? this.props.src : ''
  }
  handleClick(e){
    if(this.props.enableClick){
      if(this.props.id){
        e.stopPropagation();
        // historyPush('userinfo',{
        //   id:this.props.id
        // })
      }
    }
    if(this.props.onClick){
      e.stopPropagation();
      this.props.onClick();
    }
  }


  render() {
    const {className = "",  level,Gender} = this.props;
    let {src} = this.state
    return (
      <div className='avatar-wrap'
        onClick={e => {this.handleClick(e)}}
      >
        <img
          key={src}
          className={'avatar circle ' + className} src={src}
        />
        {level !==undefined && <div className={Gender==='男'?'level':'level pink'}>{level}</div>}
      </div>
    )
  }
}

export default Avatar
