import './App.css';
import characters from "./characters.json";
import styles from "./styles.json"

// const CharaRow = ({characters}) => (
//   <tr key={characters.id}>
//     {/* <td>{characters.image}</td> */}
//     <td>{characters.name}</td>
//   </tr>

// )
const pathToImg = "https://hbr.quest/hbr/"
const clickItem = () =>{

}

function App() {
  return (
    <div
      style={{
        margin:"auto",
        width: 800,
        paddingTop:"1rem"
      }
    }
    >
      <h1 className="title">HBR Collection Tracker</h1>
      <table width="100%">
        <thead>
        </thead>
        <tbody>
          {styles.map((styles) => (
            <tr>
              <td><img src= { pathToImg + styles.strip}></img></td>
              <td>
                <div>{styles.chara}</div>
                <div>{styles.name}</div>
                <select>
                  <options>
                   "1"
                  </options>

                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
