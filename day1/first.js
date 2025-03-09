const React={
    createElement:function(tag,style,innerText){
        const element=document.createElement(tag)

        for(let key in style){
            element.style[key]=style[key]//element.style[key]=element.style.fontSize
        }
        element.innerText=innerText
        return element
    }
}

const header1=React.createElement('h1',{fontSize:"30px",backgroundColor:"blue",color:"white"},"Hello coder army")
const header2=React.createElement('h2',{fontSize:"30px",backgroundColor:"black",color:"white"},'how are you?')

const paragraph=React.createElement('p',{fontSize:"20px",backgroundColor:"red",color:"white"},"king of the world")

//RENDERING

/*

DOM manipulation

*/

const ReactDom={
    rendering:function(element,root){
        root.append(element)
    }
}

ReactDom.rendering(header1,document.getElementById('root'))
ReactDom.rendering(header2,document.getElementById('root'))

//create a ul with its children html,css,js


const React2={
    createElement:function(tag,style,children){
        const element=document.createElement(tag)

        for(let key in style){
            element.style[key]=style[key]
        }

        if(typeof children==='object'){
            for(let val of children){
                element.append(val)
            }
        }else{
            element.innerText=children
        }

        return element
    }
}


const ReactDom2={
    rendering:function(element,root){
        root.append(element)
    }
}

const li1=React2.createElement('li',{},"html")
const li2=React2.createElement('li',{},"css")
const li3=React2.createElement('li',{},"js")


const ul=React2.createElement('ul',{fontSize:"30px",backgroundColor:"blue",color:"white"},[li1,li2,li3])

ReactDom2.rendering(ul,document.getElementById('root'))