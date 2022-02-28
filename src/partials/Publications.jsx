import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaperPDF from '../docs/redn-nsdi22.pdf';

function Publications() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div id="publications" className="max-w-3xl mx-auto text-center pb-12 md:pb-2">
            <h2 className="h2 mb-4">Publications</h2>
          </div>
          {/* Publications */}
          <div className="max-w-6xl mx-auto mt-20" data-aos="zoom-y-out">

 	    <cite className="block font-bold text-lg px-4 not-italic mb-1">RDMA is Turing complete, we just did not know it yet!</cite>
       	    <div className="text-gray-600 mb-3">
	    <a className="text-blue-600 hover:underline px-4" href="https://www.usenix.org/conference/nsdi22/technical-sessions">NSDI'22</a>• April 4-6, 2022
	    </div>

            <div className="text-gray-600 mb-3 px-4">

               We present RedN, a principled, practical approach to implementing complex RDMA offloads, without requiring any hardware modifications. Using self-modifying RDMA chains, we lift the existing RDMA verbs interface to a Turing complete set of programming abstractions. We explore what is possible in terms of offload complexity and performance with a commodity RDMA NIC. We show how to integrate these RDMA chains into applications, such as the Memcached key-value store, allowing us to offload complex tasks such as key lookups. RedN can reduce the latency of key-value get operations by up to 2.6× compared to state-of-the-art KV designs that use one-sided RDMA primitives (e.g., FaRM-KV), as well as traditional RPC-over-RDMA approaches. Moreover, compared to these baselines, RedN provides performance isolation and, in the presence of contention, can reduce latency by up to 35× while providing applications with failure resiliency to OS and process crashes.
            </div>

 	  <a className="text-blue-600 hover:underline px-4" href={PaperPDF}><FontAwesomeIcon icon="fa-regular fa-file-pdf" />  Read Paper</a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Publications;
