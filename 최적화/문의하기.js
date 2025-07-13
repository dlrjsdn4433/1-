const $span = document.getElementById('span');
        const $input = document.getElementById('input');
        $input.addEventListener('input',()=>{
            $span.textContent=`${$input.value.length}`
        })

        const $btn = document.getElementById('submit');
        const $modal = document.getElementById('modal1');
        const $ok = document.getElementById('ok');
        const $no = document.getElementById('no');
        const $modal2 = document.getElementById('modal2')
        const $exit = document.getElementById('exit');
        const $go = document.getElementById('go');
       
        $btn.addEventListener('click',(e)=>{
            e.preventDefault(); // 새로고침을 막아줍니다.
            $modal.style.display = 'flex'
        })
        $ok.addEventListener('click',(e)=>{
            e.preventDefault();
            $modal2.style.display='flex'
            const $title = document.getElementById('title').value;
            const $text = document.getElementById('input').value;
            const newInquiry = {
                title : $title,
                text : $text
            }

            const inquiries = JSON.parse(localStorage.getItem('inquireList'))||[]
            if(inquiries.length>=6){
                inquiries.shift();
            }
            inquiries.push(newInquiry);
            localStorage.setItem('inquireList',JSON.stringify(inquiries));
            console.log(inquiries)
        })
        $no.addEventListener('click',(e)=>{
            e.preventDefault();
            $modal.style.display='none'
        })
        $exit.addEventListener('click',(e)=>{
            e.preventDefault();
            $modal.style.display='none'
            $modal2.style.display='none'
        })
        $go.addEventListener('click',(e)=>{
            e.preventDefault();
            window.location.href='마이페이지.html'
        })



// ------------------------------------------------------------------------------------


