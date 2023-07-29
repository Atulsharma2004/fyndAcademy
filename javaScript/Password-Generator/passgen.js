const lengthslider=document.querySelector('.length input'),
        options=document.querySelectorAll('.option input'),
        passInput=document.querySelector('.input-box input'),
        copyIcon=document.querySelector('.input-box span'),
        passIndicator=document.querySelector('.pass-indicator'),
        generatebtn=document.querySelector('.btn');
        const characters={
            lowercase:"abcdefghijklmnopqrstuvwxyz",
            uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            numbers :    "0123456789",
            symbols :"@#$&"
        }

        const generatePass=()=>{
            let staticPass="";
            let passlength=lengthslider.value;
            let excludeDuplicate=false;
            let randompass="";
            options.forEach(option=>{
                if(option.checked){
                    //console.log(option)
                    //staticPass+=characters[option.id];
                    if(option.id!=="ex-duplicate" && option.id !== "spaces"){
                        staticPass+=characters[option.id];
                    }else if(option.id === "spaces"){
                        staticPass+=` ${staticPass} `;
                    }else{
                        excludeDuplicate=true;
                    }
                }
            })
            //console.log(staticPass)
            for(let i=0;i<passlength;i++){
                let randomchar=staticPass[Math.floor(Math.random()*staticPass.length)]
                if(excludeDuplicate){    //if excludeduplicate is true
                    // if random password doesn't contains the current random character or randomchar is
                    // equal to space " " then add random character to randompassword else decrement i by -1
                    !randompass.includes(randomchar)||randomchar==" " ? randompass+=randomchar: i--;
                }else{    // else add random char to random pass
                    randompass += randomchar ;
                }

            }
            //console.log(randompass)
            passInput.value=randompass;
        }

        const updatePassIndicator=()=>{
            passIndicator.id=lengthslider.value<=8 ? "weak" : lengthslider.value<=16 ? "medium" : "strong";
        }

        const updateslider=()=>{
            document.querySelector('.length span').innerText=lengthslider.value;
            generatePass();
            updatePassIndicator();
            //console.log(lengthslider.value)
        }
        updateslider();

        const copyPass=()=>{
            var text = passInput.value
            navigator.clipboard.writeText(text).then(() => {
                console.info("Password copied successfully!");
                alert(`Your Password has been Copied!`);
                copyIcon.innerText="Check";
                setTimeout(()=>{
                    copyIcon.innerText='Copy';
                },1500)
                }, (err) => {
                    console.error("Could not write clipboard contents:", err);
            });

        }
        copyIcon.addEventListener('click', copyPass);
        lengthslider.addEventListener('input', updateslider)
        generatebtn.addEventListener('click', generatePass)