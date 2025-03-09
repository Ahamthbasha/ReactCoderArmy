const element=React.createElement('h1',{id:"first",className:"basha",style:{backgroundColor:"blue",color:"white"}},"hello")

const element2=React.createElement('h1',{id:"second",className:"basha",style:{backgroundColor:"black",color:"white"}},"happy to learn react")

const ReactRoot=ReactDOM.createRoot(document.getElementById('root'))
 
ReactRoot.render(element)
ReactRoot.render(element2)

//now the second element is showing .First element was fade away.Render will delete the old data the new data will be inserted in that place.


//To display both the tag we will put the both tag inside a div tag.


const div=React.createElement('div',{},[element,element2])
ReactRoot.render(div)


//jsx

//this is not the standard approach

//optimize code:need to remove space,comments,some code won't be used.
//file size should be small to fast our application

//bundler will read entire code and give a bundle we will use it in the production level. it read html,css,js,dependencies.It will handle the entire work automatically.It optimize our code.It will avoid the unneccessary comments.It will take the necessary parts or functions from the react and react dom .It makes a pack and give as a file.It gives a optimized version.

//ex:webpack,vite,parcel

//npm
//node modules:we install parcel but many folder is also installed because the parcel code is dependent on another folder code.
//version:18.2.3 -Major-minor-patch

//patch-bug fixed
// ^ Minor and patches
// ~ patches
