const bodyID = document.body.id;
const hamburger = document.querySelector(".hambuger-menu");
const navMenu = document.querySelector(".nav-link");
const navlinkClose = document.querySelector(".menu-close-icon");
const fullName = document.getElementById("fullname");
const mobileNo = document.getElementById("mobileNo");
const email = document.getElementById("emailid");
const subject = document.getElementById("subject");
const errorMessageFullName = document.getElementById("error-fullname");
const errorMessageMobileNo = document.getElementById("error-mobileNo");
const errorMessageEmailId = document.getElementById("error-emailId");
const errorMessageSubject = document.getElementById("error-subject");
const submitBtn = document.getElementById("submit-btn");
let checkedFullName, checkedMobileNo, checkedEmailId, checkedSubject;

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
navlinkClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
  console.log("clicked");
});

const photoGallery = [
  {
    image: "https://www.humanmechanic.in/images/gallery/1.jpg",
  },
  {
    image: "https://www.humanmechanic.in/images/gallery/2.jpg",
  },

  {
    image: "https://www.humanmechanic.in/images/gallery/7.jpg",
  },
  {
    image: "https://www.humanmechanic.in/images/gallery/8.jpg",
  },
  {
    image: "https://www.humanmechanic.in/images/gallery/9.jpg",
  },
  {
    image: "https://www.humanmechanic.in/images/gallery/5.jpg",
  },
  {
    image: "https://www.humanmechanic.in/images/gallery/4.jpg",
  },
  {
    image: "https://www.humanmechanic.in/images/gallery/6.jpg",
  },
  {
    image: "https://www.humanmechanic.in/images/gallery/10.jpg",
  },
  {
    image: "https://www.humanmechanic.in/images/gallery/11.jpg",
  },
  {
    image: "https://www.humanmechanic.in/images/gallery/15.jpg",
  },
];

const galleryList = () => {
  if (bodyID === "gallery" || bodyID === "home") {
    console.log(bodyID);
    document.getElementById("images").innerHTML = photoGallery
      .map((item) => {
        return `<div class="image-box">
<img src="${item.image}">
</div>`;
      })
      .join("");
  }
  return;
};
galleryList();

const treatmentData = [
  {
    id: "sr01",
    treatmentName: "Alternative Care",
    image: "https://www.scsportstherapy.com/wp-content/uploads/cchhiirroo.jpg",
    description: `Less traditional treatments like acupuncture, alexander technique,and pneumatic vests can be used to treat back or neck pain.`,
  },
  {
    id: "sr02",
    treatmentName: "Physical Therapy",
    image:
      "https://static01.nyt.com/images/2021/07/06/well/06WELL-FIND-A-PT/06WELL-FIND-A-PT-mediumSquareAt3X.jpg",
    description:
      "Added strength in the structures supporting the spine can reduce the pressure within the discs or joints in the spine. Physical therapy targets specific muscles to help recovery from backpain",
  },
  {
    id: "sr03",
    treatmentName: "Spinal Fusion",
    image:
      "https://www.brainspinesurgery.com/uploads/img/_775xAUTO_crop_center-center_80_none/Spinal-Fusion.png",
    description:
      "When joint movement within the spine is contributing to pain, fusing the vertebrae together stops the motion, with the intent of removing the pain.",
  },
  {
    id: "sr04",
    treatmentName: "Spine Specialists",
    image:
      "https://images.ctfassets.net/oc83wx5cwffk/spu_article_fid32734_asset/83eb35344fb91bfa35cc590cf014d809/4351-docwithspine25506227_m.jpg",
    description:
      "There are many specialists who treat back pain, including surgeons,chiropractors, physiatrists, physical therapists, and others.",
  },
  {
    id: "sr05",
    treatmentName: "Pain Management",
    image: "https://www.biospectrumindia.com/uploads/articles/1-11469.jpg",
    description:
      "There are many modalities for reducing pain, such as cold laser therapy, electrotherapy, and other methods of reducing pain rather than directly address the cause of the pain.",
  },
  {
    id: "sr06",
    treatmentName: "Chiropractic",
    image:
      "https://post.healthline.com/wp-content/uploads/2021/03/Chiropractor_Back_Male-1200x628-Facebook-1200x628.jpg",
    description:
      "Chiropractic treatment may include physiologic therapeutics,exercise, nutrition, and posture along with the traditional spine adjustments.",
  },
];

const treatmentList = () => {
  if (bodyID === "treatments" || bodyID === "home") {
    console.log(bodyID);
    document.getElementById("treatments-box").innerHTML = treatmentData
      .map(
        (item) =>
          `<div class="card">
      <div class="image-box">
      <img src="${item.image}" />
      </div>
      <div class="content">
      <h1>${item.treatmentName}</h1>
      <span>${item.description}</span>
      </div>
      </div>`
      )
      .join("");
  }
  return;
};
treatmentList();

const setError = (
  inputElement,
  validateClass,
  feedbackElement,
  errorMessage
) => {
  if (inputElement.className === "textarea") {
    inputElement.className = `textarea ${validateClass}`;
    feedbackElement.innerHTML = `${errorMessage}`;
  } else {
    inputElement.className = `input ${validateClass}`;
    feedbackElement.innerHTML = `${errorMessage}`;
  }
};
const onchangeFullName = (value, checkedFullName) => {
  const trimValue = value.trim();
  const singleValue = trimValue.replace(/ /g, "");
  console.log(singleValue);
  validName = /^[A-Za-z]+$/;
  if (singleValue == "") {
    setError(fullName, "error", errorMessageFullName, "Name is required");
    return false;
  } else if (!validName.test(singleValue)) {
    setError(
      fullName,
      "error",
      errorMessageFullName,
      "Please Enter Valid Name"
    );
    return false;
  } else {
    setError(fullName, "success", errorMessageFullName, "");
    return true;
  }
};

const onchangeMobileNo = (value) => {
  const trimValue = value.trim();
  const singleValue = trimValue.replace(/ /g, "");
  console.log(singleValue.length);
  if (singleValue == "") {
    setError(mobileNo, "error", errorMessageMobileNo, "Mobile No. is required");
    return false;
  } else if (singleValue.length === 10) {
    console.log(true);

    setError(mobileNo, "success", errorMessageMobileNo, "");
    return true;
  } else {
    setError(
      mobileNo,
      "error",
      errorMessageMobileNo,
      "Please Enter Valid Mobile No."
    );
    return false;
  }
};
const onchangeEmailId = (value) => {
  const trimValue = value.trim();
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (trimValue === "") {
    setError(email, "error", errorMessageEmailId, "Email ID is required");
    return false;
  } else if (trimValue.match(mailformat)) {
    setError(email, "success", errorMessageEmailId, "");
    return true;
  } else {
    setError(
      email,
      "error",
      errorMessageEmailId,
      "Please Enter Valid Email ID"
    );
    return false;
  }
};
const onchangeSubject = (value) => {
  const trimValue = value.trim();
  if (trimValue === "") {
    setError(subject, "error", errorMessageSubject, "Subject is required");
    return false;
  } else {
    setError(subject, "success", errorMessageSubject, "");
    return true;
  }
};

const clearErrorMessageHandler = () => {
  errorMessageFullName.innerHTML = "";
  errorMessageMobileNo.innerHTML = "";
  errorMessageEmailId.innerHTML = "";
  errorMessageSubject.innerHTML = "";
};
const onClearHandler = () => {
  fullName.value = "";
  mobileNo.value = "";
  email.value = "";
  subject.value = "";
};
const clearClassName = () => {
  fullName.className = "input";
  mobileNo.className = "input";
  email.className = "input";
  subject.className = "textarea";
};
const onCLickSubmit = (event) => {};
const onSubmitFormHandler = (event) => {
  event.preventDefault();

  console.log({
    fullName: fullName.value,
    mobileNo: mobileNo.value,
    emailId: email.value,
    subject: subject.value,
  });
  location.replace("https://chiroclinic.netlify.app/submit.html");
  onClearHandler();
  clearErrorMessageHandler();
  clearClassName();
};

// console.log(checkedEmailId, checkedFullName, checkedMobileNo, checkedSubject);

const form = document.getElementById("form");
form.addEventListener("submit", onSubmitFormHandler);
