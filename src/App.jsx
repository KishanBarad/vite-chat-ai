import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [Question, setQuestion] = useState("")
  const [answer, setanswer] = useState("")

  async function generateAnswer(){
    setanswer("loading...")
  const response = await  axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCbEhGENnoO1sY_jftQqR5LrPXjGsEahqg",
      method:"post",
      data: {"contents":[{"parts":[{"text": Question}]}]}
    });
    
      setanswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
    
  }

  return (
    <>
      <h1>AI CHAT</h1>
      <textarea placeholder='enter your question' value={Question} onChange={(e)=>setQuestion(e.target.value)} cols='30' rows='5'></textarea><br/>
      <button onClick={generateAnswer}>generate Answer</button>
      <pre className='para'>{answer}</pre>
      
    </>
  )
}

export default App
