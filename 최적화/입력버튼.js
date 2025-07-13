document.addEventListener('DOMContentLoaded',function(){
            const $btn = document.getElementById('submit');
                $btn.addEventListener('mouseover',()=>{
                    $btn.classList.add('btnon')
                })
                $btn.addEventListener('mouseout',()=>{
                    $btn.classList.remove('btnon')
                })

                
                $btn.addEventListener('click',(e)=>{
                    const $text = document.getElementById('inputText').value;
                    const $encodedValue = encodeURIComponent($text);
                    e.preventDefault();
                    window.location.href=`폰트보기.html?text=${$encodedValue}`
                    
                })
            })