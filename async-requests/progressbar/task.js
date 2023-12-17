const progress = document.getElementById('progress');
const form = document.getElementById('form');



form.addEventListener('submit', e => {
    e.preventDefault()

    const xhr = new XMLHttpRequest();
    
    xhr.upload.onprogress = percent => {
        const totalSize = percent.total;
        const loadedSize = percent.loaded;

        const uploaded = (loadedSize / totalSize);
        
        progress.value = uploaded; 
        console.log(`Загружено ${(uploaded * 100).toFixed(0)}%`);
    }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(e.currentTarget);
    xhr.send(formData);
})


progress.value = 0;
