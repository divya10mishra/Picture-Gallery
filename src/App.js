import logo from './logo.svg';
import Header from './component/header.js';
import Article from './component/article.js'
import './App.css';


const data=[{
  id:1,
  title:'Soan Papdi',
  imgPath:'',
  description:'Made up of Besan'
},
{
  id:2,
  title:'Barfi',
  imgPath:'',
  description:'Made up of Khoya'
},
{
  id:3,
  title:'Rasgulla',
  imgPath:'',
  description:'Made up maida'
},{
  id:4,
  title:'Rasmalai',
  imgPath:'',
  description:'Made up of milk'
},
{
  id:5,
  title:'Chocolate',
  imgPath:'',
  description:'Made up of Coca'
},
{
  id:6,
  title:'Mentos',
  imgPath:'',
  description:'Made up of toffee'
}
]

function App() {
  return (
    <div className="App">
     News Article
     <Header/>
     {
       data.map(item=>{
        return(<Article item={item}/>)
       })
     }
    
    </div>
  );
}

export default App;
