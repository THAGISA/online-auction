const firebaseConfig = {

  apiKey: "AIzaSyD9qeuYWjVILtJ44xS_v67xg3BrkgaIGVc",
  authDomain: "contactform-project-81afd.firebaseapp.com",
  databaseURL: "https://contactform-project-81afd-default-rtdb.firebaseio.com",
  projectId: "contactform-project-81afd",
  storageBucket: "contactform-project-81afd.appspot.com",
  messagingSenderId: "488258325341",
  appId: "1:488258325341:web:0e8ecf9e7bf356f24076b4"

};


  firebase.initializeApp(firebaseConfig);

  const contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    var fname = getElementVal('fullName');
    var email = getElementVal('emailId');
    var pass = getElementVal('passId');
    var passcon = getElementVal('passwCon');

    saveData(fname, email, pass, passcon);
  }

  const saveData = (fname, email, pass, passcon) => {
       var newContactForm = contactFormDB.push();

       newContactForm.set({
            fullName: fname,
            emailId: email,
            passId: pass,
            passwCon: passcon,
       });
  };


  const getElementVal = (id) => {
    return document.getElementById(id).value;

  };


