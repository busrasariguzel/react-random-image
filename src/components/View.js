import React , {Component} from 'react'

let images= [

'/images/nyc1.jpg',
'/images/nyc2.jpg',
'/images/nyc3.jpg',
'/images/nyc4.jpg',
'/images/nyc5.jpg',
'/images/nyc4.jpg',
'/images/nyc7.jpg',
'/images/nyc8.jpg',
'/images/nyc9.jpg',
'/images/nyc10.jpg',


]





class View extends Component {
    constructor(){
        super()
        this.state={
            images,
            randomSrc:'',
            
        }
    }

    randomPick = ()=>{
        
        this.setState({randomSrc: images[Math.floor(Math.random()*images.length)]})
        console.log(this.state.randomSrc)
    }
    
    


    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
            <button  style={{color:'white', backgroundColor:'hotPink'}}
            

        onClick = {(this.randomPick)} 
        

>View Images</button><br>
</br>

<img src={this.state.randomSrc} ></img>
            </div>
        )
    }
}

export default View