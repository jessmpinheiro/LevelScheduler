export default function WelcomeCard() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to our English Assessment Service</h2>
      <p className="text-gray-600 mb-4">Our two-step process makes it easy to determine your English proficiency level and schedule a personalized consultation:</p>
      
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
          <div className="flex items-center mb-3">
            <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
            <h3 className="font-semibold text-gray-800">Check Your English Level</h3>
          </div>
          <p className="text-gray-600 ml-11">Complete our comprehensive assessment form to determine your current English proficiency.</p>
        </div>
        
        <div className="bg-sky-50 p-5 rounded-lg border border-sky-100">
          <div className="flex items-center mb-3">
            <span className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
            <h3 className="font-semibold text-gray-800">Schedule a Consultation</h3>
          </div>
          <p className="text-gray-600 ml-11">After completing the assessment, book a personalized meeting to discuss your results and learning path.</p>
        </div>
      </div>
    </section>
  );
}
