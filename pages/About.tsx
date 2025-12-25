import React from 'react';

export const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-medical-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Our Vision is Your Vision</h1>
          <p className="text-xl text-gray-300">The story behind Ludhiana's most trusted affordable eyewear brand.</p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg prose-slate mx-auto">
          <p className="lead text-xl text-slate-600 mb-8">
            "I started wearing glasses when I was 14. By the time I was 20, I had spent over ₹50,000 on frames that either broke or didn't suit me. I realized that clear vision was becoming a luxury tax. That didn't sit right with me."
          </p>
          
          <h3 className="text-2xl font-bold text-slate-900">The Problem</h3>
          <p>
            In traditional optical stores, frames pass through manufacturers, distributors, wholesalers, and retailers before reaching you. Each step adds a markup. A frame that costs ₹200 to make is sold for ₹2000.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8">The Satyam Way</h3>
          <p>
            We designed Satyam EyeCare to be different. We source directly from high-quality manufacturers—the same ones who supply the big brands. We cut out the middlemen and pass the savings directly to you.
          </p>
          <ul className="list-disc pl-5 space-y-2 my-6">
            <li><strong>Fair Pricing:</strong> We cap our margins. No frame costs more than ₹2000.</li>
            <li><strong>Medical First:</strong> We are an eye clinic first, a shop second. Our primary goal is your eye health.</li>
            <li><strong>Ludhiana Roots:</strong> We are proud to serve our local community with same-day delivery and personalized care.</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-12">
            <h4 className="font-bold text-medical-900 mb-2">Visit Our Clinic</h4>
            <p className="text-sm text-slate-700">
              Come say hi! We offer free computerized eye testing for everyone, no purchase necessary.<br/>
              <strong>Address:</strong> Shop 12, Model Town Market, Ludhiana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
