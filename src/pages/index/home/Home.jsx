import React, { Component } from 'react'

//路由
import{
  Route,
  Redirect,
  Switch,
  NavLink
} from 'react-router-dom'

//组件
import Content from './contents/Contents'

//样式
import{
  CateContainer,
  Search,
  Nav,
} from './StyledHome'

//图片
import fdj from "../../../assets/images/fangdajing.png"

// import http from 'utils/http'

export default class Home extends Component {
  state={
    list:[]
  }

  // handleClick(id){
  //   this.props.history.
  // }

  render() {
    let {match,history}=this.props
    
    return (
      <CateContainer>
       
        <Search>
         <header>
           <div className="grade" onClick={()=>history.push("/grade")}>年级</div>
           <div className="search">
             <input type="text" onClick={()=>history.push("/search")} placeholder="请输入科目或者年级" />
             <img src={fdj} alt=""/>
           </div>
         </header>
         </Search>
        
        <Nav>
          <NavLink to={match.path+'/math'} activeClassName="active" >数学</NavLink>
          <NavLink to={match.path+'/physics'} activeClassName="active">物理</NavLink>
          <NavLink to={match.path+'/chemistry'} activeClassName="active">化学</NavLink>
        </Nav>

        <Switch>
           <Route path={match.path+'/:subject'} component={Content}></Route>
           <Redirect from={match.path} exact to={match.path+'/math'}></Redirect>
        </Switch>
        
      </CateContainer>
    )
  }
}
