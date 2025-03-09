const element=React.createElement('h1',{},"hello")

const ReactRoot=ReactDOM.createRoot(document.getElementById('root'))
 
ReactRoot.render(element)


//cdn

/*
content delivery network

data all are stored in server.
created mirror server to handle traffic.
server will manually creating the copy for the mirror server.

laptop

small server in multiple areas.Request will go to the nearest server.If the request or data is not found in that server.The server will connect to the another server or main server.It gives the response to the small server.The small server give response to the user.static data will be in the small server.Frequently modifying data will be going to the main server.Static data will come first in our website.

*/