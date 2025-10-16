// Copyright (c) 2025, santhosh and contributors
// For license information, please see license.txt

frappe.ui.form.on("NCK_Bill", {
    onload: function(frm) {
        // Attach keydown event to all inputs inside the form
        frm.wrapper.addEventListener('keydown', function(e) {
            // Check if Enter key is pressed and not inside a textarea
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                
                // Get all visible input fields in order
                const inputs = Array.from(frm.wrapper.querySelectorAll(
                    'input:not([type=hidden]):not([disabled]), select, textarea'
                )).filter(el => el.offsetParent !== null); // visible only

                const currentIndex = inputs.indexOf(e.target);
                if (currentIndex > -1 && currentIndex < inputs.length - 1) {
                    inputs[currentIndex + 1].focus();
                }
            }
        });
    }
});

