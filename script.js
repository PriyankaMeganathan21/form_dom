document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    const tableBody = document.querySelector('#myTable tbody');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const address = document.getElementById('address').value;
        const pinCode = document.getElementById('pincode').value;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;
        var gender = document.getElementById('gender').value;
        var gender = document.getElementById('gender1').value;
        var food = document.getElementById('fo_od').value;
       

        const newRow = document.createElement('tr');
        newRow.innerHTML += `
           <td>${firstName}</td>
           <td>${lastName}</td>
           <td>${gender}</td>
           <td>${address}</td>
           <td>${pinCode}</td>
           <td>${state}</td>
           <td>${country}</td>
           <td>${food}</td>
        `;

        tableBody.appendChild(newRow);    
    })
})