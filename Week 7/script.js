// Function for changing the theme
function themeSwitch() {
    var element = document.body;
    element.classList.toggle("dark-theme");
}

// Function to submit the information for the newsletter
function submitNewsletter() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (name == "" || email == "") {
        alert("Please fill in your details.");
        return false;
    }
}

// Function to submit and upload the blog post
function submitBlog() {
    var title = document.getElementById("blog-title").value;
    var author = document.getElementById("blog-author").value;
    var content = document.getElementById("blog-content").value;
    if (title != "" || author != "" || content != "") {
        let blog = document.createElement("p");
        blog.innerText = "Content";
        document.body.appendChild(blog)
    } else {
        alert("Please fill in the required fields")
    }
}

// Function to submit the email on the contact page
function submitEmail() { 
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var body = document.getElementById("contact-text");
    if (name !== "" || subject != "" || email !== "" || body !== "") {
        window.open(`mailto:submit.email@example.com?subject=${subject}&body=${body}`);
    } else {
        alert("Please fill in the required fields.");
    }
}