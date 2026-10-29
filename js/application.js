
const applicationForm = document.getElementById("applicationForm");
const formMessage = document.getElementById("formMessage");

const STORAGE_KEY = "ulfMembershipApplications";

if (applicationForm) {
  applicationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!applicationForm.reportValidity()) return;

    const formData = new FormData(applicationForm);

    const application = {
      reference: "ULF-" + Date.now().toString().slice(-8),
      submittedAt: new Date().toISOString(),

      fullName: formData.get("fullName"),
      dateOfBirth: formData.get("dateOfBirth"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),

      membershipCategory: formData.get("membershipCategory"),
      footballRole: formData.get("footballRole"),
      club: formData.get("club"),
      yearsInFootball: formData.get("yearsInFootball"),
      background: formData.get("background"),

      status: "Demo submission"
    };

    try {
      const savedApplications = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      savedApplications.push(application);

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(savedApplications)
      );

      formMessage.textContent =
        "Your demo application has been saved. Reference: " +
        application.reference;

      formMessage.style.color = "var(--gold-light)";

      applicationForm.reset();

    } catch (error) {
      formMessage.textContent =
        "Unable to save your application. Please check your browser storage.";

      formMessage.style.color = "#e58b8b";

      console.error("Application storage error:", error);
    }
  });
        }
    
