import React, { useState } from 'react'

function Emoji() {

    const [selectEmoji, setSelectemoji] = useState("๐ค ")

    const emoji = ["๐","๐","๐","๐คฃ","๐","๐","๐","๐","๐","๐","๐","๐","๐ฅฐ","๐","๐คจ","๐ค","๐คฉ","๐ค","๐","๐","๐","๐ค","๐ช","๐ซ","๐ฅฑ","๐ด","๐","๐","๐ค","๐จ","๐ฌ","๐คฏ","๐ฅถ","๐ฅต","๐ฐ","๐ค","๐","๐ฒ","๐คฌ","๐ก","๐","๐ฅบ","๐ฅณ","๐คง","๐ง","๐ค","๐คญ","๐คซ","๐คฅ","๐ท","๐ฅถ","๐คค","๐","๐ญ","๐ข","๐ถ","๐","๐","๐","๐ง","๐ฅด","๐คข","๐ค"];

    const handleClick = ()=>{
        const randomIndex = Math.floor(Math.random() * emoji.length);
        setSelectemoji(emoji[randomIndex])
    }

  return (
    <div className='container'>
      <span>{selectEmoji}</span>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Emoji