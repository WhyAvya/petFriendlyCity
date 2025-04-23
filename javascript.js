// JavaScript to handle form submission and display confirmation message
document.getElementById('volunteer-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Get the values from the form
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const role = document.getElementById('role').value;
  
    // Simple validation
    if (name && city && role) {
      // Show confirmation message
      const confirmationMessage = document.getElementById('confirmation-message');
      confirmationMessage.textContent = `Thank you, ${name}! You have successfully signed up as a ${role} in ${city}.`;
      confirmationMessage.classList.remove('hidden');
  
      // Optionally, you could reset the form after submission
      document.getElementById('volunteer-form').reset();
    } else {
      alert("Please fill in all fields.");
    }
  });

  

  <script>
  $(document).ready(function(){
    $('.pet-carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">←</button>',
      nextArrow: '<button type="button" class="slick-next">→</button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 1 }
        }
      ]
    })
  });
</script>
