import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

export class UpdateProject extends Component {
  state = {
    project :'',
    flag : true
  }
  handleChange = (e)=> { 
    const newProject = this.state.project
    newProject[e.target.id] = e.target.value
    this.setState({
        ...this.state,
        project : newProject
    })
  } 
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateProject(this.state)
    this.props.history.push('/project/'+this.state.project.id)
  }
  render() {
    const {auth,project,id } = this.props;
    if (!auth.uid) return <Redirect to = '/signin' />
    if (project) {
      if (this.state.flag) {
        this.state.project = project
        this.state.project.id= id
        this.state.flag = false
      }
    return (
      <div className= 'container'>
        <form  onSubmit = {this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Update Project</h5>
            <br/>
            <label htmlFor="title">Title</label>
            <div className="input-field">
              <input type="text" id = "title" onChange = {this.handleChange} value = {this.state.project.title}/>
            </div>
            <label htmlFor="content">Project Content</label> 
            <div className="input-field"> 
                <textarea id="content" className="materialize-textarea" onChange = {this.handleChange} value = {this.state.project.content}></textarea>
            </div> 
            <br />
            <div className="input-field">
                <button className="grey lighten-1 z-depth-0">Update</button>
            </div>
        </form>
      </div>
    )
    } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
    }
  }
}

const mapStateToProps = (state,ownProps)  =>{
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    auth  : state.firebase.auth, 
    project : project,
    id : id
  }
}

const mapDispatchToProps = (dispatch)  =>{
  return {
    updateProject : (project) => dispatch(updateProject(project))
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([{
    collection : 'projects'
  }]))
  (UpdateProject);
