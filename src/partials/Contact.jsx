import React from 'react';

function Contact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div id="contact" className="relative bg-gray-900 rounded py-10 px-8 md:py-4 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">
            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-l">
                <h3 className="h3 text-white mb-2">Contact</h3>
                <p className="text-gray-300 text-lg mb-6">For inquiries, email Waleed Reda (wfhsr@kth.se) or open an Issue on Github.</p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
