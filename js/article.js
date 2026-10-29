
// ======================================
// ULF WEBSITE - ARTICLE SYSTEM
// Loads editorial content dynamically
// ======================================

const articles = {

  welfare: {
    category: "PLAYER WELFARE",
    title: "BEYOND THE GAME: WHY PLAYER WELFARE MATTERS",
    summary:
      "Footballers contribute more than performances on the pitch. Their welfare, dignity, and future deserve attention throughout their careers.",

    paragraphs: [
      "Football is more than a game. Behind every match, every performance, and every achievement are individuals whose lives and careers deserve recognition and protection.",

      "For professional footballers, the demands of the game can extend beyond the pitch. Career development, education, healthcare, financial stability, and life after football are important considerations.",

      "The Union of Liberian Footballers identifies the protection and promotion of players' rights, welfare, and professional interests as central objectives.",

      "Through its stated aims, the Union seeks to support initiatives relating to social, medical, educational, pension, and emergency assistance for members.",

      "A stronger football community begins when the people who make the game possible are treated with dignity and their interests are represented."
    ]
  },

  unity: {
    category: "UNITY & REPRESENTATION",
    title: "A UNITED VOICE FOR LIBERIAN FOOTBALLERS",
    summary:
      "Unity creates a stronger foundation for representation, shared interests, and the development of football in Liberia.",

    paragraphs: [
      "Football brings people together through a shared passion. Players, coaches, administrators, and supporters all contribute to the growth and identity of the game.",

      "However, the interests of football participants are best represented when individuals can come together around common objectives.",

      "The Union of Liberian Footballers was established around the principles of unity, dignity, and welfare, with the intention of protecting and promoting the shared interests of its members.",

      "Its constitution outlines representation with football authorities, government bodies, and international football organizations as part of its objectives.",

      "A united football community can create opportunities for dialogue, cooperation, professional development, and a stronger future for the game."
    ]
  },

  career: {
    category: "CAREER DEVELOPMENT",
    title: "PREPARING FOOTBALLERS FOR LIFE BEYOND THE PITCH",
    summary:
      "A football career is one chapter of a person's life. Professional growth and preparation for the future should remain important.",

    paragraphs: [
      "A football career can be rewarding, but it does not last forever. Players eventually face new opportunities, responsibilities, and decisions beyond active competition.",

      "Education, professional training, networking, and career transition support can help footballers prepare for different stages of life.",

      "The Union's constitution identifies training, career transition, networking, and community engagement among its objectives.",

      "These objectives recognize that the development of footballers should not be limited to their performance on the pitch.",

      "Building a stronger football environment also means recognizing the long-term professional and personal interests of the people involved in the game."
    ]
  }

};


// ======================================
// GET ARTICLE FROM URL
// ======================================

const params = new URLSearchParams(window.location.search);
const articleId = params.get("id");

const article = articles[articleId];


// ======================================
// ARTICLE PAGE ELEMENTS
// ======================================

const titleElement = document.getElementById("article-title");
const summaryElement = document.getElementById("article-summary");
const contentElement = document.getElementById("article-content");


// ======================================
// DISPLAY ARTICLE
// ======================================

if (article && titleElement && summaryElement && contentElement) {

  document.title = article.title + " | ULF";

  titleElement.textContent = article.title;
  summaryElement.textContent = article.summary;

  // Update category label
  const categoryElement = document.querySelector(".article-hero .eyebrow");

  if (categoryElement) {
    categoryElement.textContent = article.category;
  }

  // Clear previous content
  contentElement.replaceChildren();

  // Create article paragraphs
  article.paragraphs.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    contentElement.appendChild(p);
  });

} else if (titleElement && summaryElement && contentElement) {

  // ======================================
  // ARTICLE NOT FOUND
  // ======================================

  document.title = "Article Not Found | ULF";

  titleElement.textContent = "ARTICLE NOT FOUND";

  summaryElement.textContent =
    "The editorial content you are looking for could not be found.";

  contentElement.replaceChildren();

  const message = document.createElement("p");

  message.textContent =
    "Please return to the newsroom and select another article.";

  contentElement.appendChild(message);
    }
