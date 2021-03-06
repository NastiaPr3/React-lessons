import './App.css';
import Character from "./components/Character";

function App() {
  return (
    <div>
      <Character
      name = {"Bart"}
      desc = {'Bartholomew "Bart" Jojo Simpson (born April 1[7] or February 23[8]) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons.'}
      pic = {'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
      />
        <Character
            name = {"Homer"}
            desc = {'Homer Jay Simpson (born May 12, 1951)[36] is the main protagonist of The Simpsons series (or show).'}
            pic = {'https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png'}
        />
        <Character
            name = {"Marge"}
            desc = {'Marjorie Jacqueline "Marge" Simpson (née Bouvier[11]) is the homemaker and matriarch of the Simpson family. '}
            pic = {'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
        />
        <Character
            name = {"Lisa"}
            desc = {'Lisa Marie Simpson (born May 9)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}
            pic = {'https://static.wikia.nocookie.net/simpsons/images/f/fa/185px-Lisa_Simpson2.png'}
        />
        <Character
            name = {"Maggie"}
            desc = {'Margaret Evelyn[10] Lenny "Maggie" Simpson[11] (born January 12, 1989) is the 1-year old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. '}
            pic = {'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
        />
    </div>
  );
}
export default App;
