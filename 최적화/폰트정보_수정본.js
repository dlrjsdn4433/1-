        const $font = document.querySelectorAll('.font');
        const $modal1 = document.querySelector('.modal1')
        const $modal2 = document.querySelector('.modal2')
        const $out1 = document.querySelector('.out1');
        const $add = document.querySelector('.add');
        const $out2 = document.querySelector('.out2');
        const $busket = document.querySelector('.busket');
        const $iframe = document.querySelector('.page iframe');
        const $iframes = [
            "https://blog.naver.com/wyall/223892797543",
            "https://www.ownglyph.com/trial/11ebf7f8-0997-4f03-a393-0959a07286aa",
            "https://www.ownglyph.com/trial/c9d001d1-c8ac-4e41-95fd-b4e7383160aa",
            "https://www.ownglyph.com/trial/004af31b-46b3-4fc8-99c3-a33e557887df",
            "https://www.ownglyph.com/trial/2ba4dffc-0892-45c7-af57-2259e2830714",
            "https://www.ownglyph.com/galaxy-trial/654e6381-b7bf-4715-8c14-ce0512fdc125"
        ]

        $font.forEach((a,i)=>{
            a.addEventListener('click',()=>{
                $modal1.style.display='flex';
                $iframe.setAttribute('src',$iframes[i])
                })
            })
        $out1.addEventListener('click',()=>{
            $modal1.style.display='none'
        })
        $add.addEventListener('click',()=>{
                $modal2.style.display='flex';
                const fontName = $font[i].classList[1]
                const savedFonts = JSON.parse(localStorage.getItem('fontNames'))||[];
                if(!savedFonts.includes(fontName)){
                    savedFonts.push(fontName);
                    localStorage.setItem('fontNames',JSON.stringify(savedFonts));
                }
                console.log(savedFonts)
                })

        $out2.addEventListener('click',()=>{
                $modal2.style.display='none';
                })


        $busket.addEventListener('click',(e)=>{
                e.preventDefault();
                window.location.href = '마이페이지.html'
                })

