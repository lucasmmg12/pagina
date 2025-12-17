
// ============================================
// ROI CALCULATOR
// ============================================

function initROICalculator() {
    const calculateBtn = document.getElementById('calculateROI');
    const resultsDiv = document.getElementById('roiResults');

    if (!calculateBtn) return;

    calculateBtn.addEventListener('click', () => {
        const patients = parseFloat(document.getElementById('patients').value) || 0;
        const avgValue = parseFloat(document.getElementById('avgValue').value) || 0;
        const lossRate = parseFloat(document.getElementById('lossRate').value) || 25;

        if (patients === 0 || avgValue === 0) {
            alert('Por favor ingresa valores válidos');
            return;
        }

        // Calculations
        const monthlyRevenue = patients * avgValue;
        const monthlyLoss = monthlyRevenue * (lossRate / 100);
        const yearlyLoss = monthlyLoss * 12;
        const recoveryRate = 0.95; // 95% capture rate with Grow Labs
        const potentialRecovery = monthlyLoss * recoveryRate * 12;

        // Format currency
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });

        // Update UI
        document.getElementById('monthlyLoss').textContent = formatter.format(monthlyLoss);
        document.getElementById('yearlyLoss').textContent = formatter.format(yearlyLoss);
        document.getElementById('recovery').textContent = formatter.format(potentialRecovery);

        // Show results with animation
        resultsDiv.style.display = 'grid';
        resultsDiv.style.opacity = '0';
        setTimeout(() => {
            resultsDiv.style.transition = 'opacity 0.5s ease-in-out';
            resultsDiv.style.opacity = '1';
        }, 100);
    });
}

// ============================================
// FAQ ACCORDION
// ============================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-item__question');

        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initROICalculator();
    initFAQ();
});
