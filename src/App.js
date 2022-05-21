import React,{ useState, useEffect, Component} from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/Wrongletters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import {showNotification as show} from './helpers/helpers';
import Button from './components/Button'


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

 

  function a(){
    if (playable) {
        const letter = 'a';

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
  }  function b(){
    if (playable) {
      const letter = 'b';

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
  }  function c(){
    if (playable) {
      const letter = 'c';

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
  }  function d(){
    if (playable) {
      const letter = 'd';

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
  }  function e(){
    if (playable) {
      const letter = 'e';

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
  }  function f(){
    if (playable) {
      const letter = 'f';

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
  }  function g(){
    if (playable) {
      const letter = 'g';

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
  }  function h(){
    if (playable) {
      const letter = 'h';

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
  }  function i(){
    if (playable) {
      const letter = 'i';

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
  }  function j(){
    if (playable) {
      const letter = 'j';

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
  }  function k(){
    if (playable) {
      const letter = 'k';

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
  }  function l(){
    if (playable) {
      const letter = 'l';

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
  }  function m(){
    if (playable) {
      const letter = 'm';

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
  }  function n(){
    if (playable) {
      const letter = 'n';

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
  }  function o(){
    if (playable) {
      const letter = 'o';

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
  }  function p(){
    if (playable) {
      const letter = 'p';

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
  }  function q(){
    if (playable) {
      const letter = 'q';

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
  }  function r(){
    if (playable) {
      const letter = 'r';

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
  }  function s(){
    if (playable) {
      const letter = 's';

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
  }  function t(){
    if (playable) {
      const letter = 't';

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
  }  function u(){
    if (playable) {
      const letter = 'u';

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
  }  function v(){
    if (playable) {
      const letter = 'v';

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
  }  function w(){
    if (playable) {
      const letter = 'w';

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
  }  function x(){
    if (playable) {
      const letter = 'x';

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
  }  function y(){
    if (playable) {
      const letter = 'y';

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
  }  function z(){
    if (playable) {
      const letter = 'z';

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

