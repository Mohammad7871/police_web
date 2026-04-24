const ui = {
  reportForm: document.getElementById("report-form"),
  contactForm: document.getElementById("contact-form"),
  notice: document.getElementById("portal-notice"),
};

function showNotice(message) {
  ui.notice.textContent = message;
  ui.notice.classList.add("visible");

  clearTimeout(window.noticeTimeout);
  window.noticeTimeout = setTimeout(() => {
    ui.notice.classList.remove("visible");
  }, 2600);
}

window.handleReportSubmit = (event) => {
  event.preventDefault();
  const name = event.target.reportName.value.trim();
  const type = event.target.reportType.value;
  const description = event.target.reportDescription.value.trim();

  if (!name || !description) {
    showNotice("Please complete all required fields for the report.");
    return;
  }

  showNotice(`Report submitted for ${name}. Our team will respond soon.`);
  event.target.reset();
};

window.handleContactSubmit = (event) => {
  event.preventDefault();
  const name = event.target.contactName.value.trim();
  const email = event.target.contactEmail.value.trim();
  const message = event.target.contactMessage.value.trim();

  if (!name || !email || !message) {
    showNotice("Please complete the contact form before sending.");
    return;
  }

  showNotice(`Thank you, ${name}. We received your message.`);
  event.target.reset();
};
