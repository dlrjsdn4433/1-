        const $font = document.querySelectorAll('.font');
        const $modal1 = document.querySelectorAll('.modal1')
        const $modal2 = document.querySelectorAll('.modal2')
        const $out1 = document.querySelectorAll('.out1');
        const $add = document.querySelectorAll('.add');
        const $out2 = document.querySelectorAll('.out2');
        const $busket = document.querySelectorAll('.busket');

        $font.forEach((a,i)=>{
            a.addEventListener('click',()=>{
                $modal1[i].style.display='flex';
                })
            })
        $out1.forEach((a,i)=>{
            a.addEventListener('click',()=>{
                $modal1[i].style.display='none';
                })
            })
        $add.forEach((a,i)=>{
            a.addEventListener('click',()=>{
                $modal2[i].style.display='flex';
                })
            })
        $out2.forEach((a,i)=>{
            a.addEventListener('click',()=>{
                $modal2[i].style.display='none';
                })
            })

        $busket.forEach((a,i)=>{
            a.addEventListener('click',(e)=>{
                e.preventDefault();
                window.location.href = '마이페이지.html'
                })
            })
