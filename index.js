// Hours

var timerDechour = document.getElementById('timerDechourvalue');

var timerHour = document.getElementById('timerhourvalue');


// Minutes

var timerDecmin = document.getElementById('timerDecminvalue');

var timermin = document.getElementById('timerminValue');

// Seconds

var timerDecsec = document.getElementById('timerDecsecvalue');

var timersec = document.getElementById('timersecvalue');



// Timer Buttons

var timerstartbtn = document.getElementById('timerstartbtn');

var timerstopbtn = document.getElementById('timerstopbtn');

var timerresetbtn = document.getElementById('timerresetbtn');





//Dec Hours Timer onInput function

timerDechour.oninput = function () {

  let userdechourInput = timerDechour.value;

  if ( userdechourInput < 0 || userdechourInput > 9) {

    alert("Please provide a number between 0 and 9");

    timerDechour.value = "";

  }
};


//Hours Timer onInput function

timerHour.oninput = function () {

  let userhourInput = timerHour.value;

  if ( userhourInput < 0 || userhourInput > 9) {

    alert("Please provide a number between 0 and 9");

    timerHour.value = "";

  }
};


// Dec Minutues timer onInput Function 

timerDecmin.oninput = function () {

  let userDecminInput = timerDecmin.value;

  if (userDecminInput < 0 || userDecminInput > 9) {

    alert("Please provide a number between 0 and 9");

    timerDecmin.value = "";

  }
};



// Minutes Timer onInput function

timermin.oninput = function () {

  let userminInput = timermin.value;

  if (userminInput < 0 || userminInput > 9) {

    alert("Please provide a number between 0 and 9");

    timermin.value = "";

  }
};


// Dec Seconds Timer onInput function

timerDecsec.oninput = function () {

  let userdecsecInput = timerDecsec.value;

  if (userdecsecInput < 0 || userdecsecInput > 5) {

    alert("Please provide a number between 0 and 6");

    timerDecsec.value = "";

  }
};


// Seconds Timer onInput function

timersec.oninput = function () {

  let usersecInput = timersec.value;

  if (usersecInput < 0 || usersecInput > 9) {

    alert("Please provide a number between 0 and 9");

    timersec.value = "";

  }
};



// Timer Function

let timer;

let totalSeconds;

timerstartbtn.onclick = function () {

  dechourInput = timerDechour.value;

  hourInput = timerHour.value;

  decminInput = timerDecmin.value;

  minInput = timermin.value;

  decSecinput = timerDecsec.value;

  secInput = timersec.value;

  totalSeconds = dechourInput*36000 + hourInput*3600 + decminInput*600 + minInput*60 + decSecinput*10 + secInput*1;

  timer = setInterval(timerFunction, 1000);


};


function timerFunction(){

  totalSeconds--;

  const decHours = Math.floor((totalSeconds / 3600) / 10);

  const Hours = Math.floor((totalSeconds / 3600) % 10 );

  const decMinutes = Math.floor(((totalSeconds % 3600 ) / 60) / 10);

  const Minutes = Math.floor(((totalSeconds % 3600 ) / 60) % 10);

  const decSeconds = Math.floor((totalSeconds % 60) /10);

  const seconds = Math.floor((totalSeconds % 60) %10);



  timerDechour.value = decHours;

  timerHour.value = Hours;

  timerDecmin.value = decMinutes;

  timermin.value = Minutes;

  timerDecsec.value = decSeconds;

  timersec.value = seconds;

  console.log(decHours,Hours,decMinutes,Minutes,decSeconds,seconds);

};


timerstopbtn.onclick = function(){

  clearInterval(timer);

}

timerresetbtn.onclick = function(){

  clearInterval(timer);

  timerDechour.value = 0;

  timerHour.value = 0;

  timerDecmin.value = 0;

  timermin.value = 0;

  timerDecsec.value = 0;

  timersec.value = 0;

};
