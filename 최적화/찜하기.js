        const $fontName = document.querySelectorAll('.fontname')
        const $fontNameElems = document.querySelectorAll('.fontname')
        window.addEventListener('DOMContentLoaded',()=>{
            const savedFont = JSON.parse(localStorage.getItem('fontNames'));
            
            const $delBtns = document.querySelectorAll('.delFont');

            savedFont.forEach((font,i)=>{
                if($fontNameElems[i]){
                    $fontNameElems[i].textContent= font;
                    $fontNameElems[i].style.display='flex'
                }
                if($delBtns[i]){
                    $delBtns[i].style.display='flex'
                }
            })  
        })
        const $delBtns = document.querySelectorAll('.delFont');
        const $delNameElems = document.querySelectorAll('.fontname');

        $delBtns.forEach((btn,i)=>{
            btn.addEventListener('click',()=>{
                let savedFonts = JSON.parse(localStorage.getItem('fontNames'))||[];
                savedFonts.splice(i,1)
                localStorage.setItem('fontNames',JSON.stringify(savedFonts));

                $fontNameElems[i].style.display = 'none';
                btn.style.display = 'none';
            })
        })