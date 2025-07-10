const params = new URLSearchParams(window.location.search);
        const text = params.get('text');
        function changer (newText){
            const element = document.querySelectorAll('.script');
            element.forEach(el=>{
                el.textContent= newText;
            })
        }
        changer(text);











        const $newText = document.getElementById('newText');
        const $desingText = document.querySelectorAll('.script')

        $newText.addEventListener('input',(e)=>{
            const value = e.target.value;
            $desingText.forEach(el=>{
                el.textContent=value;
            })
        })