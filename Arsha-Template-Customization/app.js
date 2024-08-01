document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        bar.style.width = bar.getAttribute('aria-valuenow') + '%';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const faqs = document.querySelectorAll('.faq-item');

    faqs.forEach(faq => {
        const header = faq.querySelector('h3');
        header.addEventListener('click', function() {
            const content = header.nextElementSibling; // Select the .faq-content directly following the clicked header

            if (faq.classList.contains('active')) {
                // Close the FAQ
                content.style.maxHeight = '0px'; // Collapse the content
                faq.classList.remove('active'); // Remove active class to hide content
            } else {
                // Close all open FAQs
                faqs.forEach(innerFaq => {
                    innerFaq.querySelector('.faq-content').style.maxHeight = '0px';
                    innerFaq.classList.remove('active'); // Ensure all other items are not marked active
                });

                // Open the clicked FAQ
                content.style.maxHeight = content.scrollHeight + 'px'; // Set max-height to scrollHeight to expand content
                faq.classList.add('active'); // Add active class to make content visible
            }

            // Toggle rotation of all icons to right, and rotate the icon of the active item
            faqs.forEach(innerFaq => {
                innerFaq.querySelector('.faq-toggle').classList.remove('rotated');
            });
            if (faq.classList.contains('active')) {
                header.querySelector('.faq-toggle').classList.add('rotated');
            }
        });
    });
});

let btns = document.querySelectorAll('.btns_group button');


for(let btn of btns) {
    btn.addEventListener('click',function(event){
        for (let btn of btns) {
            btn.classList.remove('btn-primary');
        }   
        let type = this.getAttribute('data-tab');

        let related_images = document.querySelectorAll('.filtered_image.'+ type);
        let all_images = document.querySelectorAll('.portfolio_images .filtered_image ');
        
        for(let img of all_images){
            img.style.display = 'none';
        }
        for(let img of related_images){
            img.style.display = 'block';
        }
        event.preventDefault();
        event.target.classList.add('btn-primary');

    });
}
