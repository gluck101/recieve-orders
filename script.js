// Ensure that the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Get the "View Stock Management" button and "Close" button
  const viewStockManagementBtn = document.getElementById('view-stock-management-btn');
  const closeStockManagementBtn = document.getElementById('close-stock-management-btn');
  const stockManagementSection = document.getElementById('stock-management');
  const mainContent = document.getElementById('main-content');

  // Function to show the Stock Management section and hide others
  function showStockManagement() {
    document.getElementById('main-content').style.display = 'none';  // Hide the main content
    stockManagementSection.style.display = 'block';  // Show the Stock Management section
  }

  // Function to close the Stock Management section and show the main content
  function closeStockManagement() {
    stockManagementSection.style.display = 'none';  // Hide Stock Management section
    document.getElementById('main-content').style.display = 'block';  // Show the main content
  }

  // Add event listener to open the Stock Management section
  if (viewStockManagementBtn) {
    viewStockManagementBtn.addEventListener('click', showStockManagement);
  }

  // Add event listener to close the Stock Management section
  if (closeStockManagementBtn) {
    closeStockManagementBtn.addEventListener('click', closeStockManagement);
  }
});