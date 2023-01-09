import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmojiCard(info) {
  return (
    <Entry
      emoji={info.emoji}
      emojiName={info.name}
      emojiMeaning={info.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmojiCard)}</dl>
    </div>
  );
}

export default App;
