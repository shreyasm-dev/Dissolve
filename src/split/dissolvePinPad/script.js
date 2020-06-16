class dissolvePIN {
  constructor(callback, pinLimit = Infinity) {
    var PIN = document.createElement('div')
    PIN.classList.add('dissolvePinPad')
    PIN.innerHTML = `
		<input type='text' class='dissolvePinPreview' placeholder='Enter PIN' dir='rtl'/>
  	<div class='dissolvePinSection1'>
    	<div id='dissolvePinNumber1'>1</div>
    	<div id='dissolvePinNumber2'>2</div>
    	<div id='dissolvePinNumber3'>3</div>
  	</div>
  	<div class='dissolvePinSection2'>
    	<div id='dissolvePinNumber4'>4</div>
    	<div id='dissolvePinNumber5'>5</div>
    	<div id='dissolvePinNumber6'>6</div>
  	</div>
  	<div class='dissolvePinSection3'>
    	<div id='dissolvePinNumber7'>7</div>
    	<div id='dissolvePinNumber8'>8</div>
    	<div id='dissolvePinNumber9'>9</div>
  	</div>
  	<div class='dissolvePinSection4'>
			<div id='dissolvePinButtonBack' style='font-size: 26px; padding-bottom: 0px;'>&#x2039;</div>
    	<div id='dissolvePinNumber9'>0</div>
			<div id='dissolvePinButtonGo'>&#11157;</div>
  	</div>
		`

    for (var i = 0; i < PIN.children.length; i++) {
      if (i == 0) {
        continue
      }

      for (var j = 0; j < PIN.children[i].children.length; j++) {
        if (j == 0 && i == 4) {
          PIN.children[i].children[j].addEventListener('click', function() {
            var value = PIN.children[0].value
            value = value.slice(0, -1)
            PIN.children[0].value = value
          })
        } else if (j == 2 && i == 4) {
          PIN.children[i].children[j].addEventListener('click', function() {
            callback(PIN.children[0].value)
            return;
          })
        } else {
          PIN.children[i].children[j].addEventListener('click', function() {
            var x = PIN.children[0].value
            if (x.length < pinLimit) PIN.children[0].value += this.innerHTML
          })
        }
      }
    }
		
    this.error = function(txt, time = 1000) {
			var previousHTML = JSON.parse(JSON.stringify(PIN.innerHTML))
			PIN.innerHTML = '<div class="dissolvePinPadError">' + txt + '</div>' + PIN.innerHTML
			setInterval(function() {
				PIN.innerHTML = previousHTML
			}, time)
    }

    //return PIN

    this.element = PIN
  }
}
