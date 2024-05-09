import  { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
console.log('import success');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("kat-submit").addEventListener("click", function() {
        // Get the value from the textbox
        var prompt = document.getElementById("exampleFormControlTextarea1").value;

        const API_KEY = GOOGLE_API_KEY;
        const genAI = new GoogleGenerativeAI(API_KEY);
        var res;
        async function run() {
            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({ model: "gemini-pro"});

            //const prompt = "Write a story about a magic backpack."
            //const prompt = document.getElementById('exampleFormControlTextarea1').value;
            //console.log(prompt);    
            const result = await model.generateContentStream(prompt);
            let text = '';
            for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                console.log(chunkText);
                text += chunkText;
            }
            //const response = await result.response;
            //const text = response.text();
            console.log(text);
            res = text;

            var holder = document.getElementById('response');
            holder.innerHTML = '';
            var resbox = document.createElement('textarea');
            resbox.setAttribute('class', 'form-control');
            resbox.setAttribute('type', 'text');
            resbox.setAttribute('id', 'response1');
            resbox.setAttribute('rows', '3');
            resbox.setAttribute('readonly', '');
            resbox.setAttribute('placeholder', res);
            //resbox.setAttribute('height', 'fit-content');
            //resbox.setAttribute('width', '50 px');
            holder.appendChild(resbox);
            console.log(holder);
        }
        run();
    });
});    
