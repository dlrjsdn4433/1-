


        window.addEventListener('DOMContentLoaded',()=>{
                
                
                const inquiries = JSON.parse(localStorage.getItem('inquireList'))||[];

                const $titles = document.querySelectorAll('.title')
                const $texts = document.querySelectorAll('.script')
                const $deletes = document.querySelectorAll('.delete')

                $titles.forEach(el=>el.style.display='none')
                $texts.forEach(el=>el.style.display='none')
                $deletes.forEach(el=>el.style.display='none')
                inquiries.forEach((item, i) => {
        if ($titles[i]) {
            $titles[i].textContent = item.title;
            $titles[i].style.display = 'flex';
        }
        if ($texts[i]) {
            $texts[i].textContent = item.text;
            $texts[i].style.display = 'flex';
        }
        if ($deletes[i]) {
            $deletes[i].style.display = 'flex';

            // 삭제 이벤트 추가
            $deletes[i].addEventListener('click', () => {
                const newInquiries = [...inquiries]; // 복사
                newInquiries.splice(i, 1); // i번째 삭제
                localStorage.setItem('inquireList', JSON.stringify(newInquiries));
                location.reload(); // 새로고침해서 UI 갱신
            });
        }
    });

                

                inquiries.forEach((item,i) => {
                    if($titles[i])$titles[i].textContent=item.title;
                    if($texts[i])$texts[i].textContent=item.text;
                    
                });
            })
            