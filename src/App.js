import React,{ useState, useEffect} from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/Wrongletters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import {showNotification as show} from './helpers/helpers';
import Button from './components/Button'


import './App.css';

const storage = "abruptly,absurd,abyss,affix,askew,avenue,awkward,axiom,azure,bagpipes,bandwagon,banjo,bayou,beekeeper,bikini,blitz,blizzard,boggle,bookworm,boxcar,boxful,buckaroo,buffalo,buffoon,buxom,buzzard,buzzing,buzzwords,caliph,cobweb,cockiness,croquet,crypt,curacao,cycle,daiquiri,dirndl,disavow,dizzying,duplex,dwarves,embezzle,equip,espionage,euouae,exodus,faking,fishhook,fixable,fjordflapjack,flopping,fluffiness,flyby,foxglove,frazzled,rizzled,fuchsia,funny,gabby,galaxy,galvanize,gazebo,giaour,gizmo,glowworm,glyph,gnarly,gnostic,gossip,grogginess,haiku,haphazard,hyphen,iatrogenic,icebox,injury,ivory,ivy,jackpot,jaundice,jawbreaker,jaywalk,jazziest,jazzy,jelly,jigsaw,jinx,jiujitsu,jockey,jogging,joking,jovial,joyful,juicy,jukebox,jumbo,kayak,kazoo,keyhole,khaki,kilobyte,kiosk,kitsch,kiwifruit,klutz,knapsack,larynx,lengths,lucky,luxury,mymph,marquis,matrix,megahertzm,microwave,mnemonic,mystify,naphtha,nightclub,nowadays,numbskull,nymph,onyx,ovary,oxidize,oxygen,pajama,peekaboo,phlegm,pixel,pizazz,pneumonia,polka,pshaw,psyche,puppy,puzzling,quartz,queue,quips,quixotic,quiz,quizzes,quorum,razzmatazz,rhubarb,rhythm,rickshaw,schnapps,scratch,shiv,snazzy,sphinx,spritz,squawk,staff,strength,strengths,stretch,stronghold,stymied,subway,swivel,syndrome,thriftless,thumbscrew,topaz,transcript,transgress,transplant,triphthong,twelfth,twelfths,unknown,unworthy,unzip,uptown,vaporize,vixen,vodka,voodoo,vortex,voyeurism,walkway,waltz,wave,wavy,waxy,wellspring,wheezy,whiskey,whizzing,whomever,wimpy,witchcraft,wizard,woozy,wristwatch,wyvern,xylophone,yachtsman,yippee,yoked,youthful,yummy,zephyr,zigzag,zigzagging,zilch,zipper,zodiac,zombie"

const words = storage.split(",")

let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setcorrectLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(()=>{
    const handleKeydown = event => {
      const {key, keyCode} = event;
        if (playable && keyCode >= 65 && keyCode <= 90){
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setcorrectLetters(currentLetters => [...currentLetters, letter])
            } else {
              show(setShowNotification);
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setwrongLetters(wrongLetters => [...wrongLetters, letter])
            } else {
              show(setShowNotification);
            }
          }
        }
      }
  window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  },[correctLetters, wrongLetters, playable]);

  function playAgain(){
    setPlayable(true);
    
    //Empty Arrays
    setcorrectLetters([]);
    setwrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  function buttonpress(alphabet){
    if (playable) {
      const letter = alphabet;

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setcorrectLetters(currentLetters => [...currentLetters, letter])
        } else {
          show(setShowNotification);
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setwrongLetters(wrongLetters => [...wrongLetters, letter])
        } else {
          show(setShowNotification);
        }
      }
    }
  }

  function a(){
    buttonpress('a');
  }  
  function b(){
    buttonpress('b');
  }  
  function c(){
    buttonpress('c');
  }    
  function d(){
    buttonpress('d');
  }  
  function e(){
    buttonpress('e');
  }  
  function f(){
    buttonpress('f');
  }  
  function g(){
    buttonpress('g');
  }  
  function h(){
    buttonpress('h');
  }  
  function i(){
    buttonpress('i');
  }  
  function j(){
    buttonpress('j');
  }  
  function k(){
    buttonpress('k');
  }  
  function l(){
    buttonpress('l');
  }  
  function m(){
    buttonpress('m');
  }  
  function n(){
    buttonpress('n');
  }  
  function o(){
    buttonpress('o');
  }  
  function p(){
    buttonpress('p');
  }  
  function q(){    
    buttonpress('q');
  }  
  function r(){
    buttonpress('r');
  }  
  function s(){
    buttonpress('s');
  }  
  function t(){
    buttonpress('t');
  }  
  function u(){
    buttonpress('u');
  }  
  function v(){
    buttonpress('v');
  }  
  function w(){
    buttonpress('w');
  }  
  function x(){
    buttonpress('x');
  }  
  function y(){
    buttonpress('y');
  }  
  function z(){
    buttonpress('z');
  }  
  
  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
        <Button a={a} b={b} c={c} d={d} e={e} f={f} g={g} h={h} i={i} j={j} k={k} l={l} m={m} n={n} o={o} p={p} q={q} r={r} s={s} t={t} u={u} v={v} w={w} x={x} y={y} z={z} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} 
      selectedWord ={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;

