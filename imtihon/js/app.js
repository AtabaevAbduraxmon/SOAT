const elWrapper1 = document.querySelector('.wrapper_1');

fetch('https://6537a88fbb226bb85dd39095.mockapi.io/student/list')   
   .then((res) => res.json())
   .then((data) => getData(data))

   function getData(data) {
    data.forEach((item,index) => {
        const elBox1 = document.createElement('div');
        const elBox2 = document.createElement('h3');
        const elBox3 = document.createElement('h3');
        const elBox4 = document.createElement('h3');
        const elSpan = document.createElement('span');
        console.log(item);
        elBox2.textContent =  ' #' +item.id + '  ' + item.name
        elBox3.textContent =  item.evaluation
        elBox4.textContent =  item.course_name
        elBox3.style.display = 'flex'
        elBox2.style.color = 'slategray'
        elBox2.style.fontSize = '25px'
        elSpan.style.display = 'flex'
        elSpan.style.alignItems = 'center'
        elBox3.style.marginLeft = '30px'
        elBox3.style.backgroundColor = 'blue'
        elBox3.style.borderRadius = '50%'
        elBox3.style.padding = '15px'
        elBox3.style.fontSize = '20px'
        elBox3.style.color = 'white'
        elBox4.style.border = 'solid slategray 2px'
        elBox4.style.paddingLeft = '25px'
        elBox4.style.paddingRight = '20px'
        elBox4.style.paddingRight = '20px'
        elBox4.style.paddingBottom = '5px'
        elBox4.style.paddingTop = '5px'
        elBox4.style.borderRadius = '20px'
        elBox4.style.color = 'slategray'





        elWrapper1.append(elBox1);
        elBox1.append(elBox2);
        elBox1.append(elBox3);
        elBox1.append(elSpan);
        elSpan.append(elBox4);
        elSpan.append(elBox3)

    })
}