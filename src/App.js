import './App.css';
import Cdmi from './Cdmi';
// import Props from './Props';
// var name = 'tokiyo';
// var arr = [1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15, 16, 17];
// var ls = [

//   { "name": "lipsa", "email": "ls@gmail.com" },
//   { "name": "lips2a", "email": "ls4@gmail.com" },
//   { "name": "lipsa4", "email": "ls3@gmail.com" },
//   { "name": "lips3a", "email": "l2s@gmail.com" },

// ]
var arr =[
  {
    "img" :require("./image/img1.jpg"),
    "name":"devlopment Cources",
    "par":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, libero est dolor velit perspiciatis soluta eligendi ad! Molestias, distinctio, vitae temporibus nulla facere assumenda ratione veritatis",
  },
  {
    "img" :require("./image/img2.jpg"),
    "name":"devlopment Cources",
    "par":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, libero est dolor velit perspiciatis soluta eligendi ad! Molestias, distinctio, vitae temporibus nulla facere assumenda ratione veritatis",
  },
  {
    "img" :require("./image/img3.png"),
    "name":"devlopment Cources",
    "par":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, libero est dolor velit perspiciatis soluta eligendi ad! Molestias, distinctio, vitae temporibus nulla facere assumenda ratione veritatis",
  },
  {
    "img" :require("./image/img4.jpg"),
    "name":"devlopment Cources",
    "par":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, libero est dolor velit perspiciatis soluta eligendi ad! Molestias, distinctio, vitae temporibus nulla facere assumenda ratione veritatis",
  },
  {
    "img" :require("./image/img5.jpg"),
    "name":"devlopment Cources",
    "par":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, libero est dolor velit perspiciatis soluta eligendi ad! Molestias, distinctio, vitae temporibus nulla facere assumenda ratione veritatis",

  },
  {
    "img" :require("./image/img6.jpg"),
    "name":"devlopment Cources",
    "par":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, libero est dolor velit perspiciatis soluta eligendi ad! Molestias, distinctio, vitae temporibus nulla facere assumenda ratione veritatis",
  }
  
]
function App() {
  return (
    <>
      {
        arr.map((item) =>{
          return(
            <Cdmi img={item.img}
            name={item.name}  par={item.par} />
          )
        })
      }
      {/* <h1>{name}</h1>

      <ul>

        {
          arr.map((item, k) => {
            return (
              <li>{item} : {k}</li>
            )
          })
        }
      </ul>
      <Props name={name}/> */}


      {/* {
        ls.map((item) => {
          return (
            <Props name={item.name}
              email={item.email} />
          )
        })
      } */}
    </>
  );
}

export default App;
