import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: 'How do I see ATS Assist in action?',
      a: (
        <>
          The best way to see ATS Assist is to <strong>schedule a personalized demo</strong>. 
          Our team will walk you through the platform live, show you how it works with your specific use case, 
          and answer all your questions. Demos take 15-20 minutes and are completely free.
        </>
      ),
    },
    {
      q: 'How does ATS Assist optimize my resume for Applicant Tracking Systems?',
      a: (
        <>
          Our AI analyzes thousands of successful resumes and job descriptions to identify
          the keywords, formatting, and structure that ATS systems prefer. We optimize
          your content, use proper headings, and ensure compatibility with major ATS platforms.
          <br /> The result is a resume that passes automated screening and reaches human recruiters.
        </>
      ),
    },
    {
      q: 'What happens during the demo?',
      a: "During the demo, you'll see a live walkthrough of the ATS Assist platform, including the AI resume builder, ATS optimization features, application tracking dashboard, and more. We'll discuss your specific needs and show you how the platform can help with your job search. You'll also get pricing information and can ask any questions you have.",
    },
    {
      q: 'How long does the demo take?',
      a: 'Our demos typically take 15-20 minutes. We keep them concise and focused so you can see the key features without taking up too much of your time. If you have more questions, we\'re happy to extend the session.',
    },
    {
      q: 'How accurate are the ATS optimization recommendations?',
      a: 'Our AI is trained on millions of successful job applications and continuously learns from market trends. We provide real-time feedback on keyword optimization, formatting improvements, and content suggestions that have proven to increase ATS scores and interview rates.',
    },
  ],
}

export default faq
