function handleTabClick(event) {
    // Remove the "active" class from all tab links
    const tabLinks = document.querySelectorAll('.nav-link');
    for (const link of tabLinks) {
      link.classList.remove('active');
    }

    // Add the "active" class to the clicked tab link
    event.target.classList.add('active');

    // Hide all content sections
    const contentSections = document.querySelectorAll('.content');
    for (const section of contentSections) {
      section.style.display = 'none';
    }

    // Show the content section corresponding to the clicked tab
    const clickedTabId = event.target.getAttribute('href').substring(1); // Remove the '#' symbol
    const clickedContentSection = document.getElementById(clickedTabId + '-content');
    clickedContentSection.style.display = 'block';
  }

  // Attach click event listeners to tab links
  const tabLinks = document.querySelectorAll('.nav-link');
  for (const link of tabLinks) {
    link.addEventListener('click', handleTabClick);
  }
