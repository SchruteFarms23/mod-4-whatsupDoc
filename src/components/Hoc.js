import React from 'react'


function HOC(RenderedComponent, props) {
  return class extends React.Component {


    componentDidMount() {

    }
    render() {
      if (props.shouldRender) {
        return <RenderedComponent {...this.props} {...props}/>
      } else {
        return ""
      }

    }
  }
}

export default HOC