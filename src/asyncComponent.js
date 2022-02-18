import React, {Component} from "react";

const asyncComponent = (importComponent) => {
    return class extends Component {
        
        constructor(){
            super();
            this.state = {
                component: null
            }
        }

        // 或者可以用async/await
        // async componentDidMount(){
        //     const {default:component} = await importComponent();//解构
        //     this.setState({
        //         component
        //     });
        // }
        componentDidMount(){
            importComponent().then(cmp=>{
                this.setState({
                    //模块有default输出接口
                    component:cmp.default
                });
            })
        }

        render(){
            const Com = this.state.component;
            return Com ? <Com {...this.props}/> : null;
        }
    }
};

export default asyncComponent;