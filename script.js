const btn=document.querySelector("#bt")
const content=document.querySelector("#content")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    
    text_speak.pitch=1
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}



function greetings(){
    const now = new Date();
    const hour=now.getHours()
    if(hour>=0 && hour<=12)
      speak("Good Morning sir")  
    else if(hour>12 && hour<16)
      speak("Good Afternoon sir")
    else
      speak("Good night sir") 
    
}


function recognize(){
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.start();

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript
      content.innerHTML=text
      takecommand(text.toLowerCase())
    }
    
    recognition.onerror = (event) => {
      console.error("Error:", event.error)
    }

}

function takecommand(message){
  if(message.includes("hello"))
    speak("hi,how can I help you")
  else if(message.includes("tell me about yourself"))
    speak("I'm Jarvis a virtual assistant created by Soham")  
  else if(message.includes("what type of functions you can do"))
    speak("I can open youtube,linkedin or google if you tell me to do")
  else if(message.includes("open youtube"))
    window.open("https://www.youtube.com/")
  else if(message.includes("open google"))
    window.open("https://www.google.com/")
  else if(message.includes("open linkedin"))
    window.open("https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit")   
}

window.addEventListener("load",()=>{
    greetings()
})

btn.addEventListener("click" , ()=>{
    recognize()
})