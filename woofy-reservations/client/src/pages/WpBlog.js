import React, {Component} from "react";


class WpBlog extends Component{

    render(){
        return(
            <div >
                <iframe 
                // style={mTop75} 
                 width="100%" height="800px" title="Wordpress Deployment" src="https://woofy-wp.herokuapp.com/"/>
            </div>
        );
    }

}


export default WpBlog;