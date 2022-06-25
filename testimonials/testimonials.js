/// Testimonials
const testemonialsContainer = document.querySelector(".testimonials-container");
const testemonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".username");
const role = document.querySelector(".role");

const arrowLeft = document.getElementById("test-arrow-left");
const arrowRight = document.getElementById("test-arrow-right");

const testimonials = [
  {
    name: "Mark Matthews",
    position: "HTML/CSS Instructor",
    photo:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "I've taught hundreds of HTML/CSS developers in other schools but this is by far the best setup I have seen. This is an interactive curriculum that stresses on good, clean code and attention to the details.",
  },
  {
    name: "James Kagawa",
    position: "ReactJS Instructor",
    photo:
      "https://cdn.pixabay.com/photo/2016/09/07/16/38/portrait-1652023_960_720.jpg",
    text: "This is the most fun I have had teaching. This boot camp really allows for teachers and students to connect and implement creative ways to learn",
  },
  {
    name: "Ian Smith",
    position: "Express/NodeJS Instructor",
    photo:
      "https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_960_720.jpg",
    text: "The key to this program is that we treat everyone uniquely according to how they learn. Students give us feedback on what works best for them and we adopt accordingly.",
  },
  {
    name: "Ria Monero",
    position: "Design Instructor",
    photo:
      "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "The atmosphere here is for everyone. Young college graduates to older full time parents, everyone can find their stride in our interactive program.",
  },
  {
    name: "Jimmy Nunez",
    position: "Design Instructor",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "This program allows for students to really learn web design from the ground up. It also builds their creative flair so they can have their own sense of style.",
  },
  {
    name: "Sheldon Lee",
    position: "Interview coach",
    photo:
      "https://cdn.pixabay.com/photo/2014/11/19/10/52/man-537136_960_720.jpg",
    text: "I have coached hundreds of students into successfully getting a job. Many people are surprised to find out the sheer level of demand for web developers out there.",
  },
  {
    name: "Vincent Sully",
    position: "JavaScript Instructor",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "The atmosphere here is for everyone. Young college graduates to older full time parents, everyone can find their stride in our interactive program.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testemonial.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 9200);

arrowLeft.addEventListener("click", updateTestimonial);
arrowRight.addEventListener("click", updateForward);

function updateForward() {
  const { name, position, photo, text } = testimonials[idx];

  testemonial.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  role.innerHTML = position;

  idx--;

  if (idx === 0) {
    idx = testimonials.length - 1;
  }
}
