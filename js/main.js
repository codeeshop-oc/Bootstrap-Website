 let letter = {
      0: {'text': 'I found it extremely meaningful as I got the chance to help the needy people.', 'author': 'Jason'},
      1: {'text': 'For me, it was really an eye opening experience as I have not done any voluntary work before this. I feel like we all had an amazing time.', 'author': 'Sofia'},
      2: {'text': 'This experience not only gave me the opportunity to give back to the community, it also helped me to develop intangible skills which can benefit me in the future.', 'author': 'Farah'},
      3: {'text': 'I got to meet new people and learn their culture and background. It was amazing to see how I can make a positive impact towards people.', 'author': 'Amirul'},
      4: {'text': 'Volunteering at Love Letters not only gave me a chance to change someone\'s lives, as well as my own. Wonderful experience.', 'author': 'Tori'},
      5: {'text': 'Helping out at Love Letters has allowed me to open up towards others and gained more self-confidence.', 'author': 'Daniel'},  
      6: {'text': 'To me, it was extremely fun and I would definitely want to do it again.', 'author': 'Yong Er'},
      7: {'text': 'This experience has helped me to find out about my strengths and weaknesses. At the same time, polishing and learning new social skills.', 'author': 'Lenette'},
      8: {'text': 'After volunteering at Love Letters, I felt that volunteering allowed me to gain a sense of achievement and satisfaction in my life. Not only that, it can also harness and acquire new skills that can be applied into one\'s future.', 'author': 'Kamarul'},
      9: {'text': 'FUN! FUN! FUN!', 'author': 'Aisha'},
  }

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$('#love-image').mouseout(function () {
    let oldsrc = $(this).attr('src');
    $(this).attr('src', 'img/loveletters1.png')
    .removeClass('letter2').removeClass('letter1').addClass('letter1');
})
$('#love-image').mouseover(function () {
    let newsrc = $(this).attr('src')
    $(this).attr('src', 'img/letter.png')
    .removeClass('letter2').removeClass('letter1').addClass('letter2');
})

$('#love-image').on('click', function () {
  let current = randomIntFromInterval(0, 9)
  $('#testimonial-text').text(letter[current].text)
  console.log(current)
  $('#testimonial-author').text(letter[current].author)
  $('#testimonialModal').modal('show')
})

function currentDate() {
  $(".datepicker").datepicker({
    autoclose: true,
    todayHighlight: true
  }).datepicker('update', new Date());
}

$(document).ready(function () {
	currentDate()
})

function modalAnimateTop() {
  $('.modal-body').stop().animate({
        scrollTop: 0
      }, 1500);
      event.preventDefault();
}

function creditDonation() {
  let other_amount=$('#credit-other-amount').val();
  let full_name = document.getElementById("credit-full-name").value;
  let card_number = document.getElementById("credit-number").value;
  let expiry = document.getElementById("credit-expiry").value;
  let cvc = document.getElementById("credit-cvc").value;
  let card_type = $("#cardType").val();

  let error = {},
  bool = false;

  if (other_amount===""){
    error['credit_other_amount'] = "Please enter amount!";
    bool = true
  }

  if (card_type==="0"){
    error['card_type'] = "Please select card type!";
    bool = true
  }

  if (full_name===""){
    error['credit_full_name'] = "Please enter Card holder name!";
    bool = true
  }

  if (card_number===""){
    error['credit_number'] = "Please enter Card Number!";
    bool = true
  }

  if (expiry===""){
    error['credit_expiry'] = "Please enter Expiry date!";
    bool = true
  }

  if (cvc==="" || cvc.length!==3){
    error['credit_cvc'] = "Please enter 3-digit CVC number!";
    bool = true
  }

  $('div, input, select').removeClass('has-error')
  
  if (bool){
    let html = '';
    for(const key in error) {
      $('[name="' + key + '"]').addClass('has-error')
    }

    modalAnimateTop()
  }
  else{
    $('#donatorName').html(full_name);
    $('#donationAmount').html(other_amount);
    $('#creditModal').modal('hide');
    $('#transactionModal').modal('show');
    $(function reset() {
        $('#creditAmounts .btn').removeClass('btn-danger')
        $('#credit-other-amount').val('');
        document.getElementById("credit-full-name").value = '';
        document.getElementById("credit-number").value = '';
        document.getElementById("credit-expiry").value = '';
        document.getElementById("credit-cvc").value = '';
        $("#cardType").val('');
    })
  }

}

  $('#cardType').change(function(){
    switch ($(this).val()) {
      case "0":
        document.getElementById("cardImage").src = "img/credit_card.png";
        break;
      case "1":
        document.getElementById("cardImage").src = "img/mastercard.png";
        break;
      case "2":
         document.getElementById("cardImage").src = "img/visa.png";
        break;
      case "3":
        document.getElementById("cardImage").src = "img/american-express.png";
        break;
      case "4":
        document.getElementById("cardImage").src = "img/discover.png";
    }
  });


  var max_chars = 3;

  $('#credit-cvc').keydown( function(e){
      if ($(this).val().length >= max_chars) {
          $(this).val($(this).val().substr(0, max_chars));
      }
  });

  $('#credit-cvc').keyup( function(e){
      if ($(this).val().length >= max_chars) {
          $(this).val($(this).val().substr(0, max_chars));
      }
  });

  $('#donate-food-detail-submit').on('click', function () {
    let error = {},
    bool = false;

    if(!$('#food-item').val()) {
      error['food_item'] = "Please enter Food Item"
      bool = true
    }

    if(!$('#date').val()) {
      error['preferred_date'] = "Please enter Date"
      bool = true
    }

    if(!$('#preferred-time').val()) {
      error['preferred_time'] = "Please enter Preferred Time"
      bool = true
    }

    if(!$('#expiry-date').val()) {
      error['expiry_date'] = "Please enter Expiry Date"
      bool = true
    }

    $('div, input, select').removeClass('has-error')

    if (bool){
      let html = '';
      for(const key in error) {
        $('[name="' + key + '"]').addClass('has-error')
      }

      modalAnimateTop()
    } else {
      $('#thankModal').modal('show')  
      $('#foodModal').modal('hide')  
      $('.modal-dialog').animate({ scrollTop: 0 }, 'slow');
      $(function reset() {
        $('#food-item, #date, #expiry-date').val('');
        $('#preferred-time').val($('#preferred-time option:first').val())
        currentDate()
      })
    }

  })

  $('#volunteerModal-submit').on('click', function () {
      let error = {},
      bool = false;
      
      let email = $('#register-email').val();

      if(!$('#register-full-name').val()) {
        error['register_full_name'] = "Please enter Full Name"
        bool = true
      }

      if(!email) {
        error['register_email'] = "Please enter email"
        bool = true
      } else if(!isEmail(email)) {
        error['register_email'] = "Please enter valid email"
        bool = true
      }

      if(!$('#register-password').val()) {
        error['register_password'] = "Please enter Password"
        bool = true
      }

      if(!$('#register-repeated-password').val()) {
        error['register_repeated_password'] = "Please enter Re-enter Password"
        bool = true
      } else if($('#register-repeated-password').val() != $('#register-password').val()) {
        error['register_repeated_password'] = "Please enter Re-enter Password"
        bool = true
      }

      if(!$('#register-phone-number').val()) {
        error['register_phone_number'] = "Please enter Phone Number"
        bool = true
      }

      $('div, input, select').removeClass('has-error')
       
      if (bool){
        let html = '';
        for(const key in error) {
          $('[name="' + key + '"]').addClass('has-error')
        }

        modalAnimateTop()
      } else {
        $(function reset() {
          $('#register-email, #register-full-name, #register-repeated-password, #register-password, #register-phone-number').val('');          
        })
      }
  })

  $('#paypalModal-btn').on('click', function (event) {
    event.preventDefault();

    let error = {},
    bool = false;
    let email = $('#paypal-email').val()

    if (!$('#paypal-other-amount').val()){
      error['paypal_other_amount'] = "Please enter amount!";
      bool = true
    }

    if (!$('#paypal-full-name').val()){
      error['paypal_full_name'] = "Please enter name!";
      bool = true
    }

    if (!email){
      error['paypal_email'] = "Please enter email!";
      bool = true
    } else if(!isEmail(email)) {
      error['paypal_email'] = "Please enter valid email"
      bool = true
    }

    $('input, select').removeClass('has-error')
      
    if (bool){
      let html = '';
      for(const key in error) {
        $('[name="' + key + '"]').addClass('has-error')
      }

      modalAnimateTop()
    } else {
      $('#donatorName').html($('#paypal-full-name').val());
      $('#donationAmount').html($('#paypal-other-amount').val());
      $('#paypalModal').modal('hide');
      $('#transactionModal').modal('show');

      $(function reset() {
        $('#paypalAmounts .btn').removeClass('btn-danger')
        $('#paypal-other-amount, #paypal-email, #paypal-full-name').val('');          
      })
    }
  });

  $('#paypalAmounts .btn').on('click', function () {
    let parent = $(this).parent()
    parent.find('.btn').removeClass('btn-danger');
    $(this).addClass('btn-danger');
    $('#paypal-other-amount').val($(this).attr('value'));
  })

  $('#creditAmounts .btn').on('click', function () {
    let parent = $(this).parent()
    parent.find('.btn').removeClass('btn-danger');
    $(this).addClass('btn-danger');
    $('#credit-other-amount').val($(this).attr('value'));
  })

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }