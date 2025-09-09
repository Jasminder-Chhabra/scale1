import blogs from "@/lib/blog";
import Link from "next/link";
import BlogSlider from "./RelatedBlog";

export default function BlogDetails({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return <div className="p-10 text-center text-gray-500 text-xl">Blog Not Found</div>;


  return (
<section className="pb-0">
        <div className="" data-unload="fade-up"  data-delay="100">
      {/* Breadcrumb Navigation */}
      <div className=" z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 cursor-pointer" data-appear="fade-up" data-delay="75">
          <nav className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-2">
            <Link href="/" className="hover:text-purple-600 text-white transition-colors" style={{color : "white"}}>Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-purple-600 text-white transition-colors" style={{color : "white"}}>Blogs</Link>
            <span>›</span>
            <span className="text-gray-700 dark:text-white cursor-pointer">{blog.heading}</span>
          </nav>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 pt-6 flex flex-col lg:flex-row gap-8 " data-appear="fade-left" data-delay="300" data-unload="fade-left">
        {/* Blog Content */}
        <div className="lg:w-2/3">
          {/* Hero Image and Title */}
          <div className="relative mb-8 group">
            <img
              src={blog.img}
              alt={blog.heading}
              data-appear="fade-up"
              data-unload="fade-up"
              className="w-full h-80 md:md:h-100   rounded-2xl shadow-xl transform transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex items-end p-6">
              <div>
                <p className="text-sm text-white/90 font-medium" data-appear="fade-right" data-unload="zoom-out" data-delay="100" >{blog.date}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 tracking-tight" data-appear="fade-left" data-unload="zoom-out" data-delay="200">{blog.heading}</h1>
              </div>
            </div>
          </div>
        </div>
         <div className="lg:w-1/3 " data-appear="fade-left">
          <div className="sticky top-12 bg-[#1A1D24] p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-purple-700  dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              Related Blogs
            </h3>
            <ul className="space-y-3 list-none" data-delay="75" data-appear="fade-down">
              {blogs.map((relatedBlog, index) => (
                <li key={index} className="list-none mb-3 text-white">
                  <Link
                    href={`/blogs/${relatedBlog.slug}`}
                    className="text-white font-medium in-view"
                    style={{color :"white"}}
                 
                   data-delay="0" data-unload="none" data-threshold="0.5"
                  >
                    
                    {index+1}. {relatedBlog.heading}
                  </Link>
                </li>
              )).slice(0 , 4)}
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-100 dark:bg-[#7309dd] text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                Technology
              </span>
              <span className="bg-purple-100 dark:bg-[#7309dd] text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                AI
              </span>
              <span className="bg-purple-100 dark:bg-[#7309dd] text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                Innovation
              </span>
            </div>
          </div>
        </div>
      </div>  
         <div className="max-w-7xl mx-auto px-6 py-12 pt-6 flex flex-col lg:flex-row gap-8">
{blog.content}
</div>
<div className="max-w-7xl mx-auto px-6 py-12 pt-6 gap-8" data-appear="fade-up" data-unload="fade-up">
  <h2 className="text-4xl mb-4 ">Read Some More Blogs</h2>
<BlogSlider/>

</div>

      {/* Call to Action Section */}
      <div className="bg-[#7309dd] text-white text-center py-12 mt-12" data-appear="fade-up" data-unload="fade-up">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Enjoyed This Article?</h2>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to our newsletter for more insightful content delivered straight to your inbox!
          </p>
          <div className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-md w-[200px] m-auto">
            Subscribe Now
          </div>
        </div>
      </div>
    </div>
</section>
  );
}

 