import React,{ useState, useEffect, Component} from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/Wrongletters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import {showNotification as show} from './helpers/helpers';


import './App.css';

const words = ['abyss', 'croquet', 'blizzard', 'daiquiri','fluffiness','ivory','marquis','jawbreaker','jiujitsu','quartz','vortex','zephyr','wellspring','triphthong'];
// abruptly,absurd,abyss,affix,askew,avenue,awkward,axiom,azure,bagpipes,bandwagon,banjo,bayou,beekeeper,bikini,blitz,blizzard,boggle,bookworm,boxcar,boxful,buckaroo,buffalo,buffoon,buxom,buzzard,buzzing,
// buzzwords,caliph,cobweb,cockiness,croquet,crypt,curacao,cycle,daiquiri,dirndl,disavow,dizzying,duplex,dwarves,embezzle,equip,espionage,euouae,exodus,faking,fishhook,fixable,fjordflapjack,
// flopping,fluffiness,flyby,foxglove,frazzled,rizzled,fuchsia,funny,gabby,galaxy,galvanize,gazebo,giaour,gizmo,glowworm,glyph,gnarly,gnostic,gossip,grogginess,haiku,haphazard,hyphen,iatrogenic,
// icebox,injury,ivory,ivy,jackpot,jaundice,jawbreaker,jaywalk,jazziest,jazzy,jelly,jigsaw,jinx,jiujitsu,jockey,jogging,joking,jovial,joyful,juicy,jukebox,jumbo,kayak,kazoo,keyhole,
// khaki,kilobyte,kiosk,kitsch,kiwifruit,klutz,knapsack,larynx,lengths,lucky,luxury,mymph,marquis,matrix,megahertzm,microwave,mnemonic,mystify,naphtha,nightclub,nowadays,numbskull,
// nymph,onyx,ovary,oxidize,oxygen,pajama,peekaboo,phlegm,pixel,pizazz,pneumonia,polka,pshaw,psyche,puppy,puzzling,quartz,queue,quips,quixotic,quiz,quizzes,quorum,razzmatazz,rhubarb,
// rhythm,rickshaw,schnapps,scratch,shiv,snazzy,sphinx,spritz,squawk,staff,strength,strengths,stretch,stronghold,stymied,subway,swivel,syndrome,thriftless,thumbscrew,topaz,transcript,
// transgress,transplant,triphthong,twelfth,twelfths,unknown,unworthy,unzip,uptown,vaporize,vixen,vodka,voodoo,vortex,voyeurism,walkway,waltz,wave,wavy,waxy,wellspring,wheezy,whiskey,
// whizzing,whomever,wimpy,witchcraft,wizard,woozy,wristwatch,wyvern,xylophone,yachtsman,yippee,yoked,youthful,yummy,zephyr,zigzag,zigzagging,zilch,zipper,zodiac,zombie

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setcorrectLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const letters = /^[a-z0-9]+$/i;
  const digits = document.getElementsByClassName('digit');


  useEffect(()=>{
    const handleKeydown = event => {
      const {key, keyCode} = event;
        if (playable && keyCode >= 65 && keyCode <= 90) {
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

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} 
      selectedWord ={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;

