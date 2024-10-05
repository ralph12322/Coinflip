

document.getElementById('flipButton').addEventListener('click', function() {
    const flipResult = Math.random() < 0.5 ? 'Heads' : 'Tails';

    const imgResult = flipResult === 'Heads' 
        ? 'https://img.freepik.com/premium-vector/kangaroo-head_1095437-4322.jpg' 
        : 'https://e7.pngegg.com/pngimages/441/245/png-clipart-kangaroo-cartoon-drawing-kangaroo-mammal-animals.png';

    document.getElementById('result').innerText = `Result: ${flipResult}`;

    const existingImage = document.getElementById('resultImage');
    if (existingImage) {
        existingImage.remove();
    }

    const imgElement = document.createElement('img');
    imgElement.src = imgResult;
    imgElement.alt = flipResult; 
    imgElement.id = 'resultImage'; 
    imgElement.style.height = '300px';
    document.body.appendChild(imgElement);
});


