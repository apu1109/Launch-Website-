

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('preorder-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const phone = form.elements['phone'].value.trim();

    if (!name || !email || !phone) {
      alert('please fill out all fields.');
      return;
    }
    const isConfirm = confirm('Are you sure you want to submit the form?');
    if (isConfirm) {
      alert('Your pre-order is done!');
      form.reset();
    }
  });

  const selectDateAndTimebtn=document.getElementById('selectDateAndTime');

  selectDateAndTimebtn.addEventListener('click',()=>{
    flatpicker("#selectDateAndTimebtn",{
      enableTime:true,
      dateFormat:"y-m-d H:i" ,
      onClose:function(dateStr){
        const isConfirmed=Confirm('You have selected: ${dateStr}.Are you happy with this selections');
        if(isConfirmed){
          alert('Great! your selection is confirmed.');
        }else{
          alert('Please select another date and time.');
        }
      }
    })
  });

});
