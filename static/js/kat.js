import  { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
console.log('import success');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("kat-submit").addEventListener("click", function() {
        // Get the value from the textbox
        var prompt = document.getElementById("exampleFormControlTextarea1").value;

        const API_KEY = 'AIzaSyDhURas96RlzIs84VD_r9b6NWeV_fR0SHo';
        const genAI = new GoogleGenerativeAI(API_KEY);
        async function run() {
            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({ model: "gemini-pro"});

            //const prompt = "Write a story about a magic backpack."
            //const prompt = document.getElementById('exampleFormControlTextarea1').value;
            //console.log(prompt);    
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            console.log(text);
        
        }
        run();
    });
    function retrieveText() {

    }
});    