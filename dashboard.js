
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCrLne6MGD3QA2ahHO2MsSGH0q0c8f8y3o",
    authDomain: "my-blogging-app-42a70.firebaseapp.com",
    projectId: "my-blogging-app-42a70",
    storageBucket: "my-blogging-app-42a70.appspot.com",
    messagingSenderId: "480046748081",
    appId: "1:480046748081:web:feed8399ce8138d037ad90"
  });

  // Initialize Firebase
    const auth = firebaseApp.auth();
    const db = firebaseApp.firestore();


// ====================== top nav ========================

document.addEventListener("DOMContentLoaded", function() {
    let greetingElement = document.getElementById("greeting");
    let currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
        greetingElement.innerHTML = "Good Morning Readers!";
    }
     else if (currentHour >= 12 && currentHour < 18) {
        greetingElement.innerHTML = "Good Afternoon Readers!";
    }
    else {
        greetingElement.innerHTML = "Good Evening Readers!";
    }
});


// ====================== Logout ========================




// ====================== Create Blog ========================

// Reference to the blogs collection in Firestore
let blogRef = db.collection('userblogs');

// Function to create a new blog
function createBlog() {
    // Get input values
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    // Add the blog to Firestore
    blogRef.add({
        title: title,
        description: description
    })
    .then((docRef) => {
        console.log("Blog created with ID: ", docRef.id);
        alert("Blog created successfully!");

        // Clear input fields after creating the blog
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    })
    .catch((error) => {
        console.error("Error adding blog: ", error);
        alert("Error creating the blog. Please try again.");
    });
}


// ========= show blog ==========
