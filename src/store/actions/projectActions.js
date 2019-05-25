export const createProject = (project) => {
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
        const firestore  = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
          ...project,
          authorFirstName : profile.firstName,
          authorLastName  :profile.lastName,
          authorId : authorId,
          createdAt : new Date()
        }).then(() => {
          dispatch({type:'CREATE_PROJECT',project})
        }).catch((err) =>{
          dispatch({type : 'CREATE_PROJECT_ERROR',err})
        }) 
    }
}

export const updateProject = (state) => {
  return (dispatch,getState,{getFirebase,getFirestore}) =>{
      const firestore  = getFirestore();
      const ref = firestore.collection('projects').doc(state.project.id);
      ref.set(state.project)
      .then( dispatch({type:'UPDATE_PROJECT',}))
      .catch((err) =>{
        dispatch({type : 'UPDATE_PROJECT_ERROR',err})
      }) 
  }
}