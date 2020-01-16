import React from 'react'
import './index.scss'
import Nav from '../../components/Nav'
const Home: React.FC = (props) => {

    return (
        <div>
            <Nav/>
            <span className="name">石宇航</span>
            {/* <div style={{fontFamily: 'HelveticaNeue'}}>The day is a good day</div> */}
            <div className="line" />
            <div className="social-icon">
                <a href="#wechat" style={{right:'4em'}}><i className="iconfont icon-weixin"/></a>
                <a href="https://github.com/S-yh" target="blank" style={{right:'1em'}}><i className="iconfont icon-github"/></a>
            </div>
            <div className="img">
                {/* <img src={require("../../assets/img/syh.jpg")} className="img-syh" /> */}
            </div>
        </div>
    )
}

export default Home