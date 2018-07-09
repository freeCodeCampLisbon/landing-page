/* This script can be found here: 
https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/blob/master/form-submission-handler.js*/

(function() {
    // Email Validation has been processed by the built in HTML5 functionality
    // Get all data in form and return object
    function getFormData() {
      var form = document.getElementById("gform");
      var elements = form.elements;
  
      var fields = Object.keys(elements).filter(function(k) {
            return (elements[k].name);
      }).map(function(k) {
        if(elements[k].name !== undefined) {
          return elements[k].name;
        // special case for Edge's html collection
        }else if(elements[k].length > 0){
          return elements[k].item(0).name;
        }
      }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });
  
      var formData = {};
      fields.forEach(function(name){
        var element = elements[name];
        
        // singular form elements just have one value
        formData[name] = element.value;
  
        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(', ');
        }
      });
  
      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      formData.formGoogleSendEmail = form.dataset.email ||  "hello.world@freecodecamplisbon.org"; // no email by default
  
      console.log(formData);
      return formData;
    }
  
    function handleFormSubmit(event) {  // handles form submit without any jquery
      event.preventDefault();           // we are submitting via xhr below
      var data = getFormData();         // get the values submitted in the form
  
      /* OPTION: Remove this comment to enable SPAM prevention, see README.md
      if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
        return false;
      }
      */
        disableAllButtons(event.target);
        var url = event.target.action;  //
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            console.log( xhr.status, xhr.statusText )
            console.log(xhr.responseText);
            document.getElementById("gform").style.display = "none"; // hide form
            var thankYouMessage = document.getElementById("ajax-message");
            if (thankYouMessage) {
              thankYouMessage.style.display = "block";
            }
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
        }).join('&')
        xhr.send(encoded);
    }
    function loaded() {
      // bind to the submit event of our form
      var form = document.getElementById("gform");
      form.addEventListener("submit", handleFormSubmit, false);
    };
    document.addEventListener("DOMContentLoaded", loaded, false);
  
    function disableAllButtons(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  })();
  