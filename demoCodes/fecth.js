fetch("https://google.com").then(async(s)=>{
    const json = await s.json();
})


fetch("https://www.google.com")