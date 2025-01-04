import React from 'react';

const Review = () => {
  const testimonials = [
    {
      id: 1,
      quote: "You guys have been fantastic and I am continually blown away by the work you and your team are doing on the show. We throw a lot at you and you never fail to rise brilliantly to the occasion.",
      author: "Mitch Watson",
      title: "Executive Producer, Bignate Nickelodeon"
    },
    {
      id: 2,
      quote: "Xentrix has the finest animators and creatives talent in the industry and continuously delivers exceptionally high quality animation and excellent professional service on time and on spec.",
      author: "Nigel Stone",
      title: "CEO, Platinum Films"
    },
    {
        id: 3,
        quote: "You guys have been fantastic and I am continually blown away by the work you and your team are doing on the show. We throw a lot at you and you never fail to rise brilliantly to the occasion.",
        author: "Mitch Watson",
        title: "Executive Producer, Bignate Nickelodeon"
      },
      {
        id: 4,
        quote: "Xentrix has the finest animators and creatives talent in the industry and continuously delivers exceptionally high quality animation and excellent professional service on time and on spec.",
        author: "Nigel Stone",
        title: "CEO, Platinum Films"
      },
      {
        id: 5,
        quote: "You guys have been fantastic and I am continually blown away by the work you and your team are doing on the show. We throw a lot at you and you never fail to rise brilliantly to the occasion.",
        author: "Mitch Watson",
        title: "Executive Producer, Bignate Nickelodeon"
      },
  ];

  return (
    <div className="w-full py-12 px-4">
      {/* Header with vintage paper effect */}
      <div className="relative flex justify-center mb-16">
        <div className="relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-stone-300/40 rounded-full rotate-1"></div>
          <div className="bg-[linear-gradient(90deg,_rgba(234,212,167,1)_3%,_rgba(246,238,219,1)_15%,_rgba(246,238,219,1)_70%,_rgba(234,212,167,1)_94%)] shadow-md px-12 py-3 rounded relative">
            <div class=" p-4 rounded-lg">
              <h2 class="text-3xl md:text-3xl font-semibold uppercase tracking-tighter text-red-700">Happy Client</h2>
            </div>
            {/* <h1 className="text-4xl font-bold text-red-700">FEATURED WORK</h1> */}
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-stone-300/40 rounded-full -rotate-1"></div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="relative group"
            >
              {/* Vintage Paper Card Effect */}
              <div className="bg-[url('/textbg.jpg')] p-8 rounded shadow-md transform transition-transform duration-300 hover:-translate-y-1 relative">
                {/* Adding vintage paper texture effect */}
                <div className="absolute inset-0 bg-stone-100/50 rounded"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <p className="text-gray-800 text-2xl font-medium mb-6 font-['Courier_New'] tracking-tighter uppercase">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-right">
                    <p className="text-blue-600 font-semibold text-lg mb-1">
                      —{testimonial.author}
                    </p>
                    <p className="text-gray-600">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Vintage paper edge effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;