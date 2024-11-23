
import './App.css'
import Card from './components/Card'

function App() {

  let details = {
    name :"Anshar Alam",
    btn : "Visit me",
    year : 2020
  }

  let arr =[1,2,3,4,5,6]
  console.log(arr);
  
  return (
    <>

     <Card person = {{name: "Faiyaz Alam", btn : "Click me", year:2030}}/>
     <Card person = {{name: "Arham Haider", btn : "Read more", year:3030}}/>
     <Card person = {{name: "Azhan Haider", btn : "Follow me"}}/>
     <Card  person={details}/>
    </>
  )
}

export default App