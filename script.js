
  // Open modal
  document.querySelectorAll(".modal-btn").forEach(button => {
    button.addEventListener("click", () => {
      const modalID = button.getAttribute("data-modal");
      document.getElementById(modalID).style.display = "flex";
    });
  });

  // Close modal
  document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  // Close modal on outside click
  window.addEventListener("click", function(e) {
    document.querySelectorAll(".modal").forEach(modal => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex"; // Flex to enable centering
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  // Close modal if clicked outside of the modal-content
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };

  const form = document.querySelector('form');

  document.querySelector('.close').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      closeModal();
    }
  });
  

  /*quick enquiry form*/

  function sendEmail()
  {
      var params ={
          name:document.getElementById('name').value ,
          email:document.getElementById('email').value ,
          message:document.getElementById('message').value ,
      };
  
  
  
  const serviceID="service_qohoqmi";
  const templateID="template_2oqspge"
  
  
  
  emailjs.send(serviceID,templateID,params)
  .then((res) => {
      document.getElementById("name").value ="";
      document.getElementById("email").value ="";
      document.getElementById("message").value ="";
      console.log(res);
      alert("your message sent successfully");
  })
  
  .catch((err)=> console.log(err));
  
  
  }
