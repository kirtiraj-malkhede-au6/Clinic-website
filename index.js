"strict mode";

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
  document.getElementById("treatments-box").innerHTML = treatmentData.map(
    (item, index) => {
      return `<div class="card"><div class="image-box"><img src="${item.image}" /></div><div class="content"><h1>${item.treatmentName}</h1><span>${item.description}</span></div></div>`;
    }
  );
};
treatmentList();

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
  document.getElementById("images").innerHTML = photoGallery.map((item) => {
    return `<div class="image-box">
      <img src="${item.image}" alt="">
    </div>`;
  });
};
galleryList();
