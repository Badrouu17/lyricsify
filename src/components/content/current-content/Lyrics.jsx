import React from "react";
import Header from "../../Header";

const test = `\n          \n            \n            [Intro]\nOoh\nNa na, yeah\n\n[Verse 1]\nI saw you dancing in a crowded room\nYou look so happy when I'm not with you\nBut then you saw me, caught you by surprise\nA single teardrop falling from your eye\n\n[Refrain]\nI don't know why I run away\nI'll make you cry when I run away\n\n[Verse 2]\nYou could've asked me why I broke your heart\nYou could've told me that you fell apart\nBut you walked past me like I wasn't there\nAnd just pretended like you didn't care\n\n[Refrain]\nI don't know why I run away\nI'll make you cry when I run away\n\n[Chorus]\nTake me back 'cause I wanna stay\nSave your tears for another\nSave your tears for another day\nSave your tears for another day\n\n[Verse 3]\nSo, I made you think that I would always stay\nI said some things that I should never say\nYeah, I broke your heart like someone did to mine\nAnd now you won't love me for a second time\n\n[Refrain]\nI don't know why I run away, oh, girl\nSaid I make you cry when I run away\n\n[Chorus]\nGirl, take me back 'cause I wanna stay\nSave your tears for another\nI realize that I'm much too late\nAnd you deserve someone better\nSave your tears for another day (Ooh, yeah)\nSave your tears for another day (Yeah)\n\n[Refrain]\nI don't know why I run away\nI'll make you cry when I run away\n\n[Chorus]\nSave your tears for another day, ooh, girl (Ah)\nI said save your tears for another day (Ah)\n\n[Outro]\nSave your tears for another day (Ah)\nSave your tears for another day (Ah)\n\n\n            \n          \n        `;
const Lyrics = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="mt-0 text-center text-white overflow-hidden shadow-lg">
        <Header></Header>
        <h2 className="ml-12">Lyrics 🎼</h2>
      </div>
      <div
        className="flex-1 text-4xl h-lyrics overflow-y-scroll pl-48 w-full pb-4"
        dangerouslySetInnerHTML={{
          __html: test.replace(/\n/g, "<br>"),
        }}
      ></div>
    </div>
  );
};

export default Lyrics;
